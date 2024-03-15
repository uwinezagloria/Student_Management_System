import express from "express";
import facilitator from "../controllers/facilitatorController.js";
const router=express.Router()
router.post('/facilitator/add',facilitator.createFacilitator)
router.get('/facilitator',facilitator.getFacilitators)
router.get('/facilitator/:id',facilitator.getFacilitatorById)
router.put('/facilitator/update/:id',facilitator.updateFacilitator)
router.delete('/facilitator/delete/:id',facilitator.deleteFacilitator)
export default router;