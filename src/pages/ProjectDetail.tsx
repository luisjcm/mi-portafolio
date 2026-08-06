import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import frontMatter from 'front-matter';

// Leemos la carpeta de proyectos igual que en el Home
const mdFiles = import.meta.glob('../content/proyectos/*.md', { query: '?raw', eager: true });

export default function ProjectDetail() {
  const { slug } = useParams(); // Extrae la parte final de la URL (ej: /proyectos/crm-core-api)

  // Buscamos el archivo que coincida con ese slug
  const fileEntry = Object.entries(mdFiles).find(([path]) => path.includes(`${slug}.md`));

  // Hacemos scroll automático hacia arriba al entrar a la página
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  // Si alguien escribe mal la URL, mostramos un error amigable
  if (!fileEntry) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center text-zinc-400">
        <h1 className="text-2xl text-white font-bold mb-4">Proyecto no encontrado</h1>
        <Link to="/" className="text-blue-500 hover:underline">Volver al inicio</Link>
      </div>
    );
  }

  // Extraemos el contenido
  const [_, module] = fileEntry;
  const { attributes, body } = frontMatter(module.default as string);
  const project = attributes as any;

  return (
    <main className="w-full max-w-3xl mx-auto p-6 mt-12 md:mt-20 min-h-screen">
      
      {/* Botón de Regreso */}
      <Link to="/" className="inline-flex items-center gap-2 text-[13px] text-zinc-500 hover:text-white transition-colors mb-10 group">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="group-hover:-translate-x-1 transition-transform">
          <line x1="19" y1="12" x2="5" y2="12"></line>
          <polyline points="12 19 5 12 12 5"></polyline>
        </svg>
        Volver al portafolio
      </Link>

      {/* Cabecera del Artículo */}
      <header className="mb-10">
        <h1 className="text-3xl md:text-4xl font-bold text-white tracking-tight mb-4 leading-tight">
          {project.title}
        </h1>
        <p className="text-lg md:text-xl text-zinc-400 leading-relaxed mb-6">
          {project.description}
        </p>
        
        <div className="flex flex-wrap gap-2">
          {project.techStack?.map((tech: string) => (
            <span key={tech} className="px-2.5 py-1 text-[11px] font-medium text-blue-400 bg-blue-500/10 border border-blue-500/20 rounded shadow-sm uppercase tracking-wider">
              {tech}
            </span>
          ))}
        </div>
      </header>

      {/* Separador Visual (O Imagen si el proyecto la tiene) */}
      {project.imageUrl ? (
        <div className="w-full h-64 md:h-96 rounded-xl overflow-hidden mb-12 border border-zinc-800">
          <img src={project.imageUrl} alt={project.title} className="w-full h-full object-cover" />
        </div>
      ) : (
        <div className="w-full h-[1px] bg-gradient-to-r from-zinc-800 via-zinc-700 to-zinc-800 mb-12"></div>
      )}

      {/* Contenido Renderizado de Markdown */}
      <article className="text-zinc-300 leading-relaxed text-[15px] md:text-base 
        [&>h1]:text-2xl [&>h1]:font-bold [&>h1]:text-white [&>h1]:mt-10 [&>h1]:mb-4 
        [&>h2]:text-xl [&>h2]:font-bold [&>h2]:text-white [&>h2]:mt-10 [&>h2]:mb-4 
        [&>h3]:text-lg [&>h3]:font-bold [&>h3]:text-white [&>h3]:mt-8 [&>h3]:mb-3 
        [&>ul]:list-disc [&>ul]:pl-5 [&>ul>li]:mb-2 [&>ul]:mb-6
        [&>p]:mb-6 
        [&>strong]:text-zinc-100 [&>strong]:font-semibold
        [&>a]:text-blue-400 [&>a]:hover:underline">
        <ReactMarkdown>{body}</ReactMarkdown>
      </article>
      
    </main>
  );
}