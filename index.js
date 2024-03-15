import dotenv from'dotenv';
dotenv.config();
import express from 'express';
const app=express()
import mongoose from 'mongoose'
import router from './routes/facilitatorRoutes.js';
import route from './routes/studentRoutes.js';
const Port=3005;
const database=process.env.mongodb_url;
mongoose.connect(database)
.then(()=>{
console.log("database connected..")
app.listen(Port,()=>{
    console.log(`server running on port ${Port}`)
})
})
.catch((err)=>{
console.log(err.message)
})
app.use(express.json())
app.use(router)
app.use(route)
