import React from 'react';
import stackData from '../content/stack.json';
import TechIcon from './TechIcon';

const StackTab: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {stackData.map((group, idx) => (
        <div 
          key={idx} 
          className={`bg-brand-bg/85 border border-brand-border/60 p-6 rounded-xl shadow-lg backdrop-blur-md hover:border-brand-border/80 transition-colors ${group.spanFull ? 'md:col-span-2' : ''}`}
        >
          <h3 className="text-brand-text font-semibold text-[14px] mb-4 flex items-center gap-2">
            <TechIcon name={group.icon} />
            {group.category}
          </h3>
          <div className="flex flex-wrap gap-2">
            {group.skills.map((tech) => (
              <span key={tech} className="px-3 py-1.5 bg-brand-surface-subtle border border-brand-border/50 rounded-md text-[12px] text-brand-muted">
                {tech}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default StackTab;