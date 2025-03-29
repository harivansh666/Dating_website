const userModel = require("../models/userModel");
const { AiResponse } = require("../services/AI");

const home = async (req, res) => {
  try {
    const aiBoooo = req.query;
    // const CurrentUser = req.user.id;
    const Genaires = await AiResponse(aiBoooo);
    res.json(Genaires);
  } catch (error) {
    console.log(error);
  }
};

module.exports = { home };
