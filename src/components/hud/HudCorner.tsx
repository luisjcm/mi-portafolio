import React from 'react';

export type HudCornerPosition = 'tl' | 'tr' | 'bl' | 'br';

// Clases completas (no dinámicas) para que Tailwind v4 las detecte al escanear.
const POSITION_CLASSES: Record<HudCornerPosition, string> = {
  tl: '-top-px -left-px border-t-[1.5px] border-l-[1.5px]',
  tr: '-top-px -right-px border-t-[1.5px] border-r-[1.5px]',
  bl: '-bottom-px -left-px border-b-[1.5px] border-l-[1.5px]',
  br: '-bottom-px -right-px border-b-[1.5px] border-r-[1.5px]',
};

interface HudCornerProps {
  position: HudCornerPosition;
}

/** Esquina decorativa del marco HUD. Crece al hacer hover sobre un `HudFrame`. */
const HudCorner: React.FC<HudCornerProps> = ({ position }) => (
  <span
    aria-hidden="true"
    className={`pointer-events-none absolute size-3 border-hud-cyan transition-[width,height] duration-300 group-hover/hud:size-5 ${POSITION_CLASSES[position]}`}
  />
);

export default HudCorner;
