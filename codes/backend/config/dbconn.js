const mongoose = require("mongoose");
require("dotenv").config();

mongoose.connect(process.env.mongodb_uri);
// console.log(process.env.mongodb_uri);

const db = mongoose.connection;

db.on("error", (err) => console.log(err));

db.once("open", () => console.log("MongoDB connected successfully!"));

module.exports = db;
