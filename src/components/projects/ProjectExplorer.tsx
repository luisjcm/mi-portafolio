// src/components/projects/ProjectExplorer.tsx
// Explorador de proyectos: muestra las categorías y, al elegir una, sus proyectos.
// Ahora usa la URL (?categoria=...) para que el botón "Atrás" del navegador
// funcione correctamente y recuerde en qué carpeta estaba el usuario.
import { useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import ProjectCard from '../ProjectCard';
import CategoryCard from './CategoryCard';
import { getProjects } from '../../services/projects';

export default function ProjectExplorer({ className = '' }: { className?: string }) {
  const projects = getProjects();
  
  // 1. Reemplazamos el useState por los parámetros de la URL
  const [searchParams, setSearchParams] = useSearchParams();
  const selectedFolder = searchParams.get('categoria');

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
  if (!selectedFolder) {
    return (
      <div className={`grid grid-cols-1 sm:grid-cols-2 gap-4 ${className}`}>
        {Object.entries(categoryStats).map(([category, count]) => (
          <CategoryCard 
            key={category} 
            category={category} 
            count={count} 
            // 2. Al seleccionar, añadimos la categoría a la URL
            onSelect={() => setSearchParams({ categoria: category })} 
          />
        ))}
      </div>
    );
  }

  // Vista 2: proyectos de la categoría elegida
  return (
    <div className={className}>
      <button
        // 3. Al volver a categorías, limpiamos la URL
        onClick={() => setSearchParams({})}
        className="flex items-center gap-2 text-brand-muted hover:text-brand-text mb-6 text-sm transition-colors cursor-pointer"
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