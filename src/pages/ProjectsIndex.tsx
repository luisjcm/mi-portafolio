import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import ProjectCard from '../components/ProjectCard';
import frontMatter from 'front-matter';

// Extraemos los proyectos de la misma forma eficiente
const mdFiles = import.meta.glob('../content/proyectos/*.md', { query: '?raw', eager: true });

const projects = Object.entries(mdFiles).map(([path, module]: [string, any]) => {
  const slug = path.split('/').pop()?.replace('.md', '');
  const { attributes } = frontMatter(module.default as string);
  return { slug, ...(attributes as any) };
});

export default function ProjectsIndex() {
  // Asegura que la página cargue siempre desde arriba
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="w-full max-w-[800px] mx-auto p-6 mt-20 md:mt-24 min-h-screen animate-page-enter">
      
      {/* Navegación de regreso */}
      <Link to="/" className="inline-flex items-center gap-2 text-[13px] text-zinc-500 hover:text-white transition-colors mb-10 group">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="group-hover:-translate-x-1 transition-transform">
          <line x1="19" y1="12" x2="5" y2="12"></line>
          <polyline points="12 19 5 12 12 5"></polyline>
        </svg>
        Volver al inicio
      </Link>

      {/* Cabecera distintiva de la sección */}
      <header className="mb-10 relative">
        {/* Efecto de brillo sutil de fondo */}
        <div className="absolute -top-10 left-0 w-32 h-32 bg-blue-500/10 blur-[50px] rounded-full pointer-events-none"></div>
        
        <h1 className="text-3xl md:text-4xl font-bold text-white tracking-tight mb-3 relative z-10">
          Casos de Estudio
        </h1>
        <p className="text-zinc-400 text-sm md:text-base leading-relaxed max-w-2xl relative z-10">
          Explora a fondo la arquitectura, los retos técnicos y las soluciones implementadas en mis proyectos más relevantes.
        </p>
      </header>

      {/* Grilla de Proyectos reutilizando tu componente */}
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
    </main>
  );
}