import React from 'react';
import { motion } from 'framer-motion';

export const Hero: React.FC = () => {
  return (
    <section className="flex flex-col md:flex-row items-center md:items-start justify-between w-full mb-12 py-8 md:py-16 gap-8">
      
      {/* Texto: Centrado en móvil, izquierda en desktop */}
      <div className="flex flex-col items-center md:items-start text-center md:text-left gap-2 order-2 md:order-1">
        <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-white">
          Luis Jesus <span className="text-brand-primary">Curbata</span>
        </h1>
        <p className="text-zinc-400 text-base md:text-xl font-medium">
          Ingeniero de Sistemas & Desarrollador Web
        </p>
        <p className="text-zinc-500 max-w-md mt-2 text-sm md:text-base leading-relaxed">
          Especializado en crear soluciones digitales eficientes con un enfoque técnico y estético.
        </p>
      </div>

      {/* Foto: Arriba en móvil para que sea lo primero que se vea */}
      <div className="order-1 md:order-2">
        <div className="relative w-24 h-24 md:w-32 md:h-32 rounded-full border-2 border-zinc-800 p-1 bg-zinc-900">
             <img 
               src="./src/assets/perfil.jpg" 
               className="rounded-full w-full h-full object-cover" 
               alt="Luis"
             />
             <div className="absolute inset-0 rounded-full shadow-[0_0_15px_rgba(0,112,255,0.3)]"></div>
        </div>
      </div>
    </section>
  );
};