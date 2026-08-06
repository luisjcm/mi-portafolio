import React from 'react';
import { Link } from 'react-router-dom';

interface ProjectCardProps {
  title: string;
  description: string;
  techStack: string[];
  slug: string;
  imageUrl?: string;
  // Nueva propiedad para elegir el diseño del wireframe
  wireframeType?: 'terminal' | 'server' | 'dashboard';
}

export default function ProjectCard({ 
  title, 
  description, 
  techStack, 
  slug, 
  imageUrl,
  wireframeType = 'terminal' // Por defecto será la terminal
}: ProjectCardProps) {
  
  return (
    <Link 
      to={`/proyectos/${slug}`} 
      className="group flex flex-col gap-3 p-5 bg-zinc-900/40 border border-zinc-800 rounded-xl transition-all duration-300 hover:border-blue-500/40 hover:bg-blue-500/5 active:scale-[0.98] no-underline"
    >
      
      {/* RENDERIZADO VISUAL */}
      {imageUrl ? (
        <div className="w-full h-40 mb-2 overflow-hidden rounded-lg border border-zinc-800/50 bg-zinc-900 flex-shrink-0">
          <img 
            src={imageUrl} 
            alt={`Vista previa de ${title}`} 
            className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
          />
        </div>
      ) : (
        <div className="w-full h-40 mb-2 rounded-lg border border-zinc-800/50 bg-[#121212] p-4 flex flex-col relative overflow-hidden flex-shrink-0 transition-colors justify-center">
          {/* Selector de Wireframe */}
          {wireframeType === 'terminal' && <TerminalWireframe />}
          {wireframeType === 'server' && <ServerWireframe />}
          {wireframeType === 'dashboard' && <DashboardWireframe />}
          
          {/* Gradiente sutil de fondo unificado */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
        </div>
      )}

      {/* TEXTOS Y ETIQUETAS */}
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

// --- SUB-COMPONENTES DE WIREFRAMES (Lógica visual separada) ---

function TerminalWireframe() {
  return (
    <div className="w-full h-full flex flex-col justify-start relative z-10">
      <div className="flex gap-1.5 mb-4">
        <div className="w-2.5 h-2.5 rounded-full bg-zinc-800 group-hover:bg-red-500/70 transition-colors duration-300"></div>
        <div className="w-2.5 h-2.5 rounded-full bg-zinc-800 group-hover:bg-yellow-500/70 transition-colors duration-300 delay-75"></div>
        <div className="w-2.5 h-2.5 rounded-full bg-zinc-800 group-hover:bg-green-500/70 transition-colors duration-300 delay-150"></div>
      </div>
      <div className="space-y-2.5">
        <div className="w-3/4 h-1.5 bg-zinc-800/80 rounded-full group-hover:bg-blue-500/40 transition-colors duration-300"></div>
        <div className="w-1/2 h-1.5 bg-zinc-800/80 rounded-full group-hover:bg-blue-400/30 transition-colors duration-300 delay-75"></div>
        <div className="w-5/6 h-1.5 bg-zinc-800/80 rounded-full group-hover:bg-blue-300/20 transition-colors duration-300 delay-150"></div>
        <div className="w-1/3 h-1.5 bg-zinc-800/80 rounded-full mt-2 group-hover:bg-blue-500/40 transition-colors duration-300 delay-200"></div>
      </div>
    </div>
  );
}

function ServerWireframe() {
  return (
    <div className="w-full h-full flex flex-col gap-2 justify-center relative z-10">
      {[1, 2, 3].map((rack, i) => (
        <div key={rack} className="w-full h-8 border border-zinc-800/60 rounded bg-zinc-900/30 flex items-center px-3 gap-3 group-hover:border-zinc-700/80 transition-colors duration-500">
          {/* Luces de estado del servidor */}
          <div className="flex gap-1.5">
            <div className={`w-1.5 h-1.5 rounded-full bg-zinc-700 group-hover:bg-blue-500 transition-colors duration-300 ${i === 1 ? 'delay-75' : i === 2 ? 'delay-150' : ''}`}></div>
            <div className={`w-1.5 h-1.5 rounded-full bg-zinc-700 group-hover:bg-blue-400 transition-colors duration-300 ${i === 0 ? 'delay-100' : i === 2 ? 'delay-75' : ''}`}></div>
          </div>
          <div className="flex-1"></div>
          {/* Rejilla de ventilación / disco */}
          <div className="w-12 h-1.5 bg-zinc-800 group-hover:bg-zinc-600 rounded-full transition-colors duration-500"></div>
        </div>
      ))}
    </div>
  );
}

function DashboardWireframe() {
  return (
    <div className="w-full h-full flex items-end justify-between gap-1.5 relative z-10 px-1 pt-4">
      {/* Gráfica de barras que crece en hover */}
      <div className="w-full bg-zinc-800/50 rounded-t-sm h-1/4 group-hover:bg-blue-500/20 group-hover:h-2/5 transition-all duration-500 ease-out"></div>
      <div className="w-full bg-zinc-800/50 rounded-t-sm h-2/5 group-hover:bg-blue-500/30 group-hover:h-3/5 transition-all duration-500 ease-out delay-75"></div>
      <div className="w-full bg-zinc-800/50 rounded-t-sm h-1/5 group-hover:bg-blue-500/40 group-hover:h-1/2 transition-all duration-500 ease-out delay-150"></div>
      <div className="w-full bg-zinc-800/50 rounded-t-sm h-1/2 group-hover:bg-blue-500/60 group-hover:h-[80%] transition-all duration-500 ease-out delay-200"></div>
      <div className="w-full bg-zinc-800/50 rounded-t-sm h-1/3 group-hover:bg-blue-500/80 group-hover:h-full transition-all duration-500 ease-out delay-300"></div>
    </div>
  );
}