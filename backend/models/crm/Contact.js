const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema({
  name: { type: String, required: true },
  position: { type: String, required: true },
  office: { type: String },
  age: { type: Number },
  date: { type: Date },
  phone: { type: String },
  email: { type: String },
  tags: [{ type: String }],
  rating: { type: Number },
  owner: { type: String },
  status: { type: String, enum: ['Active', 'Inactive'], default: 'Active' }
});

const Contact = mongoose.model('Contact', contactSchema);

module.exports = Contact;



