// src/components/ui/Tag.tsx
// =============================================================================
// CHIP de tecnología (React, Tailwind, etc.).
// DÓNDE CAMBIAR: SIZES (tamaños) o la constante BASE (colores).
// =============================================================================
import type { ReactNode } from 'react';

type Size = 'md' | 'sm';

const BASE = 'rounded-md border border-brand-border bg-brand-surface-subtle text-brand-muted';

const SIZES: Record<Size, string> = {
  md: 'px-3 py-1.5 text-[12px]',
  sm: 'px-2.5 py-1 text-[11px] font-medium',
};

export default function Tag({ size = 'md', children }: { size?: Size; children: ReactNode }) {
  return <span className={`${BASE} ${SIZES[size]}`}>{children}</span>;
}
