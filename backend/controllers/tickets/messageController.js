const Message = require("../../models/tickets/message");

// Add a Message to a Ticket
exports.addMessage = async (req, res) => {
  try {
    const { ticketId, user, message } = req.body;

    const newMessage = new Message({
      ticket: ticketId,
      user,
      message,
    });

    await newMessage.save();

    // Update the ticket's last reply time
    await Ticket.findByIdAndUpdate(ticketId, { lastReply: Date.now() });

    res.status(201).json({ message: "Message added successfully", newMessage });
  } catch (error) {
    res.status(500).json({ message: "Error adding message", error });
  }
};

// Get All Messages for a Ticket
exports.getMessagesForTicket = async (req, res) => {
  try {
    const { ticketId } = req.params;

    const messages = await Message.find({ ticket: ticketId }).populate("user", "name email");

    res.status(200).json(messages);
  } catch (error) {
    res.status(500).json({ message: "Error fetching messages", error });
  }
};
