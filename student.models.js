import mongoose from'mongoose';
const StudentSchema=new mongoose.Schema({
    fullName:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    phone:{
        type:String,
        required:true
    },
    NationalId:{
        type:String,
        required:true,
        unique:true,
        length:16
    },

 gender:{
   type:String,
     required:true,
     enum:{
    values:['Male','Female'],
    message:"Gender must be either Male orFemale"
}
    }
},{timestamps:true});
const StudentModel=mongoose.model('student',StudentSchema);
export default StudentModel;