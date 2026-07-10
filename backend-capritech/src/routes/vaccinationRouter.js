const express = require('express');
const router = express.Router();
const{getAllVaccination, 
    getVaccinationById,
    createVaccination,
    updateVaccination,
    deleteVaccination} = require("../controllers/vaccinationController.js");   
             
router.get("/vaccinationAll", getAllVaccination)
router.get("/vaccination/:id", getVaccinationById)
router.post("/vaccination", createVaccination)
router.put("/vaccination/:id", updateVaccination)
router.delete("/vaccination/:id", deleteVaccination)

module.exports = router;