require("dotenv").config();
const express = require("express");
const connectDB = require("./config/db");

// Route Imports
// const employeeRoutes = require("./routes/employeeRoutes");
// const attendanceRoutes = require("./routes/attendanceRoutes");
// Add other routes...

const app = express();
connectDB();

app.use(express.json());

// API Endpoints
// app.use("/api/employees", employeeRoutes);
// app.use("/api/attendance", attendanceRoutes);
// Add other routes...

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
