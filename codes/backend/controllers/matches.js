const Match = require("../models/Match");

const swipeRight = async (req, res) => {
  const { likedUserId } = req.params;
};

const swipeLeft = async (req, res) => {
  const { likedUserId } = req.params;
};

const getMatches = async (req, res) => {
  try {
    const { user } = req;
    const matches = await Match.find({
      $or: [{ user: user._id }, { matchedUser: user._id }],
    });
    res.status(200).json(matches);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { swipeRight, swipeLeft, getMatches };

/*
swipeRight:
step1: iss da matlab eh hai ke use swiped user pasand hai.

step2: uss user ko match banane ke liye, humne is function ko call kiya hai.

step3: matched user nu db vich store krona aa,te chat open krni aa.

step4: matches show kra dine aa frontend te iss box vich.




















*/
