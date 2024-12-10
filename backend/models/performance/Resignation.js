const mongoose = require("mongoose");

const resignationSchema = new mongoose.Schema({
  employee: { type: mongoose.Schema.Types.ObjectId, ref: "Employee", required: true },
  resignationDate: { type: Date, required: true },
  noticeDate: { type: Date, required: true },
  reason: { type: String, required: true },
});

module.exports = mongoose.model("Resignation", resignationSchema);
