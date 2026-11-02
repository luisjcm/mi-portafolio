// src/components/ui/TabSkeleton.tsx
// Placeholder animado mientras carga una pestaña lazy.
// Forma única: rectángulos anchos, con shimmer sutil.
export default function TabSkeleton({ rows = 3 }: { rows?: number }) {
  return (
    <div
      className="tab-skeleton"
      aria-busy="true"
      aria-live="polite"
      aria-label="Cargando contenido"
    >
      {Array.from({ length: rows }).map((_, i) => (
        <div key={i} className="tab-skeleton__item" />
      ))}
    </div>
  );
}