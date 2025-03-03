const express = require("express");
const cookieParser = require("cookie-parser");
const router = express.Router();
const { login, createuser } = require("../controllers/users.controllers");
const { logout } = require("../routes/logout");
const { homeController } = require("../controllers/home.controll");

const { protectRoute } = require("../middleware/auth.midd");

router.post("/login", login);

router.post("/createAcc", createuser);

router.get("/logout", logout);

router.get("/home", protectRoute, (req, res) => {
  res.console.log(`Welcome to Home,`);
});

module.exports = router;
