import React, { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { 
  HomeIcon, 
  ClipboardListIcon, 
  DollarSignIcon, 
  CalendarCheckIcon, 
  LayoutGridIcon,
  MenuIcon,
  XIcon,
  ChevronDownIcon,
  ChevronUpIcon,
  Ticket,
  LayoutTemplate,
  Presentation
} from 'lucide-react';
import Navbar from './Navbar';

const Layout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null); // Track the active dropdown

  const navItems = [
    { 
      name: 'Payroll', 
      path: '/payroll', 
      icon: <DollarSignIcon className="w-5 h-5 mr-3" /> 
    },
    { 
      name: 'Invoice', 
      path: '/invoice', 
      icon: <DollarSignIcon className="w-5 h-5 mr-3" /> 
    },
    // { 
    //   name: 'Custom Dashboard', 
    //   path: '/custom-dashboard', 
    //   icon: <LayoutGridIcon className="w-5 h-5 mr-3" /> 
    // }
  ];

  const toggleDropdown = (dropdownName) => {
    setActiveDropdown(prevState => (prevState === dropdownName ? null : dropdownName));
  };

  return (
    <>
      <div className="flex h-screen bg-gray-900 overflow-hidden">
        {/* Sidebar Toggle Button */}
        <button 
          className="fixed top-4 left-4 z-50 md:hidden"
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        >
          {isSidebarOpen ? <XIcon /> : <MenuIcon />}
        </button>

        {/* Sidebar */}
        <aside 
          className={`fixed inset-y-0 left-0 z-40 w-64 bg-gray-900 shadow-xl 
            transform transition-transform duration-300 ease-in-out
            ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}
            md:relative md:translate-x-0 overflow-y-auto`}
        >
          <div className="flex items-center justify-center h-20 shadow-md">
            <Link to="/overview" className="text-3xl font-bold text-orange-600">HRMS</Link>
          </div>
          
          <nav className="mt-10">
            {/* Main Dropdown */}
            <div>
              <button
                className="flex items-center w-full px-6 py-4 text-gray-400 
                hover:bg-blue-50 hover:text-blue-600 transition-colors duration-200 
                border-l-4 border-transparent hover:border-blue-500"
                onClick={() => toggleDropdown('main')}
              >
                <HomeIcon className="w-5 h-5 mr-3" />
                Main
                {activeDropdown === 'main' ? (
                  <ChevronUpIcon className="ml-auto w-5 h-5" />
                ) : (
                  <ChevronDownIcon className="ml-auto w-5 h-5" />
                )}
              </button>

              {/* Main Dropdown Menu */}
              {activeDropdown === 'main' && (
                <div className="ml-6">
                  <Link 
                    to="/overview" 
                    className="block px-6 py-2 text-gray-400 
                      hover:bg-blue-50 hover:text-blue-600 transition-colors duration-200"
                    onClick={() => setIsSidebarOpen(false)}
                  >
                    Admin Dashboard
                  </Link>
                  <Link 
                    to="/dashboard" 
                    className="block px-6 py-2 text-gray-400 
                      hover:bg-blue-50 hover:text-blue-600 transition-colors duration-200"
                    onClick={() => setIsSidebarOpen(false)}
                  >
                    Employee Dashboard
                  </Link>
                </div>
              )}
            </div>

            {/* Apps Dropdown */}
            <div>
              <button
                className="flex items-center w-full px-6 py-4 text-gray-400 
                hover:bg-blue-50 hover:text-blue-600 transition-colors duration-200 
                border-l-4 border-transparent hover:border-blue-500"
                onClick={() => toggleDropdown('apps')}
              >
                <LayoutGridIcon className="w-5 h-5 mr-3" />
                Apps
                {activeDropdown === 'apps' ? (
                  <ChevronUpIcon className="ml-auto w-5 h-5" />
                ) : (
                  <ChevronDownIcon className="ml-auto w-5 h-5" />
                )}
              </button>

              {/* Apps Dropdown Menu */}
              {activeDropdown === 'apps' && (
                <div className="ml-6">
                  <Link 
                    to="/chat" 
                    className="block px-6 py-2 text-gray-400 
                      hover:bg-blue-50 hover:text-blue-600 transition-colors duration-200"
                    onClick={() => setIsSidebarOpen(false)}
                  >
                    Chat
                  </Link>
                  <Link 
                    to="/email" 
                    className="block px-6 py-2 text-gray-400 
                      hover:bg-blue-50 hover:text-blue-600 transition-colors duration-200"
                    onClick={() => setIsSidebarOpen(false)}
                  >
                    Email
                  </Link>
                  <Link 
                    to="/events" 
                    className="block px-6 py-2 text-gray-400 
                      hover:bg-blue-50 hover:text-blue-600 transition-colors duration-200"
                    onClick={() => setIsSidebarOpen(false)}
                  >
                    Calendar
                  </Link>
                </div>
              )}
            </div>

             {/* Ticket Dropdown */}
             <div>
              <button
                className="flex items-center w-full px-6 py-4 text-gray-400 
                hover:bg-blue-50 hover:text-blue-600 transition-colors duration-200 
                border-l-4 border-transparent hover:border-blue-500"
                onClick={() => toggleDropdown('tickets')}
              >
                <Ticket className="w-5 h-5 mr-3" />
                Tickets
                {activeDropdown === 'tickets' ? (
                  <ChevronUpIcon className="ml-auto w-5 h-5" />
                ) : (
                  <ChevronDownIcon className="ml-auto w-5 h-5" />
                )}
              </button>

              {/* Tickets Dropdown Menu */}
              {activeDropdown === 'tickets' && (
                <div className="ml-6">
                  <Link 
                    to="/ticket" 
                    className="block px-6 py-2 text-gray-400 
                      hover:bg-blue-50 hover:text-blue-600 transition-colors duration-200"
                    onClick={() => setIsSidebarOpen(false)}
                  >
                    Ticket
                  </Link>

                  <Link 
                    to="/ticket-detail" 
                    className="block px-6 py-2 text-gray-400 
                      hover:bg-blue-50 hover:text-blue-600 transition-colors duration-200"
                    onClick={() => setIsSidebarOpen(false)}
                  >
                    Ticket Detail
                  </Link>
                </div>
              )}
            </div>

            {/* Employee Dropdown */}
            <div>
              <button
                className="flex items-center w-full px-6 py-4 text-gray-400 
                hover:bg-blue-50 hover:text-blue-600 transition-colors duration-200 
                border-l-4 border-transparent hover:border-blue-500"
                onClick={() => toggleDropdown('employee')}
              >
                <LayoutTemplate className="w-5 h-5 mr-3" />
                Employee
                {activeDropdown === 'employee' ? (
                  <ChevronUpIcon className="ml-auto w-5 h-5" />
                ) : (
                  <ChevronDownIcon className="ml-auto w-5 h-5" />
                )}
              </button>

              {/* Employee Dropdown Menu */}
              {activeDropdown === 'employee' && (
                <div className="ml-6">
                  <Link 
                    to="/admin-attendance" 
                    className="block px-6 py-2 text-gray-400 
                      hover:bg-blue-50 hover:text-blue-600 transition-colors duration-200"
                    onClick={() => setIsSidebarOpen(false)}
                  >
                    Admin Attendance
                  </Link>

                  <Link 
                    to="/admin-leave-portal" 
                    className="block px-6 py-2 text-gray-400 
                      hover:bg-blue-50 hover:text-blue-600 transition-colors duration-200"
                    onClick={() => setIsSidebarOpen(false)}
                  >
                    Admin Leave Portal
                  </Link>

                  <Link 
                    to="/all-employees" 
                    className="block px-6 py-2 text-gray-400 
                      hover:bg-blue-50 hover:text-blue-600 transition-colors duration-200"
                    onClick={() => setIsSidebarOpen(false)}
                  >
                    All Employees
                  </Link>

                  <Link 
                    to="/custom-dashboard" 
                    className="block px-6 py-2 text-gray-400 
                      hover:bg-blue-50 hover:text-blue-600 transition-colors duration-200"
                    onClick={() => setIsSidebarOpen(false)}
                  >
                    Custom Dashboard
                  </Link>

                  <Link 
                    to="/daily-scheduling" 
                    className="block px-6 py-2 text-gray-400 
                      hover:bg-blue-50 hover:text-blue-600 transition-colors duration-200"
                    onClick={() => setIsSidebarOpen(false)}
                  >
                    Daily Scheduling
                  </Link>

                  <Link 
                    to="/department" 
                    className="block px-6 py-2 text-gray-400 
                      hover:bg-blue-50 hover:text-blue-600 transition-colors duration-200"
                    onClick={() => setIsSidebarOpen(false)}
                  >
                    Department
                  </Link>

                  <Link 
                    to="/designations" 
                    className="block px-6 py-2 text-gray-400 
                      hover:bg-blue-50 hover:text-blue-600 transition-colors duration-200"
                    onClick={() => setIsSidebarOpen(false)}
                  >
                    Designations
                  </Link>

                  <Link 
                    to="/employee-attendance" 
                    className="block px-6 py-2 text-gray-400 
                      hover:bg-blue-50 hover:text-blue-600 transition-colors duration-200"
                    onClick={() => setIsSidebarOpen(false)}
                  >
                    Employee Attendance
                  </Link>

                  <Link 
                    to="/Holiday" 
                    className="block px-6 py-2 text-gray-400 
                      hover:bg-blue-50 hover:text-blue-600 transition-colors duration-200"
                    onClick={() => setIsSidebarOpen(false)}
                  >
                    Holiday
                  </Link>

                  <Link 
                    to="/leave-system" 
                    className="block px-6 py-2 text-gray-400 
                      hover:bg-blue-50 hover:text-blue-600 transition-colors duration-200"
                    onClick={() => setIsSidebarOpen(false)}
                  >
                    Leave System
                  </Link>

                  <Link 
                    to="/overtime-tracker" 
                    className="block px-6 py-2 text-gray-400 
                      hover:bg-blue-50 hover:text-blue-600 transition-colors duration-200"
                    onClick={() => setIsSidebarOpen(false)}
                  >
                    Overtime Tracker
                  </Link>

                  <Link 
                    to="/timesheet" 
                    className="block px-6 py-2 text-gray-400 
                      hover:bg-blue-50 hover:text-blue-600 transition-colors duration-200"
                    onClick={() => setIsSidebarOpen(false)}
                  >
                    Timesheet
                  </Link>
                </div>
              )}
            </div>

            {/* Project Dropdown */}
            <div>
              <button
                className="flex items-center w-full px-6 py-4 text-gray-400 
                hover:bg-blue-50 hover:text-blue-600 transition-colors duration-200 
                border-l-4 border-transparent hover:border-blue-500"
                onClick={() => toggleDropdown('projects')}
              >
                <Presentation className="w-5 h-5 mr-3" />
                Project
                {activeDropdown === 'projects' ? (
                  <ChevronUpIcon className="ml-auto w-5 h-5" />
                ) : (
                  <ChevronDownIcon className="ml-auto w-5 h-5" />
                )}
              </button>

              {/* Project Dropdown Menu */}
              {activeDropdown === 'projects' && (
                <div className="ml-6">
                  <Link 
                    to="/projects" 
                    className="block px-6 py-2 text-gray-400 
                      hover:bg-blue-50 hover:text-blue-600 transition-colors duration-200"
                    onClick={() => setIsSidebarOpen(false)}
                  >
                    Projects
                  </Link>
                  <Link 
                    to="/tasks" 
                    className="block px-6 py-2 text-gray-400 
                      hover:bg-blue-50 hover:text-blue-600 transition-colors duration-200"
                    onClick={() => setIsSidebarOpen(false)}
                  >
                    Tasks
                  </Link>
                </div>
              )}
            </div>

            {/* CRM Dropdown */}
            <div>
              <button
                className="flex items-center w-full px-6 py-4 text-gray-400 
                hover:bg-blue-50 hover:text-blue-600 transition-colors duration-200 
                border-l-4 border-transparent hover:border-blue-500"
                onClick={() => toggleDropdown('crm')}
              >
                <ClipboardListIcon className="w-5 h-5 mr-3" />
                CRM
                {activeDropdown === 'crm' ? (
                  <ChevronUpIcon className="ml-auto w-5 h-5" />
                ) : (
                  <ChevronDownIcon className="ml-auto w-5 h-5" />
                )}
              </button>

              {/* CRM Dropdown Menu */}
              {activeDropdown === 'crm' && (
                <div className="ml-6">
                  <Link 
                    to="/contact" 
                    className="block px-6 py-2 text-gray-400 
                      hover:bg-blue-50 hover:text-blue-600 transition-colors duration-200"
                    onClick={() => setIsSidebarOpen(false)}
                  >
                    Contacts
                  </Link>
                  <Link 
                    to="/companies" 
                    className="block px-6 py-2 text-gray-400 
                      hover:bg-blue-50 hover:text-blue-600 transition-colors duration-200"
                    onClick={() => setIsSidebarOpen(false)}
                  >
                    Companies
                  </Link>
                  <Link 
                    to="/leads" 
                    className="block px-6 py-2 text-gray-400 
                      hover:bg-blue-50 hover:text-blue-600 transition-colors duration-200"
                    onClick={() => setIsSidebarOpen(false)}
                  >
                    Leads
                  </Link>
                  <Link 
                    to="/deals" 
                    className="block px-6 py-2 text-gray-400 
                      hover:bg-blue-50 hover:text-blue-600 transition-colors duration-200"
                    onClick={() => setIsSidebarOpen(false)}
                  >
                    Deals
                  </Link>
                  <Link 
                    to="/pipeline" 
                    className="block px-6 py-2 text-gray-400 
                      hover:bg-blue-50 hover:text-blue-600 transition-colors duration-200"
                    onClick={() => setIsSidebarOpen(false)}
                  >
                    Pipeline
                  </Link>
                  <Link 
                    to="/analytics" 
                    className="block px-6 py-2 text-gray-400 
                      hover:bg-blue-50 hover:text-blue-600 transition-colors duration-200"
                    onClick={() => setIsSidebarOpen(false)}
                  >
                    Analytics
                  </Link>
                  <Link 
                    to="/activities" 
                    className="block px-6 py-2 text-gray-400 
                      hover:bg-blue-50 hover:text-blue-600 transition-colors duration-200"
                    onClick={() => setIsSidebarOpen(false)}
                  >
                    Activities
                  </Link>
                </div>
              )}
            </div>


             {/* Performance Dropdown */}
             <div>
              <button
                className="flex items-center w-full px-6 py-4 text-gray-400 
                hover:bg-blue-50 hover:text-blue-600 transition-colors duration-200 
                border-l-4 border-transparent hover:border-blue-500"
                onClick={() => toggleDropdown('performance')}
              >
                <ClipboardListIcon className="w-5 h-5 mr-3" />
                Performance
                {activeDropdown === 'performance' ? (
                  <ChevronUpIcon className="ml-auto w-5 h-5" />
                ) : (
                  <ChevronDownIcon className="ml-auto w-5 h-5" />
                )}
              </button>

              {/* Performance Dropdown Menu */}
              {activeDropdown === 'performance' && (
                <div className="ml-6">
                  <Link 
                    to="/goal-tracking" 
                    className="block px-6 py-2 text-gray-400 
                      hover:bg-blue-50 hover:text-blue-600 transition-colors duration-200"
                    onClick={() => setIsSidebarOpen(false)}
                  >
                    Goal Tracking
                  </Link>
                  <Link 
                    to="/goal-type" 
                    className="block px-6 py-2 text-gray-400 
                      hover:bg-blue-50 hover:text-blue-600 transition-colors duration-200"
                    onClick={() => setIsSidebarOpen(false)}
                  >
                    Goal Type
                  </Link>
                  <Link 
                    to="/performance-appraisal" 
                    className="block px-6 py-2 text-gray-400 
                      hover:bg-blue-50 hover:text-blue-600 transition-colors duration-200"
                    onClick={() => setIsSidebarOpen(false)}
                  >
                    Performance Appraisal
                  </Link>
                  <Link 
                    to="/performance-indicator" 
                    className="block px-6 py-2 text-gray-400 
                      hover:bg-blue-50 hover:text-blue-600 transition-colors duration-200"
                    onClick={() => setIsSidebarOpen(false)}
                  >
                    Performance Indicator
                  </Link>
                  <Link 
                    to="/promotions" 
                    className="block px-6 py-2 text-gray-400 
                      hover:bg-blue-50 hover:text-blue-600 transition-colors duration-200"
                    onClick={() => setIsSidebarOpen(false)}
                  >
                    Promotions
                  </Link>
                  <Link 
                    to="/resignations" 
                    className="block px-6 py-2 text-gray-400 
                      hover:bg-blue-50 hover:text-blue-600 transition-colors duration-200"
                    onClick={() => setIsSidebarOpen(false)}
                  >
                    Resignations
                  </Link>
                  <Link 
                    to="/terminations" 
                    className="block px-6 py-2 text-gray-400 
                      hover:bg-blue-50 hover:text-blue-600 transition-colors duration-200"
                    onClick={() => setIsSidebarOpen(false)}
                  >
                    Terminations
                  </Link>
                  <Link 
                    to="/trainers" 
                    className="block px-6 py-2 text-gray-400 
                      hover:bg-blue-50 hover:text-blue-600 transition-colors duration-200"
                    onClick={() => setIsSidebarOpen(false)}
                  >
                    Trainers
                  </Link>
                  <Link 
                    to="/training-list" 
                    className="block px-6 py-2 text-gray-400 
                      hover:bg-blue-50 hover:text-blue-600 transition-colors duration-200"
                    onClick={() => setIsSidebarOpen(false)}
                  >
                    Training List
                  </Link>
                  <Link 
                    to="/training-type" 
                    className="block px-6 py-2 text-gray-400 
                      hover:bg-blue-50 hover:text-blue-600 transition-colors duration-200"
                    onClick={() => setIsSidebarOpen(false)}
                  >
                    Training Type
                  </Link>
                </div>
              )}
            </div>



            {/* Other navigation items */}
            {navItems.map((item) => (
              <Link 
                key={item.path} 
                to={item.path}
                className="flex items-center px-6 py-4 text-gray-400 
                hover:bg-blue-50 hover:text-blue-600 
                transition-colors duration-200 
                border-l-4 border-transparent 
                hover:border-blue-500"
                onClick={() => setIsSidebarOpen(false)}
              >
                {item.icon}
                {item.name}
              </Link>
            ))}
          </nav>
        </aside>

        {/* Background overlay when sidebar is open */}
        {isSidebarOpen && (
          <div 
            className="fixed inset-0 bg-black opacity-50 z-30 md:hidden"
            onClick={() => setIsSidebarOpen(false)}
          />
        )}

        <main className="flex-1 overflow-y-auto p-6 md:p-10 bg-gray-100 z-10">
          <Outlet />
        </main>
      </div>

      {/* Navbar */}
      <div className="fixed inset-x-0 top-0 z-20">
        <Navbar />
      </div>
    </>
  );
};

export default Layout;
