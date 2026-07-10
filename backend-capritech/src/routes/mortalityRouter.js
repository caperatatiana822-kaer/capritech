const express = require('express');
const router = express.Router();
const {getAllMortality,
    getMortalityById,
    createMortality,
    updateMortality,
    deleteMortality} = require("../controllers/mortalityController.js");

router.get("/mortalityAll", getAllMortality)
router.get("/mortality/:id", getMortalityById)
router.post("/mortality", createMortality)
router.put("/mortality/:id", updateMortality)
router.delete("/mortality/:id", deleteMortality)

module.exports = router;