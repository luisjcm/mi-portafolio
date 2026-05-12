// src/components/ui/ProfileBadge.tsx
import React from 'react';

// Definimos una interfaz vacía por ahora, o simplemente usamos React.FC
export const ProfileBadge: React.FC = () => {
  return (
    <div className="group flex items-center gap-1.5 bg-brand-surface text-brand-primary text-[11px] px-2.5 py-1 rounded-full border border-brand-primary/20 font-medium transition-all duration-300 hover:scale-105 shadow-brand-glow">
      <span className="relative flex h-2 w-2">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-primary opacity-75"></span>
        <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-primary"></span>
      </span>
      Disponible para Proyectos
    </div>
  );
};