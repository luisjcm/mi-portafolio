import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full border-t border-zinc-800/80 bg-zinc-950 text-zinc-400">
      <div className="max-w-[800px] mx-auto px-6 pt-12 pb-28 md:pb-12 space-y-10">
        
        {/* BLOQUE SUPERIOR */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-8 border-b border-zinc-800/60 items-start">
          
          {/* Marca + Bio + Email (Centrado en Móvil / A la izquierda en Desktop) */}
          <div className="flex flex-col items-center text-center md:items-start md:text-left md:col-span-6">
            <Link to="/" className="text-white font-bold text-xl tracking-tighter inline-block mb-3">
              LUIS<span className="text-brand-accent">JCM</span>
            </Link>
            <p className="text-[13px] text-zinc-400 leading-relaxed mb-4 max-w-sm">
              Ingeniero de Sistemas y Desarrollador Web. Transformando ideas complejas en experiencias digitales limpias, optimizadas y escalables para el navegador.
            </p>
            <a
              href="mailto:contacto@luisjcm.com"
              className="inline-flex items-center justify-center px-4 py-2 rounded-xl bg-zinc-900 border border-zinc-800 text-[12px] font-medium text-zinc-300 hover:text-white hover:border-zinc-700 hover:bg-zinc-850 transition-all shadow-sm active:scale-95"
            >
              contacto@luisjcm.com
            </a>
          </div>

          {/* Enlaces: Explorar y Áreas Tech juntos en la misma fila horizontal en móvil (grid-cols-2) */}
          <div className="grid grid-cols-2 gap-6 w-full md:col-span-6">
            <div className="text-left">
              <h4 className="text-xs font-semibold text-white uppercase tracking-wider mb-3">
                Explorar
              </h4>
              <ul className="space-y-2 text-[13px]">
                <li><Link to="/" className="hover:text-white transition-colors">Inicio</Link></li>
                <li><Link to="/proyectos" className="hover:text-white transition-colors">Proyectos</Link></li>
                <li><Link to="/sobre-mi" className="hover:text-white transition-colors">Sobre Mí</Link></li>
                <li><Link to="/contacto" className="hover:text-white transition-colors">Contacto</Link></li>
              </ul>
            </div>

            <div className="text-left">
              <h4 className="text-xs font-semibold text-white uppercase tracking-wider mb-3">
                Legal
              </h4>
              <ul className="space-y-2 text-[13px] text-zinc-400">
                <li><Link to="/privacidad" className="hover:text-white transition-colors">Privacidad</Link></li>
                <li><Link to="/terminos" className="hover:text-white transition-colors">Términos de Uso</Link></li>
                <li><Link to="/accesibilidad" className="hover:text-white transition-colors">Accesibilidad</Link></li>
                <li><Link to="/cookies" className="hover:text-white transition-colors">Cookies</Link></li>
              </ul>
            </div>
          </div>

        </div>

        {/* BLOQUE INFERIOR: Copyright Centrado y Badge BUILD con Ping/Pulse */}
        <div className="flex flex-col items-center justify-center gap-3 text-center">
          <p className="text-[12px] text-zinc-500">
            © {currentYear} Luis Jesus Curbata. Todos los derechos reservados.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-2.5 text-[11px] text-zinc-500">
            <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-md bg-zinc-900 border border-zinc-800/90 text-[10px] font-mono text-zinc-400">
              <span className="relative flex h-1.5 w-1.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-accent opacity-75"></span>
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-brand-accent"></span>
              </span>
              BUILD v.4.0.0
            </span>
            <span className="text-zinc-700 hidden sm:inline">•</span>
            <span>Desarrollado por luisjcm</span>
          </div>
        </div>

      </div>
    </footer>
  );
}