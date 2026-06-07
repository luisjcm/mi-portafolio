// src/components/ui/ProjectCard.tsx
import React from 'react';
import { ExternalLink } from 'lucide-react'; // Eliminamos Github, solo dejamos ExternalLink

interface ProjectProps {
  title: string;
  description: string;
  tags: string[];
  link?: string;
}

export const ProjectCard: React.FC<ProjectProps> = ({ title, description, tags, link }) => {
  return (
    <div className="group relative bg-zinc-900/30 border border-zinc-800/50 rounded-2xl p-6 hover:border-brand-primary/40 hover:bg-brand-surface transition-all duration-500 hover:shadow-brand-glow">
      <div className="flex justify-end mb-4">
        <div className="p-2 bg-brand-primary/10 rounded-lg group-hover:bg-brand-primary/20 transition-colors">
          <ExternalLink size={16} className="text-brand-primary" />
        </div>
      </div>
      
      <h3 className="text-lg font-bold text-zinc-100  transition-colors">
        {title}
      </h3>
      <p className="text-zinc-500 text-sm mt-2 leading-relaxed">
        {description}
      </p>
      
      <div className="flex flex-wrap gap-2 mt-6">
        {tags.map(tag => (
          <span 
            key={tag} 
            className="text-[10px] font-bold uppercase tracking-wider bg-zinc-800/50 text-zinc-400 border border-zinc-700/50 px-2.5 py-1 rounded-md group-hover:border-brand-primary/20 transition-colors"
          >
            {tag}
          </span>
        ))}
      </div>

      {link && (
        <a 
          href={link} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="absolute inset-0 z-10"
        />
      )}
    </div>
  );
};