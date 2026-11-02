// src/features/home/tabs/FormacionTab.tsx
// Pestaña "Formación". Datos en content/formacion.json.
// El elemento con "featured": true lleva el icono resaltado en azul.
import formacionData from '../../../content/formacion.json';
import Card from '../../../components/ui/Card';
import BulletList from '../../../components/ui/BulletList';

export default function FormacionTab() {
  return (
    <div className="space-y-6">
      {formacionData.map((item) => (
        <Card key={item.id} className="flex gap-4 p-4 md:p-5">
          {/* Icono de birrete */}
          <div
            className={`flex mt-1 w-10 h-10 rounded-full items-center justify-center shrink-0 border ${
              item.featured
                ? 'bg-brand-accent/10 border-brand-accent/30 text-brand-accent'
                : 'bg-brand-surface-subtle border-brand-border text-brand-muted'
            }`}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
              <path d="M6 12v5c3 3 9 3 12 0v-5" />
            </svg>
          </div>

          <div>
            <h3 className="text-brand-text font-bold text-[15px]">{item.title}</h3>
            <p className="text-brand-muted text-[12px] font-medium mb-2">
              {item.institution} {item.date ? `• ${item.date}` : ''}
            </p>
            {item.description && <BulletList items={item.description} size="sm" />}
          </div>
        </Card>
      ))}
    </div>
  );
}
