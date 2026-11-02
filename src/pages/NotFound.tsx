// src/pages/NotFound.tsx
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

export default function NotFound() {
  const navigate = useNavigate();

  // ESTO ES LO QUE AVISA AL CHAT QUE ESTAMOS EN 404
  useEffect(() => {
    window.dispatchEvent(new Event('enter404'));
    return () => {
      window.dispatchEvent(new Event('leave404'));
    };
  }, []);

  return (
    <main className="w-full max-w-[800px] mx-auto px-5 md:px-6 py-6 min-h-[80vh] flex flex-col items-center justify-center animate-page-enter relative">
      {/* ... el resto de tu código de la tarjeta 404 (grietas, botones, etc.) ... */}
      <div className="bg-brand-surface/30 border border-brand-border/60 rounded-3xl p-8 md:p-12 shadow-2xl backdrop-blur-sm relative overflow-hidden text-center max-w-md w-full">
        
        {/* BORDE ROTO */}
        <div className="absolute top-0 left-0 w-full h-1.5 flex z-10">
          <div className="h-full bg-brand-muted/50 w-[15%]"></div>
          <div className="h-full bg-brand-accent w-[25%]"></div>
          <div className="h-full bg-transparent w-[10%]"></div>
          <div className="h-full bg-brand-muted/80 w-[20%]"></div>
          <div className="h-full bg-transparent w-[5%]"></div>
          <div className="h-full bg-brand-primary/80 w-[25%]"></div>
        </div>

        {/* GRIETAS */}
        <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none opacity-20 mix-blend-screen">
          <svg viewBox="0 0 400 400" className="w-full h-full" preserveAspectRatio="none">
            <g stroke="white" fill="none" strokeLinecap="round" strokeLinejoin="round">
              <path d="M-20 80 L 50 120 L 30 180 L 110 230 L 80 300 L 150 350" strokeWidth="2" />
              <path d="M50 120 L 90 60" strokeWidth="1.5" />
              <path d="M110 230 L 160 180" strokeWidth="1" />
              <path d="M420 150 L 340 180 L 360 250 L 270 280 L 300 360 L 220 410" strokeWidth="2" />
              <path d="M340 180 L 290 130" strokeWidth="1.5" />
              <path d="M270 280 L 210 240" strokeWidth="1" />
            </g>
          </svg>
        </div>

        {/* CONTENIDO */}
        <div className="relative z-10">
          <div className="mx-auto w-24 h-24 bg-brand-bg rounded-full border-2 border-brand-border/50 flex items-center justify-center mb-6 shadow-[inset_0_0_20px_rgba(0,0,0,0.5)] relative group">
            <div className="absolute inset-0 bg-brand-muted/5 rounded-full blur-md"></div>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-14 h-14 text-brand-muted/60 group-hover:text-brand-muted transition-colors">
              <path d="M12 8V4H8" />
              <rect width="16" height="12" x="4" y="8" rx="2" />
              <path d="M2 14h2" />
              <path d="M20 14h2" />
              <path d="M7.5 11L10.5 14" />
              <path d="M10.5 11L7.5 14" />
              <path d="M13.5 11L16.5 14" />
              <path d="M16.5 11L13.5 14" />
            </svg>
          </div>

          <h1 className="text-2xl font-bold text-brand-text mb-3">Página no encontrada (404)</h1>
          <p className="text-sm text-brand-muted leading-relaxed mb-8">
            El enlace que intentas abrir no existe, ha sido movido o la URL está mal escrita. 
            El Cubot se ha desconectado intentando buscar esta ruta.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <button onClick={() => navigate(-1)} className="w-full sm:w-auto px-5 py-2.5 bg-brand-surface border border-brand-border text-brand-text font-semibold text-xs rounded-xl hover:bg-brand-surface-subtle transition-colors cursor-pointer active:scale-95">
              ← Volver atrás
            </button>
            <button onClick={() => navigate('/')} className="w-full sm:w-auto px-5 py-2.5 bg-brand-primary text-white font-semibold text-xs rounded-xl hover:bg-brand-accent transition-colors cursor-pointer active:scale-95 shadow-md shadow-brand-primary/20">
              Ir al Inicio
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}