const mongoose = require("mongoose");

const attendanceSchema = new mongoose.Schema({
  employeeId: { type: mongoose.Schema.Types.ObjectId, ref: "Employee", required: true },
  date: { type: Date, required: true },
  punchIn: { type: String },
  punchOut: { type: String },
  production: { type: String },
  break: { type: String },
  overtime: { type: String },
});

module.exports = mongoose.model("Attendance", attendanceSchema);
