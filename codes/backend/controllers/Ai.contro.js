const { AiResponse } = require("../services/AI");

const aiTips = async (req, res) => {
  const aiBoooo = req.query;
  console.log(aiBoooo);
  const CurrentUser = req.user.id;
  const Genaires = await AiResponse(aiBoooo);
  res.json(Genaires);
};
module.exports = { aiTips };
