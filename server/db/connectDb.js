import mongoose from 'mongoose';
const connectDb=async()=>{
    try {
        await mongoose.connect(process.env.MONGO_URL)
        console.log("Database connected successfully");
    } catch (error) {
        console.log("Database connection failed", error.message);
        process.exit(1);  //Exit process with failure
    }
};

export default connectDb;