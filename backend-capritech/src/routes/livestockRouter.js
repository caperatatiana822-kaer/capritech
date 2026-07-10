const express = require('express');
const router = express.Router();
const {getAllLivestock, 
    getLivestockById, 
    createLivestock, 
    updateLivestock, 
    deleteLivestock} = require("../controllers/livestockController.js");

//ruta para semovientes
router.get("/livestockAll", getAllLivestock)
//semoviente con id
router.get("/livestock/:id", getLivestockById)
//crear semoviente
router.post("/livestock", createLivestock)
//consultar semoviente con id
router.put("/livestock/:id", updateLivestock)
//eliminar semoviente
router.delete("/livestock/:id", deleteLivestock)

module.exports = router;