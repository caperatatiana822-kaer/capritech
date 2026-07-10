const express = require ('express');
const router = express.Router();
const {getAllMastitis,
    getMastitisById,
    createMastitis,
    updateMastitis,
    deleteMastitis} = require("../controllers/mastitisController.js");  

router.get("/mastitisAll", getAllMastitis)
router.get("/mastitis/:id", getMastitisById)
router.post("/mastitis", createMastitis)
router.put("/mastitis/:id", updateMastitis)
router.delete("/mastitis/:id", deleteMastitis)  

module.exports = router;