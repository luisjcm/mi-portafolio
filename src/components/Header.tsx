import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const closeMenu = () => setIsMenuOpen(false);

  const navLinks = [
    { name: 'Inicio', path: '/' },
    { name: 'Proyectos', path: '/proyectos' },
    { name: 'Sobre Mí', path: '/sobre-mi' },
    { name: 'Contacto', path: '/contacto' },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-100 border-b border-brand-border/60 bg-brand-bg/90 shadow-[0_8px_32px_rgba(2,8,23,0.32)] backdrop-blur-xl transition-all duration-300">
      
      {/* CONTENEDOR PRINCIPAL DEL HEADER */}
      <div className="max-w-[800px] mx-auto px-6 h-16 flex items-center justify-between relative z-20">
        
        {/* LOGO */}
        <Link to="/" className="group flex items-center gap-2 text-brand-text font-bold text-lg tracking-tighter transition-opacity hover:opacity-80 no-underline" onClick={closeMenu}>
          
          <span>LUIS<span className="text-brand-accent">JCM</span></span>
        </Link>

        {/* DESKTOP NAVIGATION */}
        <nav className="hidden md:flex items-center gap-7">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.path || (link.path !== '/' && location.pathname.startsWith(link.path));
            return (
              <Link 
                key={link.name} 
                to={link.path}
                className={`relative py-2 font-mono text-[11px] uppercase tracking-[0.12em] transition-colors duration-300 group ${isActive ? 'text-brand-text' : 'text-brand-muted hover:text-brand-text'}`}
              >
                {link.name}
                <span className={`absolute -bottom-0.5 left-0 h-px w-full rounded-full transition-all duration-300 ${isActive ? 'scale-x-100 bg-brand-accent shadow-[0_0_8px_rgba(120,169,208,0.5)]' : 'scale-x-0 bg-brand-accent opacity-50 group-hover:scale-x-100'}`}></span>
              </Link>
            );
          })}
        </nav>

        {/* MOBILE HAMBURGER BUTTON */}
        <button 
          className="md:hidden relative p-2 -mr-2 text-brand-text hover:text-brand-accent transition-colors focus:outline-none flex items-center justify-center cursor-pointer"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <div className="w-5 h-4 relative flex flex-col justify-between">
            <span className={`w-full h-0.5 bg-brand-text rounded-full transition-all duration-300 ease-in-out ${isMenuOpen ? 'rotate-45 translate-y-[7px]' : ''}`}></span>
            <span className={`w-full h-0.5 bg-brand-text rounded-full transition-all duration-200 ease-in-out ${isMenuOpen ? 'opacity-0 scale-x-0' : 'opacity-100'}`}></span>
            <span className={`w-full h-0.5 bg-brand-text rounded-full transition-all duration-300 ease-in-out ${isMenuOpen ? '-rotate-45 -translate-y-[7px]' : ''}`}></span>
          </div>
        </button>
      </div>

      {/* MOBILE MENU DROPDOWN (Grid Trick para animación perfecta) */}
      <div 
        className={`md:hidden absolute top-full left-0 w-full border-b border-brand-border/60 bg-brand-bg/95 backdrop-blur-xl shadow-2xl grid transition-all duration-500 ease-in-out ${
          isMenuOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
        }`}
      >
        <div className="overflow-hidden">
          <nav className="flex flex-col py-2 px-4 pb-6">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path || (link.path !== '/' && location.pathname.startsWith(link.path));
              return (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={closeMenu}
                  className={`group flex items-center py-4 px-4 text-base font-semibold tracking-wide border-b border-brand-border/10 last:border-b-0 rounded-lg transition-all duration-300 ${
                    isActive 
                      ? 'text-brand-accent bg-brand-accent/5' 
                      : 'text-brand-muted hover:text-brand-text hover:bg-brand-surface/50'
                  }`}
                >
                  <span className={`transition-transform duration-300 ease-out ${isActive ? 'translate-x-2' : 'group-hover:translate-x-2'}`}>
                    {link.name}
                  </span>
                </Link>
              );
            })}
          </nav>
        </div>
      </div>

    </header>
  );
}