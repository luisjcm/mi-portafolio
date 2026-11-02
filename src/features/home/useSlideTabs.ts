// src/features/home/useSlideTabs.ts
// Estado de las pestañas + dirección de la animación:
// al ir a una pestaña posterior el contenido entra por la derecha, y por la
// izquierda al ir a una anterior.
import { useState } from 'react';

export function useSlideTabs(labels: string[]) {
  const [active, setActive] = useState(labels[0]);
  const [direction, setDirection] = useState<'right' | 'left'>('right');

  const select = (next: string) => {
    if (next === active) return;
    setDirection(labels.indexOf(next) > labels.indexOf(active) ? 'right' : 'left');
    setActive(next);
  };

  return { active, direction, select };
}
