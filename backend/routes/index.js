const express = require("express");

const employeeRoutes = require("../routes/employee.routes");
const performanceRoutes = require("../routes/performance.routes");
const ticketRoutes = require("../routes/tickets.routes");

const router = express.Router();

// Employee-related routes
router.use("/api/employee", employeeRoutes);

// Performance-related routes
router.use("/api/performance", performanceRoutes);

// Ticket-related routes
router.use("/api/ticket", ticketRoutes);

module.exports = router;
