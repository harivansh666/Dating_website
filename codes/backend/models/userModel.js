const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    unique: true,
    required: true,
  },
  name: {
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
  date: {
    type: Date,
    default: Date.now,
  },
  posts: [
    {
      type: mongoose.Types.ObjectId,
      ref: "posts",
    },
  ],
  location: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "location",
  },
});

module.exports = mongoose.model("user", userSchema);
