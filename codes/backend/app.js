const express = require("express");
const bcrypt = require("bcrypt");
const db = require("./config/dbconn");
const router = express.Router();
const jwt = require("jsonwebtoken");
const http = require("http"); // socket.io nu chalon lai nttp server chida aa.
const socketio = require("socket.io");
const cors = require("cors");
const dotenv = require("dotenv");
dotenv.config();
//routes
const ProjfileRoutes = require("./routes/ProjfileRoutes");
const authRoutes = require("./routes/authRoutes");
const NearByRoutes = require("./routes/NearByRoutes");

const userModel = require("./models/userModel");
const postModel = require("./models/postsModel");
const cookieParser = require("cookie-parser");

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(
  cors({
    origin: process.env.FRONTEND_URL, // replace with your frontend URL
    credentials: true,
  })
);

const server = http.createServer(app);
const io = socketio(server);

app.use("/api/profile", ProjfileRoutes);
app.use("/", authRoutes); //base url + route path.
// inal URLs ban jayengi:
// Base URL + Route Path
// "/" + "login" = "/login"
// "/" + "createAcc" = "/createAcc"

app.use("/", NearByRoutes);

server.listen(process.env.port, () => {
  console.log(`Backend is Running on ${process.env.port}`);
});
