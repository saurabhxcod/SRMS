import express from 'express';
import dotenv from 'dotenv';
// import cors from 'cors';
import connectDb from './db/connectDB.js';
import userRouter from './routes/user.route.js';
import studentRouter from './routes/student.route.js';
import cookieParser from 'cookie-parser';

dotenv.config();

const app=express();
const PORT=process.env.PORT || 5000;   
//Database connection
connectDb();
app.use(express.json()); 
app.use(cookieParser());
//Routes
app.use('/api/v1/users',userRouter);
app.use('/api/v1/students',studentRouter);

app.listen(process.env.PORT,()=>{
    console.log(`Server is running on port ${process.env.PORT}`);
});