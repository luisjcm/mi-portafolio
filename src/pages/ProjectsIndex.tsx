import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import ProjectCard from '../components/ProjectCard';
import frontMatter from 'front-matter';

// Extraemos los proyectos de la misma forma eficiente
const mdFiles = import.meta.glob('../content/proyectos/*.md', { query: '?raw', eager: true });
const projects = Object.entries(mdFiles)
  .map(([path, module]: [string, any]) => {
    const slug = path.split('/').pop()?.replace('.md', '');
    const { attributes } = frontMatter(module.default);
    return { slug, ...(attributes as any) };
  })
  .sort((a, b) => {
    const orderA = a.order || 999;
    const orderB = b.order || 999;
    return orderA - orderB;
  });

export default function ProjectsIndex() {
  // Asegura que la página cargue siempre desde arriba
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="w-full max-w-[800px] mx-auto p-6 mt-20 md:mt-24 min-h-screen animate-page-enter">
      
      

      {/* Cabecera distintiva de la sección */}
      <header className="mb-10 relative">
        {/* Efecto de brillo sutil de fondo */}
        <div className="absolute -top-10 left-0 w-32 h-32 bg-brand-accent/10 blur-[50px] rounded-full pointer-events-none"></div>
        
        <h1 className="text-3xl md:text-4xl font-bold text-brand-text tracking-tight mb-3 relative z-10">
          Casos de Estudio
        </h1>
        <p className="text-brand-muted text-sm md:text-base leading-relaxed max-w-2xl relative z-10">
          Explora a fondo la arquitectura, los retos técnicos y las soluciones implementadas en mis proyectos más relevantes.
        </p>
      </header>

      {/* Grilla de Proyectos reutilizando tu componente */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {projects.map((project) => (
          <ProjectCard 
            key={project.slug}
            {...project}
          />
        ))}
      </div>
    </main>
  );
}