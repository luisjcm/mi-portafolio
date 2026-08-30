import React, { useEffect, useState, useRef } from 'react';
import { createPortal } from 'react-dom';
import { useParams, Link } from 'react-router-dom';
import frontMatter from 'front-matter';
import { marked } from 'marked';
import { LazyImage } from '../components/LazyImage'; // <-- Importación del componente

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

// --- MINI COMPONENTE: WIREFRAME ANDROID REUTILIZABLE ---
const MobileMockup = ({ src, isLightbox }: { src: string, isLightbox: boolean }) => {
  const sizeClasses = isLightbox 
    ? "h-[68vh] md:h-[82vh] aspect-[9/19.5] max-w-[85vw]" 
    : "w-[160px] sm:w-[190px] aspect-[9/19.5] hover:scale-[1.02] active:scale-95 cursor-zoom-in"; 

  return (
    <div className={`relative ${sizeClasses} bg-brand-bg rounded-[1.2rem] md:rounded-[1.5rem] border-[4px] md:border-[5px] border-brand-border shadow-2xl shadow-brand-bg/50 overflow-hidden ring-1 ring-brand-border/80 shrink-0 transition-transform duration-300 flex flex-col`}>
      
      {/* Botones laterales */}
      <div className="absolute top-[20%] -right-[4px] md:-right-[5px] w-[2px] md:w-[3px] h-8 md:h-10 bg-brand-border rounded-l-md"></div>
      <div className="absolute top-[32%] -right-[4px] md:-right-[5px] w-[2px] md:w-[3px] h-6 md:h-7 bg-brand-border rounded-l-md"></div>
      
      {/* Notch / Cámara frontal */}
      <div className="absolute top-1.5 md:top-2 inset-x-0 mx-auto w-2.5 h-2.5 md:w-3 md:h-3 bg-brand-bg rounded-full z-20 shadow-[inset_0_-1px_2px_var(--color-brand-accent)] opacity-80 ring-1 ring-brand-border/80"></div>
      <div className="absolute top-0.5 md:top-1 inset-x-0 mx-auto w-6 md:w-8 h-0.5 md:h-1 bg-brand-surface-subtle rounded-full z-20"></div>

      {/* Pantalla interna con Lazy Loading */}
      <LazyImage 
        src={src} 
        alt="Captura App" 
        className="object-fill" 
        wrapperClassName="relative w-full h-full bg-brand-bg overflow-hidden rounded-[1rem] md:rounded-[1.2rem]"
      />

      {/* Reflejo cristal */}
      {!isLightbox && (
        <div className="absolute inset-0 bg-linear-to-tr from-transparent via-white/5 to-transparent opacity-10 pointer-events-none z-30"></div>
      )}
    </div>
  );
};

export default function ProjectDetail() {
  const { slug } = useParams<{ slug: string }>();
  
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const carouselRef = useRef<HTMLDivElement>(null);
  const touchStartCoords = useRef<{ x: number; y: number } | null>(null);
  const touchEndCoords = useRef<{ x: number; y: number } | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    setCurrentImageIndex(0);
  }, [slug]);

  const fileEntry = Object.entries(mdFiles).find(([path]) => path.includes(`${slug}.md`));

  if (!fileEntry) {
    return (
      <main className="w-full max-w-[800px] mx-auto p-6 mt-20 text-center min-h-screen animate-page-enter">
        <h1 className="text-xl font-bold text-brand-text mb-3">Proyecto no encontrado</h1>
        <Link to="/" className="px-4 py-2 bg-brand-surface text-brand-text font-semibold text-xs rounded-lg hover:bg-brand-surface-subtle transition-colors">
          Volver al Inicio
        </Link>
      </main>
    );
  }

  const [_, module] = fileEntry;
  const { attributes, body } = frontMatter((module as any).default);
  const project = attributes as { 
    title: string; description: string; techStack?: string[]; wireframeType?: string; subProjects?: SubProject[]; projectUrl?: string; imageUrl?: string; images?: string[];
  };

  const mainGallery: string[] = project.images || (project.imageUrl ? [project.imageUrl] : []);

  const getNextIndex = (current: number, dir: 'next' | 'prev', total: number) => {
    return dir === 'next' ? (current + 1) % total : (current - 1 + total) % total;
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartCoords.current = { x: e.targetTouches[0].clientX, y: e.targetTouches[0].clientY };
    touchEndCoords.current = null;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndCoords.current = { x: e.targetTouches[0].clientX, y: e.targetTouches[0].clientY };
  };

  const handleTouchEnd = (isForLightbox = false) => {
    if (!touchStartCoords.current || !touchEndCoords.current) return;
    const deltaX = touchStartCoords.current.x - touchEndCoords.current.x;
    const deltaY = touchStartCoords.current.y - touchEndCoords.current.y;
    
    if (Math.abs(deltaX) > 60 && Math.abs(deltaX) > Math.abs(deltaY) * 1.6 && mainGallery.length > 1) {
      if (isForLightbox) {
        setLightboxIndex(prev => getNextIndex(prev, deltaX > 0 ? 'next' : 'prev', mainGallery.length));
      } else {
        setCurrentImageIndex(prev => getNextIndex(prev, deltaX > 0 ? 'next' : 'prev', mainGallery.length));
      }
    }
  };

  const scrollCarousel = (direction: 'left' | 'right') => {
    if (carouselRef.current) {
      const scrollAmount = direction === 'left' ? -220 : 220;
      carouselRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
    setIsLightboxOpen(true);
    document.body.style.overflow = 'hidden';
  };
  
  const closeLightbox = () => {
    setIsLightboxOpen(false);
    document.body.style.overflow = 'auto';
  };

  const lightboxModal = isLightboxOpen && createPortal(
    <div 
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-brand-bg/95 backdrop-blur-xl animate-fade-in touch-none"
      onClick={closeLightbox}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={() => handleTouchEnd(true)}
    >
      <button 
        onClick={closeLightbox}
        className="absolute top-4 left-4 md:top-6 md:left-6 z-[9999] inline-flex items-center gap-2 text-xs md:text-sm font-medium text-brand-text hover:text-brand-accent transition-colors bg-brand-surface/90 border border-brand-border px-4 py-2.5 rounded-xl active:scale-95 backdrop-blur-md shadow-xl cursor-pointer"
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg>
        Cerrar Galería
      </button>

      {mainGallery.length > 1 && (
        <button 
          onClick={(e) => { e.stopPropagation(); setLightboxIndex(prev => getNextIndex(prev, 'prev', mainGallery.length)); }} 
          className="absolute left-3 md:left-8 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 rounded-full bg-brand-surface/90 border border-brand-border text-brand-text flex items-center justify-center hover:bg-brand-surface hover:text-brand-accent z-[9995] transition-colors backdrop-blur-md cursor-pointer shadow-lg"
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="15 18 9 12 15 6"></polyline></svg>
        </button>
      )}

      <div className="relative flex items-center justify-center w-full h-full px-12 md:px-16" onClick={(e) => e.stopPropagation()}>
        {project.wireframeType === 'mobile' ? (
          <MobileMockup src={mainGallery[lightboxIndex]} isLightbox={true} />
        ) : (
          <LazyImage 
            src={mainGallery[lightboxIndex]} 
            alt="Vista Ampliada"
            className="object-contain" 
            wrapperClassName="w-auto h-auto max-w-full max-h-[85vh] rounded-md ring-1 ring-white/10 shadow-2xl bg-transparent"
          />
        )}
      </div>

      {mainGallery.length > 1 && (
        <button 
          onClick={(e) => { e.stopPropagation(); setLightboxIndex(prev => getNextIndex(prev, 'next', mainGallery.length)); }} 
          className="absolute right-3 md:right-8 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 rounded-full bg-brand-surface/90 border border-brand-border text-brand-text flex items-center justify-center hover:bg-brand-surface hover:text-brand-accent z-[9995] transition-colors backdrop-blur-md cursor-pointer shadow-lg"
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="9 18 15 12 9 6"></polyline></svg>
        </button>
      )}

      {mainGallery.length > 1 && (
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-[9999] text-brand-muted text-[11px] md:text-xs font-mono tracking-widest bg-brand-surface/90 border border-brand-border px-4 py-2 rounded-lg backdrop-blur-md">
          {lightboxIndex + 1} / {mainGallery.length}
        </div>
      )}
    </div>,
    document.body
  );

  return (
    <>
      <main className="w-full max-w-[900px] min-w-0 mx-auto px-5 md:px-6 py-6 md:py-8 pb-28 md:pb-16 min-h-screen animate-page-enter">
        
        <div className="mb-6">
          <Link to="/" className="inline-flex items-center gap-2 text-xs font-medium text-brand-muted hover:text-brand-text transition-colors bg-brand-surface/60 border border-brand-border px-3 py-1.5 rounded-lg active:scale-95">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg>
            Volver al Inicio
          </Link>
        </div>

        <header className="mb-8">
          <h1 className="text-xl md:text-2xl font-bold text-brand-text tracking-tight mb-3">{project.title}</h1>
          <p className="text-[13px] md:text-sm text-brand-muted leading-relaxed max-w-2xl mb-5">{project.description}</p>
          <div className="flex flex-col sm:flex-row sm:items-center gap-3">
            {project.projectUrl && (
              <a href={project.projectUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 px-4 py-2 bg-brand-primary hover:bg-brand-accent text-brand-text font-semibold text-xs rounded-xl transition-all shadow-md shadow-brand-primary/20 active:scale-95 shrink-0 w-full sm:w-auto">
                <span>Visitar Sitio en Vivo</span>
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
              </a>
            )}
            {project.techStack && (
              <div className="flex flex-wrap gap-1.5">
                {project.techStack.map(tech => <span key={tech} className="px-2.5 py-1 bg-brand-surface border border-brand-border/80 rounded-md text-[11px] text-brand-muted font-medium">{tech}</span>)}
              </div>
            )}
          </div>
        </header>

        <div className={project.wireframeType === 'mobile' ? 'grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start' : 'flex flex-col items-center'}>
          
          <div className={project.wireframeType === 'mobile' ? 'lg:col-span-5 min-w-0 w-full relative' : 'w-full max-w-[700px] mb-10'}>
            {mainGallery.length > 0 && (
              project.wireframeType === 'mobile' ? (
                
                <div className="relative group/carousel">
                  {mainGallery.length > 1 && (
                    <button onClick={() => scrollCarousel('left')} className="absolute left-0 top-1/2 -translate-y-1/2 z-20 w-8 h-8 rounded-full bg-brand-bg/90 border border-brand-border text-brand-text flex items-center justify-center shadow-lg hover:bg-brand-surface transition-colors cursor-pointer">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="15 18 9 12 15 6"></polyline></svg>
                    </button>
                  )}

                  <div ref={carouselRef} className="flex overflow-x-auto snap-x snap-mandatory gap-5 pb-6 pt-2 px-6 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden relative scroll-smooth">
                    {mainGallery.map((img, idx) => (
                      <div key={idx} className="shrink-0 snap-center flex justify-center" onClick={() => openLightbox(idx)}>
                        <MobileMockup src={img} isLightbox={false} />
                      </div>
                    ))}
                  </div>

                  {mainGallery.length > 1 && (
                    <button onClick={() => scrollCarousel('right')} className="absolute right-0 top-1/2 -translate-y-1/2 z-20 w-8 h-8 rounded-full bg-brand-bg/90 border border-brand-border text-brand-text flex items-center justify-center shadow-lg hover:bg-brand-surface transition-colors cursor-pointer">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="9 18 15 12 9 6"></polyline></svg>
                    </button>
                  )}
                </div>

              ) : (
                
                <div className="w-full bg-brand-bg border border-brand-border rounded-xl overflow-hidden shadow-xl mb-10 relative select-none">
                  <div className="h-7 md:h-8 bg-brand-surface/90 border-b border-brand-border px-3.5 flex items-center justify-between gap-2.5">
                    <div className="flex items-center gap-1.5 shrink-0">
                      <div className="w-2.5 h-2.5 rounded-full bg-brand-surface-subtle"></div><div className="w-2.5 h-2.5 rounded-full bg-brand-surface-subtle"></div><div className="w-2.5 h-2.5 rounded-full bg-brand-surface-subtle"></div>
                    </div>
                    {project.projectUrl && <div className="flex-1 min-w-0 max-w-[200px] md:max-w-xs bg-brand-bg/80 border border-brand-border/80 rounded-md px-2 py-0.5 text-[10px] md:text-[11px] text-brand-muted font-mono tracking-tight truncate text-center mx-auto">{project.projectUrl.replace(/^https?:\/\//, '')}</div>}
                    <div className="text-[10px] md:text-[11px] text-brand-muted font-mono shrink-0">{mainGallery.length > 1 ? `${currentImageIndex + 1}/${mainGallery.length}` : ''}</div>
                  </div>
                  
                  <div onTouchStart={handleTouchStart} onTouchMove={handleTouchMove} onTouchEnd={() => handleTouchEnd(false)} onClick={() => openLightbox(currentImageIndex)} className="relative w-full h-auto bg-brand-surface group touch-pan-y cursor-zoom-in">
                    
                    <LazyImage 
                      src={mainGallery[currentImageIndex]} 
                      alt="Captura web" 
                      className="block" 
                      wrapperClassName="w-full aspect-video" 
                    />
                    
                    {mainGallery.length > 1 && (
                      <>
                        <button onClick={(e) => { e.stopPropagation(); setCurrentImageIndex(prev => getNextIndex(prev, 'prev', mainGallery.length)); }} className="absolute left-2.5 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-brand-bg/85 border border-brand-border/20 text-brand-text flex items-center justify-center backdrop-blur-md opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-all hover:bg-brand-primary active:scale-95 z-10"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="15 18 9 12 15 6"></polyline></svg></button>
                        <button onClick={(e) => { e.stopPropagation(); setCurrentImageIndex(prev => getNextIndex(prev, 'next', mainGallery.length)); }} className="absolute right-2.5 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-brand-bg/85 border border-brand-border/20 text-brand-text flex items-center justify-center backdrop-blur-md opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-all hover:bg-brand-primary active:scale-95 z-10"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="9 18 15 12 9 6"></polyline></svg></button>
                      </>
                    )}
                  </div>
                </div>
              )
            )}
          </div>

          <div className={project.wireframeType === 'mobile' ? 'lg:col-span-7' : 'w-full'}>
            <div dangerouslySetInnerHTML={{ __html: marked(body) as string }} className="prose prose-invert max-w-none text-brand-muted text-[13px] md:text-sm leading-relaxed space-y-4 [&>h2]:text-brand-text [&>h2]:text-base md:[&>h2]:text-lg [&>h2]:font-bold [&>h2]:mt-7 [&>h2]:mb-2.5 [&>h2:first-child]:mt-0 [&>h3]:text-brand-muted [&>h3]:text-sm [&>h3]:font-semibold [&>h3]:mt-5 [&>h3]:mb-2 [&>h3:first-child]:mt-0 [&>p]:text-brand-muted [&>p]:leading-relaxed [&>p]:mb-3 [&>p:first-child]:mt-0 [&>ul]:list-disc [&>ul]:pl-5 [&>ul]:space-y-1.5 [&>li]:text-brand-muted [&>hr]:border-brand-border/80 [&>hr]:my-6" />
          </div>
        </div>
      </main>

      {lightboxModal}
    </>
  );
}