import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative w-full overflow-hidden border-t border-brand-border/60 bg-brand-bg/85 text-brand-muted shadow-[0_-16px_48px_rgba(2,8,23,0.24)] backdrop-blur-xl">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand-accent/40 to-transparent"></div>
      <div className="relative mx-auto max-w-[800px] space-y-10 px-6 pt-12 pb-28 md:pb-12">
        
        {/* BLOQUE SUPERIOR */}
        <div className="grid grid-cols-1 items-start gap-8 border-b border-brand-border/50 pb-8 md:grid-cols-12">
          
          {/* Marca + Bio + Email (Centrado en Móvil / A la izquierda en Desktop) */}
          <div className="flex flex-col items-center text-center md:items-start md:text-left md:col-span-6">
            <Link to="/" className="mb-3 inline-block text-xl font-bold tracking-tighter text-brand-text">
              LUIS<span className="text-brand-accent">JCM</span>
            </Link>
            <p className="text-[13px] text-brand-muted leading-relaxed mb-4 max-w-sm">
              Desarrollo web con base en ingeniería. Experiencias digitales limpias, código escalable y rendimiento optimizado.
            </p>
            <a
              href="mailto:contacto@luisjcm.com"
              className="inline-flex items-center justify-center rounded-lg border border-brand-accent/25 bg-brand-accent/[0.06] px-4 py-2 font-mono text-[11px] font-medium text-brand-text transition-all hover:border-brand-accent/45 hover:bg-brand-accent/10 hover:text-white active:scale-95"
            >
              contacto@luisjcm.com
            </a>
          </div>

          {/* Enlaces: Explorar y Áreas Tech juntos en la misma fila horizontal en móvil (grid-cols-2) */}
          <div className="grid grid-cols-2 gap-6 w-full md:col-span-6">
            <div className="text-left">
              <h4 className="mb-3 font-mono text-[10px] font-semibold uppercase tracking-[0.16em] text-brand-text">
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
              <h4 className="mb-3 font-mono text-[10px] font-semibold uppercase tracking-[0.16em] text-brand-text">
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
            <span className="inline-flex items-center gap-1.5 rounded-md border border-brand-accent/25 bg-brand-accent/[0.06] px-2 py-0.5 font-mono text-[10px] text-brand-text">
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