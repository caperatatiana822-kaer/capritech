const express = require('express');
const router = express.Router();
const {getAllFamacha, 
    getFamachaById, 
    createFamacha, 
    updateFamacha, 
    deleteFamacha} = require("../controllers/famachaController.js");

//ruta para famacha
router.get("/famachaAll", getAllFamacha)
//ruta para famacha con id
router.get("/famacha/:id", getFamachaById)
//crear famacha
router.post("/famacha", createFamacha)
//actualizar famacha
router.put("/famacha/:id", updateFamacha)
//eliminar famacha
router.delete("/famacha/:id", deleteFamacha)

module.exports = router;
