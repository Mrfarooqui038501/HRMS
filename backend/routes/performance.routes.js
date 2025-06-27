const express = require("express");
const { checkRole } = require("../middleware/rolemiddleware");

const goalController = require("../controllers/performance/goalController");
const performanceController = require("../controllers/performance/performanceController");
const resignationController = require("../controllers/performance/resignationController");
const terminationController = require("../controllers/performance/terminationController");
const trainerController = require("../controllers/performance/trainController");
const trainingController = require("../controllers/performance/trainingController");
const trainingTypeController = require("../controllers/performance/trainingTypeController");

const router = express.Router();

// Goal Routes
router.get("/goals", goalController.getAllGoals);
router.post("/goals", goalController.createGoal);
router.put("/goals/:id", goalController.updateGoal);
router.delete("/goals/:id", goalController.deleteGoal);


// Performance Routes
router.post("/performances",  performanceController.addPerformance);
router.get("/performances", performanceController.getAllPerformance);

// Resignation Routes
router.post("/resignations",  resignationController.submitResignation);
router.get("/resignations",  resignationController.getAllResignations);

// Termination Routes
router.post("/terminations",  terminationController.terminateEmployee);
router.get("/terminations",  terminationController.getAllTerminations);

// Trainer Routes
router.post("/trainers",  trainerController.addTrainer);
router.get("/trainers",  trainerController.getAllTrainers);

// Training Routes
router.post("/trainings",  trainingController.addTraining);
router.get("/trainings",  trainingController.getAllTrainings);

// Training Type Routes
router.post("/training-types",  trainingTypeController.addTrainingType);
router.get("/training-types",  trainingTypeController.getAllTrainingTypes);

module.exports = router;
