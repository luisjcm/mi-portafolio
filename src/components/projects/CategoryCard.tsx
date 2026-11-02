// src/components/projects/CategoryCard.tsx
// Tarjeta de categoría ("JavaScript y React · 6 Proyectos"). Antes estaba
// copiada en Home y ProjectsIndex. Etiqueta e icono salen de config/categories.
import Card from '../ui/Card';
import { getCategoryLabel, getCategoryIcon } from '../../config/categories';

interface CategoryCardProps {
  category: string;
  count: number;
  onSelect: () => void;
}

export default function CategoryCard({ category, count, onSelect }: CategoryCardProps) {
  return (
    <Card
      variant="interactive"
      role="button"
      tabIndex={0}
      onClick={onSelect}
      onKeyDown={(event) => {
        if (event.key === 'Enter' || event.key === ' ') {
          event.preventDefault();
          onSelect();
        }
      }}
      className="group flex h-full flex-col p-6"
    >
      <div className="mb-4 flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-brand-surface-subtle text-brand-accent border border-brand-border">
        {getCategoryIcon(category)}
      </div>
      <h3 className="mb-1 text-lg font-bold text-brand-text">{getCategoryLabel(category)}</h3>
      <p className="text-xs text-brand-muted">
        {count} {count === 1 ? 'Proyecto' : 'Proyectos'}
      </p>
      <div className="mt-auto flex items-center justify-between pt-4 text-[13px] font-medium text-brand-accent opacity-70 transition-opacity group-hover:opacity-100">
        <span>Explorar proyectos</span>
        <svg className="h-4 w-4 transform transition-transform group-hover:translate-x-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
          <line x1="5" y1="12" x2="19" y2="12" />
          <polyline points="12 5 19 12 12 19" />
        </svg>
      </div>
    </Card>
  );
}
