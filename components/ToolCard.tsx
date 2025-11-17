

import React from 'react';
import { Tool } from '../types';
import { useNavigation } from '../context/NavigationContext';

interface ToolCardProps {
  tool: Tool;
}

const colorVariants: { [key: string]: string } = {
  blue: 'bg-blue-100 text-blue-600',
  green: 'bg-green-100 text-green-600',
  purple: 'bg-purple-100 text-purple-600',
  orange: 'bg-orange-100 text-orange-600',
  sky: 'bg-sky-100 text-sky-600',
  teal: 'bg-teal-100 text-teal-600',
  lime: 'bg-lime-100 text-lime-600',
  red: 'bg-red-100 text-red-600',
  emerald: 'bg-emerald-100 text-emerald-600',
  indigo: 'bg-indigo-100 text-indigo-600',
  yellow: 'bg-yellow-100 text-yellow-600',
};

const ToolCard: React.FC<ToolCardProps> = ({ tool }) => {
  const { setSelectedTool } = useNavigation();
  const bgColorClass = colorVariants[tool.color] || 'bg-gray-100 text-gray-600';

  return (
    <button onClick={() => setSelectedTool(tool)} className="group block text-center p-6 bg-white rounded-xl shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 ease-in-out cursor-pointer w-full h-full">
      <div className="flex flex-col items-center space-y-4">
        <div className={`w-16 h-16 rounded-full flex items-center justify-center ${bgColorClass} transition-colors duration-300`}>
          {tool.icon}
        </div>
        <div className="space-y-1">
          <h3 className="text-lg font-bold text-gray-900">{tool.name}</h3>
          <p className="text-sm text-gray-600">{tool.description}</p>
        </div>
      </div>
    </button>
  );
};

export default ToolCard;
