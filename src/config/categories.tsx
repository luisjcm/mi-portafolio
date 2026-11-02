// src/config/categories.tsx
import type { ReactNode } from 'react';
// 1. Quitamos SiN8n y añadimos FaNetworkWired a la importación de 'fa'
import { FaWordpress, FaReact, FaMobileAlt, FaPython, FaJava, FaNetworkWired } from 'react-icons/fa';

interface CategoryInfo {
  label: string;
  icon: ReactNode;
  colorClass: string; 
}

const ICON_CLASS = 'w-7 h-7';

const CATEGORIES: Record<string, CategoryInfo> = {
  javascript: { 
    label: 'JavaScript y React', 
    icon: <FaReact className={ICON_CLASS} />,
    colorClass: 'text-[#61DAFB] bg-[#61DAFB]/10 border-[#61DAFB]/20'
  },
  wordpress: { 
    label: 'WordPress', 
    icon: <FaWordpress className={ICON_CLASS} />,
    colorClass: 'text-[#21759B] bg-[#21759B]/10 border-[#21759B]/20'
  },
  apps: { 
    label: 'Aplicaciones & MVP', 
    icon: <FaMobileAlt className={ICON_CLASS} />,
    colorClass: 'text-brand-secondary bg-brand-secondary/10 border-brand-secondary/20'
  },
  python: { 
    label: 'Python / Data', 
    icon: <FaPython className={ICON_CLASS} />,
    colorClass: 'text-[#3776AB] bg-[#3776AB]/10 border-[#3776AB]/20'
  },
  java: { 
    label: 'Java / Backend', 
    icon: <FaJava className={ICON_CLASS} />,
    colorClass: 'text-[#f89820] bg-[#f89820]/10 border-[#f89820]/20'
  },
  n8n: { 
    label: 'Automatización con n8n', // Aproveché para ponerle un nombre más descriptivo
    // 2. Usamos el icono de red
    icon: <FaNetworkWired className={ICON_CLASS} />,
    colorClass: 'text-[#FF6D5A] bg-[#FF6D5A]/10 border-[#FF6D5A]/20' // Color coral oficial de n8n
  }
};

export const getCategoryLabel = (key: string): string =>
  CATEGORIES[key]?.label ?? `${key.charAt(0).toUpperCase()}${key.slice(1)}`;

export const getCategoryIcon = (key: string): ReactNode => CATEGORIES[key]?.icon ?? null;

export const getCategoryColor = (key: string): string => 
  CATEGORIES[key]?.colorClass ?? 'text-brand-accent bg-brand-accent/10 border-brand-accent/20';

/* =============================================================================
   TOKENS DE COLOR ... (AQUI SIGUE TU CODIGO DE TOKENS)
   ============================================================================= */