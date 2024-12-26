const Deal = require('../../models/crm/Deal');

// Get all deals
const getDeals = async (req, res) => {
  try {
    const deals = await Deal.find();
    res.status(200).json(deals);
  } catch (error) {
    res.status(500).json({ message: "Failed to retrieve deals", error });
  }
};

// Add a new deal
const addDeal = async (req, res) => {
  try {
    const { name, stage, value, tags, closedDate, owner, probability, status } = req.body;
    const newDeal = new Deal({
      name, stage, value, tags, closedDate, owner, probability, status
    });
    await newDeal.save();
    res.status(201).json(newDeal);
  } catch (error) {
    res.status(500).json({ message: "Failed to create deal", error });
  }
};

// Edit a deal
const editDeal = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, stage, value, tags, closedDate, owner, probability, status } = req.body;
    const updatedDeal = await Deal.findByIdAndUpdate(id, {
      name, stage, value, tags, closedDate, owner, probability, status
    }, { new: true });
    
    if (!updatedDeal) {
      return res.status(404).json({ message: "Deal not found" });
    }
    
    res.status(200).json(updatedDeal);
  } catch (error) {
    res.status(500).json({ message: "Failed to update deal", error });
  }
};

// Delete a deal
const deleteDeal = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedDeal = await Deal.findByIdAndDelete(id);
    
    if (!deletedDeal) {
      return res.status(404).json({ message: "Deal not found" });
    }
    
    res.status(200).json({ message: "Deal deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Failed to delete deal", error });
  }
};

module.exports = {
  getDeals,
  addDeal,
  editDeal,
  deleteDeal
};
