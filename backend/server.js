require("dotenv").config();
const express = require("express");
const connectDB = require("./config/db");
const routes = require("./routes");
const cors = require('cors');


const app = express();
connectDB();
app.use(cors({
    origin: ['http://localhost:5173', 'http://localhost:5174'],  // Change this to your frontend URL
    methods: 'GET,POST,PUT,DELETE',
    credentials: true,
  }));

app.use(express.json());

// Use the centralized routes file
app.use("/", routes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
