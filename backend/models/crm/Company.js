// models/Company.js
const mongoose = require('mongoose');

const companySchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    industry: { type: String, required: true },
    headquarters: { type: String },
    employees: { type: Number },
    revenue: { type: String },
    founded: { type: Date },
    phone: { type: String },
    email: { type: String },
    status: { type: String, enum: ['Active', 'Inactive'], default: 'Active' },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Company', companySchema);
