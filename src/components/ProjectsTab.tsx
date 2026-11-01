import React, { useState } from 'react';
import ProjectCard from './ProjectCard';
import frontMatter from 'front-matter';
import { FaWordpress, FaReact, FaMobileAlt } from 'react-icons/fa';

const mdFiles = import.meta.glob('../content/proyectos/*.md', { query: '?raw', eager: true });
const projects = Object.entries(mdFiles).map(([path, module]: [string, any]) => {
  const slug = path.split('/').pop()?.replace('.md', '');
  const { attributes } = frontMatter(module.default);
  return { slug, ...(attributes as any) };
}).sort((a, b) => (a.order || 999) - (b.order || 999));

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

const ProjectsTab: React.FC = () => {
  const [selectedFolder, setSelectedFolder] = useState<string | null>(null);

  const categoryStats = projects.reduce<Record<string, number>>((stats, project) => {
    if (project.category) {
      stats[project.category] = (stats[project.category] || 0) + 1;
    }
    return stats;
  }, {});

  if (selectedFolder === null) {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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
            className="group flex h-full cursor-pointer flex-col rounded-xl border border-brand-border/40 bg-brand-bg/40 p-6 shadow-lg backdrop-blur-lg transition-all duration-500 ease-out hover:-translate-y-1 hover:border-brand-accent/50 hover:shadow-[0_0_20px_rgba(120,169,208,0.12)] focus-visible:outline-none focus-visible:border-brand-accent/50 focus-visible:shadow-[0_0_20px_rgba(120,169,208,0.12)]"
          >
            <div className="mb-4 flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-brand-surface/40 text-brand-accent border border-brand-border/40">
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
    );
  }

  return (
    <div>
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
        {projects.filter((project) => project.category === selectedFolder).map((project) => (
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
    </div>
  );
};

export default ProjectsTab;