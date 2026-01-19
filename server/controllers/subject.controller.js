import Subject from "../models/subject.model.js";
import Class from "../models/class.model.js";
import { addSubjectValidation, updateSubjectValidation } from "../validations/subjectValidation.js";

export const addSubject=async(req,res)=>{
    try {
        const {error}=addSubjectValidation.validate(req.body);
        if(error){
            return res.status(400).json({message:error.details[0].message});
        }
        const {classId,name,code,maxMarks}=req.body;
        const classData=await Class.findById(classId);
        if(!classData){
            return res.status(404).json({message:"Class not found"});
        }
        const subject=await Subject.create({
            class:classId,
            name,
            code,
            maxMarks
        });
        res.status(201).json({message:"Subject added successfully",data:subject});
    } catch (error) {
        if(error.code===11000){
            return res.status(400).json({message:"Subject with this name already exists in the class"});
        }
        console.log(error);
        res.status(500).json({message:"Internal server error"});
    }

}


export const getAllSubjects=async(req,res)=>{
    try {
        const subject=await Subject.find().populate("class","course semester");
        res.status(200).json({data:subject,success:true});
    } catch (error) {
        return res.status(500).json({message:"Internal server error",success:false});
    }
}

export const getSubjectById=async(req,res)=>{
    try {
        const {id}=req.params;
        const subject=await Subject.findById(id).populate("class","course semester");
        if(!subject){
            return res.status(404).json({message:"Subject not found"});
        }
        res.status(200).json({data:subject});
    } catch (error) {
        res.status(500).json({message:"Internal server error",success:false});
    }
}

export const updateSubject = async (req, res) => {
  try {
    const { error } = updateSubjectValidation.validate(req.body);
    if (error) {
      return res.status(400).json({ message: error.details[0].message });
    }

    const { id } = req.params;
    const { name, code, maxMarks } = req.body;

    const updatedSubject = await Subject.findByIdAndUpdate(
      id,
      { name, code, maxMarks },
      { new: true }   // IMPORTANT
    );

    if (!updatedSubject) {
      return res.status(404).json({
        message: "Subject not found",
        success: false
      });
    }

    return res.status(200).json({
      message: "Subject updated successfully",
      data: updatedSubject,
      success: true
    });

  } catch (error) {
    console.error(error);
    return res.status(500).json({
      message: "Internal server error",
      success: false
    });
  }
};

export const deleteSubject=async(req,res)=>{
    try {
        const {id}=req.params;  
        const subject=await Subject.findById(id);
        if(!subject){
            return res.status(404).json({message:"Subject not found"});
        }
        await Subject.findByIdAndDelete(id);
        res.status(200).json({message:"Subject deleted successfully"});
    } catch (error) {
        res.status(500).json({message:"Internal server error"});
    } 
}

export const getSubjectByClass=async(req,res)=>{
    try {
        const {classId}=req.params;
        const subjects=await Subject.find({class:classId});
        // console.log(subjects);
        res.status(200).json({data:subjects});
    } catch (error) {
        res.status(500).json({message:"Internal server error"});
    }
}
