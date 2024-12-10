const mongoose = require("mongoose");

const ticketSchema = new mongoose.Schema({
  ticketId: { type: String, required: true, unique: true },
  subject: { type: String, required: true },
  description: { type: String, required: true },
  createdBy: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  assignedStaff: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  createdDate: { type: Date, default: Date.now },
  lastReply: { type: Date },
  priority: { type: String, enum: ["Low", "Medium", "High"], default: "Medium" },
  status: { type: String, enum: ["New", "In Progress", "Solved", "Reopened", "Pending"], default: "New" },
});

module.exports = mongoose.model("Ticket", ticketSchema);
