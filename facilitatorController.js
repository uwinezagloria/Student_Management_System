import Facilitator from "../models/facilitators.models.js"
const facilitator={
    createFacilitator:async(req,res)=>{
    try{
        const addFacilitator=await Facilitator.create(req.body)
res.status(201).json({
    message:"facilitator added",
    newfacilitator:addFacilitator
})
    }
    catch(err){
        res.status(404).json({message:"error adding facilitator"})
    }
},
getFacilitators:async(req,res)=>{
        try{
            const allfacilitator=await Facilitator.find()
            res.status(200).json({
                message:"all facilitator",
            facilitators:allfacilitator})
        }
        catch(err){
            res.status(404).json({message:"not found"})
        }
    },
 getFacilitatorById:async(req,res)=>{
        try{
            const findFacilitator=await Facilitator.findById(req.params.id)
            if(findFacilitator){
            res.status(200).json({
                message:"fiinding facilitator",
                facilitatorFindByiD:findFacilitator})
            }
        }
        catch(err){
            res.send(500).json({message:"error in finding"})
        }
    },
updateFacilitator:async(req,res)=>{
        try{
            const userid=req.params.id
            const updated=req.body
         const updatedFacilitator=await Facilitator.findByIdAndUpdate(userid,updated,{new:true})
            if(updatedFacilitator){
            res.status(200).json({message:"updated",newupdate:updatedFacilitator})
            }
                res.status(404).json({message:"not found"})
        }
        catch(err){
            res.status(500).json({message:"error in updating"})
        }
    },
deleteFacilitator:async(req,res)=>{
    try{
        const userID=req.params.id
        const deletedFacilitator=await Facilitator.findByIdAndDelete(userID)
        if(deletedFacilitator){
            res.status(200).json({message:"facilitator deleted"})
        }
            res.status(404).json({message:"not found"})
    }
    catch(err){
        res.status(500).json({message:"err"})
    }
}}
export default facilitator;