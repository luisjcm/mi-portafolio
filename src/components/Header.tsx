import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full z-[50] py-4 px-6 backdrop-blur-md border-b border-white/5 bg-zinc-950/20">
      <div className="max-w-[800px] mx-auto flex items-center justify-between">
        <Link to="/" className="text-white font-bold text-lg tracking-tighter hover:opacity-80 transition-opacity no-underline">
          LUIS<span className="text-blue-500">JCM</span>
        </Link>
        
        {/* Aquí insertaremos los enlaces de navegación (Inicio, Proyectos, etc.) */}
      </div>
    </header>
  );
}