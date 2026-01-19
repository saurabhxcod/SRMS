import mongoose from 'mongoose';

const subjectSchema=new mongoose.Schema({
    class:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Class",
        required:true
    },
    name:{
        type:String,
        required:true
    },
    code:{
        type:String,
        required:true
    },
    maxMarks:{
        type:Number,
        default:100
    }
},{timestamps:true})

subjectSchema.index({class:1,name:1},{unique:true});

const Subject=mongoose.model('Subject',subjectSchema);
export default Subject;