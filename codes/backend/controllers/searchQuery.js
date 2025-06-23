const userModel = require("../models/userModel");

const query = async (req, res) => {
  try {
    const { gender, age } = req.query;
    const loggedInUserId = req.user._id; // Assuming user ID is available in req.user

    // Validate age format if provided
    if (age) {
      const ageParts = age.split("-");
      if (ageParts.length !== 2 || isNaN(ageParts[0]) || isNaN(ageParts[1])) {
        return res
          .status(400)
          .json({ message: "Age must be in format 'min-max'" });
      }
    }

    const filter = {
      _id: { $ne: loggedInUserId }, // Exclude the logged-in user
      ...(gender && { gender: new RegExp(gender, "i") }),
      ...(age && {
        age: {
          $gte: parseInt(age.split("-")[0]),
          $lte: parseInt(age.split("-")[1]),
        },
      }),
    };

    const filteredResults = await userModel.find(filter);
    res.json(filteredResults);
  } catch (err) {
    console.error("Filter API Error ❌", err);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

module.exports = { query };
