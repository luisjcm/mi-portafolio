// src/components/ui/Badge.tsx
// =============================================================================
// INSIGNIA (etiqueta de estado). Ej: "Disponible para Proyectos", "Nuevo".
// DÓNDE CAMBIAR: VARIANTS (colores) y SIZES (tamaños).
// Para el color secundario del sitio usa variant="secondary".
// =============================================================================
import type { ReactNode } from 'react';

type Variant = 'accent' | 'secondary';
type Size = 'md' | 'sm';

const VARIANTS: Record<Variant, { box: string; dot: string }> = {
  accent: {
    box: 'bg-brand-accent/10 border-brand-accent/50 text-brand-accent',
    dot: 'bg-brand-accent',
  },
  secondary: {
    box: 'bg-brand-secondary/15 border-brand-secondary/40 text-brand-secondary',
    dot: 'bg-brand-secondary',
  },
};

const SIZES: Record<Size, string> = {
  md: 'px-2 py-0.5 text-[11px] font-medium',
  sm: 'px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider',
};

interface BadgeProps {
  variant?: Variant;
  size?: Size;
  dot?: boolean; // muestra un punto que parpadea
  children: ReactNode;
}

export default function Badge({ variant = 'accent', size = 'md', dot = false, children }: BadgeProps) {
  const v = VARIANTS[variant];
  return (
    <span className={`inline-flex items-center gap-1.5 rounded-full border shrink-0 ${SIZES[size]} ${v.box}`}>
      {dot && <span className={`w-1.5 h-1.5 rounded-full animate-pulse ${v.dot}`} />}
      {children}
    </span>
  );
}
