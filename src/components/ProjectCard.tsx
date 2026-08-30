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
  isNew?: boolean; 
  badge?: string;  
}

export default function ProjectCard({ 
  title, 
  description, 
  techStack = [], 
  slug, 
  imageUrl, 
  wireframeType,
  projectUrl,
  isNew,           
  badge            
}: ProjectCardProps) {
  return (
    <div className="group w-full min-w-0 bg-brand-bg border border-brand-border/80 rounded-2xl overflow-hidden hover:border-brand-border transition-all duration-300 flex flex-col justify-between shadow-xl relative">
      
      {/* VISTA PREVIA / IMAGEN / WIREFRAME */}
      <div className="w-full h-48 bg-brand-surface/60 border-b border-brand-border/80 overflow-hidden relative flex items-center justify-center">
        <Link to={`/proyectos/${slug}`} className="w-full h-full block">
          
          {imageUrl && imageUrl.trim() !== "" ? (
            
            wireframeType === 'mobile' ? (
              /* --- DISEÑO MOCKUP ANDROID CENTRADO (SI HAY IMAGEN) --- */
              <div className="relative w-full h-full bg-linear-to-br from-[#18181b] to-[#050505] flex items-end justify-center overflow-hidden">
                 <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-brand-primary/15 blur-3xl rounded-full pointer-events-none"></div>
                 <div className="relative h-[120%] sm:h-[130%] aspect-[9/19.5] bg-[#09090b] rounded-t-[1.2rem] sm:rounded-t-[1.5rem] border-[3px] sm:border-[4px] border-b-0 border-[#18181b] shadow-[0_-10px_30px_rgba(0,0,0,0.8)] overflow-hidden transition-transform duration-500 group-hover:-translate-y-3">
                    <div className="absolute top-[20%] -right-[3px] sm:-right-[4px] w-[2px] h-6 sm:h-8 bg-[#27272a] rounded-l-md"></div>
                    <div className="absolute top-[32%] -right-[3px] sm:-right-[4px] w-[2px] h-4 sm:h-6 bg-[#27272a] rounded-l-md"></div>
                    <div className="absolute top-2 sm:top-2.5 inset-x-0 mx-auto w-2 h-2 sm:w-2.5 sm:h-2.5 bg-black rounded-full z-20 shadow-[inset_0_-1px_2px_rgba(255,255,255,0.15)] ring-1 ring-black/80"></div>
                    <div className="absolute top-1 inset-x-0 mx-auto w-5 sm:w-6 h-0.5 bg-[#18181b] rounded-full z-20"></div>
                    <div className="relative w-full h-full bg-black overflow-hidden rounded-t-[1rem] sm:rounded-t-[1.2rem]">
                      <img src={imageUrl} alt={title} className="w-full h-full object-fill object-top" loading="lazy" onError={(e) => { e.currentTarget.style.display = 'none'; }} />
                    </div>
                    <div className="absolute inset-0 bg-linear-to-tr from-transparent via-white/5 to-transparent opacity-20 pointer-events-none z-30"></div>
                 </div>
              </div>
            ) : (
              /* --- DISEÑO NORMAL PARA WEB (SI HAY IMAGEN) --- */
              <img src={imageUrl} alt={title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" onError={(e) => { e.currentTarget.style.display = 'none'; }} />
            )

          
           ) : (
            
            wireframeType === 'mobile' ? (
              /* --- WIREFRAME ANDROID PURO CSS (100% SÓLIDO) --- */
              <div className="relative w-full h-full bg-linear-to-br from-[#121214] to-[#09090b] flex items-end justify-center pt-8 overflow-hidden group-hover:bg-[#18181b] transition-colors duration-500">
                 
                 {/* Resplandor de fondo (Este sí necesita opacidad para brillar) */}
                 <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-brand-primary/20 blur-2xl rounded-full"></div>
                 
                 {/* Chasis Esqueleto */}
                 <div className="relative w-[160px] h-[240px] -mb-16 bg-[#050505] rounded-t-[1.5rem] border-[3px] border-b-0 border-brand-primary shadow-[0_-10px_30px_rgba(0,0,0,0.5)] flex flex-col items-center pt-3 px-4 transition-all duration-500 group-hover:-translate-y-2 group-hover:shadow-brand-primary/20">
                    
                    <div className="w-2.5 h-2.5 bg-[#27272a] rounded-full mb-6"></div>
                    
                    <div className="w-full flex flex-col gap-4">
                      {/* Icono de candado */}
                      <div className="flex flex-col items-center gap-3 mb-2">
                        <div className="w-12 h-12 bg-brand-surface/40 rounded-full flex items-center justify-center border border-brand-primary/50">
                          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="text-brand-primary"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
                        </div>
                        <div className="w-20 h-2.5 bg-brand-surface rounded-full"></div>
                      </div>

                      {/* Inputs Falsos */}
                      <div className="space-y-3">
                        <div className="w-full h-7 bg-brand-surface/30 border border-brand-primary/40 rounded-md"></div>
                        <div className="w-full h-7 bg-brand-surface/30 border border-brand-primary/40 rounded-md"></div>
                      </div>

                      {/* Botón Principal Falso (Fondo Sólido) */}
                      <div className="w-full h-9 bg-brand-primary border border-brand-primary/40 rounded-lg mt-1"></div>
                    </div>
                 </div>
              </div>
            ) : wireframeType === 'web' ? (
              
              /* --- WIREFRAME NAVEGADOR WEB PURO CSS (100% SÓLIDO) --- */
              <div className="relative w-full h-full bg-linear-to-br from-[#121214] to-[#09090b] flex items-center justify-center p-6 overflow-hidden group-hover:bg-[#18181b] transition-colors duration-500">
                 
                 {/* Resplandor de fondo */}
                 <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-brand-primary/20 blur-3xl rounded-full pointer-events-none"></div>
                 
                 {/* Chasis del Navegador */}
                 <div className="relative w-full max-w-[260px] h-full max-h-[140px] bg-[#050505] rounded-xl border-[2px] border-brand-primary shadow-2xl flex flex-col overflow-hidden transition-all duration-500 group-hover:-translate-y-1.5 group-hover:scale-[1.03] group-hover:shadow-brand-primary/20">
                    
                    {/* Barra superior */}
                    <div className="w-full h-6 bg-[#18181b] border-b border-brand-primary flex items-center px-3 gap-1.5 shrink-0">
                      <div className="w-2 h-2 rounded-full bg-[#3f3f46]"></div>
                      <div className="w-2 h-2 rounded-full bg-[#3f3f46]"></div>
                      <div className="w-2 h-2 rounded-full bg-[#3f3f46]"></div>
                    </div>
                    
                    {/* Contenido Web */}
                    <div className="p-3.5 flex flex-col gap-3 h-full">
                      {/* Hero Section */}
                      <div className="w-full h-12 bg-brand-surface/40 rounded-lg border border-brand-primary/40 flex flex-col items-center justify-center gap-2">
                         <div className="w-24 h-1.5 bg-brand-primary rounded-full"></div>
                         <div className="w-16 h-1.5 bg-brand-primary rounded-full"></div>
                      </div>
                      
                      {/* Grid de 3 columnas */}
                      <div className="grid grid-cols-3 gap-2.5 h-full">
                        <div className="w-full h-full bg-brand-surface/20 rounded-md border border-brand-primary/20"></div>
                        <div className="w-full h-full bg-brand-surface/20 rounded-md border border-brand-primary/20"></div>
                        <div className="w-full h-full bg-brand-surface/20 rounded-md border border-brand-primary/20"></div>
                      </div>
                    </div>
                 </div>
              </div>

            ) : (
              /* --- PLACEHOLDER GENÉRICO (POR DEFECTO) --- */
              <div className="w-full h-full p-6 flex flex-col justify-center bg-linear-to-br from-brand-surface/80 to-brand-bg group-hover:from-brand-surface transition-colors duration-500">
                <div className="flex items-center gap-1.5 mb-3">
                  <div className="w-2 h-2 rounded-full bg-brand-surface-subtle"></div>
                  <div className="w-2 h-2 rounded-full bg-brand-surface-subtle"></div>
                </div>
                <div className="space-y-2">
                  <div className="w-3/4 h-2.5 bg-brand-surface-subtle rounded-full"></div>
                  <div className="w-1/2 h-2.5 bg-brand-surface/60 rounded-full"></div>
                </div>
              </div>
            )
          )}
        </Link>

        {/* Botón flotante externo */}
        {projectUrl && (
          <a 
            href={projectUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            className="absolute top-3 right-3 z-10 px-3 py-1.5 bg-brand-surface/90 hover:bg-brand-surface hover:text-brand-text text-brand-text text-[11px] font-semibold rounded-lg border border-brand-border/80 backdrop-blur-md transition-all flex items-center gap-1.5 shadow-lg active:scale-95"
          >
            <span>Ver Sitio</span>
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
          </a>
        )}
      </div>

      {/* DETALLES */}
      <div className="p-6 flex flex-col grow justify-between min-w-0">
        <div className="min-w-0">
          <div className="flex items-start justify-between gap-3 mb-2">
            <Link to={`/proyectos/${slug}`} className="block min-w-0">
              <h3 className="text-brand-text font-bold text-xs group-hover:text-brand-accent transition-colors truncate">{title}</h3>
            </Link>
            {isNew && <span className="px-2 py-0.5 rounded-full bg-brand-accent/10 text-brand-accent border border-brand-accent/20 text-[10px] font-bold uppercase tracking-wider shrink-0 mt-0.5">{badge || 'Nuevo'}</span>}
          </div>
          <p className="text-brand-muted text-xs leading-relaxed mb-6 line-clamp-2">{description}</p>
        </div>
        <div className="flex flex-wrap gap-1.5 min-w-0">
          {techStack.map((tech) => <span key={tech} className="px-2.5 py-1 bg-brand-surface border border-brand-border/80 rounded-md text-[11px] text-brand-muted font-medium">{tech}</span>)}
        </div>
      </div>
    </div>
  );
}