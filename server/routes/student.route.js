import express from 'express';
import { addStudent, deleteStudent, getAllStudents, getStudentById, updateStudent } from '../controllers/student.controller.js';
import { authMiddleware } from '../middleware/authMiddleware.js';

const studentRouter=express.Router();

studentRouter.post('/add-student',authMiddleware,addStudent);
studentRouter.get('/get-students',authMiddleware,getAllStudents);
studentRouter.get('/get-student/:id',authMiddleware,getStudentById);
studentRouter.put('/update-student/:id',authMiddleware,updateStudent);
studentRouter.delete('/delete-student/:id',authMiddleware,deleteStudent);

export default studentRouter; 