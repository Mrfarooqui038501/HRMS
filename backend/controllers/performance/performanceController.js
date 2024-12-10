const Performance = require("../models/performance");

// Admin - Add Performance Score
exports.addPerformance = async (req, res) => {
  try {
    const { employee, month, score, status } = req.body;

    const performance = new Performance({
      employee,
      month,
      score,
      status,
    });

    await performance.save();
    res.status(201).json({ message: "Performance record added", performance });
  } catch (error) {
    res.status(500).json({ message: "Error adding performance record", error });
  }
};

// Admin - Get All Performance Records
exports.getAllPerformance = async (req, res) => {
  try {
    const performances = await Performance.find().populate("employee", "name");
    res.status(200).json(performances);
  } catch (error) {
    res.status(500).json({ message: "Error fetching performance records", error });
  }
};
