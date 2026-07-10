const express = require ('express');
const router = express.Router();
const {getAllBirths,
    getBirthsById,
    createBirths,
    updateBirths,
    deleteBirths} = require("../controllers/birthsController.js");
//ruta para naciminetos
router.get("/birthsAll", getAllBirths)
//ruta para nacimientos con id 
router.get("/births/:id", getBirthsById)
//crear nacimiento
router.post("/births", createBirths)
//actualizar nacimiento
router.put("/births/:id", updateBirths)
//eliminar nacimiento
router.delete("/births/:id", deleteBirths)

module.exports = router;


