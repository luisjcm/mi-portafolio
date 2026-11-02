// src/components/ui/Button.tsx
// =============================================================================
// BOTÓN REUTILIZABLE (con efecto de "rayo de luz" al pasar el mouse).
// - Con `href`  → se dibuja como enlace <a> (abre en pestaña nueva si es externo).
// - Sin `href`  → se dibuja como <button>.
//
// DÓNDE CAMBIAR EL ASPECTO DE TODOS LOS BOTONES DEL SITIO:
//   · VARIANTS → colores de cada tipo de botón
//   · SIZES    → tamaños
// =============================================================================
import type { ReactNode } from 'react';

type Variant = 'primary' | 'secondary';
type Size = 'md' | 'icon';

// Colores por variante. Usan SOLO tokens de tokens.css (nunca hex).
const VARIANTS: Record<Variant, { box: string; shine: string; icon: string }> = {
  // Acción principal: azul sólido
  primary: {
    box: 'bg-brand-primary border-brand-primary text-white hover:bg-brand-accent hover:border-brand-accent',
    shine: 'via-white/25',
    icon: 'text-white',
  },
  // Acción secundaria: superficie oscura con borde
  secondary: {
    box: 'bg-brand-surface-subtle border-brand-border text-brand-text hover:border-brand-border-strong',
    shine: 'via-brand-accent/20',
    icon: 'text-brand-accent',
  },
};

// Tamaños: "md" = botón con texto, "icon" = cuadrado solo con icono
const SIZES: Record<Size, string> = {
  md: 'flex-1 min-w-[115px] max-w-[140px] py-2 md:py-2.5 text-[12px] md:text-[13px]',
  icon: 'h-9 w-9 md:h-10 md:w-10',
};

// Clases comunes a todos los botones
const BASE =
  'group relative inline-flex items-center justify-center overflow-hidden rounded-[10px] border font-semibold ' +
  'transition-all active:scale-95 no-underline cursor-pointer shrink-0';

// Tamaño del icono dentro del botón
const ICON_SIZE = '[&>svg]:w-3.5 [&>svg]:h-3.5 md:[&>svg]:w-4 md:[&>svg]:h-4 shrink-0';

interface ButtonProps {
  variant?: Variant;
  size?: Size;
  href?: string;
  onClick?: () => void;
  icon?: ReactNode;
  ariaLabel?: string; // obligatorio en botones que solo tienen icono
  children?: ReactNode;
}

export default function Button({
  variant = 'secondary',
  size = 'md',
  href,
  onClick,
  icon,
  ariaLabel,
  children,
}: ButtonProps) {
  const v = VARIANTS[variant];
  const className = `${BASE} ${SIZES[size]} ${v.box}`;

  // Contenido: rayo de luz + icono + texto
  const content = (
    <>
      <span
        className={`absolute inset-0 bg-linear-to-r from-transparent ${v.shine} to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000`}
      />
      <span className="relative flex items-center justify-center gap-2">
        {icon && <span className={`flex ${v.icon} ${ICON_SIZE}`}>{icon}</span>}
        {children}
      </span>
    </>
  );

  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" aria-label={ariaLabel} className={className}>
        {content}
      </a>
    );
  }

  return (
    <button type="button" onClick={onClick} aria-label={ariaLabel} className={className}>
      {content}
    </button>
  );
}
