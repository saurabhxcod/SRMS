import Student from "../models/student.model.js";
import User from "../models/user.model.js";
import Class from "../models/class.model.js";
import bcrypt from "bcryptjs";
import { addStudentValidation , updateStudentValidation } from "../validations/studentValidation.js";

export const addStudent = async (req, res) => {
  try {
    const { error } = addStudentValidation.validate(req.body);
    if (error) {
      return res.status(400).json({ message: error.details[0].message });
    }

    const { name, rollNo, course, semester, year, password, email } = req.body;

    // Check roll number
    const existingStudent = await Student.findOne({ rollNo });
    if (existingStudent) {
      return res.status(400).json({
        message: "Student with this roll number already exists",
      });
    }
    const classId = req.body.classId;
    if(!await Class.findById(classId)){
      return res.status(400).json({message:"Class not found"});
    }

    // Decide final email FIRST
    const studentEmail = email || `${rollNo}@student.bennett.edu`;

    // Check email uniqueness
    const existingUser = await User.findOne({ email: studentEmail });
    if (existingUser) {
      return res.status(400).json({
        message: "User with this email already exists",
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await User.create({
      name,
      email: studentEmail,
      password: hashedPassword,
      // role: "student",
    });

    const student = await Student.create({
      user: user._id,
      rollNo,
      class:classId,
      year,
    });

    return res.status(201).json({
      message: "Student added successfully",
      student,
    });
  } catch (error) {
    console.error("Error in addStudent:", error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};


export const getAllStudents=async(req,res)=>{
    try {
        const students=await Student.find().populate("user","name email").populate("class","course semester");
        res.status(200).json({students});
        
    } catch (error) {
        res.status(500).json({message:"Internal Server Error2"});
    }
}

export const getStudentById=async(req,res)=>{
    try {
        const {id}=req.params;
        const student=await Student.findById(id).populate("user","name email").populate("class","course semester");
        if(!student){
            return res.status(404).json({message:"Student not found"});
        }
        res.status(200).json({student});
    } catch (error) {
        console.error(error);
        res.status(500).json({message:"Internal Server Error3"});
    }
}

export const updateStudent = async (req, res) => {
  try {
    const { error } = updateStudentValidation.validate(req.body);
    if (error) {
      return res.status(400).json({ message: error.details[0].message });
    }

    const { id } = req.params;
    const { name, email, password, course, semester, year } = req.body;

    const student = await Student.findById(id);
    if (!student) {
      return res.status(404).json({ message: "Student not found" });
    }

    const user = await User.findById(student.user);
    if (!user) {
      return res.status(404).json({ message: "Associated user not found" });
    }

    // Update user fields
    if (name) user.name = name;

    if (email && email !== user.email) {
      const existingUser = await User.findOne({ email });
      if (existingUser) {
        return res.status(400).json({
          message: "User with this email already exists",
        });
      }
      user.email = email;
    }

    if (password) {
      user.password = await bcrypt.hash(password, 10);
    }

    await user.save();

    // Update student fields
    if (classId) student.class = classId;
    if (year) student.year = year;

    await student.save();

    res.status(200).json({
      message: "Student updated successfully",
      student,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};


export const deleteStudent=async(req,res)=>{
    try {
        const {id}=req.params;
        const student=await Student.findById(id);
        if(!student){
            return res.status(404).json({message:"Student not found"});
        }
        await Student.findByIdAndDelete(id);
        await User.findByIdAndDelete(student.user);
        res.status(200).json({message:"Student deleted successfully"});
    } catch (error) {
        res.status(500).json({message:"Internal Server Error"});
    }
}