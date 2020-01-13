const express = require("express");
const router = express.Router();

const UserController = require("../controllers/users");

// SIGNUP
router.post("/signup", UserController.userSignup);

// LOGIN
router.post("/login", UserController.userLogin);

module.exports = router;
