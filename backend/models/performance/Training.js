const mongoose = require("mongoose");

const trainingSchema = new mongoose.Schema({
  trainingType: { type: String, required: true },
  trainer: { type: mongoose.Schema.Types.ObjectId, ref: "Trainer", required: true },
  employee: { type: mongoose.Schema.Types.ObjectId, ref: "Employee", required: true },
  duration: { type: String, required: true },
  description: { type: String, required: true },
  cost: { type: Number, required: true },
  status: { type: String, enum: ["Active", "Inactive"], default: "Active" },
});

module.exports = mongoose.model("Training", trainingSchema);
