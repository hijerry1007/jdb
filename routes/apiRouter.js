const express = require("express");
const router = express.Router();
const apiController = require("../controller/apiController");

router.get("/getData", apiController.getData);

module.exports = router;