// models/Pipeline.js
const mongoose = require('mongoose');

const pipelineSchema = new mongoose.Schema({
  name: { type: String, required: true },
  totalDealValue: { type: Number, required: true },
  numDeals: { type: Number, required: true },
  stages: { type: [String], required: true },
  createdDate: { type: Date, required: true },
  status: { type: String, enum: ['Active', 'Completed'], required: true },
});

const Pipeline = mongoose.model('Pipeline', pipelineSchema);

module.exports = Pipeline;
