const mongoose = require("mongoose");

const locationSchema = mongoose.Schema({
  user: { type: Schema.Types.ObjectId, ref: "user" },
  coordinates: {
    lat: Number,
    lng: Number,
  },
  timestamp: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Location", locationSchema);
