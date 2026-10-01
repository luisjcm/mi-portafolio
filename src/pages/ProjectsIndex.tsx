import React, { useEffect, useMemo, useState } from 'react';
import ProjectCard from '../components/ProjectCard';
import frontMatter from 'front-matter';
import { FaWordpress, FaReact, FaMobileAlt } from 'react-icons/fa';

// Extraemos los proyectos
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

const CATEGORY_LABELS: Record<string, string> = {
  javascript: 'JavaScript y React',
  wordpress: 'WordPress',
  apps: 'Aplicaciones & MVP',
  python: 'Python / Data',
  java: 'Java / Backend',
};

const CATEGORY_ICONS: Record<string, React.ReactNode> = {
  javascript: <FaReact className="w-7 h-7" />,
  wordpress: <FaWordpress className="w-7 h-7" />,
  apps: <FaMobileAlt className="w-7 h-7" />
};

export default function ProjectsIndex() {
  // Estado para controlar si estamos viendo las carpetas o los proyectos de una carpeta
  const [selectedFolder, setSelectedFolder] = useState<string | null>(null);

  // Calculamos cuántos proyectos hay por categoría
  const categoryStats = useMemo(() => {
    return projects.reduce<Record<string, number>>((stats, project) => {
      if (project.category) {
        stats[project.category] = (stats[project.category] || 0) + 1;
      }
      return stats;
    }, {});
  }, []);

  // Asegura que la página cargue siempre desde arriba
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="w-full max-w-[800px] mx-auto p-6 mt-20 md:mt-24 min-h-screen animate-page-enter">
      
      {/* CABECERA ESTANDARIZADA */}
      <header className="flex flex-col gap-3 mb-10 md:mb-12 relative">
        {/* Efecto de brillo sutil de fondo */}
        <div className="absolute -top-10 left-0 w-32 h-32 bg-brand-accent/10 blur-[50px] rounded-full pointer-events-none"></div>
        
        <h1 className="text-3xl md:text-4xl font-bold text-brand-text tracking-tight m-0 relative z-10">
          Casos de Estudio
        </h1>
        <p className="text-[14px] md:text-lg text-brand-muted leading-relaxed max-w-2xl m-0 relative z-10">
          Explora a fondo la arquitectura, los retos técnicos y las soluciones implementadas en mis proyectos más relevantes.
        </p>
      </header>

      {/* RENDERIZADO CONDICIONAL: Carpetas vs Proyectos */}
      {selectedFolder === null ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 animate-fade-in">
          {Object.entries(categoryStats).map(([category, count]) => (
            <div
              key={category}
              role="button"
              tabIndex={0}
              onClick={() => setSelectedFolder(category)}
              onKeyDown={(event) => {
                if (event.key === 'Enter' || event.key === ' ') {
                  event.preventDefault();
                  setSelectedFolder(category);
                }
              }}
              className="group flex h-full cursor-pointer flex-col rounded-xl border border-brand-border/60 bg-brand-surface/20 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-brand-accent/50 hover:bg-brand-surface/40"
            >
              <div className="mb-4 flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-brand-surface-subtle text-brand-accent border border-brand-border/50">
                {CATEGORY_ICONS[category]}
              </div>
              <h3 className="mb-1 text-lg font-bold text-brand-text">
                {CATEGORY_LABELS[category] || `${category.charAt(0).toUpperCase()}${category.slice(1)}`}
              </h3>
              <p className="text-xs text-brand-muted">
                {count} {count === 1 ? 'Proyecto' : 'Proyectos'}
              </p>
              <div className="mt-auto flex items-center justify-between pt-4 text-[13px] font-medium text-brand-accent opacity-70 transition-opacity group-hover:opacity-100">
                <span>Explorar proyectos</span>
                <svg className="h-4 w-4 transform transition-transform group-hover:translate-x-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="animate-fade-in">
          <button
            onClick={() => setSelectedFolder(null)}
            className="flex items-center gap-2 text-brand-muted hover:text-brand-text mb-6 text-sm transition-colors"
          >
            <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              <path d="m15 18-6-6 6-6" />
              <path d="M9 12h12" />
            </svg>
            Volver a categorías
          </button>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {projects
              .filter((project) => project.category === selectedFolder)
              .map((project) => (
                <ProjectCard
                  key={project.slug}
                  {...project}
                />
            ))}
          </div>
        </div>
      )}
    </main>
  );
}