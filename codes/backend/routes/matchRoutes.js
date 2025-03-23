const express = require("express");
const router = express.Router();
const { protectRoute } = require("../middleware/auth.midd");
const { home } = require("../controllers/home.controll");
const { getMatch, swipeRight } = require("../controllers/matches");

// const { getMatches } = require("../controllers/matches");

router.get("/home", home);
// swipe right
// router.post("/swipeR/:likedUserId", protectedRoute, swipeRight);
router.post("/home/swipeL", protectRoute, swipeRight);

// swipe left
// router.post("/home/swipe-left/:likedUserId", protectedRoute, swipeLeft);

// get matches
// router.get("/home", );
module.exports = router;
