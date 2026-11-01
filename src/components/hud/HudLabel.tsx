import React from 'react';

type HudLabelTone = 'muted' | 'critical';

const TONE_CLASSES: Record<HudLabelTone, string> = {
  muted: 'text-brand-muted',
  critical: 'text-hud-cyan',
};

interface HudLabelProps {
  children: React.ReactNode;
  /** `critical` usa el cian HUD: solo para estado, IDs y datos que importan. */
  tone?: HudLabelTone;
  /** Muestra un indicador parpadeante a la izquierda (estado en vivo). */
  pulse?: boolean;
  className?: string;
}

/** Etiqueta técnica en monoespaciada. Usar solo para metadatos, no para contenido. */
const HudLabel: React.FC<HudLabelProps> = ({
  children,
  tone = 'muted',
  pulse = false,
  className = '',
}) => (
  <span
    className={`inline-flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-[0.08em] ${TONE_CLASSES[tone]} ${className}`}
  >
    {pulse && <span aria-hidden="true" className="size-1.5 bg-hud-cyan animate-pulse" />}
    {children}
  </span>
);

export default HudLabel;
