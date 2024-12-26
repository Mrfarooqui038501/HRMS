const Ticket = require("../../models/tickets/ticket");
const TicketStatistics = require("../../models/tickets/ticketStactics");

// Create a Ticket
exports.createTicket = async (req, res) => {
  try {
    const { subject, description,createdBy, priority } = req.body;

    const ticket = new Ticket({
      ticketId: `TICK-${Date.now()}`,
      subject,
      description,
      // createdBy: req.user.id, // Assuming logged-in user
      createdBy,
      priority,
    });

    await ticket.save();

    // Update statistics
    await TicketStatistics.updateOne(
      {},
      { $inc: { newTickets: 1, openTickets: 1 } },
      { upsert: true }
    );

    res.status(201).json({ message: "Ticket created successfully", ticket });
  } catch (error) {
    res.status(500).json({ message: "Error creating ticket", error });
  }
};

// Get All Tickets (Admin/Staff Role)
exports.getAllTickets = async (req, res) => {
  try {
    const tickets = await Ticket.find()
      .populate("createdBy", "name email")
      .populate("assignedStaff", "name email");

    res.status(200).json(tickets);
  } catch (error) {
    res.status(500).json({ message: "Error fetching tickets", error });
  }
};

// Get Tickets Created by Logged-in Client
exports.getMyTickets = async (req, res) => {
  try {
    const tickets = await Ticket.find({ createdBy: req.user.id });

    res.status(200).json(tickets);
  } catch (error) {
    res.status(500).json({ message: "Error fetching your tickets", error });
  }
};

// Update Ticket Status (Admin/Staff Role)
exports.updateTicketStatus = async (req, res) => {
  try {
    const { ticketId, status } = req.body;

    const ticket = await Ticket.findByIdAndUpdate(
      ticketId,
      { status, lastReply: Date.now() },
      { new: true }
    );

    // Update statistics
    const updateStats = {};
    if (status === "Solved") {
      updateStats.solvedTickets = 1;
      updateStats.openTickets = -1;
    } else if (status === "Pending") {
      updateStats.pendingTickets = 1;
      updateStats.openTickets = -1;
    }

    await TicketStatistics.updateOne({}, { $inc: updateStats }, { upsert: true });

    res.status(200).json({ message: "Ticket status updated", ticket });
  } catch (error) {
    res.status(500).json({ message: "Error updating ticket status", error });
  }
};
