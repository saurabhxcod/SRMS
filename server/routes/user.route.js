import { login, register,logout, changePassword } from "../controllers/user.controllers.js";
import express from "express";
import { authMiddleware } from "../middleware/authMiddleware.js";

const userRouter=express.Router();

userRouter.post('/register',register);
userRouter.post('/login',login);
userRouter.post('/logout',logout);
userRouter.post('/change-password',authMiddleware,changePassword)
export default userRouter;