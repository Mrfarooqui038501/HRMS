const express = require("express");
const { checkRole } = require("../middleware/rolemiddleware");
const ticketController = require("../controllers/tickets/ticketController");
const messageController = require("../controllers/tickets/messageController");
const ticketStatsController = require("../controllers/tickets/ticketStatisticsCntroller");
const userController = require("../controllers/tickets/userController");

const router = express.Router();

// Ticket Routes
router.post("/tickets", ticketController.createTicket);
router.get("/tickets", checkRole("Admin"), ticketController.getAllTickets);
router.get("/my-tickets", checkRole("Client"), ticketController.getMyTickets);
router.put("/tickets/status", checkRole("Admin"), ticketController.updateTicketStatus);

// Message Routes
router.post("/messages", messageController.addMessage);
router.get("/messages/:ticketId", messageController.getMessagesForTicket);

// Ticket Statistics Route
router.get("/ticket-statistics", checkRole("Admin"), ticketStatsController.getTicketStatistics);

// User Routes
router.get("/profile", userController.getUserProfile);
router.get("/users", checkRole("Admin"), userController.getAllUsers);
router.put("/users/role", checkRole("Admin"), userController.updateUserRole);

module.exports = router;
