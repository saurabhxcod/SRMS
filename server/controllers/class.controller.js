import Class from "../models/class.model.js";
import { addClassValidation, updateClassValidation } from "../validations/classValidation.js";
export const addClass=async(req,res)=>{
    try {
        const {error}=addClassValidation.validate(req.body);
        if(error){
            return res.status(400).json({message:error.details[0].message});
        }
        // console.log(req.body);
        const {course,semester}=req.body;
        const existingClass=await Class.findOne({course,semester});
        if(existingClass){
            return res.status(400).json({message:"Class already exists"});
        }
        const newClass=await Class.create({course,semester});
        return res.status(201).json({message:"Class added successfully",data:newClass});


    } catch (error) {
        res.status(500).json({message:"Internal server error"});
    }
}

export const getAllClasses=async(req,res)=>{
    try {
        const classes=await Class.find().sort({course:1,semester:1});
        return res.status(200).json({data:classes});
    } catch (error) {
        res.status(500).json({message:"Internal server error"});
    }
}

export const getClassById=async(req,res)=>{
    try {
        const classData=await Class.findById(req.params.id);
        if(!classData){
            return res.status(404).json({message:"Class not found"});
        }
        res.status(200).json({data:classData});
    } catch (error) {
        console.log(error);
        res.status(500).json({message:"Internal server error"});    
    }
}

export const updateClass=async(req,res)=>{
    try {
        const {error}=updateClassValidation.validate(req.body);
        if(error){
            return res.status(400).json({message:error.details[0].message});
        }
        const {course,semester}=req.body;
        const classData=await Class.findById(req.params.id);
        if(!classData){
            return res.status(404).json({message:"Class not found"});
        }
        if(course) classData.course=course;
        if(semester) classData.semester=semester;
        await classData.save();
        res.status(200).json({message:"Class updated successfully",data:classData});
    } catch (error) {
        console.log(error);
        res.status(500).json({message:"Internal server error"});
    }
}

export const deleteClass=async(req,res)=>{
    try {
        const classData=await Class.findById(req.params.id);
        if(!classData){
            return res.status(404).json({message:"Class not found"});
        }
        await Class.findByIdAndDelete(req.params.id);
        return res.status(200).json({message:"Class deleted successfully"});
    } catch (error) {
        console.log(error);
        return res.status(500).json({message:"Internal server error"});
    }
}