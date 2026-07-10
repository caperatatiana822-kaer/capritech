const express = require('express');
const router = express.Router();
const{getAllProduction,
    getProductionById,
    createProduction,
    updateProduction,
    deleteProduction} = require("../controllers/productionController.js")

router.get("/productionAll", getAllProduction)
router.get("/production/:id", getProductionById)
router.post("/production", createProduction)
router.put("/production/:id", updateProduction)
router.delete("/production/:id", deleteProduction)

module.exports = router;