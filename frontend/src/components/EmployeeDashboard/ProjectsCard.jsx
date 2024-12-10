import React from 'react';
import { ChevronLeft, ChevronRight, Download, Eye } from 'lucide-react';

export default function ProjectsCard() {
  const projects = [
    {
      deadline: '10 Feb 2024',
      title: 'Office Management',
      description: 'Creating an online platform that enables various administrative tasks within an organization',
      totalTasks: 20,
      completedTasks: 15,
      leader: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&auto=format&fit=crop&q=60',
      leaderImage: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&auto=format&fit=crop&q=60',
      members: [
        'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&auto=format&fit=crop&q=60',
        'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=400&auto=format&fit=crop&q=60',
        'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=400&auto=format&fit=crop&q=60',
      ]
    },
    {
      deadline: '15 Feb 2024',
      title: 'Video Calling App',
      description: 'Design and developing a software application that enables users to make video calls over the internet.',
      totalTasks: 30,
      completedTasks: 12,
      leader: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&auto=format&fit=crop&q=60',
      leaderImage: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&auto=format&fit=crop&q=60',
      members: [
        'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=400&auto=format&fit=crop&q=60',
        'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=400&auto=format&fit=crop&q=60',
        'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&auto=format&fit=crop&q=60',
      ]
    }
  ];

  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold text-gray-800">On Going Projects</h2>
        <div className="flex gap-2">
          <button className="p-2 rounded-full hover:bg-gray-100">
            <ChevronLeft size={20} />
          </button>
          <button className="p-2 rounded-full hover:bg-gray-100">
            <ChevronRight size={20} />
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <div key={index} className="border rounded-xl p-4">
            <div className="flex items-center gap-2 text-red-500 text-sm mb-4">
              <span className="w-2 h-2 bg-red-500 rounded-full"></span>
              Deadline : {project.deadline}
            </div>
            
            <h3 className="text-lg font-semibold mb-2">{project.title}</h3>
            <p className="text-gray-600 text-sm mb-6">{project.description}</p>

            <div className="grid grid-cols-2 gap-4 bg-gray-50 rounded-lg p-4 mb-6">
              <div>
                <div className="text-2xl font-semibold">{project.totalTasks}</div>
                <div className="text-gray-600 text-sm">Total Tasks</div>
              </div>
              <div>
                <div className="text-2xl font-semibold">{project.completedTasks}</div>
                <div className="text-gray-600 text-sm">Total Completed</div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <span className="text-gray-600">Project Leader :</span>
                <img src={project.leaderImage} alt="leader" className="w-8 h-8 rounded-full" />
              </div>
              
              <div className="flex items-center gap-2">
                <span className="text-gray-600">Members :</span>
                <div className="flex -space-x-2">
                  {project.members.map((member, i) => (
                    <img key={i} src={member} alt="member" className="w-8 h-8 rounded-full border-2 border-white" />
                  ))}
                  <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center text-xs font-medium">
                    +{Math.floor(Math.random() * 10) + 1}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
