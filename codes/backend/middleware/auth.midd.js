const jwt = require("jsonwebtoken");
const userModel = require("../models/userModel");
const cookieParser = require("cookie-parser");

const protectRoute = async (req, res, next) => {
  // console.log(req.cookies.token);
  try {
    if (!req.cookies.token) {
      return res
        .status(401)
        .json({ message: "No token, authorization denied" });
    }

    const tokenData = jwt.verify(req.cookies.token, "shhhhh");
    // console.log("Token verified, data:", tokenData);

    const user = await userModel.findOne({
      email: tokenData.email,
    });
    console.log("User found:", user);

    if (!user) {
      console.log("No user found with token data");
      return res.status(401).json({ message: "User not found" });
    }

    req.user = user;
    next();
  } catch (error) {
    console.log("Error in auth middleware:", error);
    return res.status(401).json({ message: "Token is not valid" });
  }
};

module.exports = { protectRoute };
