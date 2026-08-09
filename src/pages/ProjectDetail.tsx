import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import frontMatter from 'front-matter';
import { marked } from 'marked';

const mdFiles = import.meta.glob('../content/proyectos/*.md', { query: '?raw', eager: true });

interface SubProject {
  id: string;
  title: string;
  client: string;
  description: string;
  tech: string[];
  image?: string;
  gallery?: string[];
}

export default function ProjectDetail() {
  const { slug } = useParams<{ slug: string }>();
  const [activeSubId, setActiveSubId] = useState<string | null>(null);

  // Lógica para manejar el carrusel de imágenes
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  const fileEntry = Object.entries(mdFiles).find(([path]) => 
    path.includes(`${slug}.md`)
  );

  if (!fileEntry) {
    return (
      <main className="w-full max-w-[800px] mx-auto p-6 mt-32 text-center min-h-screen animate-page-enter">
        <h1 className="text-2xl font-bold text-white mb-4">Proyecto no encontrado</h1>
        <p className="text-zinc-400 mb-6">El caso de estudio que buscas no existe o fue movido.</p>
        <Link to="/" className="px-5 py-2.5 bg-white text-black font-semibold text-[13px] rounded-lg hover:bg-zinc-200 transition-colors">
          Volver al Inicio
        </Link>
      </main>
    );
  }

  const [_, module] = fileEntry;
  const { attributes, body } = frontMatter((module as any).default);
  const project = attributes as { 
    title: string; 
    description: string; 
    techStack?: string[]; 
    wireframeType?: string;
    subProjects?: SubProject[];
    projectUrl?: string; 
    imageUrl?: string;
    images?: string[]
  };

  // Función helper para cambiar imagen
  const changeImage = (direction: 'next' | 'prev', total: number) => {
    setCurrentImageIndex((prev) => 
      direction === 'next' ? (prev + 1) % total : (prev - 1 + total) % total
    );
  };

  // Definimos la galería principal (si es un proyecto simple)
  // Usamos un array de imágenes si existe, o el imageUrl original
  const mainGallery = project.images || [project.imageUrl].filter(Boolean);

  const subProjects = project.subProjects || [];
  const currentActiveId = activeSubId || (subProjects.length > 0 ? subProjects[0].id : null);
  const currentSub = subProjects.find(p => p.id === currentActiveId) || subProjects[0];

  return (
    <main className="w-full max-w-[800px] mx-auto p-6 mt-12 md:mt-20 min-h-screen animate-page-enter">
      
      <div className="mb-8">
        <Link to="/" className="inline-flex items-center gap-2 text-xs font-medium text-zinc-400 hover:text-white transition-colors bg-zinc-900/40 border border-zinc-800/80 px-3 py-1.5 rounded-lg">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg>
          Volver al Inicio
        </Link>
      </div>

      {/* HEADER MEJORADO Y ESPACIADO */}
      <header className="mb-12">
        <h1 className="text-3xl md:text-4xl font-bold text-white tracking-tight mb-5">
          {project.title}
        </h1>

        <p className="text-lg text-zinc-400 leading-relaxed max-w-2xl mb-8">
          {project.description}
        </p>

        <div className="flex flex-col md:flex-row md:items-center gap-5 md:gap-6">
          {project.projectUrl && (
            <a 
              href={project.projectUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-blue-600 hover:bg-blue-500 text-white font-semibold text-[13px] rounded-lg transition-all shadow-lg shadow-blue-600/20 active:scale-95 shrink-0 w-full md:w-auto"
            >
              <span>Visitar Sitio en Vivo</span>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
            </a>
          )}

          {project.projectUrl && project.techStack && (
            <div className="hidden md:block w-px h-8 bg-zinc-800"></div>
          )}

          {project.techStack && (
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech) => (
                <span key={tech} className="px-3 py-1.5 bg-zinc-900 border border-zinc-800/80 rounded-md text-[11px] text-zinc-300 font-medium">
                  {tech}
                </span>
              ))}
            </div>
          )}
        </div>
      </header>

     {subProjects.length === 0 && (project.imageUrl || (project.images && project.images.length > 0)) && (
        <div className="w-full bg-zinc-950 border border-zinc-800 rounded-xl overflow-hidden shadow-2xl mb-12 relative animate-page-enter">
          
          {/* Barra superior de la ventana (Estilo PC con URL simulada) */}
          <div className="h-9 bg-zinc-900 border-b border-zinc-800 px-4 flex items-center justify-between relative z-10">
            <div className="flex items-center gap-2">
              <div className="w-2.5 h-2.5 rounded-full bg-zinc-700"></div>
              <div className="w-2.5 h-2.5 rounded-full bg-zinc-700"></div>
              <div className="w-2.5 h-2.5 rounded-full bg-zinc-700"></div>
            </div>
            
            {project.projectUrl && (
              <div className="bg-zinc-950/80 border border-zinc-800/60 rounded-md px-6 py-1 text-[11px] text-zinc-400 font-mono tracking-tight truncate max-w-[200px] md:max-w-md">
                {project.projectUrl.replace(/^https?:\/\//, '')}
              </div>
            )}
            
            <div className="text-[11px] text-zinc-500 font-mono">
              {mainGallery.length > 1 ? `${currentImageIndex + 1} / ${mainGallery.length}` : ''}
            </div>
          </div>
          
          {/* Contenedor de la Imagen con Flechas de Navegación */}
          <div className="relative w-full aspect-video md:aspect-[16/10] bg-zinc-950 overflow-hidden flex items-center justify-center group">
            <img 
              src={mainGallery[currentImageIndex]} 
              alt={`${project.title} - Captura ${currentImageIndex + 1}`} 
              className="w-full h-full object-cover object-top transition-all duration-300"
              onError={(e) => { e.currentTarget.style.display = 'none'; }}
            />

            {/* Flechas del Carrusel (Solo aparecen si hay más de 1 imagen) */}
            {mainGallery.length > 1 && (
              <>
                <button 
                  onClick={(e) => { e.stopPropagation(); changeImage('prev', mainGallery.length); }}
                  aria-label="Imagen anterior"
                  className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-zinc-950/80 border border-white/10 text-white flex items-center justify-center backdrop-blur-md opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer hover:bg-zinc-900"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="15 18 9 12 15 6"></polyline></svg>
                </button>

                <button 
                  onClick={(e) => { e.stopPropagation(); changeImage('next', mainGallery.length); }}
                  aria-label="Imagen siguiente"
                  className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-zinc-950/80 border border-white/10 text-white flex items-center justify-center backdrop-blur-md opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer hover:bg-zinc-900"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="9 18 15 12 9 6"></polyline></svg>
                </button>

                {/* Indicadores de puntos (Dots) */}
                <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-zinc-950/80 backdrop-blur-md border border-white/10">
                  {mainGallery.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCurrentImageIndex(idx)}
                      className={`h-1.5 rounded-full transition-all cursor-pointer ${
                        idx === currentImageIndex ? 'w-5 bg-blue-500' : 'w-1.5 bg-zinc-600 hover:bg-zinc-400'
                      }`}
                      aria-label={`Ir a imagen ${idx + 1}`}
                    />
                  ))}
                </div>
              </>
            )}
          </div>
        </div>
      )}

      {/* CONTENIDO TEXTUAL MARKDOWN */}
      <div 
        className="prose prose-invert max-w-none text-zinc-300 text-[15px] leading-relaxed space-y-6
          [&>h2]:text-white [&>h2]:text-xl [&>h2]:font-bold [&>h2]:mt-8 [&>h2]:mb-4
          [&>p]:text-zinc-300 [&>ul]:list-disc [&>ul]:pl-5 [&>ul]:space-y-2 [&>li]:text-zinc-300
          [&>hr]:border-zinc-800 [&>hr]:my-8"
        dangerouslySetInnerHTML={{ __html: marked(body) as string }}
      />

    </main>
  );
}