const mongoose = require("mongoose");

const trainerSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  status: { type: String, enum: ["Active", "Inactive"], default: "Active" },
  description: { type: String },
});

module.exports = mongoose.model("Trainer", trainerSchema);
