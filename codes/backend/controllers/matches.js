const userModel = require("../models/userModel");

const getMatch = async (req, res) => {
  console.log("this is getMatches route");
};

const swipeRight = async (req, res) => {
  res.send("hello world");
  console.log("this is swipeRight route");
};
module.exports = { getMatch, swipeRight };

/*
swipeRight:
step1: iss da matlab eh hai ke use swiped user pasand hai.

step2: uss user ko match banane ke liye, humne is function ko call kiya hai.

step3: matched user nu db vich store krona aa,te chat open krni aa.

step4: matches show kra dine aa frontend te iss box vich.




















*/
