import React from 'react';
import { Link } from 'react-router-dom';

// Definimos la estructura de datos para TypeScript
interface ProjectCardProps {
  title: string;
  description: string;
  techStack: string[];
  slug: string;
  imageUrl?: string; // Propiedad opcional para la imagen
}

export default function ProjectCard({ title, description, techStack, slug, imageUrl }: ProjectCardProps) {
  return (
    <Link 
      to={`/proyectos/${slug}`} 
      className="group flex flex-col gap-3 p-5 bg-zinc-900/40 border border-zinc-800 rounded-xl transition-all duration-300 hover:border-blue-500/40 hover:bg-blue-500/5 active:scale-[0.98] no-underline"
    >

{/* Condicional: Solo se renderiza si pasas un imageUrl */}
      {imageUrl && (
        <div className="w-full h-40 mb-2 overflow-hidden rounded-lg border border-zinc-800/50 bg-zinc-900">
          <img 
            src={imageUrl} 
            alt={`Vista previa de ${title}`} 
            className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
          />
        </div>
      )}

      <div className="flex items-center gap-2">
        <span className="w-5 h-[1px] bg-blue-500/50 group-hover:bg-blue-500 transition-colors"></span>
        <h3 className="text-base font-bold text-zinc-100 group-hover:text-blue-400 transition-colors tracking-tight">
          {title}
        </h3>
      </div>
      
      <p className="text-[13px] text-zinc-400 leading-relaxed">
        {description}
      </p>
      
      <div className="flex flex-wrap gap-2 mt-1">
        {techStack.map((tech) => (
          <span 
            key={tech} 
            className="px-2 py-1 text-[10px] font-medium text-zinc-400 bg-zinc-800/30 border border-zinc-700/30 rounded shadow-sm"
          >
            {tech}
          </span>
        ))}
      </div>
    </Link>
  );
}