const express = require("express");
const router = express.Router();

router.get("/vansh", (req, res) => {
  res.send("Hello vansh");
});

module.exports = router;
