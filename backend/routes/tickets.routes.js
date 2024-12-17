const express = require("express");
const { checkRole } = require("../middleware/rolemiddleware");
const ticketController = require("../controllers/tickets/ticketController");
const messageController = require("../controllers/tickets/messageController");
const ticketStatsController = require("../controllers/tickets/ticketStatisticsCntroller");
const userController = require("../controllers/tickets/userController");

const router = express.Router();

// Ticket Routes
router.post("/tickets", ticketController.createTicket);
router.get("/tickets",  ticketController.getAllTickets);
router.get("/my-tickets",  ticketController.getMyTickets);
router.put("/tickets/status",  ticketController.updateTicketStatus);

// Message Routes
router.post("/messages", messageController.addMessage);
router.get("/messages/:ticketId", messageController.getMessagesForTicket);

// Ticket Statistics Route
router.get("/ticket-statistics",  ticketStatsController.getTicketStatistics);

// User Routes
router.get("/profile", userController.getUserProfile);
router.get("/users",  userController.getAllUsers);
router.put("/users/role",  userController.updateUserRole);

module.exports = router;
