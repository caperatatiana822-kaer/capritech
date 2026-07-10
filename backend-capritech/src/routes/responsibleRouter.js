const express = require('express');
const router = express.Router();
const {getAllResponsibles,
    getResponsibleById,
    createResponsible,
    updateResponsible,
    deleteResponsible} = require("../controllers/responsibleController.js");    

router.get("/responsibleAll", getAllResponsibles)
router.get("/responsible/:id", getResponsibleById)
router.post("/responsible", createResponsible)
router.put("/responsible/:id", updateResponsible)
router.delete("/responsible/:id", deleteResponsible)

module.exports = router;