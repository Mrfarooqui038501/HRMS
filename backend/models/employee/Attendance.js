const mongoose = require("mongoose");

const attendanceSchema = new mongoose.Schema({
  employeeId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Employee", // Reference to Employee model
    required: true,
  },
  date: { type: Date, required: true },
  punchIn: { type: String, required: true },  // Adjust the type if using DateTime
  punchOut: { type: String, required: true },
  production: { type: String, required: true },
  break: { type: String, required: true }, // Break time (e.g., "01:00" for 1 hour)
  overtime: { type: String, required: true }, // Overtime in hours
});

module.exports = mongoose.model("Attendance", attendanceSchema);
