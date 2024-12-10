const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  role: { type: String, enum: ["Admin", "Staff", "Client"], default: "Client" },
  avatar: { type: String }, // Optional, URL to the user's avatar
});

module.exports = mongoose.model("User", userSchema);
