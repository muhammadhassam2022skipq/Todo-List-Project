const express = require ("express");
const router =express.Router();
const homeController = require("../controller/homeController")

router.get ("/work", homeController.getWork);
router.post ("/work", homeController.postWork);
module.exports= router;