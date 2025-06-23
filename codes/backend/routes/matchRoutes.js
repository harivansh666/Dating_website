const express = require("express");
const router = express.Router();
const { protectRoute } = require("../middleware/auth.midd");
const { home } = require("../controllers/home.controll");
const { getMatch, swipeRight, swipeLeft } = require("../controllers/matches");
const { aiTips } = require("../controllers/Ai.contro");

// const { getMatches } = require("../controllers/matches");

router.get("/home", protectRoute, home);
// swipe right
router.post("/home/swipeR", protectRoute, swipeRight);

// swipe left
router.post("/home/swipeL", protectRoute, swipeLeft);

router.get("/home/ai", protectRoute, aiTips);

module.exports = router;
