import React, { useEffect, useState, useRef } from 'react';
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
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Referencias para detección de Swipe / Arrastre
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    setCurrentImageIndex(0);
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
    images?: string[];
  };

  const mainGallery = project.images || [project.imageUrl].filter(Boolean);
  const subProjects = project.subProjects || [];

  // Helper para cambiar imagen
  const changeImage = (direction: 'next' | 'prev', total: number) => {
    setCurrentImageIndex((prev) => 
      direction === 'next' ? (prev + 1) % total : (prev - 1 + total) % total
    );
  };

  // Manejo de Gestos Táctiles (Swipe)
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    const distance = touchStartX.current - touchEndX.current;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe && mainGallery.length > 1) {
      changeImage('next', mainGallery.length);
    }
    if (isRightSwipe && mainGallery.length > 1) {
      changeImage('prev', mainGallery.length);
    }

    touchStartX.current = null;
    touchEndX.current = null;
  };

  // Manejo de Arrastre con Mouse (Drag para Desktop)
  const handleMouseDown = (e: React.MouseEvent) => {
    touchStartX.current = e.clientX;
  };

  const handleMouseUp = (e: React.MouseEvent) => {
    if (!touchStartX.current) return;
    const distance = touchStartX.current - e.clientX;
    if (distance > 60 && mainGallery.length > 1) {
      changeImage('next', mainGallery.length);
    } else if (distance < -60 && mainGallery.length > 1) {
      changeImage('prev', mainGallery.length);
    }
    touchStartX.current = null;
  };

  return (
    <main className="w-full max-w-[800px] min-w-0 mx-auto px-5 md:px-6 py-6 md:py-10 pb-28 md:pb-16 min-h-screen animate-page-enter">
      
      {/* BOTÓN VOLVER */}
      <div className="mb-6">
        <Link to="/" className="inline-flex items-center gap-2 text-xs font-medium text-zinc-400 hover:text-white transition-colors bg-zinc-900/60 border border-zinc-800 px-3 py-1.5 rounded-lg active:scale-95">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg>
          Volver al Inicio
        </Link>
      </div>

      {/* CABECERA DEL PROYECTO */}
      <header className="mb-10">
        <h1 className="text-2xl md:text-4xl font-bold text-white tracking-tight mb-4">
          {project.title}
        </h1>

        <p className="text-[15px] md:text-lg text-zinc-400 leading-relaxed max-w-2xl mb-6">
          {project.description}
        </p>

        <div className="flex flex-col sm:flex-row sm:items-center gap-4">
          {project.projectUrl && (
            <a 
              href={project.projectUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-blue-600 hover:bg-blue-500 text-white font-semibold text-[13px] rounded-xl transition-all shadow-lg shadow-blue-600/20 active:scale-95 shrink-0 w-full sm:w-auto"
            >
              <span>Visitar Sitio en Vivo</span>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
            </a>
          )}

          {project.techStack && project.techStack.length > 0 && (
            <div className="flex flex-wrap gap-1.5">
              {project.techStack.map((tech) => (
                <span key={tech} className="px-2.5 py-1 bg-zinc-900 border border-zinc-800 rounded-md text-[11px] text-zinc-300 font-medium">
                  {tech}
                </span>
              ))}
            </div>
          )}
        </div>
      </header>

      {/* MOCKUP INTERACTIVO CON SOPORTE SWIPE */}
      {subProjects.length === 0 && mainGallery.length > 0 && (
        <div className="w-full bg-zinc-950 border border-zinc-800 rounded-2xl overflow-hidden shadow-2xl mb-12 relative select-none">
          
          {/* Barra de ventana estilo navegador (Alineación simétrica en móvil) */}
          <div className="h-10 bg-zinc-900/90 border-b border-zinc-800 px-3.5 flex items-center justify-between gap-2.5">
            <div className="flex items-center gap-1.5 shrink-0">
              <div className="w-2.5 h-2.5 rounded-full bg-zinc-700"></div>
              <div className="w-2.5 h-2.5 rounded-full bg-zinc-700"></div>
              <div className="w-2.5 h-2.5 rounded-full bg-zinc-700"></div>
            </div>
            
            {project.projectUrl && (
              <div className="flex-1 min-w-0 max-w-[240px] md:max-w-md bg-zinc-950/80 border border-zinc-800/80 rounded-md px-3 py-0.5 text-[11px] text-zinc-400 font-mono tracking-tight truncate text-center mx-auto">
                {project.projectUrl.replace(/^https?:\/\//, '')}
              </div>
            )}
            
            <div className="text-[11px] text-zinc-400 font-mono shrink-0">
              {mainGallery.length > 1 ? `${currentImageIndex + 1}/${mainGallery.length}` : ''}
            </div>
          </div>
          
          {/* Visor de Imágenes con Swipe / Drag */}
          <div 
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
            className="relative w-full aspect-video md:aspect-[16/10] bg-zinc-950 overflow-hidden flex items-center justify-center group cursor-grab active:cursor-grabbing"
          >
            <img 
              src={mainGallery[currentImageIndex]} 
              alt={`${project.title} - Captura ${currentImageIndex + 1}`} 
              className="w-full h-full object-cover object-top pointer-events-none transition-opacity duration-300"
              onError={(e) => { e.currentTarget.style.display = 'none'; }}
            />

            {/* Flechas de Navegación (Visibles siempre en móvil, hover en desktop) */}
            {mainGallery.length > 1 && (
              <>
                <button 
                  onClick={(e) => { e.stopPropagation(); changeImage('prev', mainGallery.length); }}
                  aria-label="Imagen anterior"
                  className="absolute left-2.5 top-1/2 -translate-y-1/2 w-8 h-8 md:w-9 md:h-9 rounded-full bg-zinc-950/80 border border-white/10 text-white flex items-center justify-center backdrop-blur-md opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-all cursor-pointer hover:bg-blue-600 active:scale-95 z-10"
                >
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="15 18 9 12 15 6"></polyline></svg>
                </button>

                <button 
                  onClick={(e) => { e.stopPropagation(); changeImage('next', mainGallery.length); }}
                  aria-label="Imagen siguiente"
                  className="absolute right-2.5 top-1/2 -translate-y-1/2 w-8 h-8 md:w-9 md:h-9 rounded-full bg-zinc-950/80 border border-white/10 text-white flex items-center justify-center backdrop-blur-md opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-all cursor-pointer hover:bg-blue-600 active:scale-95 z-10"
                >
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="9 18 15 12 9 6"></polyline></svg>
                </button>

                {/* Paginador por Puntos (Dots) */}
                <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-1.5 px-3 py-1 rounded-full bg-zinc-950/80 backdrop-blur-md border border-white/10 max-w-[90%] overflow-x-auto">
                  {mainGallery.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCurrentImageIndex(idx)}
                      className={`h-1.5 rounded-full transition-all cursor-pointer ${
                        idx === currentImageIndex ? 'w-4 bg-blue-500' : 'w-1.5 bg-zinc-600 hover:bg-zinc-400'
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
        className="prose prose-invert max-w-none text-zinc-300 text-[14px] md:text-[15px] leading-relaxed space-y-6
          [&>h2]:text-white [&>h2]:text-xl [&>h2]:font-bold [&>h2]:mt-8 [&>h2]:mb-3
          [&>h3]:text-zinc-100 [&>h3]:text-lg [&>h3]:font-semibold [&>h3]:mt-6 [&>h3]:mb-2
          [&>p]:text-zinc-300 [&>p]:leading-relaxed
          [&>ul]:list-disc [&>ul]:pl-5 [&>ul]:space-y-2 [&>li]:text-zinc-300
          [&>hr]:border-zinc-800 [&>hr]:my-8"
        dangerouslySetInnerHTML={{ __html: marked(body) as string }}
      />

    </main>
  );
}