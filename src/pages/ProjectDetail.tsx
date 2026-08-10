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

  // Referencias para detección precisa en 2 ejes (X e Y)
  const touchStartCoords = useRef<{ x: number; y: number } | null>(null);
  const touchEndCoords = useRef<{ x: number; y: number } | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    setCurrentImageIndex(0);
  }, [slug]);

  const fileEntry = Object.entries(mdFiles).find(([path]) => 
    path.includes(`${slug}.md`)
  );

  if (!fileEntry) {
    return (
      <main className="w-full max-w-[800px] mx-auto p-6 mt-20 text-center min-h-screen animate-page-enter">
        <h1 className="text-xl font-bold text-white mb-3">Proyecto no encontrado</h1>
        <p className="text-xs text-zinc-400 mb-6">El caso de estudio que buscas no existe o fue movido.</p>
        <Link to="/" className="px-4 py-2 bg-white text-black font-semibold text-xs rounded-lg hover:bg-zinc-200 transition-colors">
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

  const changeImage = (direction: 'next' | 'prev', total: number) => {
    setCurrentImageIndex((prev) => 
      direction === 'next' ? (prev + 1) % total : (prev - 1 + total) % total
    );
  };

  // 1. Capturamos X e Y iniciales al tocar la pantalla
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartCoords.current = {
      x: e.targetTouches[0].clientX,
      y: e.targetTouches[0].clientY,
    };
    touchEndCoords.current = null;
  };

  // 2. Capturamos X e Y mientras se mueve el dedo
  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndCoords.current = {
      x: e.targetTouches[0].clientX,
      y: e.targetTouches[0].clientY,
    };
  };

  // 3. Evaluamos si el movimiento fue intencionalmente horizontal
  const handleTouchEnd = () => {
    if (!touchStartCoords.current || !touchEndCoords.current) {
      touchStartCoords.current = null;
      touchEndCoords.current = null;
      return;
    }

    const deltaX = touchStartCoords.current.x - touchEndCoords.current.x;
    const deltaY = touchStartCoords.current.y - touchEndCoords.current.y;
    const absX = Math.abs(deltaX);
    const absY = Math.abs(deltaY);

    // Condición: Movimiento horizontal mínimo de 60px Y predominancia horizontal sobre vertical
    const isHorizontalSwipe = absX > 60 && absX > absY * 1.6;

    if (isHorizontalSwipe && mainGallery.length > 1) {
      if (deltaX > 0) {
        changeImage('next', mainGallery.length); // Deslizar hacia la izquierda -> Siguiente
      } else {
        changeImage('prev', mainGallery.length); // Deslizar hacia la derecha -> Anterior
      }
    }

    touchStartCoords.current = null;
    touchEndCoords.current = null;
  };

  return (
    <main className="w-full max-w-[800px] min-w-0 mx-auto px-5 md:px-6 py-6 md:py-8 pb-28 md:pb-16 min-h-screen animate-page-enter">
      
      {/* BOTÓN VOLVER */}
      <div className="mb-6">
        <Link to="/" className="inline-flex items-center gap-2 text-xs font-medium text-zinc-400 hover:text-white transition-colors bg-zinc-900/60 border border-zinc-800 px-3 py-1.5 rounded-lg active:scale-95">
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg>
          Volver al Inicio
        </Link>
      </div>

      {/* CABECERA DEL PROYECTO */}
      <header className="mb-8">
        <h1 className="text-xl md:text-2xl font-bold text-white tracking-tight mb-3">
          {project.title}
        </h1>

        <p className="text-[13px] md:text-sm text-zinc-400 leading-relaxed max-w-2xl mb-5">
          {project.description}
        </p>

        <div className="flex flex-col sm:flex-row sm:items-center gap-3">
          {project.projectUrl && (
            <a 
              href={project.projectUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-4 py-2 bg-brand-primary hover:bg-brand-accent text-white font-semibold text-xs rounded-xl transition-all shadow-md shadow-brand-primary/20 active:scale-95 shrink-0 w-full sm:w-auto"
            >
              <span>Visitar Sitio en Vivo</span>
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
            </a>
          )}

          {project.techStack && project.techStack.length > 0 && (
            <div className="flex flex-wrap gap-1.5">
              {project.techStack.map((tech) => (
                <span key={tech} className="px-2.5 py-1 bg-zinc-900 border border-zinc-800/80 rounded-md text-[11px] text-zinc-300 font-medium">
                  {tech}
                </span>
              ))}
            </div>
          )}
        </div>
      </header>

      {/* MOCKUP VISOR DE IMÁGENES */}
      {subProjects.length === 0 && mainGallery.length > 0 && (
        <div className="w-full bg-zinc-950 border border-zinc-800 rounded-2xl overflow-hidden shadow-xl mb-10 relative select-none">
          
          {/* Barra de ventana estilo navegador */}
          <div className="h-9 bg-zinc-900/90 border-b border-zinc-800 px-3.5 flex items-center justify-between gap-2.5">
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
            
            <div className="text-[11px] text-zinc-500 font-mono shrink-0">
              {mainGallery.length > 1 ? `${currentImageIndex + 1}/${mainGallery.length}` : ''}
            </div>
          </div>
          
          {/* Contenedor de la Imagen con Gestos Calibrados */}
          <div 
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            className="relative w-full aspect-video md:aspect-[16/10] bg-zinc-950 overflow-hidden flex items-center justify-center group touch-pan-y"
          >
            <img 
              src={mainGallery[currentImageIndex]} 
              alt={`${project.title} - Captura ${currentImageIndex + 1}`} 
              className="w-full h-full object-cover object-top pointer-events-none transition-opacity duration-300"
              onError={(e) => { e.currentTarget.style.display = 'none'; }}
            />

            {/* Flechas de navegación (Siempre visibles en móvil para control directo) */}
            {mainGallery.length > 1 && (
              <>
                <button 
                  onClick={(e) => { e.stopPropagation(); changeImage('prev', mainGallery.length); }}
                  aria-label="Imagen anterior"
                  className="absolute left-2.5 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-zinc-950/85 border border-white/10 text-white flex items-center justify-center backdrop-blur-md opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-all cursor-pointer hover:bg-brand-primary active:scale-95 z-10 shadow-lg"
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="15 18 9 12 15 6"></polyline></svg>
                </button>

                <button 
                  onClick={(e) => { e.stopPropagation(); changeImage('next', mainGallery.length); }}
                  aria-label="Imagen siguiente"
                  className="absolute right-2.5 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-zinc-950/85 border border-white/10 text-white flex items-center justify-center backdrop-blur-md opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-all cursor-pointer hover:bg-brand-primary active:scale-95 z-10 shadow-lg"
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="9 18 15 12 9 6"></polyline></svg>
                </button>

                {/* Puntos de paginación (Dots) */}
                <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-zinc-950/85 backdrop-blur-md border border-white/10 max-w-[90%] overflow-x-auto">
                  {mainGallery.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCurrentImageIndex(idx)}
                      className={`h-1.5 rounded-full transition-all cursor-pointer ${
                        idx === currentImageIndex ? 'w-4 bg-brand-accent' : 'w-1.5 bg-zinc-600 hover:bg-zinc-400'
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

      {/* CONTENIDO MARKDOWN */}
      <div 
        className="prose prose-invert max-w-none text-zinc-300 text-[13px] md:text-sm leading-relaxed space-y-4
          [&>h2]:text-white [&>h2]:text-base md:[&>h2]:text-lg [&>h2]:font-bold [&>h2]:mt-7 [&>h2]:mb-2.5
          [&>h3]:text-zinc-200 [&>h3]:text-sm [&>h3]:font-semibold [&>h3]:mt-5 [&>h3]:mb-2
          [&>p]:text-zinc-300 [&>p]:leading-relaxed [&>p]:mb-3
          [&>ul]:list-disc [&>ul]:pl-5 [&>ul]:space-y-1.5 [&>li]:text-zinc-300
          [&>hr]:border-zinc-800/80 [&>hr]:my-6"
        dangerouslySetInnerHTML={{ __html: marked(body) as string }}
      />

    </main>
  );
}