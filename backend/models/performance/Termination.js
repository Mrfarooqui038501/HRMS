const mongoose = require("mongoose");

const terminationSchema = new mongoose.Schema({
  employee: { type: mongoose.Schema.Types.ObjectId, ref: "Employee", required: true },
  terminationDate: { type: Date, required: true },
  noticeDate: { type: Date, required: true },
  reason: { type: String, required: true },
});

module.exports = mongoose.model("Termination", terminationSchema);
