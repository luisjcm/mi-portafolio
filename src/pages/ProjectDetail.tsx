import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import frontMatter from 'front-matter';
import { marked } from 'marked';

const mdFiles = import.meta.glob('../content/proyectos/*.md', { query: '?raw', eager: true });

// Interfaz para tipar los sub-proyectos dinámicos del Markdown
interface SubProject {
  id: string;
  title: string;
  client: string;
  description: string;
  tech: string[];
}

export default function ProjectDetail() {
  const { slug } = useParams<{ slug: string }>();
  const [activeSubId, setActiveSubId] = useState<string | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  const fileEntry = Object.entries(mdFiles).find(([path]) => 
    path.includes(`${slug}.md`)
  );

  if (!fileEntry) {
    return (
      <main className="w-full max-w-[800px] mx-auto p-6 mt-32 text-center min-h-screen animate-page-enter">
        <h1 className="text-2xl font-bold text-white mb-4">Proyecto no encontrado</h1>
        <p className="text-zinc-400 mb-6">El caso de estudio que buscas no existe o fue movido.</p>
        <Link to="/" className="px-5 py-2.5 bg-white text-black font-semibold text-[13px] rounded-lg hover:bg-zinc-200 transition-colors">
          Volver al Inicio
        </Link>
      </main>
    );
  }

  const [_, module] = fileEntry;
  const { attributes, body } = frontMatter((module as any).default);
  const project = attributes as { 
    title: string; 
    description: string; 
    techStack?: string[]; 
    wireframeType?: string;
    subProjects?: SubProject[];
  };

  // Si hay sub-proyectos, inicializamos el activo con el primero por defecto
  const subProjects = project.subProjects || [];
  const currentActiveId = activeSubId || (subProjects.length > 0 ? subProjects[0].id : null);
  const currentSub = subProjects.find(p => p.id === currentActiveId) || subProjects[0];

  return (
    <main className="w-full max-w-[800px] mx-auto p-6 mt-12 md:mt-20 min-h-screen animate-page-enter">
      
      <div className="mb-8">
        <Link to="/" className="inline-flex items-center gap-2 text-xs font-medium text-zinc-400 hover:text-white transition-colors bg-zinc-900/40 border border-zinc-800/80 px-3 py-1.5 rounded-lg">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg>
          Volver al Inicio
        </Link>
      </div>

      <header className="mb-10">
        <h1 className="text-3xl md:text-4xl font-bold text-white tracking-tight mb-4">
          {project.title}
        </h1>
        <p className="text-lg text-zinc-400 leading-relaxed max-w-2xl mb-6">
          {project.description}
        </p>

        {project.techStack && (
          <div className="flex flex-wrap gap-2">
            {project.techStack.map((tech) => (
              <span key={tech} className="px-3 py-1 bg-zinc-900/80 border border-zinc-800 rounded-md text-[12px] text-zinc-300 font-medium">
                {tech}
              </span>
            ))}
          </div>
        )}
      </header>

      {/* SI EL MARKDOWN TIENE SUB-PROYECTOS, RENDERIZAMOS LA GALERÍA DINÁMICAMENTE */}
      {subProjects.length > 0 && (
        <div className="mb-12">
          <div className="flex items-center justify-between mb-4 border-b border-zinc-800/80 pb-3">
            <h3 className="text-white font-bold text-sm tracking-wide uppercase text-zinc-300">Galería de Desarrollos</h3>
            <span className="text-xs text-zinc-500 font-mono">Clinmedia & Newe Marketing</span>
          </div>

          <div className="flex gap-2 overflow-x-auto pb-3 mb-4 scrollbar-hide">
            {subProjects.map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveSubId(item.id)}
                className={`px-4 py-2 rounded-lg text-xs font-medium transition-all whitespace-nowrap border ${
                  currentActiveId === item.id 
                    ? 'bg-zinc-800 text-white border-zinc-700 shadow-lg' 
                    : 'bg-zinc-900/40 text-zinc-400 border-zinc-800/60 hover:border-zinc-700 hover:text-zinc-200'
                }`}
              >
                {item.title}
              </button>
            ))}
          </div>

          {/* Wireframe / Visor dinámico */}
          {currentSub && (
            <div className="w-full bg-zinc-900 border border-zinc-800 rounded-xl overflow-hidden shadow-2xl mb-8">
              <div className="h-9 bg-zinc-950/80 border-b border-zinc-800/80 px-4 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-zinc-700"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-zinc-700"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-zinc-700"></div>
                </div>
                <div className="bg-zinc-900 border border-zinc-800/60 rounded-md px-12 py-1 text-[11px] text-zinc-500 font-mono tracking-tight">
                  https://{currentSub.id}.client-preview.dev
                </div>
                <div className="w-10"></div>
              </div>

              <div className="p-8 md:p-12 flex flex-col items-center justify-center text-center bg-gradient-to-b from-zinc-900/50 to-zinc-950 min-h-[260px]">
                <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 mb-4">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line></svg>
                </div>
                <h4 className="text-white font-bold text-lg mb-2">{currentSub.title}</h4>
                <p className="text-zinc-400 text-sm max-w-md mb-6">{currentSub.description}</p>
                <div className="flex flex-wrap justify-center gap-1.5">
                  {currentSub.tech.map(t => (
                    <span key={t} className="px-2.5 py-1 bg-zinc-800/80 border border-zinc-700/50 rounded text-[11px] text-zinc-300 font-medium">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      )}

      <div 
        className="prose prose-invert max-w-none text-zinc-300 text-[15px] leading-relaxed space-y-6
          [&>h2]:text-white [&>h2]:text-xl [&>h2]:font-bold [&>h2]:mt-8 [&>h2]:mb-4
          [&>p]:text-zinc-300 [&>ul]:list-disc [&>ul]:pl-5 [&>ul]:space-y-2 [&>li]:text-zinc-300
          [&>hr]:border-zinc-800 [&>hr]:my-8"
        dangerouslySetInnerHTML={{ __html: marked(body) as string }}
      />

    </main>
  );
}