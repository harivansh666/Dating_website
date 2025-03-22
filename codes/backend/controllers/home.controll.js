const userModel = require("../models/userModel");

const home = async (req, res) => {
  try {
    // get Matches
    const CurrentUser = req.user.id;

    console.log(CurrentUser);
  } catch (error) {}
};

module.exports = { home };
