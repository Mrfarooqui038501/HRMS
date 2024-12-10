import React, { useState } from 'react';
import { Paperclip, Send } from 'lucide-react';

const employees = [
  { id: 1, name: 'John Doe', avatar: 'J', messages: [
    { id: 1, sender: 'admin', text: 'Hello John, how can I assist you today?', timestamp: '10:00 AM' },
    { id: 2, sender: 'employee', text: 'I have a question about my leave request.', timestamp: '10:05 AM' },
  ]},
  { id: 2, name: 'Jane Smith', avatar: 'J', messages: [
    { id: 1, sender: 'admin', text: 'Hi Jane, how can I help you today?', timestamp: '9:30 AM' },
    { id: 2, sender: 'employee', text: 'I need clarification on my bonus calculation.', timestamp: '9:32 AM' },
  ]},
  { id: 3, name: 'Sam Wilson', avatar: 'S', messages: [
    { id: 1, sender: 'admin', text: 'Hello Sam, what can I do for you today?', timestamp: '11:00 AM' },
    { id: 2, sender: 'employee', text: 'Can you provide me with my salary slip for last month?', timestamp: '11:02 AM' },
  ]},
];

const ChatApp = () => {
  const [selectedEmployee, setSelectedEmployee] = useState(null); // To store selected employee
  const [newMessage, setNewMessage] = useState(''); // To handle new message input
  const [employeeMessages, setEmployeeMessages] = useState([]); // To handle the messages for the selected employee

  const handleSelectEmployee = (employee) => {
    setSelectedEmployee(employee);
    setEmployeeMessages(employee.messages); // Load the selected employee's messages
  };

  const handleSendMessage = () => {
    if (newMessage.trim() !== '' && selectedEmployee) {
      const updatedMessages = [
        ...employeeMessages,
        { id: employeeMessages.length + 1, sender: 'employee', text: newMessage, timestamp: new Date().toLocaleTimeString() },
      ];
      setEmployeeMessages(updatedMessages);
      setNewMessage('');
    }
  };

  return (
    <div className="flex h-screen bg-gray-100 mt-20">
      <div className="w-64 bg-white shadow-lg p-4">
        <h2 className="text-lg font-semibold text-gray-700 mb-4">Employees</h2>
        <div className="space-y-4">
          {employees.map((employee) => (
            <div
              key={employee.id}
              className="flex items-center cursor-pointer p-3 rounded-lg hover:bg-gray-100"
              onClick={() => handleSelectEmployee(employee)}
            >
              <div className="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center">
                <span className="text-xl font-bold">{employee.avatar}</span>
              </div>
              <div className="ml-3">
                <h3 className="text-md font-medium">{employee.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex-1 flex flex-col">
        {selectedEmployee ? (
          <>
            <div className="flex items-center justify-between bg-blue-600 text-white p-4 rounded-t-lg shadow-md">
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-gray-300 flex items-center justify-center">
                  <span className="font-bold text-lg">{selectedEmployee.avatar}</span>
                </div>
                <div className="ml-3">
                  <h3 className="text-xl font-semibold">{selectedEmployee.name}</h3>
                  <span className="text-sm">Online</span>
                </div>
              </div>
              <Paperclip className="w-6 h-6 text-white" />
            </div>

            {/* Chat Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50">
              {employeeMessages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex ${msg.sender === 'admin' ? 'justify-start' : 'justify-end'}`}
                >
                  <div
                    className={`max-w-xs px-4 py-2 rounded-lg shadow-md ${
                      msg.sender === 'admin' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800'
                    }`}
                  >
                    <p>{msg.text}</p>
                    <span className="text-xs text-gray-500">{msg.timestamp}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Message Input */}
            <div className="flex items-center p-4 bg-white border-t border-gray-200">
              <input
                type="text"
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()}
                className="flex-1 p-3 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Type your message..."
              />
              <button
                onClick={handleSendMessage}
                className="ml-3 bg-blue-600 text-white p-3 rounded-lg shadow-md hover:bg-blue-700 focus:outline-none"
              >
                <Send className="w-5 h-5" />
              </button>
            </div>
          </>
        ) : (
          <div className="flex items-center justify-center flex-1 text-gray-500">
            <h2 className="text-xl">Select an employee to start chatting</h2>
          </div>
        )}
      </div>
    </div>
  );
};

export default ChatApp;
