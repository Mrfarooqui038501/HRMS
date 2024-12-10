const mongoose = require("mongoose");

const ticketStatisticsSchema = new mongoose.Schema({
  newTickets: { type: Number, default: 0 },
  solvedTickets: { type: Number, default: 0 },
  openTickets: { type: Number, default: 0 },
  pendingTickets: { type: Number, default: 0 },
  updatedAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("TicketStatistics", ticketStatisticsSchema);
