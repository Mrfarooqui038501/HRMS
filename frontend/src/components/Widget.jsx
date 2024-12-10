import React from 'react';
import { 
  TrendingUpIcon, 
  AlertCircleIcon 
} from 'lucide-react';

const Widget = ({ 
  title, 
  value, 
  description, 
  bgColor = 'bg-blue-600', 
  icon: Icon = TrendingUpIcon 
}) => {
  return (
    <div 
      className={`
        ${bgColor} 
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
      <div className="p-6 flex items-center">
        <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mr-4">
          <Icon className="w-8 h-8" />
        </div>
        <div>
          <h3 className="font-bold text-xl mb-2">{title}</h3>
          <p className="text-2xl font-semibold">{value}</p>
          <p className="text-sm opacity-80">{description}</p>
        </div>
      </div>
      <div className="absolute bottom-2 right-4 opacity-50">
        <AlertCircleIcon className="w-5 h-5" />
      </div>
    </div>
  );
};

export default Widget;