// src/config/categories.tsx
// =============================================================================
// REGISTRO DE CATEGORÍAS DE PROYECTOS
// Para añadir una categoría nueva: agrega UNA entrada aquí y usa ese mismo
// nombre en el campo "category" del .md del proyecto. No hay que tocar ningún
// componente (principio abierto/cerrado).
// =============================================================================
import type { ReactNode } from 'react';
import { FaWordpress, FaReact, FaMobileAlt, FaPython, FaJava } from 'react-icons/fa';

interface CategoryInfo {
  label: string;     // texto que se muestra en la tarjeta
  icon: ReactNode;   // icono de la tarjeta
}

const ICON_CLASS = 'w-7 h-7';

const CATEGORIES: Record<string, CategoryInfo> = {
  javascript: { label: 'JavaScript y React', icon: <FaReact className={ICON_CLASS} /> },
  wordpress:  { label: 'WordPress',          icon: <FaWordpress className={ICON_CLASS} /> },
  apps:       { label: 'Aplicaciones & MVP', icon: <FaMobileAlt className={ICON_CLASS} /> },
  python:     { label: 'Python / Data',      icon: <FaPython className={ICON_CLASS} /> },
  java:       { label: 'Java / Backend',     icon: <FaJava className={ICON_CLASS} /> },
};

// Si la categoría no está registrada, se muestra con su nombre capitalizado.
export const getCategoryLabel = (key: string): string =>
  CATEGORIES[key]?.label ?? `${key.charAt(0).toUpperCase()}${key.slice(1)}`;

export const getCategoryIcon = (key: string): ReactNode => CATEGORIES[key]?.icon ?? null;
