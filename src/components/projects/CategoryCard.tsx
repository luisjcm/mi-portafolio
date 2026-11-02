// src/components/projects/CategoryCard.tsx
import Card from '../ui/Card';
import { getCategoryLabel, getCategoryIcon, getCategoryColor } from '../../config/categories';

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
      // group y transiciones para el hover
      className="group flex items-start gap-4 p-5 h-full transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover hover:border-brand-border-strong"
    >
      {/* Contenedor del Ícono: Ahora tiene color dinámico y animación de escala */}
      <div className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-xl border transition-transform duration-300 group-hover:scale-110 ${getCategoryColor(category)}`}>
        {getCategoryIcon(category)}
      </div>

      {/* Contenido de Texto (Al lado derecho) */}
      <div className="flex flex-col flex-1 h-full min-h-[80px]">
        <div>
          <h3 className="text-lg font-bold text-brand-text transition-colors group-hover:text-brand-accent leading-tight">
            {getCategoryLabel(category)}
          </h3>
          <p className="text-xs text-brand-muted mt-1">
            {count} {count === 1 ? 'Proyecto' : 'Proyectos'}
          </p>
        </div>

        {/* Enlace "Explorar" alineado abajo a la derecha */}
        <div className="mt-auto flex items-center justify-between pt-4 text-[13px] font-medium text-brand-accent opacity-70 transition-opacity group-hover:opacity-100">
          <span>Explorar proyectos</span>
          <svg className="h-4 w-4 transform transition-transform group-hover:translate-x-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
            <line x1="5" y1="12" x2="19" y2="12" />
            <polyline points="12 5 19 12 12 19" />
          </svg>
        </div>
      </div>
    </Card>
  );
}