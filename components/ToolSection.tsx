
import React from 'react';
import { Tool } from '../types';
import ToolCard from './ToolCard';

interface ToolSectionProps {
  title: string;
  tools: Tool[];
}

const ToolSection: React.FC<ToolSectionProps> = ({ title, tools }) => {
  return (
    <section>
      <h2 className="text-3xl font-bold text-center mb-10">{title}</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
        {tools.map((tool) => (
          <ToolCard key={tool.name} tool={tool} />
        ))}
      </div>
    </section>
  );
};

export default ToolSection;
