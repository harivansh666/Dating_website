const jwt = require("jsonwebtoken");
const userModel = require("../models/userModel");

const protectRoute = async (req, res, next) => {
  try {
    if (!req.cookies.token) {
      return res
        .status(401)
        .json({ message: "No token, authorization denied" });
    }

    const tokenData = jwt.verify(req.cookies.token, "shhhhh");
    const user = await userModel.findOne({
      email: tokenData.email,
      password: tokenData.password,
    });

    if (!user) {
      return res.status(401).json({ message: "User not found" });
    }

    req.user = user;
    next();
  } catch (error) {
    console.log(error);
    return res.status(401).json({ message: "Token is not valid" });
  }
};

module.exports = { protectRoute };
