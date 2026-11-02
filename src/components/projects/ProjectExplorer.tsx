// src/components/projects/ProjectExplorer.tsx
// Explorador de proyectos: muestra las categorías y, al elegir una, sus proyectos.
// Antes esta lógica estaba duplicada en Home y ProjectsIndex.
import { useMemo, useState } from 'react';
import ProjectCard from '../ProjectCard';
import CategoryCard from './CategoryCard';
import { getProjects } from '../../services/projects';

export default function ProjectExplorer({ className = '' }: { className?: string }) {
  const projects = getProjects();
  const [selectedFolder, setSelectedFolder] = useState<string | null>(null);

  // Cuántos proyectos hay por categoría
  const categoryStats = useMemo(
    () =>
      projects.reduce<Record<string, number>>((stats, project) => {
        if (project.category) stats[project.category] = (stats[project.category] || 0) + 1;
        return stats;
      }, {}),
    [projects],
  );

  // Vista 1: carpetas (categorías)
  if (selectedFolder === null) {
    return (
      <div className={`grid grid-cols-1 sm:grid-cols-2 gap-4 ${className}`}>
        {Object.entries(categoryStats).map(([category, count]) => (
          <CategoryCard key={category} category={category} count={count} onSelect={() => setSelectedFolder(category)} />
        ))}
      </div>
    );
  }

  // Vista 2: proyectos de la categoría elegida
  return (
    <div className={className}>
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
            <ProjectCard key={project.slug} {...project} />
          ))}
      </div>
    </div>
  );
}
