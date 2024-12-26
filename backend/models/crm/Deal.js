const mongoose = require('mongoose');

const dealSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    stage: { type: String, required: true },
    value: { type: String, required: true },
    tags: { type: [String], required: true },
    closedDate: { type: Date, required: true },
    owner: { type: String, required: true },
    probability: { type: Number, required: true },
    status: { type: String, enum: ['Active', 'Inactive'], default: 'Active' }
  },
  { timestamps: true }
);

const Deal = mongoose.model('Deal', dealSchema);

module.exports = Deal;
