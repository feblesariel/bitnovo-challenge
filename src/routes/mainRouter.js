// ************ Require's ************

const express = require("express");
const router = express.Router();

// ************ Controller Require ************

const mainController = require("../controllers/mainController");

// ************ Rutas ************

router.get("/", mainController.home);

router.post("/procces", mainController.procces);





module.exports = router;