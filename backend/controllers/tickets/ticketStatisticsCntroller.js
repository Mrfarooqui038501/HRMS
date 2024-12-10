const TicketStatistics = require("../models/ticketStatistics");

// Get Ticket Statistics
exports.getTicketStatistics = async (req, res) => {
  try {
    const statistics = await TicketStatistics.findOne();

    if (!statistics) {
      return res.status(200).json({
        newTickets: 0,
        solvedTickets: 0,
        openTickets: 0,
        pendingTickets: 0,
      });
    }

    res.status(200).json(statistics);
  } catch (error) {
    res.status(500).json({ message: "Error fetching ticket statistics", error });
  }
};
