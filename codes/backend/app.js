const express = require("express");
const bcrypt = require("bcrypt");
const db = require("./config/dbconn");
const router = express.Router();
const jwt = require("jsonwebtoken");
const http = require("http"); // socket.io nu chalon lai nttp server chida aa.
const socketio = require("socket.io");
const cors = require("cors");

const userModel = require("./models/userModel");
const postModel = require("./models/postsModel");
const cookieParser = require("cookie-parser");

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  cors({
    origin: "http://localhost:5173", // replace with your frontend URL
    credentials: true,
  })
);

const server = http.createServer(app);
const io = socketio(server);

const port = 5000;
app.post("/createac", async (req, res) => {
  const { username, name, email, password, age, gender } = req.body;
  console.log(username, name, email, password, age, gender);

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
        gender,
      });
      await newUser.save();
      const token = jwt.sign({ email: email, password: password }, "shhhhh");
      res.cookie("token", token);
    });
  });
  // Implementing some basic validation for email and password here.
});

app.post("/login", async (req, res) => {
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
});

app.get("/nearby", (req, res) => {
  // Implementing some basic filtering and sorting logic here.
  res.send("hello nearby");
});

app.listen(port, () => {
  console.log(`Backend is Running on ${port}`);
});
