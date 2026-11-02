// src/config/categories.tsx
import type { ReactNode } from 'react';

// 1. Logos de marcas (Simple Icons)
import { SiReact, SiWordpress, SiPython, SiOpenjdk, SiN8N } from 'react-icons/si';

// 2. Iconos de interfaz modernos (Lucide React)
import { Smartphone } from 'lucide-react';

interface CategoryInfo {
  label: string;
  icon: ReactNode;
  colorClass: string; 
}

const ICON_CLASS = 'w-7 h-7';
const LUCIDE_ICON_CLASS = 'w-7 h-7';
const LUCIDE_STROKE = 1.5;

const CATEGORIES: Record<string, CategoryInfo> = {
  javascript: { 
    label: 'JavaScript y React', 
    icon: <SiReact className={ICON_CLASS} />, 
    colorClass: 'text-white bg-brand-primary border-brand-primary shadow-md' 
  },
  wordpress: { 
    label: 'WordPress', 
    icon: <SiWordpress className={ICON_CLASS} />, 
    colorClass: 'text-white bg-brand-primary border-brand-primary shadow-md' 
  },
  apps: { 
    label: 'Aplicaciones & MVP', 
    icon: <Smartphone className={LUCIDE_ICON_CLASS} strokeWidth={LUCIDE_STROKE} />, 
    colorClass: 'text-white bg-brand-primary border-brand-primary shadow-md' 
  },
  python: { 
    label: 'Python / Data', 
    icon: <SiPython className={ICON_CLASS} />, 
    colorClass: 'text-white bg-brand-primary border-brand-primary shadow-md' 
  },
  java: { 
    label: 'Java / Backend', 
    icon: <SiOpenjdk className={ICON_CLASS} />, 
    colorClass: 'text-white bg-brand-primary border-brand-primary shadow-md' 
  },
  n8n: { 
    label: 'Automatización con n8n', 
    icon: <SiN8N className={ICON_CLASS} />, // ¡Ahora sí, el logo oficial!
    colorClass: 'text-white bg-brand-primary border-brand-primary shadow-md' 
  }
};

export const getCategoryLabel = (key: string): string =>
  CATEGORIES[key]?.label ?? `${key.charAt(0).toUpperCase()}${key.slice(1)}`;

export const getCategoryIcon = (key: string): ReactNode => CATEGORIES[key]?.icon ?? null;

export const getCategoryColor = (key: string): string => 
  CATEGORIES[key]?.colorClass ?? 'text-brand-accent bg-brand-accent/10 border-brand-accent/20';