import React from 'react';
import HudCorner from './HudCorner';
import HudLabel from './HudLabel';

interface HudFrameProps {
  children: React.ReactNode;
  /** Etiqueta superior izquierda, p. ej. "ID // LC-001". */
  label?: React.ReactNode;
  /** Indicador superior derecho en cian, p. ej. "Sys online". */
  status?: React.ReactNode;
  /** Aplica `p-5`. Desactívalo si el contenido necesita ir al borde. */
  padded?: boolean;
  as?: 'div' | 'section' | 'article';
  className?: string;
}

/** Contenedor con marcos de esquina estilo HUD. Es presentacional: no altera el layout interno. */
const HudFrame: React.FC<HudFrameProps> = ({
  children,
  label,
  status,
  padded = true,
  as: Tag = 'div',
  className = '',
}) => (
  <Tag
    className={`group/hud relative border border-brand-border/70 bg-brand-surface/80 ${padded ? 'p-5' : ''} ${className}`}
  >
    <HudCorner position="tl" />
    <HudCorner position="tr" />
    <HudCorner position="bl" />
    <HudCorner position="br" />

    {(label || status) && (
      <div className="mb-4 flex flex-wrap items-center justify-between gap-x-3 gap-y-1.5">
        {label ? <HudLabel>{label}</HudLabel> : <span />}
        {status && (
          <HudLabel tone="critical" pulse>
            {status}
          </HudLabel>
        )}
      </div>
    )}

    {children}
  </Tag>
);

export default HudFrame;
