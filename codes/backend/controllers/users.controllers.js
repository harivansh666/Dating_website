const userModel = require("../models/userModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const locationModel = require("../models/Location");
const { z } = require("zod");

const loginSchema = z.object({
  email: z.string().email(),
  password: z.string(),
});

const login = async (req, res) => {
  try {
    // const { email, password } = req.body;
    const parsedData = loginSchema.safeParse(req.body);

    if (!parsedData.success) {
      return res
        .status(400)
        .json({ message: "Invalid data", data: parsedData.error.error });
    }
    const { email, password } = parsedData.data;

    const user = await userModel.findOne({ email: email });
    // console.log(user);

    if (!user) {
      return res.status(400).json({ message: "User not found" });
    }

    bcrypt.compare(password, user.password, (err, isMatch) => {
      if (err) throw err;
      if (!isMatch) {
        return res.status(400).json({ message: "Invalid password" });
      }
      const token = jwt.sign({ email: email, password: password }, "shhhhh");
      res.cookie("token", token);
      res.status(200).json({ message: "Login successful" }); // iss line krke login hoya
    });
  } catch (err) {
    res.status(500).json({ message: "Server Error", err });
  }
};

//=================================================================

const createUserSchema = z.object({
  fullName: z.string().min(3).max(20),
  dateOfBirth: z.string().refine((val) => !isNaN(Date.parse(val)), {
    message: "Invalid date format",
  }),
  gender: z.enum(["male", "female"]),
  genderprefrence: z.enum(["male", "female"]),
  email: z.string().email(),
  password: z.string().min(6),
  location: z.object({
    lat: z.number(),
    lng: z.number(),
  }),
});

const createuser = async (req, res) => {
  try {
    const parsedData = createUserSchema.safeParse(req.body);

    if (!parsedData.success) {
      return res
        .status(400)
        .json({ message: "Validation error", errors: parsedData.error.errors });
    }

    const {
      fullName,
      email,
      password,
      dateOfBirth,
      gender,
      genderprefrence,
      location,
    } = parsedData.data;

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
      genderPerference: genderprefrence,
    });

    await newUser.save();

    // Create location document
    const newLocation = await locationModel.create({
      user: newUser._id,
      coordinates: {
        lat: location.lat,
        lng: location.lng,
      },
    });
    res.status(201).json({ message: "User created successfully" });
    await newLocation.save();
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Server error" });
  }
};


module.exports = { login, createuser };
