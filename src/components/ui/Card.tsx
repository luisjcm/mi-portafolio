// src/components/ui/Card.tsx
// =============================================================================
// TARJETA BASE. Define cómo se ve una tarjeta en todo el sitio.
// - variant="static"      → tarjeta informativa (Stack, Formación).
// - variant="interactive" → se levanta al pasar el mouse (categorías).
// El relleno (padding) lo pones tú con className, porque cambia según el uso.
//
// DÓNDE CAMBIAR: BASE (fondo, borde, sombra) y VARIANTS (efecto hover).
// Los colores y sombras vienen de tokens.css (shadow-card, shadow-card-hover).
// =============================================================================
import type { HTMLAttributes } from 'react';

type Variant = 'static' | 'interactive';

const BASE = 'rounded-xl border border-brand-border bg-brand-surface/40 shadow-card';

const VARIANTS: Record<Variant, string> = {
  static: 'transition-colors hover:border-brand-border-strong',
  interactive:
    'cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:border-brand-border-strong ' +
    'hover:bg-brand-surface hover:shadow-card-hover',
};

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  variant?: Variant;
}

export default function Card({ variant = 'static', className = '', ...rest }: CardProps) {
  return <div className={`${BASE} ${VARIANTS[variant]} ${className}`} {...rest} />;
}
