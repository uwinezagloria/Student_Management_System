import StudentModel from "../models/student.models.js";
const students={
    createStudent:async(req,res)=>{

        try{
    const addedStudent=await StudentModel.create(req.body)
        res.status(201).json({
            message:"student added!",
        student:addedStudent});
    }
    catch(err){
        console.log(err.message);
        res.status(500).json({message:"error adding student "});
    }},
    getAllStudents:async(req,res)=>{
        try{
            const allStudent=await StudentModel.find();
            res.status(200).json({
                message:'all students',
                Students:allStudent
          })}
            catch(err){
                console.log(err.message)
                res.status(500).json({message:"error"})
            }
        },
    getStudentById:async(req,res)=>{
        try{
        const findId=req.params.id;
        const findStudent=await StudentModel.findById(findId)
        if(findStudent){
            res.status(200).json({message:"find by id",studentfound:findStudent})
        }
        else{
            res.status(404).json({message:"not found"})
        }
        }
        catch(err){
       res.staus(500).json({message:"error in finding"})
        }},
    getStudentByEmail:async(req,res)=>{
        try{
          
            const findStudentByEmail=await StudentModel.findOne({email:req.params.email});
            if(findStudentByEmail){
                res.status(200).json({message:findStudentByEmail})
            }
        }
        catch(err){
            console.error(err.message);
            res.status(500).json({message:"not found"})
        }
    },
    updateStudent:async(req,res)=>{
        const userId=req.params.id;
        const updated=res.body;
        try{
            const updateStudent=await StudentModel.findByIdAndUpdate(userId,updated,{new:true});
            if(updateStudent){
            res.status(200).json({
                message:"updated student",
                updatedStudent:updateStudent
              })}
              else{
                res.status(404).json({error:"user not found"})
              }
        }
        catch(err){
            console.log(err.message)
            res.status(500).json({message:"error in updating student"})
        }
    },
    removeStudent:async(req,res)=>{
        try{
            const userID=req.params.id
            const deleteStudent=await StudentModel.findByIdAndDelete(userID)
            res.status(200).json({
                message:"student deleted",
                deletedone:deleteStudent
            })
        }
        catch(err){
            res.status(404).json({message:"not found"})
        }
    }
}
export default students;