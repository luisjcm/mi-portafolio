import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full border-t border-brand-border/80 bg-brand-bg text-brand-muted">
      <div className="max-w-[800px] mx-auto px-6 pt-12 pb-28 md:pb-12 space-y-10">
        
        {/* BLOQUE SUPERIOR */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-8 border-b border-brand-border/60 items-start">
          
          {/* Marca + Bio + Email (Centrado en Móvil / A la izquierda en Desktop) */}
          <div className="flex flex-col items-center text-center md:items-start md:text-left md:col-span-6">
            <Link to="/" className="text-brand-text font-bold text-xl tracking-tighter inline-block mb-3">
              LUIS<span className="text-brand-accent">JCM</span>
            </Link>
            <p className="text-[13px] text-brand-muted leading-relaxed mb-4 max-w-sm">
              Desarrollo web con base en ingeniería. Experiencias digitales limpias, código escalable y rendimiento optimizado.
            </p>
            <a
              href="mailto:contacto@luisjcm.com"
              className="inline-flex items-center justify-center px-4 py-2 rounded-xl bg-brand-surface border border-brand-border text-[12px] font-medium text-brand-muted hover:text-brand-text hover:border-brand-border hover:bg-brand-surface-subtle transition-all shadow-sm active:scale-95"
            >
              contacto@luisjcm.com
            </a>
          </div>

          {/* Enlaces: Explorar y Áreas Tech juntos en la misma fila horizontal en móvil (grid-cols-2) */}
          <div className="grid grid-cols-2 gap-6 w-full md:col-span-6">
            <div className="text-left">
              <h4 className="text-xs font-semibold text-brand-text uppercase tracking-wider mb-3">
                Explorar
              </h4>
              <ul className="space-y-2 text-[13px]">
                <li><Link to="/" className="hover:text-brand-text transition-colors">Inicio</Link></li>
                <li><Link to="/proyectos" className="hover:text-brand-text transition-colors">Proyectos</Link></li>
                <li><Link to="/sobre-mi" className="hover:text-brand-text transition-colors">Sobre Mí</Link></li>
                <li><Link to="/contacto" className="hover:text-brand-text transition-colors">Contacto</Link></li>
              </ul>
            </div>

            <div className="text-left">
              <h4 className="text-xs font-semibold text-brand-text uppercase tracking-wider mb-3">
                Legal
              </h4>
              <ul className="space-y-2 text-[13px] text-brand-muted">
                <li><Link to="/privacidad" className="hover:text-brand-text transition-colors">Privacidad</Link></li>
                <li><Link to="/terminos" className="hover:text-brand-text transition-colors">Términos de Uso</Link></li>
                <li><Link to="/accesibilidad" className="hover:text-brand-text transition-colors">Accesibilidad</Link></li>
                <li><Link to="/cookies" className="hover:text-brand-text transition-colors">Cookies</Link></li>
              </ul>
            </div>
          </div>

        </div>

        {/* BLOQUE INFERIOR: Copyright Centrado y Badge BUILD con Ping/Pulse */}
        <div className="flex flex-col items-center justify-center gap-3 text-center">
          <p className="text-[12px] text-brand-muted">
            © {currentYear} Luis Jesus Curbata. Todos los derechos reservados.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-2.5 text-[11px] text-brand-muted">
            <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-md bg-brand-surface border border-brand-border/90 text-[10px] font-mono text-brand-muted">
              <span className="relative flex h-1.5 w-1.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-accent opacity-75"></span>
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-brand-accent"></span>
              </span>
              BUILD v.4.0.0
            </span>
            <span className="text-brand-muted hidden sm:inline">•</span>
            <span>Desarrollado por luisjcm</span>
          </div>
        </div>

      </div>
    </footer>
  );
}