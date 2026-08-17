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
  isNew?: boolean; // <-- NUEVA PROP
  badge?: string;  // <-- NUEVA PROP
}

export default function ProjectCard({ 
  title, 
  description, 
  techStack = [], 
  slug, 
  imageUrl, 
  projectUrl,
  isNew,           // <-- RECIBIMOS LA PROP
  badge            // <-- RECIBIMOS LA PROP
}: ProjectCardProps) {
  return (
    <div className="group w-full min-w-0 bg-brand-bg border border-brand-border/80 rounded-2xl overflow-hidden hover:border-brand-border transition-all duration-300 flex flex-col justify-between shadow-xl relative">
      
      {/* VISTA PREVIA / IMAGEN */}
      <div className="w-full h-48 bg-brand-surface/60 border-b border-brand-border/80 overflow-hidden relative flex items-center justify-center">
        <Link to={`/proyectos/${slug}`} className="w-full h-full block">
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
            <div className="w-full h-full p-6 flex flex-col justify-center bg-linear-to-br from-brand-surface/80 to-brand-bg">
              <div className="flex items-center gap-1.5 mb-3">
                <div className="w-2 h-2 rounded-full bg-brand-surface-subtle"></div>
                <div className="w-2 h-2 rounded-full bg-brand-surface-subtle"></div>
              </div>
              <div className="space-y-2">
                <div className="w-3/4 h-2.5 bg-brand-surface-subtle rounded-full"></div>
                <div className="w-1/2 h-2.5 bg-brand-surface/60 rounded-full"></div>
              </div>
            </div>
          )}
        </Link>

        {/* Botón flotante externo fuera de cualquier otro <a> */}
        {projectUrl && (
          <a 
            href={projectUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            className="absolute top-3 right-3 z-10 px-3 py-1.5 bg-brand-surface/90 hover:bg-brand-surface hover:text-brand-text text-brand-text text-[11px] font-semibold rounded-lg border border-brand-border/80 backdrop-blur-md transition-all flex items-center gap-1.5 shadow-lg active:scale-95"
          >
            <span>Ver Sitio</span>
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
              <polyline points="15 3 21 3 21 9"></polyline>
              <line x1="10" y1="14" x2="21" y2="3"></line>
            </svg>
          </a>
        )}
      </div>

      {/* DETALLES */}
      <div className="p-6 flex flex-col grow justify-between min-w-0">
        <div className="min-w-0">
          
          {/* TÍTULO Y BADGE DINÁMICO */}
          <div className="flex items-start justify-between gap-3 mb-2">
            <Link to={`/proyectos/${slug}`} className="block min-w-0">
              <h3 className="text-brand-text font-bold text-xs group-hover:text-brand-accent transition-colors truncate">
                {title}
              </h3>
            </Link>
            
            {/* Lógica para renderizar el badge si isNew es true */}
            {isNew && (
              <span className="px-2 py-0.5 rounded-full bg-brand-accent/10 text-brand-accent border border-brand-accent/20 text-[10px] font-bold uppercase tracking-wider shrink-0 mt-0.5">
                {badge || 'Nuevo'}
              </span>
            )}
          </div>

          <p className="text-brand-muted text-xs leading-relaxed mb-6 line-clamp-2">
            {description}
          </p>
        </div>

        <div className="flex flex-wrap gap-1.5 min-w-0">
          {techStack.map((tech) => (
            <span key={tech} className="px-2.5 py-1 bg-brand-surface border border-brand-border/80 rounded-md text-[11px] text-brand-muted font-medium">
              {tech}
            </span>
          ))}
        </div>
      </div>

    </div>
  );
}