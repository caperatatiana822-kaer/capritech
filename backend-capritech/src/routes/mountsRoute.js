const express = require('express'); 
const router = express.Router();
const {getAllMounts, 
    getMountById, 
    createMount, 
    updateMount, 
    deleteMount} = require("../controllers/mountsController.js");

router.get("/mountsAll", getAllMounts)    
router.get("/mounts/:id", getMountById)
router.post("/mounts", createMount)
router.put("/mounts/:id", updateMount)
router.delete("/mounts/:id", deleteMount)

module.exports = router;
