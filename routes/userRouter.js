const express = require("express");
const router = express.Router();
const userController = require("../controller/userController");

//登入機制
router.post("/signup", userController.signup);
router.post("/login", userController.login);

module.exports = router;