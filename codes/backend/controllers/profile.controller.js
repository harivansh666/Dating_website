const express = require("express");
const userModel = require("../models/userModel");
const cloudinary = require("../config/cloudinary.config");
const jwt = require("jsonwebtoken");

const updateProfile = async (req, res) => {
  const { profilePicture, fullName, posts, bio } = req.body;

  try {
    const userCookie = jwt.verify(req.cookies.token, "shhhhh");

    const user = await userModel.findOne({ email: userCookie.email });
    if (!user) {
      return res.status(400).json({ message: "User not found" });
    } else {
      const updatedUser = await userModel.findOneAndUpdate(
        { email: userCookie.email },
        { $set: { fullName: fullName, bio: bio } },
        { new: true }
      );
      res
        .status(200)
        .json({ message: "Profile updated successfully", user: updatedUser });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server Error" });
  }
};

const profile = async (req, res) => {
  const token = req.cookies.token;
  try {
    if (!token) {
      return res
        .status(403)
        .json({ message: "No token, authorization denied" });
    }
    const userCookie = await jwt.verify(token, "shhhhh");

    const user = await userModel.findOne({ email: userCookie.email });
    if (!user) {
      return res.status(400).json({ message: "User not found" });
    }
    res.status(200).json(user);
  } catch (err) {
    res.status(500).json({ message: "Server Error", err });
  }
};

const updateProfilePicture = async (req, res) => {
  try {
    const { profilePicture } = req.body;
    const userId = req.user._id;

    if (!profilePicture) {
      return res.status(400).json({ message: "Profile picture is required" });
    }

    const uploadResult = await cloudinary.uploader.upload(profilePicture, {
      folder: "user_profiles",
    });

    const updatedUser = await userModel.findByIdAndUpdate(
      userId,
      { profilePicture: uploadResult.secure_url },
      { new: true }
    );

    res.status(200).json({
      message: "Profile picture updated successfully",
      user: updatedUser,
    });
  } catch (error) {
    console.error("❌ Cloudinary Upload Error:", error.message);
    res.status(500).json({ message: "Server error while uploading image" });
  }
};

// ✅ CORRECT EXPORT
module.exports = {
  updateProfile,
  updateProfilePicture,
  profile,
};
