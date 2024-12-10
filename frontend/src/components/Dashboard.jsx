import React from 'react'
import { Settings2 } from 'lucide-react';
import WelcomeCard from './EmployeeDashboard/WelcomeCard'
import StatisticsCard from './EmployeeDashboard/StatisticsCard'
import HolidaysCard from './EmployeeDashboard/HolidaysCard'
import AttendanceCard from './EmployeeDashboard/AttendenceCard'
import NotificationsCard from './EmployeeDashboard/NotificationsCard'
import ProjectsCard from './EmployeeDashboard/ProjectsCard'
import EmployeeCard from './EmployeeDashboard/EmployeeCard'
import PolicyCard from './EmployeeDashboard/PolicyCard'

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-6 lg:p-8 mt-10">
      <div className="max-w-7xl mx-auto space-y-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="space-y-6">
            <WelcomeCard  
              name="Darlee"
              meetings={4}
              imageUrl="https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=400&auto=format&fit=crop&q=60"
            />
            <StatisticsCard />
            <HolidaysCard />
          </div>
          <AttendanceCard />
        </div>
        <NotificationsCard />
        <ProjectsCard />
        <EmployeeCard />
        <PolicyCard />
        <button className="fixed bottom-6 right-6 bg-orange-400 p-3 rounded-full text-white shadow-lg hover:bg-orange-500 transition-colors">
          <Settings2 size={24} />
        </button>
      </div>
      
    </div>
  )
}

export default Dashboard
