import User from '../models/user.model.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
export const register=async(req,res)=>{
    try {
        const {name,email,password}=req.body;
        if(!name || !email || !password){
            return res.status(400).json({message:"All fields are required",success:false})
        }
        const existingUser=await User.findOne({email});
        if(existingUser){
            return res.status(400).json({message:"User already exists",success:false})
        }
        const hashedPassword=await bcrypt.hash(password,10);
        const newUser=new User({
            name,
            email,
            password:hashedPassword
        });
        await newUser.save();
        return res.status(201).json({message:"User registered successfully",success:true})

    } catch (error) {
        console.error("Error in user registration:",error);
        return res.status(500).json({message:"Internal server error",success:false})
    }
}

export const login=async(req,res)=>{
    try {
        const {email,password}=req.body;
        if(!email || !password){
            return res.status(400).json({message:"All fields are required",success:false})
        }
        const user=await User.findOne({email});
        if(!user){
            return res.status(400).json({message:"User Not Found",success:false})
        }
        const isPasswordValid=await bcrypt.compare(password,user.password);
        if(!isPasswordValid){
            return res.status(400).json({message:"Invalid email or password",success:false})
        }
        const token= jwt.sign({id:user._id,role:user.role},process.env.JWT_SECRET,{expiresIn:'1d'})
        // console.log(token);
        res.cookie("token",token,{
            httpOnly:true,
            secure:process.env.NODE_ENV==="production",
            sameSite:"strict",
            maxAge:24*60*60*1000
        })
        return res.status(200).json({message:"Login successful",success:true,token})

    } catch (error) {
        console.error("Error in user login:",error);
        return res.status(500).json({message:"Internal server error",success:false})
    }
}

export const logout=async(req,res)=>{
    res.clearCookie("token");
    return res.status(200).json({message:"Logout successful",success:true})
}

export const changePassword=async(req,res)=>{
    try {
        const{oldPassword,newPassword}=req.body;
        // console.log(oldPassword,newPassword);
        const userId=req.user.id;
        const user=await User.findById(userId);
        if(!user){
            return res.status(404).json({message:"User not found",success:false})
        }
        const isPasswordValid=await bcrypt.compare(oldPassword,user.password);
        if(!isPasswordValid){
            return res.status(400).json({message:"Invalid old password",success:false})
        }
        const hashedNewPassword=await bcrypt.hash(newPassword,10);
        user.password=hashedNewPassword;
        await user.save();
        return res.status(200).json({message:"Password changed successfully",success:true})

    } catch (error) {
        return res.status(500).json({message:"Internal server error",success:false})
    }
}