const mongoose = require('mongoose');

const leadSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  company: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    enum: ['New', 'Contacted', 'Qualified'],
    default: 'New',
  },
  createdDate: {
    type: Date,
    default: Date.now,
  },
  owner: {
    type: String,
    required: true,
  },
});

const Lead = mongoose.model('Lead', leadSchema);

module.exports = Lead;
