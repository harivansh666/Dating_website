const express = require("express");
const db = require("./config/dbconn");
const http = require("http"); // socket.io nu chalon lai nttp server chida aa.
const cors = require("cors");
const cookieParser = require("cookie-parser");
const dotenv = require("dotenv");
dotenv.config();

//import services
const socketServices = require("./services/socketServices");

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

//routes
const ProjfileRoutes = require("./routes/ProjfileRoutes");
const authRoutes = require("./routes/authRoutes");
const NearByRoutes = require("./routes/NearByRoutes");
const matchRoutes = require("./routes/matchRoutes");

const server = http.createServer(app);

app.use(
  cors({
    origin: ['http://localhost:5173', 'https://vibelydating.onrender.com'],
    methods: 'GET,POST,PUT,DELETE,PATCH',
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true
  })
);


app.use("/api", authRoutes, NearByRoutes, ProjfileRoutes, matchRoutes); //base url + route path.
// final URLs ban jayengi:
// Base URL + Route Path
// "/" + "login" = "/login"
// "/" + "createAcc" = "/createAcc"

// app.use("/", NearByRoutes);
socketServices.Init(server);

server.listen(process.env.port, () => {
  console.log(`Backend is Running on ${process.env.port}`);
});
