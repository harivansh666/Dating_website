const express = require("express");
const router = express.Router();
const { updateProfile, profile } = require("../controllers/profile.controller");
const { protectRoute } = require("../middleware/auth.midd");

router.post("/profile", protectRoute, updateProfile);

router.get("/profile", protectRoute, profile);

module.exports = router;
