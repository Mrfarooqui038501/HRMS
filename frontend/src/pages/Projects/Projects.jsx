import React, { useState } from 'react';

const ProjectPage = () => {
  // State to store projects
  const [projects, setProjects] = useState([
    {
      id: 1,
      name: 'Project Alpha',
      description: 'This is a description for Project Alpha.',
      leader: 'John Doe',
      team: ['Alice', 'Bob', 'Charlie'],
      status: 'Completed',
    },
    {
      id: 2,
      name: 'Project Beta',
      description: 'This is a description for Project Beta.',
      leader: 'Jane Smith',
      team: ['David', 'Eve', 'Frank'],
      status: 'Pending',
    },
  ]);

  // State for the new project form
  const [newProject, setNewProject] = useState({
    name: '',
    description: '',
    leader: '',
    team: '',
    status: 'Pending', // Default status for new project
  });

  const [isAddingProject, setIsAddingProject] = useState(false);
  
  // State for the filter
  const [projectFilter, setProjectFilter] = useState('All'); // Filter can be 'All', 'Completed', or 'Pending'

  // Handle changes in the form fields
  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewProject({
      ...newProject,
      [name]: value,
    });
  };

  // Handle form submission to add a new project
  const handleAddProject = () => {
    if (newProject.name && newProject.description && newProject.leader && newProject.team) {
      setProjects([
        ...projects,
        {
          id: projects.length + 1,
          name: newProject.name,
          description: newProject.description,
          leader: newProject.leader,
          team: newProject.team.split(',').map((member) => member.trim()),
          status: newProject.status, // Include status
        },
      ]);
      setNewProject({
        name: '',
        description: '',
        leader: '',
        team: '',
        status: 'Pending', // Reset status to Pending
      });
      setIsAddingProject(false); // Close the form after adding
    } else {
      alert('Please fill in all fields.');
    }
  };

  // Handle toggling the status of a project (Completed/Pending)
  const toggleStatus = (projectId) => {
    setProjects(projects.map((project) =>
      project.id === projectId
        ? { ...project, status: project.status === 'Completed' ? 'Pending' : 'Completed' }
        : project
    ));
  };

  // Calculate completed and pending projects
  const completedProjects = projects.filter((project) => project.status === 'Completed').length;
  const pendingProjects = projects.filter((project) => project.status === 'Pending').length;

  // Filter the projects based on the selected filter
  const filteredProjects = projectFilter === 'All'
    ? projects
    : projects.filter((project) => project.status === projectFilter);

  return (
    <div className="p-6 bg-gradient-to-r from-blue-50 to-indigo-100 min-h-screen mt-10">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Projects</h1>

      {/* Project Status Counts and Filter Buttons */}
      <div className="mb-6 flex gap-8">
        <div className="bg-indigo-600 text-white p-4 rounded-md shadow-md text-center">
          <h3 className="text-xl">Completed Projects</h3>
          <p className="text-2xl font-semibold">{completedProjects}</p>
        </div>
        <div className="bg-gray-600 text-white p-4 rounded-md shadow-md text-center">
          <h3 className="text-xl">Pending Projects</h3>
          <p className="text-2xl font-semibold">{pendingProjects}</p>
        </div>
      </div>

      {/* Filter Buttons */}
      <div className="mb-6 flex gap-6">
        <button
          onClick={() => setProjectFilter('All')}
          className={`px-6 py-3 rounded-md transition-colors duration-300 ${
            projectFilter === 'All' ? 'bg-indigo-600 text-white' : 'bg-gray-200 text-gray-800'
          }`}
        >
          All Projects
        </button>
        <button
          onClick={() => setProjectFilter('Completed')}
          className={`px-6 py-3 rounded-md transition-colors duration-300 ${
            projectFilter === 'Completed' ? 'bg-green-600 text-white' : 'bg-gray-200 text-gray-800'
          }`}
        >
          Completed Projects
        </button>
        <button
          onClick={() => setProjectFilter('Pending')}
          className={`px-6 py-3 rounded-md transition-colors duration-300 ${
            projectFilter === 'Pending' ? 'bg-yellow-600 text-white' : 'bg-gray-200 text-gray-800'
          }`}
        >
          Pending Projects
        </button>
      </div>

      {/* Add Project Button */}
      <div className="mb-6">
        <button
          onClick={() => setIsAddingProject(!isAddingProject)}
          className="px-6 py-3 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-colors duration-300 shadow-md"
        >
          {isAddingProject ? 'Cancel' : 'Add Project'}
        </button>
      </div>

      {/* Filtered Project Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProjects.map((project) => (
          <div
            key={project.id}
            className="bg-white p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105"
          >
            <h2 className="text-xl font-semibold text-gray-900 mb-2">{project.name}</h2>
            <p className="text-gray-600 mb-4">{project.description}</p>
            <div className="text-sm text-gray-500 mb-2">
              <strong>Project Leader:</strong> {project.leader}
            </div>
            <div className="text-sm text-gray-500 mb-2">
              <strong>Team:</strong> {project.team.join(', ')}
            </div>
            <div className="text-sm text-gray-500">
              <strong>Status:</strong>
              <span className={project.status === 'Completed' ? 'text-green-500' : 'text-yellow-500'}>
                {project.status}
              </span>
            </div>
            <button
              onClick={() => toggleStatus(project.id)}
              className="mt-4 px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-colors duration-300"
            >
              Toggle Status
            </button>
          </div>
        ))}
      </div>

      {/* Add Project Form */}
      {isAddingProject && (
        <div className="mt-8 p-8 bg-white rounded-lg shadow-lg max-w-2xl mx-auto">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">Add New Project</h2>
          
          <div className="space-y-4">
            <div>
              <label className="block text-gray-700 font-semibold" htmlFor="name">Project Name</label>
              <input
                type="text"
                name="name"
                id="name"
                value={newProject.name}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="Enter project name"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-semibold" htmlFor="description">Description</label>
              <textarea
                name="description"
                id="description"
                value={newProject.description}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="Enter project description"
                rows="4"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-semibold" htmlFor="leader">Project Leader</label>
              <input
                type="text"
                name="leader"
                id="leader"
                value={newProject.leader}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="Enter project leader name"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-semibold" htmlFor="team">Team (comma separated)</label>
              <input
                type="text"
                name="team"
                id="team"
                value={newProject.team}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="Enter team members"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-semibold" htmlFor="status">Project Status</label>
              <select
                name="status"
                id="status"
                value={newProject.status}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
              >
                <option value="Pending">Pending</option>
                <option value="Completed">Completed</option>
              </select>
            </div>
          </div>

          <div className="flex justify-end mt-6">
            <button
              onClick={handleAddProject}
              className="px-6 py-3 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-colors duration-300 shadow-md"
            >
              Add Project
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectPage;
