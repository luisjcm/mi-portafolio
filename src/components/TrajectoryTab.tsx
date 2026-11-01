import React from 'react';
import trayectoriaData from '../content/trayectoria.json';

const TrajectoryTab: React.FC = () => {
  return (
    <div className="relative border-l border-brand-border ml-3 pl-8 py-2 space-y-10">
      {trayectoriaData.map((item) => (
        <div key={item.id} className="relative rounded-xl border border-brand-border/60 bg-brand-bg/85 p-5 shadow-lg backdrop-blur-md">
          <div className={`absolute -left-10 top-1.5 w-2.5 h-2.5 rounded-full ring-4 ring-brand-bg ${item.active ? 'bg-brand-accent' : 'bg-brand-surface-subtle'}`}></div>
          <h3 className="text-brand-text font-bold text-[15px]">{item.role}</h3>
          <p className={`${item.active ? 'text-brand-accent' : 'text-brand-muted'} text-[12px] font-medium mb-3`}>
            {item.company} • {item.period}
          </p>
          <ul className="flex flex-col gap-2.5 mt-3">
            {Array.isArray(item.description) ? (
              item.description.map((bullet, index) => {
                const colonIndex = bullet.indexOf(':');
                if (colonIndex !== -1) {
                  const title = bullet.substring(0, colonIndex);
                  const text = bullet.substring(colonIndex + 1);
                  return (
                    <li key={index} className="text-brand-muted text-[14px] leading-relaxed relative pl-4">
                      <span className="absolute left-0 top-2 w-1.5 h-1.5 bg-brand-border rounded-full"></span>
                      <strong className="text-brand-text font-medium">{title}:</strong>{text}
                    </li>
                  );
                }
                return (
                  <li key={index} className="text-brand-muted text-[14px] leading-relaxed relative pl-4">
                    <span className="absolute left-0 top-2 w-1.5 h-1.5 bg-brand-border rounded-full"></span>
                    {bullet}
                  </li>
                );
              })
            ) : (
              <p className="text-brand-muted text-[14px] leading-relaxed">
                {item.description}
              </p>
            )}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default TrajectoryTab;