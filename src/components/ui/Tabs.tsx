// src/components/ui/Tabs.tsx
// =============================================================================
// BARRA DE PESTAÑAS con subrayado azul en la activa.
// DÓNDE CAMBIAR: colores del subrayado (bg-brand-accent) y del texto.
// =============================================================================
interface TabsProps {
  tabs: string[];
  active: string;
  onChange: (tab: string) => void;
}

export default function Tabs({ tabs, active, onChange }: TabsProps) {
  return (
    <nav className="flex gap-6 border-b border-brand-border mb-8 overflow-x-auto scrollbar-hide w-full">
      {tabs.map((tab) => (
        <button
          key={tab}
          onClick={() => onChange(tab)}
          className={`pb-4 text-[13px] font-medium transition-all relative whitespace-nowrap cursor-pointer shrink-0 ${
            active === tab ? 'text-brand-text' : 'text-brand-muted hover:text-brand-text'
          }`}
        >
          {tab}
          {active === tab && <span className="absolute bottom-0 left-0 w-full h-0.5 bg-brand-accent rounded-t-full" />}
        </button>
      ))}
    </nav>
  );
}
