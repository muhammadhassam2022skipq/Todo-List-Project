const express = require ("express");
const router =express.Router();
const homeController = require("../controller/homeController")
let Items= [];
router.get ("/", homeController.getHome);
router.post ("/", homeController.postHome);
module.exports= router;