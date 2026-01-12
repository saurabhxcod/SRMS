import { addClass, deleteClass, getAllClasses, getClassById, updateClass } from "../controllers/class.controller.js";
import express from "express";

const classRouter=express.Router();
classRouter.post('/add',addClass);
classRouter.get('/allClasses',getAllClasses);
classRouter.get('/viewClass/:id',getClassById)
classRouter.put('/updateClass/:id',updateClass);
classRouter.delete('/deleteClass/:id',deleteClass);

export default classRouter;