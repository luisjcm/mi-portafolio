import React, { useState } from 'react';
import { Menu, X, HardHat, Bot, MapPin } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { ProfileBadge } from '../ui/ProfileBadge';

export const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur-lg bg-zinc-950/80 border-b border-zinc-900/50">
      <div className="max-w-[800px] mx-auto px-6 h-16 flex items-center justify-between">
        
        {/* Lado Izquierdo: Tu marca/identidad */}
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-brand-primary/20 flex items-center justify-center border border-brand-primary/30">
            <span className="text-brand-primary font-bold text-sm">LC</span>
          </div>
          <span className="hidden sm:block font-bold text-zinc-200">Portfolio de Luis Jesus</span>
        </div>

        {/* Escritorio: Todos los badges a la vista */}
        <div className="hidden md:flex items-center gap-3">
          <ProfileBadge />
          <div className="flex items-center gap-1.5 text-zinc-400 text-[11px] bg-zinc-900/50 px-3 py-1 rounded-full border border-zinc-800">
            <HardHat size={12} className="text-brand-primary" />
            <span>Ingeniero</span>
          </div>
          <div className="flex items-center gap-1.5 text-zinc-400 text-[11px] bg-zinc-900/50 px-3 py-1 rounded-full border border-zinc-800">
            <Bot size={12} className="text-brand-primary" />
            <span>Full-Stack</span>
          </div>
          <a href="#contacto" className="ml-4 bg-brand-primary text-zinc-950 px-4 py-1.5 rounded-lg text-xs font-bold hover:bg-white transition-colors">
            Contacto
          </a>
        </div>

        {/* Móvil: Botón de Hamburguesa */}
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 text-zinc-400 hover:text-brand-primary transition-colors"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Menú Desplegable Móvil */}
    
    
    {/* Menú Desplegable Móvil */}
<AnimatePresence>
  {isOpen && (
    <motion.div
      initial={{ opacity: 0, height: 0 }}
      animate={{ opacity: 1, height: 'auto' }}
      exit={{ opacity: 0, height: 0 }}
      className="md:hidden bg-zinc-950 border-b border-zinc-900 overflow-hidden"
    >
      <div className="px-6 py-8 flex flex-col gap-6">
        
        {/* ESTADO: Usamos 'w-fit' para que no se estire al 100% */}
        <div className="flex flex-col gap-3">
          <p className="text-[10px] uppercase tracking-[0.2em] text-zinc-600 font-bold">Estado</p>
          <div className="w-fit"> {/* <--- Contenedor para limitar el ancho */}
            <ProfileBadge />
          </div>
        </div>
        
        {/* INFO: Tipografía un poco más pequeña y elegante */}
        <div className="flex flex-col gap-4">
          <p className="text-[10px] uppercase tracking-[0.2em] text-zinc-600 font-bold">Info</p>
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-3 text-zinc-400 text-sm">
              <HardHat size={14} className="text-brand-primary" />
              <span>Ingeniero de Sistemas</span>
            </div>
            <div className="flex items-center gap-3 text-zinc-400 text-sm">
              <Bot size={14} className="text-brand-primary" />
              <span>Desarrollador Full-Stack</span>
            </div>
            <div className="flex items-center gap-3 text-zinc-400 text-sm">
              <MapPin size={14} className="text-brand-primary" />
              <span>Barcelona, Anzoátegui</span>
            </div>
          </div>
        </div>

        {/* BOTÓN: Texto más pequeño (sm) y padding más equilibrado */}
        <a 
          href="https://wa.me/tu-numero" 
          rel='noopener'
          target="_blank"
          className="mt-2 w-full bg-brand-primary text-zinc-950 py-3 rounded-xl text-center text-sm font-bold shadow-brand-glow active:scale-95 transition-transform"
        >
          Hablemos por WhatsApp
        </a>
      </div>
    </motion.div>
  )}
</AnimatePresence>
    </header>
  );
};