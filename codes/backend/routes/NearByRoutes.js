const express = require("express");
const router = express.Router();
const { nearby } = require("../controllers/nearby.js");
const { protectRoute } = require("../middleware/auth.midd");

router.get("/Nearby", protectRoute, nearby);

module.exports = router;
