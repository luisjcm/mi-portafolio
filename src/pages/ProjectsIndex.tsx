import { useEffect } from 'react';
import ProjectExplorer from '../components/projects/ProjectExplorer';

export default function ProjectsIndex() {
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

      {/* Categorías y proyectos (componente compartido con la portada) */}
      <ProjectExplorer className="animate-fade-in" />
    </main>
  );
}