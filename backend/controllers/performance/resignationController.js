const Resignation = require("../../models/performance/Resignation");

// Employee - Submit Resignation
exports.submitResignation = async (req, res) => {
  try {
    const { resignationDate, noticeDate, reason } = req.body;

    const resignation = new Resignation({
      employee: req.user.id,
      resignationDate,
      noticeDate,
      reason,
    });

    await resignation.save();
    res.status(201).json({ message: "Resignation submitted successfully", resignation });
  } catch (error) {
    res.status(500).json({ message: "Error submitting resignation", error });
  }
};

// Admin - Get All Resignations
exports.getAllResignations = async (req, res) => {
  try {
    const resignations = await Resignation.find().populate("employee", "name");
    res.status(200).json(resignations);
  } catch (error) {
    res.status(500).json({ message: "Error fetching resignations", error });
  }
};
