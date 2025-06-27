import axios from 'axios';

const API_URL = 'http://localhost:5000/api';

const api = axios.create({
  baseURL: API_URL,
  withCredentials: true,
});


// Employee
export const employeeService = {
  getAllEmployees: async () => {
    const response = await api.get('/employee/employees');
    return response.data;
  },
  
  addEmployee: async (employeeData) => {
    const response = await api.post('/employee/employee', employeeData);
    return response.data;
  },

  removeEmployee: async (id) => {
    const response = await api.delete(`/employee/employee/${id}`);
    return response.data;
  },
};


export const departmentService = {
  getAllDepartments: async () => {
    const response = await api.get('/employee/departments');
    return response.data;
  },

  addDepartment: async (departmentData) => {
    const response = await api.post('/employee/department', departmentData);
    return response.data;
  },

  removeDepartment: async (id) => {
    const response = await api.delete(`/employee/department/${id}`); // Route to delete
    return response.data;
  },

};

export const attendanceService = {
  getAllAttendance: async (queryParams = {}) => {
    const response = await api.get('/employee/attendance', { params: queryParams });
    return response.data;
  },

  addAttendance: async (attendanceData) => {
    const response = await api.post('/employee/attendance', attendanceData);
    return response.data;
  },
};

export const holidayService = {
  getAllHolidays: async () => {
    const response = await api.get('/employee/holidays');
    return response.data;
  },

  addHoliday: async (holidayData) => {
    const response = await api.post('/employee/holiday', holidayData);
    return response.data;
  },

  removeHoliday: async (id) => {
    const response = await api.delete(`/employee/holiday/${id}`);
    return response.data;
  },
};



export const leaveService = {
  applyLeave: async (leaveData) => {
    const response = await api.post('/employee/leave', leaveData);
    return response.data;
  },
  getLeaveRequestsByEmployee: async (employeeId) => {
    const response = await api.get(`/employee/leave/${employeeId}`);
    return response.data;
  },
  getAllLeaveRequests: async () => {
    const response = await api.get('/employee/leave/all'); // Match the backend route
    return response.data;
  },

  updateLeaveStatus: async ({ leaveId, status }) => {
    const response = await api.put('/employee/leave-status', { leaveId, status });
    return response.data;
  },
  
};

export const overtimeService = {
  getOvertimeByEmployee: async (employeeId, year, month) => {
    const response = await api.get('/overtime', { params: { employeeId, year, month } });
    return response.data;
  },

  addOvertime: async (overtimeData) => {
    const response = await api.post('/overtime', overtimeData);
    return response.data;
  },

  updateOvertimeStatus: async (overtimeId, status) => {
    const response = await api.put('/overtime/status', { overtimeId, status });
    return response.data;
  },
};

export const timesheetService = {
  getTimeSheetsByEmployee: async (employeeId) => {
    const response = await api.get(`/employee/timesheet/${employeeId}`);
    return response;
  },


  addTimeSheet: async (timeSheetData) => {
    // Change this line:
    const response = await api.post('/employee/timesheet/create', timeSheetData);
    return response;
  },

  updateTimeSheet: async (timeSheetId, timeSheetData) => {
    try {
      const response = await api.put(`/api/employee/timesheet/update/${timeSheetId}`, timeSheetData);
      return response.data;
    } catch (error) {
      console.error('Service error:', error);
      throw error;
    }
  },

  deleteTimeSheet: async (timeSheetId) => {
    try {
      const response = await api.delete(`/api/employee/timesheet/delete/${timeSheetId}`);
      return response.data;
    } catch (error) {
      console.error('Service error:', error);
      throw error;
    }
  },
};

// performance 

// src/api/axios.js (or your API service file)
export const goalService = {
  getAllGoals: async () => {
    const response = await api.get('/performance/goals');
    return response.data;
  },
  
  createGoal: async (goalData) => {
    const response = await api.post('/performance/goals', goalData);
    return response.data;
  },

  updateGoal: async (id, goalData) => {
    const response = await api.put(`/performance/goals/${id}`, goalData);
    return response.data;
  },

  deleteGoal: async (id) => {
    const response = await api.delete(`/performance/goals/${id}`);
    return response.data;
  }
};


