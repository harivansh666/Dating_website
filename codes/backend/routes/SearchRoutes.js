const express = require("express");
const router = express.Router();
const { query } = require("../controllers/searchQuery");
const { protectRoute } = require("../middleware/auth.midd");

router.get("/filter", protectRoute, query);

module.exports = router;
