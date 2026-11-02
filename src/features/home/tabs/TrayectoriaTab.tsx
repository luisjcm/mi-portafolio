// src/features/home/tabs/TrayectoriaTab.tsx
// Pestaña "Trayectoria" (línea de tiempo). Datos en content/trayectoria.json.
// El puesto con "active": true se resalta en azul.
import trayectoriaData from '../../../content/trayectoria.json';
import BulletList from '../../../components/ui/BulletList';

export default function TrayectoriaTab() {
  return (
    <div className="relative border-l border-brand-border ml-3 pl-8 py-2 space-y-10">
      {trayectoriaData.map((item) => (
        <div key={item.id} className="relative">
          {/* Nodo del timeline */}
          <div
            className={`absolute -left-10 top-1.5 w-2.5 h-2.5 rounded-full ring-4 ring-brand-bg ${
              item.active ? 'bg-brand-accent' : 'bg-brand-surface-subtle'
            }`}
          />
          <h3 className="text-brand-text font-bold text-[15px]">{item.role}</h3>
          <p className={`${item.active ? 'text-brand-accent' : 'text-brand-muted'} text-[12px] font-medium mb-3`}>
            {item.company} • {item.period}
          </p>
          <BulletList items={item.description} />
        </div>
      ))}
    </div>
  );
}
