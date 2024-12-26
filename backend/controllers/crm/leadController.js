const Lead = require('../../models/crm/Lead');

// Get All Leads
const getLeads = async (req, res) => {
  try {
    const leads = await Lead.find();
    res.status(200).json(leads);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

// Get Lead by ID
const getLeadById = async (req, res) => {
  try {
    const lead = await Lead.findById(req.params.id);
    if (!lead) {
      return res.status(404).json({ message: 'Lead not found' });
    }
    res.status(200).json(lead);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

// Add a New Lead
const addLead = async (req, res) => {
  try {
    const { name, company, phone, email, status, createdDate, owner } = req.body;
    const newLead = new Lead({ name, company, phone, email, status, createdDate, owner });
    await newLead.save();
    res.status(201).json(newLead);
  } catch (error) {
    res.status(400).json({ message: 'Error adding lead' });
  }
};

// Update Lead
const updateLead = async (req, res) => {
  try {
    const { name, company, phone, email, status, createdDate, owner } = req.body;
    const lead = await Lead.findByIdAndUpdate(
      req.params.id,
      { name, company, phone, email, status, createdDate, owner },
      { new: true }
    );

    if (!lead) {
      return res.status(404).json({ message: 'Lead not found' });
    }

    res.status(200).json(lead);
  } catch (error) {
    res.status(400).json({ message: 'Error updating lead' });
  }
};

// Delete Lead
const deleteLead = async (req, res) => {
  try {
    const lead = await Lead.findByIdAndDelete(req.params.id);
    if (!lead) {
      return res.status(404).json({ message: 'Lead not found' });
    }
    res.status(200).json({ message: 'Lead deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting lead' });
  }
};

module.exports = {
  getLeads,
  getLeadById,
  addLead,
  updateLead,
  deleteLead,
};
