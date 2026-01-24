import mongoose from 'mongoose';
const studentSchema=new mongoose.Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true
    },
    rollNo:{
        type:String,
        required:true,
        unique:true
    },
    class:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Class",
        required:true
    },year:{
        type:Number,
        required:true
    }
},{timestamps:true})

const Student=mongoose.model("Student",studentSchema);
export default Student;