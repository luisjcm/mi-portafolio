import React, { useState, useEffect } from 'react';
import ProjectCard from '../components/ProjectCard';
import frontMatter from 'front-matter';
import { useToast } from '../context/ToastContext';

// Extraemos la data de los proyectos
const mdFiles = import.meta.glob('../content/proyectos/*.md', { query: '?raw', eager: true });
const projects = Object.entries(mdFiles).map(([path, module]: [string, any]) => {
  const slug = path.split('/').pop()?.replace('.md', '');
  const { attributes } = frontMatter(module.default);
  return { slug, ...(attributes as any) };
});

export default function Home() {
  const [activeTab, setActiveTab] = useState('Proyectos');
  const { showToast } = useToast();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const tabs = ['Proyectos', 'Stack Técnico', 'Trayectoria', 'Formación'];

  // --- RENDERIZADORES DE PESTAÑAS ---

  const renderProyectos = () => (
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
  );

  const renderStack = () => (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {/* Frontend */}
      <div className="bg-zinc-900/30 border border-zinc-800/80 p-6 rounded-xl hover:border-zinc-700/80 transition-colors">
        <h3 className="text-white font-semibold text-[14px] mb-4 flex items-center gap-2">
          <svg className="text-blue-500" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polygon points="12 2 2 7 12 12 22 7 12 2"></polygon><polyline points="2 17 12 22 22 17"></polyline><polyline points="2 12 12 17 22 12"></polyline></svg>
          Desarrollo Frontend
        </h3>
        <div className="flex flex-wrap gap-2">
          {['JavaScript (ES6+)', 'React', 'Tailwind CSS', 'Vite', 'HTML5 & CSS3'].map(tech => (
            <span key={tech} className="px-3 py-1.5 bg-zinc-800/50 border border-zinc-700/50 rounded-md text-[12px] text-zinc-300">{tech}</span>
          ))}
        </div>
      </div>

      {/* Backend & DB */}
      <div className="bg-zinc-900/30 border border-zinc-800/80 p-6 rounded-xl hover:border-zinc-700/80 transition-colors">
        <h3 className="text-white font-semibold text-[14px] mb-4 flex items-center gap-2">
          <svg className="text-blue-500" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><ellipse cx="12" cy="5" rx="9" ry="3"></ellipse><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path></svg>
          Backend & Base de Datos
        </h3>
        <div className="flex flex-wrap gap-2">
          {['Node.js', 'Express', 'PostgreSQL', 'Consultas Nativas (SQL)', 'API REST'].map(tech => (
            <span key={tech} className="px-3 py-1.5 bg-zinc-800/50 border border-zinc-700/50 rounded-md text-[12px] text-zinc-300">{tech}</span>
          ))}
        </div>
      </div>

      {/* Herramientas */}
      <div className="bg-zinc-900/30 border border-zinc-800/80 p-6 rounded-xl hover:border-zinc-700/80 transition-colors md:col-span-2">
        <h3 className="text-white font-semibold text-[14px] mb-4 flex items-center gap-2">
          <svg className="text-blue-500" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="4" y="4" width="16" height="16" rx="2" ry="2"></rect><rect x="9" y="9" width="6" height="6"></rect><line x1="9" y1="1" x2="9" y2="4"></line><line x1="15" y1="1" x2="15" y2="4"></line><line x1="9" y1="20" x2="9" y2="23"></line><line x1="15" y1="20" x2="15" y2="23"></line><line x1="20" y1="9" x2="23" y2="9"></line><line x1="20" y1="14" x2="23" y2="14"></line><line x1="1" y1="9" x2="4" y2="9"></line><line x1="1" y1="14" x2="4" y2="14"></line></svg>
          Infraestructura & OS
        </h3>
        <div className="flex flex-wrap gap-2">
          {['Linux Ubuntu', 'Git', 'GitHub (Pages & Actions)', 'Moodle LMS', 'CPanel'].map(tech => (
            <span key={tech} className="px-3 py-1.5 bg-zinc-800/50 border border-zinc-700/50 rounded-md text-[12px] text-zinc-300">{tech}</span>
          ))}
        </div>
      </div>
    </div>
  );

  const renderTrayectoria = () => (
    <div className="relative border-l border-zinc-800 ml-3 pl-8 py-2 space-y-10">
      
      {/* Item 1 */}
      <div className="relative">
        <div className="absolute -left-[37px] top-1 w-[11px] h-[11px] rounded-full bg-blue-500 ring-4 ring-zinc-950"></div>
        <h3 className="text-white font-bold text-[15px]">Desarrollador Web Freelance</h3>
        <p className="text-blue-400 text-[12px] font-medium mb-3">Clinmedia & Newe Marketing • Remoto</p>
        <p className="text-zinc-400 text-[14px] leading-relaxed">
          Construcción, despliegue y gestión diaria de múltiples sitios web de alto volumen para agencias de marketing digital. Optimización de tiempos de entrega sin sacrificar semántica, rendimiento ni diseño responsivo.
        </p>
      </div>

      {/* Item 2 */}
      <div className="relative">
        <div className="absolute -left-[37px] top-1 w-[11px] h-[11px] rounded-full bg-zinc-700 ring-4 ring-zinc-950"></div>
        <h3 className="text-white font-bold text-[15px]">Analista de HelpDesk & Soporte TI</h3>
        <p className="text-zinc-500 text-[12px] font-medium mb-3">Avior Airlines • Ene 2020 - Presente</p>
        <p className="text-zinc-400 text-[14px] leading-relaxed">
          Soporte técnico de misión crítica en entorno corporativo. Resolución de incidencias de infraestructura, mantenimiento de equipos y asistencia a usuarios garantizando la continuidad operativa de la aerolínea.
        </p>
      </div>

      {/* Item 3 */}
      <div className="relative">
        <div className="absolute -left-[37px] top-1 w-[11px] h-[11px] rounded-full bg-zinc-800 ring-4 ring-zinc-950"></div>
        <h3 className="text-white font-bold text-[15px]">Agente de Call Center</h3>
        <p className="text-zinc-500 text-[12px] font-medium mb-3">Avior Airlines • Abr 2018 - Ene 2020</p>
        <p className="text-zinc-400 text-[14px] leading-relaxed">
          Atención directa al cliente y manejo de sistemas de reservas. Esta experiencia forjó mi entendimiento profundo de la operación interna antes de transicionar al departamento de TI en 2020.
        </p>
      </div>
    </div>
  );

  const renderFormacion = () => (
    <div className="space-y-6">
      
      <div className="flex gap-4 p-5 rounded-xl border border-zinc-800/60 bg-zinc-900/20 hover:bg-zinc-900/40 transition-colors">
        <div className="hidden sm:flex mt-1 w-10 h-10 rounded-full bg-blue-500/10 border border-blue-500/20 items-center justify-center text-blue-400 shrink-0">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 10v6M2 10l10-5 10 5-10 5z"></path><path d="M6 12v5c3 3 9 3 12 0v-5"></path></svg>
        </div>
        <div>
          <h3 className="text-white font-bold text-[15px]">Máster en Full Stack Development</h3>
          <p className="text-zinc-500 text-[12px] font-medium mb-2">Universidad Central de Venezuela (UCV) • Oct 2025</p>
          <p className="text-zinc-400 text-[14px]">Titulación académica oficial validando competencias en arquitecturas frontend y backend, bases de datos y despliegue de aplicaciones.</p>
        </div>
      </div>

      <div className="flex gap-4 p-5 rounded-xl border border-zinc-800/60 bg-zinc-900/20 hover:bg-zinc-900/40 transition-colors">
        <div className="hidden sm:flex mt-1 w-10 h-10 rounded-full bg-zinc-800 border border-zinc-700 items-center justify-center text-zinc-400 shrink-0">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="3" y1="9" x2="21" y2="9"></line><line x1="9" y1="21" x2="9" y2="9"></line></svg>
        </div>
        <div>
          <h3 className="text-white font-bold text-[15px]">Ingeniería de Sistemas</h3>
          <p className="text-zinc-500 text-[12px] font-medium mb-2">Titulación Profesional</p>
          <p className="text-zinc-400 text-[14px]">Formación base en lógica de programación, arquitectura de computadores, cálculo y resolución algorítmica de problemas.</p>
        </div>
      </div>

      <div className="flex gap-4 p-5 rounded-xl border border-zinc-800/60 bg-zinc-900/20 hover:bg-zinc-900/40 transition-colors">
        <div className="hidden sm:flex mt-1 w-10 h-10 rounded-full bg-zinc-800 border border-zinc-700 items-center justify-center text-zinc-400 shrink-0">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
        </div>
        <div>
          <h3 className="text-white font-bold text-[15px]">Especializaciones & Bootcamps</h3>
          <p className="text-zinc-500 text-[12px] font-medium mb-2">Educación Continua • 2025 - 2026</p>
          <ul className="text-zinc-400 text-[13px] list-disc ml-4 space-y-1">
            <li>Workana The Accelerator (Escalabilidad de negocios freelance - Mar 2026).</li>
            <li>Masterclass Udemy: JavaScript Moderno & Especificaciones Avanzadas.</li>
            <li>Masterclass Udemy: Node.js, React & Arquitecturas Web.</li>
          </ul>
        </div>
      </div>

    </div>
  );

  return (
    <main className="w-full max-w-[800px] p-4 md:p-6 mt-16 px-6 mx-auto animate-page-enter">
      
      {/* SECCIÓN DE PERFIL Y BOTONES (Se mantiene igual) */}
      <section className="mb-12">
        <div className="flex flex-col md:flex-row md:items-center gap-6 md:gap-8 mb-6">
          <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-zinc-800 bg-zinc-900 flex-shrink-0 relative group">
            <img 
              src="https://github.com/luisjcm.png" 
              alt="Luis Jesus Curbata" 
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              onError={(e) => {
                e.currentTarget.src = "https://ui-avatars.com/api/?name=Luis+Curbata&background=0D0D0E&color=3b82f6";
              }}
            />
            <div className="absolute inset-0 ring-1 ring-inset ring-white/10 rounded-full"></div>
          </div>
          
          <div className="flex flex-col">
            <h1 className="text-3xl font-bold text-white tracking-tight mb-2">
              Luis Jesus Curbata
            </h1>
            <div className="flex flex-wrap items-center gap-3 text-sm text-zinc-400">
              <span className="flex items-center gap-1.5 bg-zinc-900/50 px-2 py-1 rounded-md border border-zinc-800/80">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse"></span>
                @luisjcm
              </span>
              <span className="hidden md:block text-zinc-700">•</span>
              <span className="flex items-center gap-1.5">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                Barcelona, VZ
              </span>
              <span className="hidden md:block text-zinc-700">•</span>
              <span className="flex items-center gap-1.5">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line></svg>
                6 Años Experiencia TI
              </span>
            </div>
          </div>
        </div>

        <p className="text-zinc-400 text-[15px] leading-relaxed max-w-2xl mb-8">
          Ingeniero de Sistemas y Desarrollador Web. Fusionando el rigor operativo del soporte técnico de misión crítica con la creación de interfaces escalables y arquitecturas backend en el ecosistema JavaScript.
        </p>

        <div className="flex items-center gap-3">
          <a href="/contacto" className="px-5 py-2.5 bg-white text-black font-semibold text-[13px] rounded-lg hover:bg-zinc-200 transition-colors active:scale-95 flex items-center gap-2">
            Contactar
          </a>
          <button 
            onClick={() => showToast("El currículum estará disponible pronto. ¡En construcción!", "warning")}
            className="px-5 py-2.5 bg-zinc-900/50 border border-zinc-800 text-zinc-300 font-semibold text-[13px] rounded-lg hover:bg-zinc-800 hover:text-white transition-colors active:scale-95 flex items-center gap-2"
          >
            Descargar CV
          </button>
        </div>
      </section>

      {/* TABS DE NAVEGACIÓN */}
      <nav className="flex gap-6 border-b border-zinc-800/80 mb-8 overflow-x-auto scrollbar-hide">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`pb-4 text-[13px] font-medium transition-all relative whitespace-nowrap ${
              activeTab === tab ? 'text-white' : 'text-zinc-500 hover:text-zinc-300'
            }`}
          >
            {tab}
            {activeTab === tab && (
              <span className="absolute bottom-0 left-0 w-full h-[2px] bg-blue-500 rounded-t-full"></span>
            )}
          </button>
        ))}
      </nav>

      {/* CONTENIDO DINÁMICO CON ANIMACIÓN SUAVE */}
      {/* El 'key' obliga a React a remontar el div y reiniciar la animación CSS */}
      <div key={activeTab} className="animate-page-enter" style={{ animationDuration: '0.5s' }}>
        {activeTab === 'Proyectos' && renderProyectos()}
        {activeTab === 'Stack Técnico' && renderStack()}
        {activeTab === 'Trayectoria' && renderTrayectoria()}
        {activeTab === 'Formación' && renderFormacion()}
      </div>

    </main>
  );
}