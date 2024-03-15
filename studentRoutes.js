import express from "express";
import students from "../controllers/studentController.js";
const route=express.Router()
route.post('/student/add',students.createStudent)
route.get('/student',students.getAllStudents)
route.get('/student/:id',students.getStudentById)
route.get('/studentemail/:email',students.getStudentByEmail)
route.patch('/student/:id',students.updateStudent)
route.delete('/student/delete/:id',students.removeStudent)
export default route;