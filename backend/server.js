require("dotenv").config();
const express = require("express");
const connectDB = require("./config/db");
const routes = require("./routes");

const app = express();
connectDB();

app.use(express.json());

// Use the centralized routes file
app.use("/", routes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
