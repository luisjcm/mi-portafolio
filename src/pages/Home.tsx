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
});

export default function Home() {
  const [imageError, setImageError] = useState(false);

  const [activeTab, setActiveTab] = useState('Proyectos');
  const { showToast } = useToast();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const tabs = ['Proyectos', 'Stack Técnico', 'Trayectoria', 'Formación'];

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
        />
      ))}
    </div>
  );

 const renderStack = () => (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {stackData.map((group, idx) => (
        <div 
          key={idx} 
          className={`bg-zinc-900/30 border border-zinc-800/80 p-6 rounded-xl hover:border-zinc-700/80 transition-colors ${group.spanFull ? 'md:col-span-2' : ''}`}
        >
          <h3 className="text-white font-semibold text-[14px] mb-4 flex items-center gap-2">
            <TechIcon name={group.icon} />
            {group.category}
          </h3>
          <div className="flex flex-wrap gap-2">
            {group.skills.map(tech => (
              <span key={tech} className="px-3 py-1.5 bg-zinc-800/50 border border-zinc-700/50 rounded-md text-[12px] text-zinc-300">
                {tech}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );

  const renderTrayectoria = () => (
    <div className="relative border-l border-zinc-800 ml-3 pl-8 py-2 space-y-10">
      {trayectoriaData.map((item) => (
        <div key={item.id} className="relative">
          <div className={`absolute -left-9.25 top-1 w-2.75 h-2.75 rounded-full ring-4 ring-zinc-950 ${item.active ? 'bg-blue-500' : 'bg-zinc-700'}`}></div>
          <h3 className="text-white font-bold text-[15px]">{item.role}</h3>
          <p className={`${item.active ? 'text-blue-400' : 'text-zinc-500'} text-[12px] font-medium mb-3`}>
            {item.company} • {item.period}
          </p>
          <p className="text-zinc-400 text-[14px] leading-relaxed">
            {item.description}
          </p>
        </div>
      ))}
    </div>
  );

  const renderFormacion = () => (
    <div className="space-y-6">
      {formacionData.map((item) => (
        <div key={item.id} className="flex gap-4 p-5 rounded-xl border border-zinc-800/60 bg-zinc-900/20 hover:bg-zinc-900/40 transition-colors">
          <div className={`hidden sm:flex mt-1 w-10 h-10 rounded-full items-center justify-center shrink-0 ${
            item.featured 
              ? 'bg-blue-500/10 border border-blue-500/20 text-blue-400' 
              : 'bg-zinc-800 border border-zinc-700 text-zinc-400'
          }`}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M22 10v6M2 10l10-5 10 5-10 5z"></path>
              <path d="M6 12v5c3 3 9 3 12 0v-5"></path>
            </svg>
          </div>
          <div>
            <h3 className="text-white font-bold text-[15px]">{item.title}</h3>
            <p className="text-zinc-500 text-[12px] font-medium mb-2">
              {item.institution} {item.date ? `• ${item.date}` : ''}
            </p>
            {item.description && <p className="text-zinc-400 text-[14px]">{item.description}</p>}
            {item.items && (
              <ul className="text-zinc-400 text-[13px] list-disc ml-4 space-y-1">
                {item.items.map((subItem, sIdx) => (
                  <li key={sIdx}>{subItem}</li>
                ))}
              </ul>
            )}
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <main className="w-full max-w-200 p-4 md:p-6 mt-16 px-6 mx-auto animate-page-enter">
      
   {/* SECCIÓN DE PERFIL Y BOTONES */}
      <section className="mb-10">
        <div className="flex justify-between items-start mb-5">
          <div>
            <h1 className="text-2xl md:text-[28px] font-bold text-white mb-1.5 tracking-tight">
              Luis Jesus Curbata
            </h1>
            <div className="flex flex-wrap items-center gap-2.5 text-[13px]">
              <span className="text-zinc-400 font-medium">luisjcm</span>
              <span className="flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-[11px] font-medium">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse"></span>
                Disponible para Proyectos
              </span>
            </div>
          </div>
          
          {/* Avatar con hover de semi-ampliamiento */}
          <div className="w-16 h-16 md:w-20 md:h-20 rounded-full overflow-hidden border border-zinc-700 bg-zinc-900 shrink-0 group cursor-pointer flex items-center justify-center">
            {!imageError ? (
              <img 
                src="/assets/perfil.jpg" 
                alt="Luis Jesus Curbata" 
                className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-115"
                onError={() => setImageError(true)}
              />
            ) : (
              /* Wireframe silueta de usuario neutro (tipo Facebook/perfil por defecto) */
              <div className="w-full h-full bg-zinc-800 flex items-center justify-center text-zinc-500 group-hover:text-zinc-400 transition-colors">
                <svg 
                  className="w-10 h-10 md:w-12 md:h-12 translate-y-1" 
                  viewBox="0 0 24 24" 
                  fill="currentColor"
                >
                  <path d="M12 12c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm0 2c-3.33 0-10 1.67-10 5v3h20v-3c0-3.33-6.67-5-10-5z" />
                </svg>
              </div>
            )}
          </div>
        </div>

        {/* Lista de detalles biográficos */}
        <div className="space-y-2 mb-6 text-[13px] text-zinc-400 max-w-3xl font-normal leading-relaxed">
          <div className="flex items-center gap-2.5">
            <svg className="w-3.5 h-3.5 text-zinc-500 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>
            <span>Venezolano</span>
          </div>
          
          <div className="flex items-center gap-2.5">
            <svg className="w-3.5 h-3.5 text-zinc-500 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>
            <span>Ingeniero de Sistemas + Desarrollador Web Freelance</span>
          </div>

          <div className="flex items-center gap-2.5">
            <svg className="w-3.5 h-3.5 text-zinc-500 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line></svg>
            <span>Analista de HelpDesk y Soporte Técnico IT en Avior Airlines</span>
          </div>

          <div className="flex items-start gap-2.5">
            <svg className="w-3.5 h-3.5 text-zinc-500 shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg>
            <span className="leading-snug">Apasionado por crear experiencias web modernas y eficientes, mientras me encuentro en constante aprendizaje para mejorar mis habilidades</span>
          </div>

          <div className="flex items-center gap-2.5">
            <svg className="w-3.5 h-3.5 text-zinc-500 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
            <span>Barcelona, VZ • GMT-4</span>
          </div>
        </div>

        {/* Botonera de Acciones y Redes con efecto Shimmer uniforme */}
        <div className="flex flex-wrap items-center gap-2.5">
          {/* Botón Contactar */}
          <a 
            href="https://wa.me/584248887150?text=Hola%20Luis,%20vi%20tu%20portafolio%20y%20me%20gustar%C3%ADa%20contactarte"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex-1 max-w-40 py-2.5 bg-white/5 border border-white/10 rounded-[10px] font-semibold text-white text-[13px] overflow-hidden transition-all duration-300 hover:border-blue-500/50 hover:bg-blue-500/5 text-center backdrop-blur-sm active:scale-95 no-underline"
          >
            <div className="absolute inset-0 bg-linear-to-r from-transparent via-blue-400/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
            <span className="relative flex items-center justify-center gap-2">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="text-blue-400">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
              </svg>
              Contactar
            </span>
          </a>

          {/* Botón Descargar CV */}
          <button
            onClick={() => showToast("El currículum estará disponible pronto.", "warning")}
            className="group relative flex-1 max-w-40 py-2.5 bg-white/5 border border-white/10 rounded-[10px] font-semibold text-white text-[13px] overflow-hidden transition-all duration-300 hover:border-blue-500/50 hover:bg-blue-500/5 text-center backdrop-blur-sm active:scale-95 cursor-pointer"
          >
            <div className="absolute inset-0 bg-linear-to-r from-transparent via-blue-400/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
            <span className="relative flex items-center justify-center gap-2">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="text-blue-400">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                <polyline points="14 2 14 8 20 8"></polyline>
                <line x1="16" y1="13" x2="8" y2="13"></line>
                <line x1="16" y1="17" x2="8" y2="17"></line>
                <polyline points="10 9 9 9 8 9"></polyline>
              </svg>
              Descargar CV
            </span>
          </button>

          {/* Botón LinkedIn */}
          <a 
            href="https://linkedin.com/in/luis-jesus-curbata-marcano/" 
            target="_blank" 
            rel="noopener noreferrer" 
            aria-label="LinkedIn"
            className="group relative w-10.5 h-10.5 bg-white/5 border border-white/10 rounded-[10px] flex items-center justify-center overflow-hidden transition-all duration-300 hover:border-blue-500/50 hover:bg-blue-500/5 backdrop-blur-sm active:scale-95 shrink-0"
          >
            <div className="absolute inset-0 bg-linear-to-r from-transparent via-blue-400/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="relative text-zinc-400 group-hover:text-white transition-colors">
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
              <rect x="2" y="9" width="4" height="12"></rect>
              <circle cx="4" cy="4" r="2"></circle>
            </svg>
          </a>

          {/* Botón GitHub */}
          <a 
            href="https://github.com/luisjcm" 
            target="_blank" 
            rel="noopener noreferrer" 
            aria-label="GitHub"
            className="group relative w-10.5 h-10.5 bg-white/5 border border-white/10 rounded-[10px] flex items-center justify-center overflow-hidden transition-all duration-300 hover:border-blue-500/50 hover:bg-blue-500/5 backdrop-blur-sm active:scale-95 shrink-0"
          >
            <div className="absolute inset-0 bg-linear-to-r from-transparent via-blue-400/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="relative text-zinc-400 group-hover:text-white transition-colors">
              <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
            </svg>
          </a>
        </div>
      </section>

      {/* TABS DE NAVEGACIÓN */}
      <nav className="flex gap-6 border-b border-zinc-800/80 mb-8 overflow-x-auto scrollbar-hide">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`pb-4 text-[13px] font-medium transition-all relative whitespace-nowrap ${
              activeTab === tab ? 'text-white' : 'text-zinc-500 hover:text-zinc-300'
            }`}
          >
            {tab}
            {activeTab === tab && (
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-500 rounded-t-full"></span>
            )}
          </button>
        ))}
      </nav>

      {/* CONTENIDO DINÁMICO CON ANIMACIÓN SUAVE */}
      {/* El 'key' obliga a React a remontar el div y reiniciar la animación CSS */}
      <div key={activeTab} className="animate-page-enter" style={{ animationDuration: '0.5s' }}>
        {activeTab === 'Proyectos' && renderProyectos()}
        {activeTab === 'Stack Técnico' && renderStack()}
        {activeTab === 'Trayectoria' && renderTrayectoria()}
        {activeTab === 'Formación' && renderFormacion()}
      </div>

    </main>
  );
}