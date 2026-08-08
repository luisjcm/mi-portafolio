import React from 'react';
import { Link } from 'react-router-dom';

interface ProjectCardProps {
  title: string;
  description: string;
  techStack: string[];
  slug: string;
  imageUrl?: string;
  wireframeType?: string;
  projectUrl?: string;
}

export default function ProjectCard({ title, description, techStack, slug, imageUrl, projectUrl }: ProjectCardProps) {
  return (
    <Link 
      to={`/proyectos/${slug}`}
      className="group bg-zinc-950 border border-zinc-800/80 rounded-2xl overflow-hidden hover:border-zinc-700 transition-all duration-300 flex flex-col justify-between shadow-xl relative"
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
          </div>
        )}

        {/* Botón flotante rápido para ver sitio si existe projectUrl */}
        {projectUrl && (
          <a 
            href={projectUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()} // Evita que abra el detalle del proyecto al hacer clic en el botón externo
            className="absolute top-3 right-3 px-3 py-1.5 bg-zinc-900/90 hover:bg-white hover:text-black text-white text-[11px] font-semibold rounded-lg border border-zinc-700/80 backdrop-blur-md transition-all flex items-center gap-1.5 shadow-lg"
          >
            <span>Ver Sitio</span>
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
          </a>
        )}
      </div>

      <div className="p-6 flex flex-col flex-grow justify-between">
        <div>
          <h3 className="text-white font-bold text-base mb-2 group-hover:text-blue-400 transition-colors flex items-center justify-between">
            {title}
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