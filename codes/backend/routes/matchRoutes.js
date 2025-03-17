const express = require("express");
const router = express.Router();
const protectedRoute = require("../middleware/protectedRoute");

// swipe right
router.post("/swipe-right/:likedUserId", protectedRoute, swipeRight);

// swipe left
router.post("/swipe-left/:likedUserId", protectedRoute, swipeLeft);

// get matches
router.get("/home", protectedRoute, getMatches);
router.get("/home", protectedRoute, getMatches);

module.exports = router;
