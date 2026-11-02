// src/components/ui/BulletList.tsx
// =============================================================================
// LISTA DE VIÑETAS. Si una línea tiene ":" lo anterior se resalta en blanco.
// Ej: "Soluciones E-commerce: tiendas escalables" → "Soluciones E-commerce:" en negrita.
// Antes esta lógica estaba copiada en Trayectoria y Formación.
// DÓNDE CAMBIAR: SIZES (tamaño de texto y separación).
// =============================================================================
type Size = 'md' | 'sm';

const SIZES: Record<Size, { list: string; item: string }> = {
  md: { list: 'gap-2.5', item: 'text-[14px]' },
  sm: { list: 'gap-1.5', item: 'text-[13px]' },
};

interface BulletListProps {
  items: string | string[];
  size?: Size;
}

export default function BulletList({ items, size = 'md' }: BulletListProps) {
  // Si los datos traen un texto simple en vez de un arreglo, se muestra como párrafo
  if (!Array.isArray(items)) {
    return <p className="text-brand-muted text-[14px] leading-relaxed mt-2">{items}</p>;
  }

  const s = SIZES[size];

  return (
    <ul className={`flex flex-col mt-3 ${s.list}`}>
      {items.map((bullet, index) => {
        const colonIndex = bullet.indexOf(':');
        return (
          <li key={index} className={`text-brand-muted ${s.item} leading-relaxed relative pl-4`}>
            <span className="absolute left-0 top-2 w-1.5 h-1.5 bg-brand-border-strong rounded-full" />
            {colonIndex !== -1 ? (
              <>
                <strong className="text-brand-text font-medium">{bullet.substring(0, colonIndex)}:</strong>
                {bullet.substring(colonIndex + 1)}
              </>
            ) : (
              bullet
            )}
          </li>
        );
      })}
    </ul>
  );
}
