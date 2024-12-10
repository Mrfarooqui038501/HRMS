import React, { useState } from 'react';
import { 
  PlusIcon, 
  CheckCircle2Icon, 
  CircleIcon, 
  TrashIcon 
} from 'lucide-react';

const Tasks = () => {
  const [tasks, setTasks] = useState({
    '2024-11-17': [
      { id: 1, text: 'Finish dashboard UI', completed: false },
      { id: 2, text: 'Prepare HRMS report', completed: false }
    ],
    '2024-11-18': [
      { id: 3, text: 'Team meeting at 10 AM', completed: false },
      { id: 4, text: 'Code review session', completed: false }
    ]
  });

  const [newTask, setNewTask] = useState('');
  const [selectedDate, setSelectedDate] = useState(new Date().toISOString().split('T')[0]);

  const toggleTaskCompletion = (date, taskId) => {
    setTasks(prevTasks => ({
      ...prevTasks,
      [date]: prevTasks[date].map(task => 
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    }));
  };

  const deleteTask = (date, taskId) => {
    setTasks(prevTasks => ({
      ...prevTasks,
      [date]: prevTasks[date].filter(task => task.id !== taskId)
    }));
  };

  const addTask = () => {
    if (!newTask.trim()) return;

    setTasks(prevTasks => ({
      ...prevTasks,
      [selectedDate]: [
        ...(prevTasks[selectedDate] || []),
        { 
          id: Date.now(), 
          text: newTask, 
          completed: false 
        }
      ]
    }));
    setNewTask('');
  };

  return (
    <div className="space-y-6 mt-10">
      <div className="bg-white shadow-sm rounded-lg p-6">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">
          My Tasks
        </h1>
        
        <div className="flex space-x-4 mb-6">
          <input 
            type="date" 
            value={selectedDate}
            onChange={(e) => setSelectedDate(e.target.value)}
            className="border rounded px-3 py-2"
          />
          <div className="flex-grow flex">
            <input 
              type="text" 
              value={newTask}
              onChange={(e) => setNewTask(e.target.value)}
              placeholder="Add a new task"
              className="flex-grow border rounded-l px-3 py-2"
            />
            <button 
              onClick={addTask}
              className="bg-blue-500 text-white px-4 py-2 rounded-r flex items-center"
            >
              <PlusIcon className="w-5 h-5 mr-2" />
              Add
            </button>
          </div>
        </div>

        {Object.keys(tasks).map((date) => (
          <div key={date} className="mb-6">
            <h2 className="text-xl font-semibold mb-4 text-gray-700">{date}</h2>
            {tasks[date].length === 0 ? (
              <p className="text-gray-500">No tasks for this day</p>
            ) : (
              <div className="space-y-3">
                {tasks[date].map((task) => (
                  <div 
                    key={task.id} 
                    className="flex items-center bg-white shadow rounded-lg p-4"
                  >
                    <button 
                      onClick={() => toggleTaskCompletion(date, task.id)}
                      className="mr-4"
                    >
                      {task.completed ? (
                        <CheckCircle2Icon className="w-6 h-6 text-green-500" />
                      ) : (
                        <CircleIcon className="w-6 h-6 text-gray-300" />
                      )}
                    </button>
                    <span 
                      className={`flex-grow ${
                        task.completed ? 'line-through text-gray-400' : 'text-gray-700'
                      }`}
                    >
                      {task.text}
                    </span>
                    <button 
                      onClick={() => deleteTask(date, task.id)}
                      className="text-red-500 hover:text-red-700"
                    >
                      <TrashIcon className="w-5 h-5" />
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tasks;