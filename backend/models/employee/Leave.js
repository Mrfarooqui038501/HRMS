const mongoose = require("mongoose");

const leaveSchema = new mongoose.Schema({
  employeeId: { type: mongoose.Schema.Types.ObjectId, ref: "Employee", required: true },
  leaveType: { type: String, required: true },
  fromDate: { type: Date, required: true },
  toDate: { type: Date, required: true },
  status: { type: String, default: "Pending" },
});

module.exports = mongoose.model("Leave", leaveSchema);
