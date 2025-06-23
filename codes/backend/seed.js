// // seed.js
// const mongoose = require("mongoose");
// require("dotenv").config();

// const users = require("./data/user");
// const locations = require("./data/location");

// const User = require("./models/userModel");
// const Location = require("./models/Location");

// const seedDatabase = async () => {
//   try {
//     await mongoose.connect(process.env.mongodb_uri);
//     console.log("✅ MongoDB Connected");

//     const existingUsers = await User.countDocuments();
//     if (existingUsers > 0) {
//       console.log("⚠️ Users already exist. Seeding skipped.");
//       return process.exit();
//     }

//     const createdLocations = await Location.insertMany(locations);

//     users.forEach((user, i) => {
//       user.location = createdLocations[i % createdLocations.length]._id;
//     });

//     await User.insertMany(users);
//     console.log("✅ Dummy users & locations inserted!");
//     process.exit();
//   } catch (err) {
//     console.error("❌ Seeding Error:", err.message);
//     process.exit(1);
//   }
// };

// seedDatabase();
