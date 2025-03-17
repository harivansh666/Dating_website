const express = require("express");
const db = require("./config/dbconn");
const http = require("http"); // socket.io nu chalon lai nttp server chida aa.
const cors = require("cors");
const cookieParser = require("cookie-parser");
const dotenv = require("dotenv");
dotenv.config();

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

//routes
const ProjfileRoutes = require("./routes/ProjfileRoutes");
const authRoutes = require("./routes/authRoutes");
const NearByRoutes = require("./routes/NearByRoutes");

const server = http.createServer(app);

app.use(
  cors({
    origin: process.env.FRONTEND_URL,
    credentials: true,
  })
);

app.use("/", authRoutes, NearByRoutes); //base url + route path.
// inal URLs ban jayengi:
// Base URL + Route Path
// "/" + "login" = "/login"
// "/" + "createAcc" = "/createAcc"

// app.use("/", NearByRoutes);

server.listen(process.env.port, () => {
  console.log(`Backend is Running on ${process.env.port}`);
});
