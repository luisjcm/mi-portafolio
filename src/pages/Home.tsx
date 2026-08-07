import React from 'react';
import ProjectCard from '../components/ProjectCard';
import frontMatter from 'front-matter';

// 1. Vite lee TODOS los archivos .md en crudo (raw) de forma síncrona (eager)
const mdFiles = import.meta.glob('../content/proyectos/*.md', { query: '?raw', eager: true });

// 2. Transformamos esos archivos en un arreglo de objetos para React
const projects = Object.entries(mdFiles).map(([path, module]) => {
  // Extraemos el nombre del archivo para usarlo como ruta (ej: crm-core-api.md -> crm-core-api)
  const slug = path.split('/').pop()?.replace('.md', '');
  
  // Extraemos las variables que pusiste entre los "---" en el archivo .md
  const { attributes } = frontMatter(module.default as string);

  return {
    slug,
    ...(attributes as any) // Título, descripción, techStack, etc.
  };
});

export default function Home() {
  return (
    <>
      

      {/* MAIN CONTENT */}
      <main className="w-full max-w-[800px] p-4 md:p-6 mt-16 px-6 mx-auto">
        
        {/* HERO INFO */}
        <section className="flex justify-between items-start w-full mb-6">
          <div className="flex flex-col gap-0.5 min-w-0">
            <h1 className="text-[20px] md:text-[24px] font-bold tracking-tight text-white leading-tight">
              Luis Jesus Curbata
            </h1>
            <div className="flex items-center gap-2 mt-1">
              <span className="text-[15px] text-zinc-500">luisjcm</span>
              <button className="group flex items-center gap-1.5 bg-blue-500/10 text-blue-400 text-[11px] px-2.5 py-0.5 rounded-full border border-blue-500/20 font-medium transition-all duration-300 ease-out hover:bg-blue-500/20 hover:border-blue-500/40 hover:scale-105 active:scale-95 active:bg-blue-500/30">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"> </span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                </span>
                Disponible para Proyectos
              </button>
            </div>
          </div>

          <div className="w-[70px] h-[70px] md:w-[84px] md:h-[84px] rounded-full border border-zinc-800 overflow-hidden bg-zinc-900 flex-shrink-0">
            <img src="/src/assets/perfil.jpg" alt="Luis Jesus" className="w-full h-full object-cover" />
          </div>
        </section>

        {/* BIO & DATA */}
        <section className="flex flex-col gap-1.5 mt-4 text-[14px]">
          <div className="flex items-center gap-3 text-zinc-200">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-zinc-500 flex-shrink-0"><circle cx="12" cy="12" r="10"/><path d="M2 12h20"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
            <p>Venezolano</p>
          </div>
          <div className="flex items-center gap-3 text-zinc-200">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-zinc-500 flex-shrink-0"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>
            <p>Ingeniero de Sistemas + Desarrollador Web Freelance</p>
          </div>
          <div className="flex items-start gap-3 text-zinc-200">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-zinc-500 flex-shrink-0 mt-1"><rect width="20" height="14" x="2" y="3" rx="2"/><line x2="2" x1="22" y2="20" y1="20"/></svg>
            <p className="leading-relaxed flex-1">
              Analista de HelpDesk y Soporte Técnico IT en Avior Airlines
            </p>
          </div>
          <div className="flex items-center gap-3 text-zinc-200">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-zinc-500 flex-shrink-0"><path d="m13 2-2 10h8l-2 10"/></svg>
            <p>Apasionado por crear experiencias web modernas y eficientes, mientras me encuentro en constante aprendizaje para mejorar mis habilidades.</p>
          </div>
          <div className="flex items-center gap-4 text-zinc-400 text-[13px] leading-relaxed ml-1 antialiased tracking-wide mt-1">
            <div className="flex items-center gap-2 group/loc transition-colors hover:text-zinc-300">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-zinc-500 group-hover/loc:text-blue-400 transition-colors"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
              <span>Barcelona, VZ • <span className="opacity-70">GMT-4</span></span>
            </div>
          </div>
        </section>

        {/* BUTTONS */}
        <div className="flex flex-col gap-6 mt-8">
          <div className="flex items-center gap-3">
            <a href="https://wa.me/584248887150?text=Hola%20Luis,%20vi%20tu%20portafolio%20y%20me%20gustaría%20contactarte" target="_blank" rel="noopener noreferrer" className="group relative flex-1 max-w-[180px] py-2.5 bg-white/5 border border-white/10 rounded-[10px] font-semibold text-white text-[13px] overflow-hidden transition-all duration-300 hover:border-blue-500/50 hover:bg-blue-500/5 text-center backdrop-blur-sm active:scale-95 no-underline">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-400/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
              <span className="relative flex items-center justify-center gap-2">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="text-blue-400"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                Contactar
              </span>
            </a>

            <button className="group flex-1 max-w-[150px] py-2.5 bg-zinc-900/50 border border-zinc-800 rounded-[10px] font-medium text-zinc-400 text-[10px] transition-all duration-300 hover:border-zinc-600 hover:bg-zinc-800 hover:text-white active:scale-95 flex items-center justify-center gap-2">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-zinc-500 group-hover:text-white transition-colors"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>
              <span>Descargar CV</span>
            </button>

            <div className="flex gap-2">
              <a href="https://linkedin.com/in/luisjcm" target="_blank" title="LinkedIn Profesional" rel="noopener noreferrer" className="p-2.5 bg-white/5 border border-white/10 rounded-[10px] text-zinc-400 hover:text-white hover:border-white/20 transition-all active:scale-90">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
              </a>
              <a href="https://github.com/luisjcm" target="_blank" title="GitHub Repositorios" rel="noopener noreferrer" className="p-2.5 bg-white/5 border border-white/10 rounded-[10px] text-zinc-400 hover:text-white hover:border-white/20 transition-all active:scale-90">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/></svg>
              </a>
            </div>
          </div>
        </div>

        {/* NAVIGATION TABS */}
        <nav className="flex w-full mt-8 border-b border-zinc-800">
          <button className="flex-1 pb-3 text-[12px] md:text-[15px] font-semibold text-white border-b border-white whitespace-nowrap">Proyectos</button>
          <button className="flex-1 pb-3 text-[12px] md:text-[15px] font-semibold text-zinc-500 hover:text-zinc-300 transition-colors whitespace-nowrap">Stack Técnico</button>
          <button className="flex-1 pb-3 text-[12px] md:text-[15px] font-semibold text-zinc-500 hover:text-zinc-300 transition-colors whitespace-nowrap">Trayectoria</button>
          <button className="flex-1 pb-3 text-[12px] md:text-[15px] font-semibold text-zinc-500 hover:text-zinc-300 transition-colors whitespace-nowrap">Formación</button>
        </nav>

        {/* CONTENT WRAPPER */}
        <div className="relative w-full mt-8 overflow-hidden">
          <div className="w-full px-2">
             {/* Grid de Proyectos Dinámico */}
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
                  />
                ))}
             </div>
          </div>
        </div>
      </main>

    </>
  );
}