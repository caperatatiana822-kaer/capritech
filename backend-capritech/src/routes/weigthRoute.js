const express = require('express');
const router = express.Router();

const {
    getAllWeigth,
    getWeigthById,
    createWeigth,
    updateWeigth,
    deleteWeigth
} = require("../controllers/weigthController");

router.get("/weigthAll", getAllWeigth);
router.get("/weigth/:id", getWeigthById);
router.post("/weigth", createWeigth);
router.put("/weigth/:id", updateWeigth);
router.delete("/weigth/:id", deleteWeigth);

module.exports = router;