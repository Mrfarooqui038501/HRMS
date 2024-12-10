import React, { useState } from 'react';
import { 
  PlusIcon, 
  XIcon, 
  LayoutGridIcon, 
  EditIcon 
} from 'lucide-react';

const CustomDashboard = () => {
  const initialWidgets = [
    { id: 1, title: 'Attendance', value: '95%', bgColor: 'bg-blue-600' },
    { id: 2, title: 'Leaves', value: '2 left', bgColor: 'bg-green-600' },
  ];

  const [widgets, setWidgets] = useState(initialWidgets);
  const [isAddingWidget, setIsAddingWidget] = useState(false);
  const [newWidget, setNewWidget] = useState({ title: '', value: '', bgColor: 'bg-blue-600' });

  const removeWidget = (id) => {
    setWidgets((prev) => prev.filter((widget) => widget.id !== id));
  };

  const addWidget = () => {
    if (!newWidget.title || !newWidget.value) return;

    setWidgets(prev => [
      ...prev, 
      { 
        id: Date.now(), 
        ...newWidget 
      }
    ]);
    
    setNewWidget({ title: '', value: '', bgColor: 'bg-blue-600' });
    setIsAddingWidget(false);
  };

  const colorOptions = [
    'bg-blue-600', 
    'bg-green-600', 
    'bg-red-600', 
    'bg-yellow-600', 
    'bg-purple-600'
  ];

  return (
    <div className="space-y-6 mt-10">
      <div className="bg-white shadow-sm rounded-lg p-6">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold text-gray-800 flex items-center">
            <LayoutGridIcon className="mr-3 text-blue-600" />
            Custom Dashboard
          </h1>
          <button 
            onClick={() => setIsAddingWidget(!isAddingWidget)}
            className="
              bg-blue-500 
              text-white 
              px-4 
              py-2 
              rounded-lg 
              flex 
              items-center 
              hover:bg-blue-600 
              transition-colors
            "
          >
            {isAddingWidget ? <XIcon className="mr-2" /> : <PlusIcon className="mr-2" />}
            {isAddingWidget ? 'Cancel' : 'Add Widget'}
          </button>
        </div>

        {isAddingWidget && (
          <div className="bg-gray-50 p-4 rounded-lg mb-6">
            <div className="grid md:grid-cols-3 gap-4">
              <input 
                type="text"
                placeholder="Widget Title"
                value={newWidget.title}
                onChange={(e) => setNewWidget(prev => ({ ...prev, title: e.target.value }))}
                className="border rounded px-3 py-2"
              />
              <input 
                type="text"
                placeholder="Widget Value"
                value={newWidget.value}
                onChange={(e) => setNewWidget(prev => ({ ...prev, value: e.target.value }))}
                className="border rounded px-3 py-2"
              />
              <select 
                value={newWidget.bgColor}
                onChange={(e) => setNewWidget(prev => ({ ...prev, bgColor: e.target.value }))}
                className="border rounded px-3 py-2"
              >
                {colorOptions.map(color => (
                  <option key={color} value={color}>
                    {color.split('-')[1]} Widget
                  </option>
                ))}
              </select>
            </div>
            <button 
              onClick={addWidget}
              className="
                mt-4 
                bg-green-500 
                text-white 
                px-4 
                py-2 
                rounded-lg 
                hover:bg-green-600 
                transition-colors
              "
            >
              Create Widget
            </button>
          </div>
        )}

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {widgets.map((widget) => (
            <div 
              key={widget.id} 
              className={`
                ${widget.bgColor} 
                text-white 
                rounded-xl 
                shadow-lg 
                overflow-hidden 
                transform 
                transition-all 
                duration-300 
                hover:-translate-y-2 
                hover:shadow-2xl
                relative
              `}
            >
              <div className="p-6 mt-10">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-xl font-bold">{widget.title}</h3>
                  <button 
                    onClick={() => removeWidget(widget.id)}
                    className="
                      text-white 
                      hover:bg-white 
                      hover:bg-opacity-20 
                      rounded-full 
                      p-2
                      transition-colors
                    "
                  >
                    <XIcon className="w-5 h-5" />
                  </button>
                </div>
                <p className="text-3xl font-semibold">{widget.value}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CustomDashboard;