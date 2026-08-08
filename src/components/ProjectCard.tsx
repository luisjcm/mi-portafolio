import React from 'react';
import { Link } from 'react-router-dom';

interface ProjectCardProps {
  title: string;
  description: string;
  techStack: string[];
  slug: string;
  imageUrl?: string;
  wireframeType?: string;
}

export default function ProjectCard({ title, description, techStack, slug, imageUrl }: ProjectCardProps) {
  return (
    <Link 
      to={`/proyectos/${slug}`}
      className="group bg-zinc-950 border border-zinc-800/80 rounded-2xl overflow-hidden hover:border-zinc-700 transition-all duration-300 flex flex-col justify-between shadow-xl"
    >
      <div className="w-full h-48 bg-zinc-900/60 border-b border-zinc-800/80 overflow-hidden relative flex items-center justify-center">
        {imageUrl && imageUrl.trim() !== "" ? (
          <img 
            src={imageUrl} 
            alt={title} 
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            onError={(e) => {
              e.currentTarget.style.display = 'none';
            }}
          />
        ) : (
          <div className="w-full h-full p-6 flex flex-col justify-center bg-gradient-to-br from-zinc-900/80 to-zinc-950">
            <div className="flex items-center gap-1.5 mb-3">
              <div className="w-2 h-2 rounded-full bg-zinc-700"></div>
              <div className="w-2 h-2 rounded-full bg-zinc-700"></div>
            </div>
            <div className="space-y-2">
              <div className="w-3/4 h-2.5 bg-zinc-800 rounded-full"></div>
              <div className="w-1/2 h-2.5 bg-zinc-800/60 rounded-full"></div>
            </div>
            <div className="absolute right-6 bottom-6 text-zinc-700 group-hover:text-blue-400 transition-colors">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="9 18 15 12 9 6"></polyline></svg>
            </div>
          </div>
        )}
      </div>

      <div className="p-6 flex flex-col flex-grow justify-between">
        <div>
          <h3 className="text-white font-bold text-base mb-2 group-hover:text-blue-400 transition-colors flex items-center justify-between">
            {title}
            <svg className="opacity-0 group-hover:opacity-100 transition-opacity transform -translate-x-2 group-hover:translate-x-0 duration-300" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
          </h3>
          <p className="text-zinc-400 text-sm leading-relaxed mb-6 line-clamp-2">
            {description}
          </p>
        </div>

        <div className="flex flex-wrap gap-1.5">
          {techStack.map((tech) => (
            <span key={tech} className="px-2.5 py-1 bg-zinc-900 border border-zinc-800/80 rounded-md text-[11px] text-zinc-300 font-medium">
              {tech}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
}