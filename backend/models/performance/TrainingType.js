const mongoose = require("mongoose");

const trainingTypeSchema = new mongoose.Schema({
  trainingType: { type: String, required: true },
  description: { type: String },
  status: { type: String, enum: ["Active", "Inactive"], default: "Active" },
});

module.exports = mongoose.model("TrainingType", trainingTypeSchema);
