const express = require("express");
const db = require("./config/dbconn"); // ✅ Yeh ab ek function hai
const http = require("http"); // socket.io nu chalon lai nttp server chida aa.
const cors = require("cors");
const cookieParser = require("cookie-parser");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");

dotenv.config();

const app = express();
app.use(bodyParser.json({ limit: "25mb" }));
app.use(bodyParser.urlencoded({ extended: true, limit: "25mb" }));
app.use(cookieParser());

//routes
const ProjfileRoutes = require("./routes/ProjfileRoutes");
const authRoutes = require("./routes/authRoutes");
const NearByRoutes = require("./routes/NearByRoutes");
const matchRoutes = require("./routes/matchRoutes");
const SearchRoutes = require("./routes/SearchRoutes");

const server = http.createServer(app);

app.use(
  cors({
    origin: ["http://localhost:5173", "https://vibelydating.netlify.app"],
    methods: "GET,POST,PUT,DELETE,PATCH",
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true,
  })
);

app.use(
  "/api",
  authRoutes,
  NearByRoutes,
  ProjfileRoutes,
  matchRoutes,
  SearchRoutes
); //base url + route path.

server.listen(process.env.port, () => {
  console.log(`Backend is Running on ${process.env.port}`);
});

// // app.js
// const express = require("express");
// const connectDB = require("./config/dbconn");
// const http = require("http");
// const cors = require("cors");
// const cookieParser = require("cookie-parser");
// const dotenv = require("dotenv");
// dotenv.config();

// // socket service
// const socketServices = require("./services/socketServices");

// const app = express();
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));
// app.use(cookieParser());

// const ProjfileRoutes = require("./routes/ProjfileRoutes");
// const authRoutes = require("./routes/authRoutes");
// const NearByRoutes = require("./routes/NearByRoutes");
// const matchRoutes = require("./routes/matchRoutes");

// app.use(
//   cors({
//     origin: ["http://localhost:5173", "https://vibelydating.onrender.com"],
//     methods: "GET,POST,PUT,DELETE,PATCH",
//     credentials: true,
//   })
// );

// app.use("/api", authRoutes, NearByRoutes, ProjfileRoutes, matchRoutes);

// const server = http.createServer(app);

// // Start server
// const startServer = async () => {
//   try {
//     await connectDB(); // MongoDB connected
//     socketServices.Init(server); // Initialize socket
//     server.listen(process.env.port || 5000, () => {
//       console.log(`✅ Backend is Running on port ${process.env.port || 5000}`);
//     });
//   } catch (error) {
//     console.error("❌ Error starting server:", error.message);
//   }
// };

// startServer();
