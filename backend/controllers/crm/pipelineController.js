// controllers/pipelineController.js
const Pipeline = require('../../models/crm/Pipeline');

// Get all pipelines
const getAllPipelines = async (req, res) => {
  try {
    const pipelines = await Pipeline.find();
    res.status(200).json(pipelines);
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch pipelines', error });
  }
};

// Get a pipeline by ID
const getPipelineById = async (req, res) => {
  try {
    const pipeline = await Pipeline.findById(req.params.id);
    if (!pipeline) {
      return res.status(404).json({ message: 'Pipeline not found' });
    }
    res.status(200).json(pipeline);
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch pipeline', error });
  }
};

// Add a new pipeline
const addPipeline = async (req, res) => {
  try {
    const { name, totalDealValue, numDeals, stages, createdDate, status } = req.body;

    const newPipeline = new Pipeline({
      name,
      totalDealValue,
      numDeals,
      stages,
      createdDate,
      status,
    });

    await newPipeline.save();
    res.status(201).json(newPipeline);
  } catch (error) {
    res.status(500).json({ message: 'Failed to add pipeline', error });
  }
};

// Update a pipeline
const updatePipeline = async (req, res) => {
  try {
    const updatedPipeline = await Pipeline.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedPipeline) {
      return res.status(404).json({ message: 'Pipeline not found' });
    }
    res.status(200).json(updatedPipeline);
  } catch (error) {
    res.status(500).json({ message: 'Failed to update pipeline', error });
  }
};

// Delete a pipeline
const deletePipeline = async (req, res) => {
  try {
    const deletedPipeline = await Pipeline.findByIdAndDelete(req.params.id);
    if (!deletedPipeline) {
      return res.status(404).json({ message: 'Pipeline not found' });
    }
    res.status(200).json({ message: 'Pipeline deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Failed to delete pipeline', error });
  }
};

module.exports = {
  getAllPipelines,
  getPipelineById,
  addPipeline,
  updatePipeline,
  deletePipeline,
};
