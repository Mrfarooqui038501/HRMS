// controllers/companyController.js
const Company = require('../../models/crm/Company');

// Get all companies
exports.getCompanies = async (req, res) => {
  try {
    const companies = await Company.find();
    res.json(companies);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching companies', error });
  }
};

// Create a new company
exports.createCompany = async (req, res) => {
  const { name, industry, headquarters, employees, revenue, founded, phone, email, status } = req.body;

  try {
    const newCompany = new Company({
      name,
      industry,
      headquarters,
      employees,
      revenue,
      founded,
      phone,
      email,
      status,
    });
    await newCompany.save();
    res.status(201).json(newCompany);
  } catch (error) {
    res.status(500).json({ message: 'Error creating company', error });
  }
};

// Update a company
exports.updateCompany = async (req, res) => {
  const { id } = req.params;
  const { name, industry, headquarters, employees, revenue, founded, phone, email, status } = req.body;

  try {
    const updatedCompany = await Company.findByIdAndUpdate(
      id,
      { name, industry, headquarters, employees, revenue, founded, phone, email, status },
      { new: true }
    );
    res.json(updatedCompany);
  } catch (error) {
    res.status(500).json({ message: 'Error updating company', error });
  }
};

// Delete a company
exports.deleteCompany = async (req, res) => {
  const { id } = req.params;

  try {
    await Company.findByIdAndDelete(id);
    res.status(200).json({ message: 'Company deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting company', error });
  }
};
