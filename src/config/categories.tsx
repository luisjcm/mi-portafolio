// src/config/categories.tsx
import type { ReactNode } from 'react';
import { FaWordpress, FaReact, FaMobileAlt, FaPython, FaJava } from 'react-icons/fa';

interface CategoryInfo {
  label: string;
  icon: ReactNode;
  colorClass: string; // NUEVO: Para el color del ícono y su fondo
}

const ICON_CLASS = 'w-7 h-7';

const CATEGORIES: Record<string, CategoryInfo> = {
  javascript: { 
    label: 'JavaScript y React', 
    icon: <FaReact className={ICON_CLASS} />,
    colorClass: 'text-[#61DAFB] bg-[#61DAFB]/10 border-[#61DAFB]/20' // Celeste React
  },
  wordpress: { 
    label: 'WordPress', 
    icon: <FaWordpress className={ICON_CLASS} />,
    colorClass: 'text-[#21759B] bg-[#21759B]/10 border-[#21759B]/20' // Azul WordPress
  },
  apps: { 
    label: 'Aplicaciones & MVP', 
    icon: <FaMobileAlt className={ICON_CLASS} />,
    colorClass: 'text-brand-secondary bg-brand-secondary/10 border-brand-secondary/20' // Usa tu color secundario (ámbar)
  },
  python: { 
    label: 'Python / Data', 
    icon: <FaPython className={ICON_CLASS} />,
    colorClass: 'text-[#3776AB] bg-[#3776AB]/10 border-[#3776AB]/20' // Azul Python
  },
  java: { 
    label: 'Java / Backend', 
    icon: <FaJava className={ICON_CLASS} />,
    colorClass: 'text-[#f89820] bg-[#f89820]/10 border-[#f89820]/20' // Naranja Java
  },
};

export const getCategoryLabel = (key: string): string =>
  CATEGORIES[key]?.label ?? `${key.charAt(0).toUpperCase()}${key.slice(1)}`;

export const getCategoryIcon = (key: string): ReactNode => CATEGORIES[key]?.icon ?? null;

// NUEVO: Función para obtener las clases de color
export const getCategoryColor = (key: string): string => 
  CATEGORIES[key]?.colorClass ?? 'text-brand-accent bg-brand-accent/10 border-brand-accent/20';

/* =============================================================================
   TOKENS DE COLOR ... (Deja todo tu código de tokens css exactamente igual aquí abajo)
   ============================================================================= */