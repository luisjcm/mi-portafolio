// src/components/ui/Background.tsx
export default function Background() {
  return (
    <div className="fixed inset-0 w-full h-full overflow-hidden -z-10 pointer-events-none bg-brand-bg">
      {/* BLOBS DE LUZ */}
      <div className="absolute -top-[10%] -left-[10%] w-[500px] h-[500px] rounded-full bg-brand-accent/10 blur-[120px]"></div>
      <div className="absolute top-[50%] -right-[10%] w-[600px] h-[600px] rounded-full bg-brand-primary/10 blur-[150px]"></div>
      
      {/* CUADRÍCULA DE PUNTOS */}
      <div className="absolute inset-0 bg-[radial-gradient(var(--color-brand-border)_1px,transparent_1px)] [background-size:24px_24px] opacity-30"></div>
    </div>
  );
}