import React from 'react';
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Overview  from './pages/Overview'
import Attendance from './pages/Attendance'
import Payroll from './pages/Payroll'
import Tasks from './pages/Projects/Tasks'
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import Chat from './pages/Apps/Chat';
import Calendar from './pages/Apps/Events';
import EmailPage from './pages/Apps/Email';
import ProjectPage from './pages/Projects/Projects';
import Navbar from './components/Navbar';
import ExpensesPage from './components/AdminDashboard/Expenses';
import Client from './pages/Client';
import Performance from './pages/Performance';
import TableComponent from './pages/CRM/Contact';
import Companies from './pages/CRM/Companies';
import Deals from './pages/CRM/Deals';
import Leads from './pages/CRM/Leads';
import Pipeline from './pages/CRM/Pipeline';
import Activities from './pages/CRM/Activities';
import Analytics from './pages/CRM/Analytics';
import AdminAttendance from './pages/Employee/AdminAttendance';
import AdminLeavePortal from './pages/Employee/AdminLeavePortal';
import AllEmployeesPage from './pages/Employee/AllEmployees';
import CustomDashboard from './pages/Employee/CustomDashboard';
import DailyScheduling from './pages/Employee/DailyScheduling';
import Department from './pages/Employee/Department';
import TimeSheet from './pages/Employee/TimeSheet';
import OvertimeTracker from './pages/Employee/OvertimeTracker';
import LeaveSystem from './pages/Employee/LeaveSystem';
import Holiday from './pages/Employee/Holiday';
import AttendancePage from './pages/Employee/EmployeeAttendance ';
import Designations from './pages/Employee/Designations';
import TicketDetail from './pages/Ticket/TicketDetail';
import TicketDashboard from './pages/Ticket/Ticket';
import GoalTracking from './pages/Performance/GoalTracking';
import GoalType from './pages/Performance/GoalType';
import PerformanceTable from './pages/Performance/PerformanceAppraisal';
import PerformanceIndicator from './pages/Performance/PerformanceIndicator';
import Terminations from './pages/Performance/Terminations';
import Trainers from './pages/Performance/Trainers';
import TrainingList from './pages/Performance/TrainingList';
import TrainingType from './pages/Performance/TrainingType';
import Promotions from './pages/Performance/Promotions';
import Resignations from './pages/Performance/Resignations';
import Invoice from './pages/Invoice';




function App() {
  return (
    <>    
    <Router>
      <Routes>
          <Route path="/" element={<Login />}></Route>
          

          <Route path="/" element={<Layout/>}> 
          <Route path="/" element={<Navbar />} />
            
          <Route path="/overview" element={<Overview/>} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="expenses" element={<ExpensesPage />} />
          <Route path="chat" element={<Chat />} />
          <Route path="events" element={<Calendar />} />
          <Route path="email" element={<EmailPage />} />
          <Route path="projects" element={<ProjectPage />} />
          <Route path="attendance" element={<Attendance />} />
          <Route path="contact" element={<TableComponent />} />
          <Route path="companies" element={<Companies />} />
          <Route path="deals" element={<Deals />} />
          <Route path="leads" element={<Leads />} />
          <Route path="pipeline" element={<Pipeline />} />
          <Route path="activities" element={<Activities />} />
          <Route path="analytics" element={<Analytics />} />

          <Route path="ticket" element={<TicketDashboard />} />
          <Route path="ticket-detail" element={<TicketDetail />} />

          <Route path="admin-attendance" element={<AdminAttendance />} />
          <Route path="admin-leave-portal" element={<AdminLeavePortal />} />
          <Route path="all-employees" element={<AllEmployeesPage />} />
          <Route path="custom-dashboard" element={<CustomDashboard />} />
          <Route path="daily-scheduling" element={<DailyScheduling />} />
          <Route path="department" element={<Department />} />
          <Route path="designations" element={<Designations />} />
          <Route path="employee-attendance" element={<AttendancePage />} />
          <Route path="holiday" element={<Holiday />} />
          <Route path="leave-system" element={<LeaveSystem />} />
          <Route path="overtime-tracker" element={<OvertimeTracker />} />
          <Route path="timesheet" element={<TimeSheet />} />

          <Route path="goal-tracking" element={<GoalTracking />} />
          <Route path="goal-type" element={<GoalType />} />
          <Route path="performance-appraisal" element={<PerformanceTable />} />
          <Route path="performance-indicator" element={<PerformanceIndicator />} />
          <Route path="terminations" element={<Terminations />} />
          <Route path="trainers" element={<Trainers />} />
          <Route path="training-list" element={<TrainingList />} />
          <Route path="training-type" element={<TrainingType />} />
          <Route path="promotions" element={<Promotions />} />
          <Route path="resignations" element={<Resignations />} />

          <Route path="invoice" element={<Invoice />} />



          <Route path="client" element={<Client />} />
          <Route path="performance" element={<Performance />} />
          <Route path="payroll" element={<Payroll />} />
          <Route path="tasks" element={<Tasks />} />
          {/* <Route path="custom-dashboard" element={<CustomDashboard />} /> */}
          </Route>
      </Routes>
    </Router>
    </>
  );
}

export default App;