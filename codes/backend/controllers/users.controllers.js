const userModel = require("../models/userModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const locationModel = require("../models/Location");

const login = async (req, res) => {
  const { email, password } = req.body;

  // Implementing some basic validation for email and password here.
  const user = await userModel.findOne({ email: email });

  if (!user) {
    return res.status(400).json({ message: "User not found" });
  }

  bcrypt.compare(password, user.password, (err, isMatch) => {
    if (err) throw err;
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid password" });
    }
    // res.send("hello buddy");
    const token = jwt.sign({ email: email, password: password }, "shhhhh");
    res.cookie("token", token);
    res.status(200).json({ message: "Login successful" }); // iss line krke login hoya
  });
};

const createuser = async (req, res) => {
  try {
    const { fullName, email, password, dateOfBirth, gender, location } =
      req.body;

    // Calculate age from dateOfBirth
    const birthDate = new Date(dateOfBirth);
    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();

    if (
      monthDiff < 0 ||
      (monthDiff === 0 && today.getDate() < birthDate.getDate())
    ) {
      age--;
    }

    const existingUser = await userModel.findOne({ email: email });

    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, salt);

    const newUser = new userModel({
      fullName: fullName,
      email: email,
      password: hash,
      age: age,
      gender: gender,
      dateOfBirth: dateOfBirth,
    });

    // Create location document
    const newLocation = await locationModel.create({
      user: newUser._id,
      coordinates: {
        lat: location.lat,
        lng: location.lng,
      },
    });
    await newUser.save();
    res.status(201).json({ message: "User created successfully" });
    await newLocation.save();
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Server error" });
  }
};

module.exports = { login, createuser };
