import mongoose from 'mongoose';

const classSchema=new mongoose.Schema({
    course:{
        type:String,
        enum:["BTech","MTech","MBA","BBA"],
        required:true
    },
    semester:{
        type:Number,
        required:true,
        min:1,
        max:8,
    }
},{timestamps:true});``

classSchema.index({course:1,semester:1},{unique:true});
//Mapping so that there is no duplicate entries for same course and semester

const Class=mongoose.model('Class',classSchema);
export default Class;