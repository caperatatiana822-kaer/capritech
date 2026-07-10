const express = require('express');
const router = express.Router();

const {getAllFeeding,
    getFeedingById,
    createFeeding,
    updateFeeding,
    deleteFeeding} = require("../controllers/feedingController.js");  

//alimentacion
router.get("/feedingsAll", getAllFeeding)
//alimentacion con id
router.get("/feedings/:id", getFeedingById)
//crear alimentacion
router.post("/feedings", createFeeding)
//consultar alimentacion con id 
router.put("/feedings/:id", updateFeeding)
//eliminar alimentacion
router.delete("/feedings/:id", deleteFeeding)

module.exports = router;