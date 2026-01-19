import express from 'express';
import { addSubject, deleteSubject, getAllSubjects, getSubjectByClass, getSubjectById, updateSubject } from '../controllers/subject.controller.js';
import { authMiddleware } from '../middleware/authMiddleware.js';
const subjectRouter = express.Router();


subjectRouter.post('/addSubject',authMiddleware,addSubject);
subjectRouter.get('/allSubjects',authMiddleware,getAllSubjects);
subjectRouter.get('/viewSubject/:id',authMiddleware,getSubjectById);
subjectRouter.get('/class/:classId',authMiddleware,getSubjectByClass);
subjectRouter.put('/updateSubject/:id',authMiddleware,updateSubject);
subjectRouter.delete('/deleteSubject/:id',authMiddleware,deleteSubject);

export default subjectRouter; 