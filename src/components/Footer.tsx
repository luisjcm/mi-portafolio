import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="w-full mt-20 border-t border-zinc-800/50 bg-zinc-950/20 pt-16 pb-8">
      <div className="max-w-5xl mx-auto px-6">
        
        {/* TOP SECTION: 4 Columnas estilo Zstephanie */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-8 mb-16">
          
          {/* Columna 1: Branding y Bio */}
          <div className="flex flex-col items-start lg:pr-4">
            <Link to="/" className="text-white font-bold text-xl tracking-tighter mb-4 no-underline hover:opacity-80 transition-opacity">
              LUIS<span className="text-blue-500">JCM</span>
            </Link>
            <p className="text-zinc-400 text-[13px] leading-relaxed mb-6">
              Ingeniero de Sistemas y Desarrollador Web. Transformando ideas complejas en experiencias digitales limpias, optimizadas y escalables para el navegador.
            </p>
            <a 
              href="mailto:tu-correo@ejemplo.com" 
              className="px-5 py-2.5 rounded-full border border-zinc-800 text-zinc-300 text-[12px] font-medium hover:border-blue-500/50 hover:bg-blue-500/5 hover:text-blue-400 transition-all duration-300"
            >
              hola@luisjcm.com
            </a>
          </div>

          {/* Columna 2: Explorar (Navegación Interna) */}
          <div className="lg:pl-8">
            <h4 className="text-white font-semibold text-[12px] tracking-[0.2em] uppercase mb-6 border-b border-zinc-800/80 pb-3">
              Explorar
            </h4>
            <nav className="flex flex-col gap-3.5">
              <Link to="/" className="text-zinc-400 text-[13px] hover:text-blue-400 transition-colors">Inicio</Link>
              <Link to="/proyectos" className="text-zinc-400 text-[13px] hover:text-blue-400 transition-colors">Proyectos</Link>
              <Link to="/sobre-mi" className="text-zinc-400 text-[13px] hover:text-blue-400 transition-colors">Sobre Mí</Link>
              <Link to="/contacto" className="text-zinc-400 text-[13px] hover:text-blue-400 transition-colors">Contacto</Link>
            </nav>
          </div>

          {/* Columna 3: Servicios / Enfoque */}
          <div>
            <h4 className="text-white font-semibold text-[12px] tracking-[0.2em] uppercase mb-6 border-b border-zinc-800/80 pb-3">
              Áreas Tech
            </h4>
            <ul className="flex flex-col gap-3.5">
              <li className="text-zinc-400 text-[13px]">Desarrollo Frontend</li>
              <li className="text-zinc-400 text-[13px]">Arquitectura Backend</li>
              <li className="text-zinc-400 text-[13px]">Diseño de Bases de Datos</li>
              <li className="text-zinc-400 text-[13px]">Soporte IT & Servidores</li>
            </ul>
          </div>

          {/* Columna 4: Síguenos (Redes Sociales con círculos) */}
          <div>
            <h4 className="text-white font-semibold text-[12px] tracking-[0.2em] uppercase mb-6 border-b border-zinc-800/80 pb-3">
              Conectar
            </h4>
            <div className="flex gap-3">
              <a href="https://linkedin.com/in/luisjcm" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-zinc-800 flex items-center justify-center text-zinc-400 hover:bg-blue-500/10 hover:border-blue-500/50 hover:text-blue-400 transition-all duration-300">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
              </a>
              <a href="https://github.com/luisjcm" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-zinc-800 flex items-center justify-center text-zinc-400 hover:bg-blue-500/10 hover:border-blue-500/50 hover:text-blue-400 transition-all duration-300">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/></svg>
              </a>
            </div>
          </div>
          
        </div>

        {/* BOTTOM SECTION: Copyright y Versión */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-8 border-t border-zinc-800/50 text-[11px] text-zinc-500">
          <p>© {new Date().getFullYear()} Luis Jesus Curbata. Todos los derechos reservados.</p>
          
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5 px-2 py-0.5 bg-zinc-900 border border-zinc-800 rounded text-[9px] font-mono text-blue-500/80 shadow-sm">
              <span className="relative flex h-1.5 w-1.5">
                <span className="animate-pulse absolute inline-flex h-full w-full rounded-full bg-blue-500 opacity-20"></span>
                <span className="relative inline-flex rounded-full h-1 w-1 bg-blue-500/50"></span>
              </span>
              BUILD v.4.0.0
            </span>
            <p>Diseñado y desarrollado en Venezuela</p>
          </div>
        </div>

      </div>
    </footer>
  );
}