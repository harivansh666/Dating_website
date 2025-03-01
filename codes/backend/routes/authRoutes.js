const express = require("express");
const router = express.Router();
const { login, createuser } = require("../controllers/users.controllers");

router.post("/login", login);

router.post("/createAcc", createuser);

module.exports = router;
