import React from 'react';
import formacionData from '../content/formacion.json';

const EducationTab: React.FC = () => {
  return (
    <div className="space-y-6">
      {formacionData.map((item) => (
        <div key={item.id} className="flex gap-4 p-4 md:p-5 rounded-xl border border-brand-border/60 bg-brand-bg/85 shadow-lg backdrop-blur-md hover:bg-brand-surface/90 transition-colors">
          <div className={`flex mt-1 w-10 h-10 rounded-full items-center justify-center shrink-0 ${
            item.featured 
              ? 'bg-brand-accent/10 border border-brand-accent/20 text-brand-accent' 
              : 'bg-brand-surface-subtle border border-brand-border text-brand-muted'
          }`}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M22 10v6M2 10l10-5 10 5-10 5z"></path>
              <path d="M6 12v5c3 3 9 3 12 0v-5"></path>
            </svg>
          </div>
          <div>
            <h3 className="text-brand-text font-bold text-[15px]">{item.title}</h3>
            <p className="text-brand-muted text-[12px] font-medium mb-2">
              {item.institution} {item.date ? `• ${item.date}` : ''}
            </p>
            {Array.isArray(item.description) ? (
              <ul className="flex flex-col gap-1.5 mt-3">
                {item.description.map((bullet: string, index: number) => {
                  const colonIndex = bullet.indexOf(':');
                  if (colonIndex !== -1) {
                    const title = bullet.substring(0, colonIndex);
                    const text = bullet.substring(colonIndex + 1);
                    return (
                      <li key={index} className="text-brand-muted text-[13px] leading-relaxed relative pl-4">
                        <span className="absolute left-0 top-2 w-1.5 h-1.5 bg-brand-border rounded-full"></span>
                        <strong className="text-brand-text font-medium">{title}:</strong>{text}
                      </li>
                    );
                  }
                  return (
                    <li key={index} className="text-brand-muted text-[13px] leading-relaxed relative pl-4">
                      <span className="absolute left-0 top-2 w-1.5 h-1.5 bg-brand-border rounded-full"></span>
                      {bullet}
                    </li>
                  );
                })}
              </ul>
            ) : (
              item.description && (
                <p className="text-brand-muted text-[14px] leading-relaxed mt-2">
                  {item.description}
                </p>
              )
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default EducationTab;