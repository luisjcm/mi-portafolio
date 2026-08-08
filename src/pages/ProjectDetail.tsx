import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import frontMatter from 'front-matter';
import { marked } from 'marked';

const mdFiles = import.meta.glob('../content/proyectos/*.md', { query: '?raw', eager: true });

interface SubProject {
  id: string;
  title: string;
  client: string;
  description: string;
  tech: string[];
  image?: string;
  gallery?: string[];
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

          {currentSub && (
            <div className="space-y-4">
              <div className="w-full bg-zinc-900 border border-zinc-800 rounded-xl overflow-hidden shadow-2xl relative">
                <div className="h-9 bg-zinc-950/90 border-b border-zinc-800/80 px-4 flex items-center justify-between relative z-10">
                  <div className="flex items-center gap-2">
                    <div className="w-2.5 h-2.5 rounded-full bg-zinc-700"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-zinc-700"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-zinc-700"></div>
                  </div>
                  <div className="bg-zinc-900 border border-zinc-800/60 rounded-md px-8 py-1 text-[11px] text-zinc-400 font-mono tracking-tight">
                    https://{currentSub.id}.client-preview.dev
                  </div>
                  <div className="w-10"></div>
                </div>

                <div className="relative w-full h-[320px] md:h-[380px] bg-zinc-950 flex flex-col justify-end p-6 md:p-8 overflow-hidden group">
                  {currentSub.image && currentSub.image.trim() !== "" ? (
                    <>
                      <img 
                        src={currentSub.image} 
                        alt={currentSub.title} 
                        className="absolute inset-0 w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                        onError={(e) => { e.currentTarget.style.display = 'none'; }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/60 to-transparent"></div>
                    </>
                  ) : (
                    <div className="absolute inset-0 bg-gradient-to-b from-zinc-900/40 to-zinc-950"></div>
                  )}

                  <div className="relative z-10">
                    <span className="inline-block px-2.5 py-1 bg-blue-500/20 border border-blue-500/30 text-blue-400 text-[11px] font-semibold rounded-md mb-2 backdrop-blur-md">
                      {currentSub.client}
                    </span>
                    <h4 className="text-white font-bold text-xl md:text-2xl mb-1 drop-shadow-md">{currentSub.title}</h4>
                    <p className="text-zinc-300 text-xs md:text-sm max-w-xl mb-4 drop-shadow">{currentSub.description}</p>
                    
                    <div className="flex flex-wrap gap-1.5">
                      {currentSub.tech.map(t => (
                        <span key={t} className="px-2.5 py-1 bg-zinc-900/80 backdrop-blur-md border border-zinc-700/50 rounded text-[11px] text-zinc-200 font-medium">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {currentSub.gallery && currentSub.gallery.length > 0 && (
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-400 mb-3">Capturas Adicionales de la Plataforma</h4>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                    {currentSub.gallery.map((imgUrl, index) => (
                      <div key={index} className="h-28 bg-zinc-900 border border-zinc-800 rounded-lg overflow-hidden relative group/thumb">
                        <img 
                          src={imgUrl} 
                          alt={`Captura ${index + 1}`} 
                          className="w-full h-full object-cover group-hover/thumb:scale-105 transition-transform duration-300"
                          onError={(e) => {
                            e.currentTarget.style.display = 'none';
                          }}
                        />
                        <div className="absolute inset-0 bg-black/20 group-hover/thumb:bg-transparent transition-colors"></div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
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