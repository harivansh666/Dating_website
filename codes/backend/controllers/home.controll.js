const userModel = require("../models/userModel");
// const { AiResponse } = require("../services/AI");

const home = async (req, res) => {
  try {
    const users = await userModel.find({ _id: { $ne: req.user._id } });
    res.json(users);
  } catch (error) {
    console.log(error);
  }
};

module.exports = { home };
