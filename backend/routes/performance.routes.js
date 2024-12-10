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
router.post("/goals", checkRole("Employee"), goalController.createGoal);
router.get("/goals", checkRole("Admin"), goalController.getAllGoals);

// Performance Routes
router.post("/performances", checkRole("Admin"), performanceController.addPerformance);
router.get("/performances", checkRole("Admin"), performanceController.getAllPerformance);

// Resignation Routes
router.post("/resignations", checkRole("Employee"), resignationController.submitResignation);
router.get("/resignations", checkRole("Admin"), resignationController.getAllResignations);

// Termination Routes
router.post("/terminations", checkRole("Admin"), terminationController.terminateEmployee);
router.get("/terminations", checkRole("Admin"), terminationController.getAllTerminations);

// Trainer Routes
router.post("/trainers", checkRole("Admin"), trainerController.addTrainer);
router.get("/trainers", checkRole("Admin"), trainerController.getAllTrainers);

// Training Routes
router.post("/trainings", checkRole("Admin"), trainingController.addTraining);
router.get("/trainings", checkRole("Admin"), trainingController.getAllTrainings);

// Training Type Routes
router.post("/training-types", checkRole("Admin"), trainingTypeController.addTrainingType);
router.get("/training-types", checkRole("Admin"), trainingTypeController.getAllTrainingTypes);

module.exports = router;
