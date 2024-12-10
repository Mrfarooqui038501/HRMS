const mongoose = require("mongoose");

const overtimeSchema = new mongoose.Schema({
  employeeId: { type: mongoose.Schema.Types.ObjectId, ref: "Employee", required: true },
  day: { type: Number, required: true },
  hours: { type: Number, required: true },
  status: { type: String, default: "Pending" },
});

module.exports = mongoose.model("Overtime", overtimeSchema);
