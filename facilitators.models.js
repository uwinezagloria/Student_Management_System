
import mongoose from "mongoose";
const facilitatorScheme= new mongoose.Schema({
    fullName:{
        type:String,
        requred:true
    },
    email:{
        type:String,
        requred:true
    },
    phone:{
        type:String,
        required:true
    },
    nationalId:{
        type:String,
        requred:true
    },
    course:[{
        type:String,
        required:true 
    }],
        role:{
            type:String,
            required:true,
        enum:{
            values:['Technical Facilitator','Assistant Technical Facilitator'],
            message:" role must be technical facilator or assistant technical facilator"
        }}
},
{timeStamp:true})
const Facilitator=mongoose.model('facilitator',facilitatorScheme)
export default Facilitator;