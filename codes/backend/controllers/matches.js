const userModel = require("../models/userModel");

const getMatch = async (req, res) => {
  res.send("this is getMatches route");
};

const swipeRight = async (req, res) => {
  try {
    const { ProfileUser } = req.body;
    const currentUserId = req.user.id;

    const currentUser = await userModel.findById(currentUserId);

    currentUser.matches.push(ProfileUser);
    await currentUser.save();

    res.send("hello world");
    console.log("User who was swiped right:", ProfileUser);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server Error" });
  }
};

const swipeLeft = async (req, res) => {
  try {
    const { ProfileUser } = req.body;
    const currentUserId = req.user.id;

    const currentUser = await userModel.findById(currentUserId);

    currentUser.dislikes.push(ProfileUser);
    await currentUser.save();

    res.send(ProfileUser);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server Error" });
  }
};

module.exports = { getMatch, swipeRight, swipeLeft };

/*
swipeRight:
step1: iss da matlab eh hai ke use swiped user pasand hai.

step2: uss user ko match banane ke liye, humne is function ko call kiya hai.

step3: matched user nu db vich store krona aa,te chat open krni aa.

step4: matches show kra dine aa frontend te iss box vich.




















*/
