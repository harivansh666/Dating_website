const express = require("express");
const router = express.Router();
const {
  updateProfile,
  updateProfilePicture,
  profile,
} = require("../controllers/profile.controller");
const { protectRoute } = require("../middleware/auth.midd");

router.post("/profile", protectRoute, updateProfile);

router.get("/profile", protectRoute, profile);
router.post("/update-profile-picture", protectRoute, updateProfilePicture);

module.exports = router;
