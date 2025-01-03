const express = require("express");
// const { checkRole } = require("../middleware/rolemiddleware");
const attendanceController = require("../controllers/employee/attendanceController");
const departmentController = require("../controllers/employee/departmentController");
const employeeController = require("../controllers/employee/employeeController");
const holidayController = require("../controllers/employee/holidayController");
const leaveController = require("../controllers/employee/leaveController");
const designationController = require("../controllers/employee/designationController")
const adminLeaveController = require('../controllers/employee/adminLeaveController'); 
const overTimeController = require('../controllers/employee/overTimeController')
const timesheetController  = require('../controllers/employee/timeSheetController')

const router = express.Router();

// Attendance Routes
router.post("/attendance", attendanceController.addAttendance);
router.get("/attendance",  attendanceController.getAllAttendance);

// Department Routes
router.post("/department",  departmentController.addDepartment);
router.get("/departments",  departmentController.getAllDepartments);
router.delete("/department/:id", departmentController.removeDepartment);


// Employee Routes
router.post("/employee",  employeeController.addEmployee);
router.get("/employees",  employeeController.getAllEmployees);
router.get("/profile",  employeeController.getProfile);
router.delete("/employee/:id", employeeController.removeEmployee);


// Holiday Routes
router.post("/holiday",  holidayController.addHoliday);
router.get("/holidays",  holidayController.getAllHolidays);
router.delete("/holiday/:id", holidayController.removeHoliday);


// Leave Routes
router.post("/leave", leaveController.applyLeave);
router.get("/leave/:employeeId", leaveController.getLeaveRequestsByEmployee);
router.get("/leave/all", leaveController.getAllLeaveRequests);
router.put("/leave-status", leaveController.updateLeaveStatus);



// Designation Routes
router.post("/designation", designationController.addDesignation); 
router.get("/designations", designationController.getAllDesignations); 

// Leave request routes
// router.post("/leave-request", adminLeaveController.createLeaveRequest);
router.get("/leave-requests", adminLeaveController.getAllLeaveRequests);
router.put("/leave-request/:id", adminLeaveController.updateLeaveStatus);
// router.delete("/leave-request/:id", adminLeaveController.deleteLeaveRequest);

// Overtime Routes
router.get('/overtime', overTimeController.getOvertimeByEmployee);
router.post('/overtime', overTimeController.addOvertime);
router.put('/overtime/status', overTimeController.updateOvertimeStatus);

//TimeSheet Routes
router.get('/timesheet/:employeeId', timesheetController.getTimeSheetsByEmployee);
router.post('/timesheet/create', timesheetController.addTimeSheet);
router.put('/timesheet/update/:timeSheetId', timesheetController.updateTimeSheet);
router.delete('/timesheet/delete/:timeSheetId', timesheetController.deleteTimeSheet);

module.exports = router;
