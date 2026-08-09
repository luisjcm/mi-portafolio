import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  // Función para cerrar el menú móvil al hacer clic
  const closeMenu = () => setIsMenuOpen(false);

  // Bloquear el scroll del body cuando el menú móvil está abierto
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [isMenuOpen]);

  // Arreglo de rutas para iterar fácilmente
  const navLinks = [
    { name: 'Inicio', path: '/' },
    { name: 'Proyectos', path: '/proyectos' },
    { name: 'Sobre Mí', path: '/sobre-mi' },
    { name: 'Contacto', path: '/contacto' },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-100 backdrop-blur-md border-b border-white/5 bg-zinc-950/70 transition-all duration-300">
      <div className="max-w-[800px] mx-auto px-6 h-16 flex items-center justify-between">
        
        {/* LOGO */}
        <Link to="/" className="text-white font-bold text-lg tracking-tighter hover:opacity-80 transition-opacity no-underline relative z-100" onClick={closeMenu}>
          LUIS<span className="text-blue-500">JCM</span>
        </Link>

        {/* DESKTOP NAVIGATION */}
        <nav className="hidden md:flex items-center gap-7">
          {navLinks.map((link) => {
            // Verificamos si la URL actual coincide con la ruta del enlace
            const isActive = location.pathname === link.path || (link.path !== '/' && location.pathname.startsWith(link.path));
            
            return (
              <Link 
                key={link.name} 
                to={link.path}
                className={`text-[13px] font-medium transition-colors duration-300 relative group ${isActive ? 'text-white' : 'text-zinc-400 hover:text-white'}`}
              >
                {link.name}
                {/* Indicador de activo / hover */}
                <span className={`absolute -bottom-1.5 left-0 w-full h-0.5 rounded-full transition-all duration-300 ${isActive ? 'bg-blue-500 scale-x-100' : 'bg-zinc-600 scale-x-0 group-hover:scale-x-100 opacity-50'}`}></span>
              </Link>
            );
          })}
        </nav>

        {/* MOBILE HAMBURGER BUTTON */}
        <button 
          className="md:hidden relative z-110 p-2 -mr-2 text-zinc-400 hover:text-white transition-colors focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <div className="w-5 h-3.5 flex flex-col justify-between overflow-hidden">
            <span className={`w-full h-[1.5px] bg-current rounded transform transition-all duration-300 origin-left ${isMenuOpen ? 'rotate-[42deg] translate-x-px' : ''}`}></span>
            <span className={`w-full h-[1.5px] bg-current rounded transform transition-all duration-300 ${isMenuOpen ? 'opacity-0 translate-x-4' : ''}`}></span>
            <span className={`w-full h-[1.5px] bg-current rounded transform transition-all duration-300 origin-left ${isMenuOpen ? 'rotate-[42deg] translate-x-px' : ''}`}></span>
          </div>
        </button>
      </div>

      {/* MOBILE MENU OVERLAY */}
      <div className={`md:hidden fixed inset-0 w-full h-dvh bg-zinc-950/95 backdrop-blur-2xl transition-all duration-500 ease-in-out z-105 flex flex-col items-center justify-center ${isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
        <nav className="flex flex-col items-center gap-8">
          {navLinks.map((link, index) => {
            const isActive = location.pathname === link.path || (link.path !== '/' && location.pathname.startsWith(link.path));
            return (
              <Link
                key={link.name}
                to={link.path}
                onClick={closeMenu}
                className={`text-2xl font-bold tracking-tight transition-all duration-500 transform ${isMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'} ${isActive ? 'text-blue-400' : 'text-zinc-400 hover:text-white'}`}
                style={{ transitionDelay: `${index * 75}ms` }}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}