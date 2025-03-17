const mongoose = require("mongoose");
const locationModel = require("./Location");
const like = require("./likes");

const userSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
    min: 18,
    max: 99,
  },
  gender: {
    type: String,
    enum: ["male", "female", "other"],
    required: true,
  },
  genderPerference: {
    type: String,
    enum: ["male", "female"],
    required: true,
  },
  dateOfBirth: {
    type: Date,
    required: true,
  },
  profilePicture: {
    type: String,
    default: "",
    required: false,
  },
  posts: [
    {
      type: mongoose.Types.ObjectId,
      ref: "posts",
    },
  ],

  matches: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
    },
  ],

  location: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "location",
  },
  bio: {
    type: String,
    required: false,
  },
  likes: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
      default: null,
    },
  ],

  dislikes: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
      default: null,
    },
  ],
});

module.exports = mongoose.model("user", userSchema);
