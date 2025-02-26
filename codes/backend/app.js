const express = require("express");
const bcrypt = require("bcrypt");
const db = require("./config/dbconn");
const jwt = require("jsonwebtoken");

const userModel = require("./models/userModel");
const postModel = require("./models/postsModel");
const cookieParser = require("cookie-parser");

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const port = 5000;
app.get("/", (req, res) => {});
app.post("/createac", async (req, res) => {
  const { username, name, email, password, age } = req.body;

  // Implementing some basic validation for email and password here.
  const user = await userModel.findOne({ email: email });
  if (user) {
    return res.status(400).json({ message: "User already exists" });
  }

  bcrypt.genSalt(10, (err, salt) => {
    if (err) throw err;
    bcrypt.hash(password, salt, async (err, hash) => {
      if (err) throw err;
      const newUser = await new userModel({
        username,
        name,
        email,
        password: hash,
        age,
      });
      await newUser.save();
      const token = jwt.sign({ email: email, password: password }, "shhhhh");
      res.cookie("token", token);
    });
  });
  // Implementing some basic validation for email and password here.
});

app.get("/login", async (req, res) => {
  const { email, password } = req.body;

  // Implementing some basic validation for email and password here.

  const user = await userModel.findOne({ email: email });
  if (!user) {
    return res.status(400).json({ message: "User not found" });
  }

  res.send("Login Page");
});

app.listen(port, () => {
  console.log(`Backend is Running on ${port}`);
});
