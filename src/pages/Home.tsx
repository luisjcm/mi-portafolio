import React, { useState, useEffect } from 'react';
import ProjectCard from '../components/ProjectCard';
import frontMatter from 'front-matter';
import { useToast } from '../context/ToastContext';

import stackData from '../content/stack.json';
import trayectoriaData from '../content/trayectoria.json';
import formacionData from '../content/formacion.json';

import TechIcon from '../components/TechIcon';



// Extraemos la data de los proyectos
const mdFiles = import.meta.glob('../content/proyectos/*.md', { query: '?raw', eager: true });
const projects = Object.entries(mdFiles).map(([path, module]: [string, any]) => {
  const slug = path.split('/').pop()?.replace('.md', '');
  const { attributes } = frontMatter(module.default);
  return { slug, ...(attributes as any) };
}
)
  .sort((a, b) => {
    // Le asignamos un valor alto (999) por defecto a los que no tengan 'order' 
    // para que se vayan al final, pero antes del 9999 si existiera.
    const orderA = a.order || 999;
    const orderB = b.order || 999;
    return orderA - orderB;
  });

export default function Home() {
  const [imageError, setImageError] = useState(false);
  const [activeTab, setActiveTab] = useState('Proyectos');

  const [slideDir, setSlideDir] = useState<'right' | 'left'>('right'); 
  const { showToast } = useToast();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const tabs = ['Proyectos', 'Stack Técnico', 'Trayectoria', 'Formación'];

  const handleTabChange = (newTab: string) => {
    const currentIndex = tabs.indexOf(activeTab);
    const newIndex = tabs.indexOf(newTab);

    // Si hace clic en la misma pestaña, no hacemos nada
    if (currentIndex === newIndex) return;

    if (newIndex > currentIndex) {
      setSlideDir('right'); // Navega hacia adelante (entra por la derecha)
    } else {
      setSlideDir('left'); // Navega hacia atrás (entra por la izquierda)
    }
    
    setActiveTab(newTab);
  };

  // --- RENDERIZADORES DE PESTAÑAS ---
  const renderProyectos = () => (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {projects.map((project) => (
        <ProjectCard 
          key={project.slug}
          title={project.title} 
          description={project.description}
          techStack={project.techStack || []}
          slug={project.slug}
          imageUrl={project.imageUrl}
          wireframeType={project.wireframeType}
          projectUrl={project.projectUrl}
          isNew={project.isNew} 
          badge={project.badge}
        />
      ))}
    </div>
  );

  const renderStack = () => (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {stackData.map((group, idx) => (
        <div 
          key={idx} 
          className={`bg-brand-surface/30 border border-brand-border/80 p-6 rounded-xl hover:border-brand-border/80 transition-colors ${group.spanFull ? 'md:col-span-2' : ''}`}
        >
          <h3 className="text-brand-text font-semibold text-[14px] mb-4 flex items-center gap-2">
            <TechIcon name={group.icon} />
            {group.category}
          </h3>
          <div className="flex flex-wrap gap-2">
            {group.skills.map((tech) => (
              <span key={tech} className="px-3 py-1.5 bg-brand-surface-subtle border border-brand-border/50 rounded-md text-[12px] text-brand-muted">
                {tech}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );

const renderTrayectoria = () => (
    <div className="relative border-l border-brand-border ml-3 pl-8 py-2 space-y-10">
      {trayectoriaData.map((item) => (
        <div key={item.id} className="relative">
          {/* Nodo del Timeline */}
          <div className={`absolute -left-10 top-1.5 w-2.5 h-2.5 rounded-full ring-4 ring-brand-bg ${item.active ? 'bg-brand-accent' : 'bg-brand-surface-subtle'}`}></div>
          
          {/* Título y Empresa */}
          <h3 className="text-brand-text font-bold text-[15px]">{item.role}</h3>
          <p className={`${item.active ? 'text-brand-accent' : 'text-brand-muted'} text-[12px] font-medium mb-3`}>
            {item.company} • {item.period}
          </p>
          
          {/* RENDERIZADO DINÁMICO DE BULLETS */}
          <ul className="flex flex-col gap-2.5 mt-3">
            {Array.isArray(item.description) ? (
              item.description.map((bullet, index) => {
                const colonIndex = bullet.indexOf(':');
                
                // Si el bullet tiene dos puntos ":", separamos para resaltar el título
                if (colonIndex !== -1) {
                  const title = bullet.substring(0, colonIndex);
                  const text = bullet.substring(colonIndex + 1);
                  return (
                    <li key={index} className="text-brand-muted text-[14px] leading-relaxed relative pl-4">
                      <span className="absolute left-0 top-2 w-1.5 h-1.5 bg-brand-border rounded-full"></span>
                      <strong className="text-brand-text font-medium">{title}:</strong>{text}
                    </li>
                  );
                }
                
                // Si es un bullet normal sin dos puntos
                return (
                  <li key={index} className="text-brand-muted text-[14px] leading-relaxed relative pl-4">
                    <span className="absolute left-0 top-2 w-1.5 h-1.5 bg-brand-border rounded-full"></span>
                    {bullet}
                  </li>
                );
              })
            ) : (
              // Fallback por si acaso algún dato sigue siendo un String simple
              <p className="text-brand-muted text-[14px] leading-relaxed">
                {item.description}
              </p>
            )}
          </ul>
          
        </div>
      ))}
    </div>
  );

const renderFormacion = () => (
    <div className="space-y-6">
      {formacionData.map((item) => (
        <div key={item.id} className="flex gap-4 p-4 md:p-5 rounded-xl border border-brand-border/60 bg-brand-surface/20 hover:bg-brand-surface-subtle transition-colors">
          
          {/* AQUÍ ESTÁ EL CAMBIO: Se eliminó 'hidden sm:flex' y se dejó solo 'flex' */}
          <div className={`flex mt-1 w-10 h-10 rounded-full items-center justify-center shrink-0 ${
            item.featured 
              ? 'bg-brand-accent/10 border border-brand-accent/20 text-brand-accent' 
              : 'bg-brand-surface-subtle border border-brand-border text-brand-muted'
          }`}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M22 10v6M2 10l10-5 10 5-10 5z"></path>
              <path d="M6 12v5c3 3 9 3 12 0v-5"></path>
            </svg>
          </div>

          <div>
            <h3 className="text-brand-text font-bold text-[15px]">{item.title}</h3>
            <p className="text-brand-muted text-[12px] font-medium mb-2">
              {item.institution} {item.date ? `• ${item.date}` : ''}
            </p>
            
            {/* RENDERIZADO DINÁMICO DE DESCRIPCIÓN (String o Array) */}
            {Array.isArray(item.description) ? (
              <ul className="flex flex-col gap-1.5 mt-3">
                {item.description.map((bullet: string, index: number) => {
                  const colonIndex = bullet.indexOf(':');
                  
                  // Si el bullet tiene dos puntos ":", resaltamos la primera parte
                  if (colonIndex !== -1) {
                    const title = bullet.substring(0, colonIndex);
                    const text = bullet.substring(colonIndex + 1);
                    return (
                      <li key={index} className="text-brand-muted text-[13px] leading-relaxed relative pl-4">
                        <span className="absolute left-0 top-2 w-1.5 h-1.5 bg-brand-border rounded-full"></span>
                        <strong className="text-brand-text font-medium">{title}:</strong>{text}
                      </li>
                    );
                  }
                  
                  // Bullet normal
                  return (
                    <li key={index} className="text-brand-muted text-[13px] leading-relaxed relative pl-4">
                      <span className="absolute left-0 top-2 w-1.5 h-1.5 bg-brand-border rounded-full"></span>
                      {bullet}
                    </li>
                  );
                })}
              </ul>
            ) : (
              item.description && (
                <p className="text-brand-muted text-[14px] leading-relaxed mt-2">
                  {item.description}
                </p>
              )
            )}
          </div>
        </div>
      ))}
    </div>
  );

 return (
    <main className="w-full max-w-[800px] mx-auto px-5 md:px-6 py-8 md:py-12 animate-page-enter">
      
      {/* SECCIÓN DE PERFIL */}
      <section className="mb-10 w-full">
        <div className="flex justify-between items-start mb-5 gap-3">
          <div className="flex-1 min-w-0">
            <h1 className="text-2xl md:text-[28px] font-bold text-brand-text mb-1.5 tracking-tight truncate">
              Luis Jesus Curbata
            </h1>
            <div className="flex flex-wrap items-center gap-2 text-[13px]">
              <span className="text-brand-muted font-medium">luisjcm</span>
              <span className="flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-brand-accent/10 border border-brand-accent/60 text-brand-accent text-[11px] font-medium">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-accent animate-pulse"></span>
                Disponible para Proyectos
              </span>
            </div>
          </div>
          
          {/* Avatar */}
          <div className="w-16 h-16 md:w-20 md:h-20 rounded-full overflow-hidden border border-brand-border bg-brand-surface shrink-0 flex items-center justify-center">
            {!imageError ? (
              <img 
                src="/assets/perfil.jpg" 
                alt="Luis Jesus Curbata" 
                className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-110"
                onError={() => setImageError(true)}
              />
            ) : (
              <div className="w-full h-full bg-brand-surface-subtle flex items-center justify-center text-brand-muted">
                <svg className="w-10 h-10 translate-y-1" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 12c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm0 2c-3.33 0-10 1.67-10 5v3h20v-3c0-3.33-6.67-5-10-5z" />
                </svg>
              </div>
            )}
          </div>
        </div>

        {/* Lista de detalles biográficos */}
        <div className="space-y-2 mb-6 text-[11px] md:text-xs text-brand-muted max-w-3xl font-normal leading-relaxed">
          <div className="flex items-center gap-2.5">
            <svg className="w-3.5 h-3.5 text-brand-muted shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>
            <span>Venezolano</span>
          </div>
          
          <div className="flex items-center gap-2.5">
            <svg className="w-3.5 h-3.5 text-brand-muted shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>
            <span>Ingeniero de Sistemas + Desarrollador Web Freelance</span>
          </div>

          <div className="flex items-center gap-2.5">
            <svg className="w-3.5 h-3.5 text-brand-muted shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line></svg>
            <span>Analista de HelpDesk y Soporte Técnico IT en Avior Airlines</span>
          </div>

          <div className="flex items-start gap-2.5">
            <svg className="w-3.5 h-3.5 text-brand-muted shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg>
            <span className="leading-snug">Centrado en el rendimiento y la experiencia de usuario, respaldado por años de experiencia en la resolución de problemas técnicos en un entorno corporativo.</span>
          </div>

          <div className="flex items-center gap-2.5">
            <svg className="w-3.5 h-3.5 text-brand-muted shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
            <span>Barcelona, VZ • GMT-4</span>
          </div>
        </div>

       <div className="flex flex-wrap items-center gap-1 w-full select-none">
                {/* Botón Contactar */}
                <a 
                  href="https://wa.me/584248887150?text=Hola%20Luis,%20vi%20tu%20portafolio%20y%20me%20gustar%C3%ADa%20contactarte"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative flex-1 min-w-[115px] max-w-[140px] py-2 md:py-2.5 bg-brand-surface-subtle border border-brand-border rounded-[10px] font-semibold text-brand-text text-[12px] md:text-[13px] overflow-hidden text-center active:scale-95 transition-all no-underline"
                >
                  {/* Rayo de luz usando brand-accent */}
                  <div className="absolute inset-0 bg-linear-to-r from-transparent via-brand-accent/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                  
                  <span className="relative flex items-center justify-center gap-2">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-3.5 h-3.5 md:w-4 md:h-4 text-brand-accent shrink-0">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                    </svg>
                    Contactar
                  </span>
                </a>

            {/* Botón Descargar CV */}
                <button
                  onClick={() => {
                    // 1. Mostramos la notificación verde
                    showToast("Descargando...", "success");
                    
                    // 2. Forzamos la descarga del archivo desde la carpeta public
                    const link = document.createElement('a');
                    link.href = '/CV_Luis_Curbata.pdf'; // Ruta absoluta a la carpeta public
                    link.download = 'CV_Luis_Curbata.pdf'; // Nombre con el que se guardará
                    document.body.appendChild(link);
                    link.click();
                    document.body.removeChild(link);
                  }}
                  className="group relative flex-1 min-w-[115px] max-w-[140px] py-2 md:py-2.5 bg-brand-surface-subtle border border-brand-border rounded-[10px] font-semibold text-brand-text text-[12px] md:text-[13px] overflow-hidden text-center active:scale-95 transition-all cursor-pointer"
                >
                  <div className="absolute inset-0 bg-linear-to-r from-transparent via-brand-accent/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                  
                  <span className="relative flex items-center justify-center gap-2">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-3.5 h-3.5 md:w-4 md:h-4 text-brand-accent shrink-0">
                      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                      <polyline points="14 2 14 8 20 8"></polyline>
                      <line x1="16" y1="13" x2="8" y2="13"></line>
                      <line x1="16" y1="17" x2="8" y2="17"></line>
                      <polyline points="10 9 9 9 8 9"></polyline>
                    </svg>
                    Descargar CV
                  </span>
                </button>

                {/* Icono LinkedIn */}
                <a
                  href="https://linkedin.com/in/luisjcm"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Perfil de LinkedIn"
                  className="group relative inline-flex items-center justify-center h-9 w-9 md:h-10 md:w-10 rounded-[10px] bg-brand-surface-subtle border border-brand-border text-brand-muted hover:text-brand-text transition-all active:scale-95 overflow-hidden shrink-0"
                >
                  <div className="absolute inset-0 bg-linear-to-r from-transparent via-brand-accent/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                  
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="relative w-3.5 h-3.5 md:w-4 md:h-4 text-brand-accent">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                    <rect x="2" y="9" width="4" height="12"></rect>
                    <circle cx="4" cy="4" r="2"></circle>
                  </svg>
                </a>

                {/* Icono GitHub */}
                <a
                  href="https://github.com/luisjcm"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Perfil de GitHub"
                  className="group relative inline-flex items-center justify-center h-9 w-9 md:h-10 md:w-10 rounded-[10px] bg-brand-surface-subtle border border-brand-border text-brand-muted hover:text-brand-text transition-all active:scale-95 overflow-hidden shrink-0"
                >
                  <div className="absolute inset-0 bg-linear-to-r from-transparent via-brand-accent/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                  
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="relative w-3.5 h-3.5 md:w-4 md:h-4 text-brand-accent">
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                  </svg>
                </a>
              </div>
      </section>

      {/* TABS DE NAVEGACIÓN */}
      <nav className="flex gap-6 border-b border-brand-border/80 mb-8 overflow-x-auto scrollbar-hide w-full">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => handleTabChange(tab)}
            className={`pb-4 text-[13px] font-medium transition-all relative whitespace-nowrap cursor-pointer shrink-0 ${
              activeTab === tab ? 'text-brand-text' : 'text-brand-muted hover:text-brand-muted'
            }`}
          >
            {tab}
            {activeTab === tab && (
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-brand-accent rounded-t-full"></span>
            )}
          </button>
        ))}
      </nav>

      {/* CONTENIDO DINÁMICO */}
      <div key={activeTab} className={`w-full ${slideDir === 'right' ? 'animate-slide-right' : 'animate-slide-left'}`}>
        {activeTab === 'Proyectos' && renderProyectos()}
        {activeTab === 'Stack Técnico' && renderStack()}
        {activeTab === 'Trayectoria' && renderTrayectoria()}
        {activeTab === 'Formación' && renderFormacion()}
      </div>

    </main>
  );
}