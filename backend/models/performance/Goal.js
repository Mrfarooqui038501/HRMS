const mongoose = require("mongoose");

const goalSchema = new mongoose.Schema({
  employee: { type: mongoose.Schema.Types.ObjectId, ref: "Employee", required: true },
  goalType: { type: String, required: true },
  subject: { type: String, required: true },
  startDate: { type: Date, required: true },
  endDate: { type: Date, required: true },
  description: { type: String, required: true },
  status: { type: String, default: "Pending" },
});

module.exports = mongoose.model("Goal", goalSchema);
