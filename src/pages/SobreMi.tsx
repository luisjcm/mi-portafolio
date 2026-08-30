import React, { useEffect, useState } from 'react';


  // Subcomponente aislado para la animación
const AnimatedTerminal = () => {
  const [text, setText] = useState('');
  
  const fullText = `const luisjcm = {
  rol: 'Freelance Web Developer',
  ubicacion: 'Barcelona, Venezuela',
  stackPrincipal: [
    'React', 'Tailwind CSS',
    'WordPress', 'Elementor'
  ],
  entorno: [
  'Linux Ubuntu', 'Windows', 
  'VS Code', 'GitHub'
  ],
  estado: 'Desarrollando...'
};`;

  useEffect(() => {
    let currentIndex = 0;
    const interval = setInterval(() => {
      setText(fullText.slice(0, currentIndex));
      currentIndex++;
      if (currentIndex > fullText.length) {
        clearInterval(interval);
      }
    }, 35); 
    return () => clearInterval(interval);
  }, [fullText]);

  // Parseador seguro: Usa tokens invisibles
  const highlight = (code: string) => {
    let res = code
      .replace(/'[^']*'?/g, (m) => `\x01${m}\x02`)
      .replace(/\b(const)\b/g, (m) => `\x03${m}\x04`)
      .replace(/(luisjcm|rol:|ubicacion:|stackPrincipal:|entorno:|estado:)/g, (m) => `\x05${m}\x06`)
      .replace(/([={}\[\].,])/g, (m) => `\x07${m}\x08`);

    res = res
      .replace(/\x01/g, '<span style="color: var(--color-brand-accent)">')
      .replace(/\x02/g, '</span>')
      .replace(/\x03/g, '<span style="color: var(--color-brand-primary)">')
      .replace(/\x04/g, '</span>')
      .replace(/\x05/g, '<span style="color: var(--color-brand-text)">')
      .replace(/\x06/g, '</span>')
      .replace(/\x07/g, '<span style="color: var(--color-brand-muted)">')
      .replace(/\x08/g, '</span>');

    return { __html: res };
  };

  return (
    <div className="w-full rounded-xl overflow-hidden border border-brand-border/60 bg-brand-bg shadow-2xl relative group">
      
      {/* 1. PASO: Inyectamos la animación suave estilo VS Code */}
      <style>{`
        @keyframes vscodeSmoothBlink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
        .animate-vscode-blink {
          animation: vscodeSmoothBlink 1s ease-in-out infinite;
        }
      `}</style>

      <div className="absolute inset-0 bg-linear-to-tr from-brand-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      
      {/* Barra superior estilo Mac */}
      <div className="flex items-center px-4 py-3 bg-brand-surface-subtle border-b border-brand-border/40">
        <div className="flex space-x-2">
          <div className="w-3 h-3 rounded-full bg-brand-primary"></div>
          <div className="w-3 h-3 rounded-full bg-brand-accent"></div>
          <div className="w-3 h-3 rounded-full bg-brand-border"></div>
        </div>
        <div className="mx-auto text-[11px] text-brand-muted font-mono">developer.ts</div>
      </div>
      
      {/* Contenedor con ALTURA FIJA */}
      <div className="p-5 h-[340px] sm:h-[380px] md:h-[440px] font-mono text-[10px] sm:text-[12px] md:text-[14px] leading-loose overflow-x-auto whitespace-pre-wrap text-brand-text">
        <code dangerouslySetInnerHTML={highlight(text)}></code>
        
        {/* 2. PASO: Aplicamos la nueva clase 'animate-vscode-blink' al cursor */}
        <span className="inline-block w-[1.5px] sm:w-[2px] h-3 sm:h-4 md:h-5 bg-brand-accent animate-vscode-blink align-middle ml-[1px] -mt-0.5"></span>
      </div>
    </div>
  );
};

export default function SobreMi() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="relative min-h-screen overflow-hidden pb-20 animate-page-enter">
      
      {/* VECTORES DE FONDO CON TAILWIND (BLOBS DE LUZ) */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
        <div className="absolute -top-[10%] -left-[10%] w-[500px] h-[500px] rounded-full bg-brand-accent/10 blur-[120px]"></div>
        <div className="absolute top-[50%] -right-[10%] w-[600px] h-[600px] rounded-full bg-brand-primary/10 blur-[150px]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(var(--color-brand-border)_1px,transparent_1px)] [background-size:24px_24px] opacity-30"></div>
      </div>

      <div className="max-w-6xl mx-auto px-6 mt-20 md:mt-24 relative z-10">
        
        {/* CABECERA ESTANDARIZADA */}
        <header className="flex flex-col gap-3 mb-10 md:mb-12 relative z-10">
          <h1 className="text-3xl md:text-4xl font-bold text-brand-text tracking-tight m-0">
            Sobre Mí
          </h1>
          <p className="text-[14px] md:text-lg text-brand-muted leading-relaxed max-w-2xl m-0">
            Desarrollador Frontend Web y Soporte TI. Mi trayectoria me ha enseñado que el buen diseño web requiere una base técnica impecable. Traduzco requerimientos complejos en aplicaciones web rápidas, responsivas y listas para escalar.
          </p>
        </header>

        {/* CONTENIDO PRINCIPAL A 3 COLUMNAS (12 Grid) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          
          {/* SECCIÓN IZQUIERDA: GRÁFICO TECH (Ocupa 8 columnas) */}
          <div className="lg:col-span-8 space-y-10">
            
            {/* GRÁFICO TECNOLÓGICO ANIMADO */}
            <AnimatedTerminal />

          </div>

          {/* SECCIÓN DERECHA: TIMELINES (Ocupa 4 columnas) */}
          <div className="lg:col-span-4 space-y-10 lg:pl-6 lg:border-l border-brand-border/30 pt-4 lg:pt-0">
            
            {/* EXPERIENCIA CORE */}
            <div>
              <h3 className="text-xs font-bold text-brand-text tracking-widest uppercase mb-6 pb-2 border-b border-brand-border/50 inline-block">
                Experiencia Laboral
              </h3>
              <div className="space-y-6">
                <div className="relative pl-5 border-l border-brand-accent/30 hover:border-brand-accent transition-colors">
                  <div className="absolute w-2.5 h-2.5 bg-brand-accent rounded-full -left-[5.5px] top-1 shadow-brand-accent/70"></div>
                  <h4 className="text-brand-text font-semibold text-[14px]">Analista HelpDesk IT</h4>
                  <p className="text-brand-muted text-[13px] mt-1">Avior Airlines • 2020 - Pres.</p>
                </div>
                <div className="relative pl-5 border-l border-brand-border hover:border-brand-accent/50 transition-colors">
                  <div className="absolute w-2 h-2 bg-brand-surface-subtle rounded-full -left-[4.5px] top-1.5"></div>
                  <h4 className="text-brand-text font-semibold text-[14px]">Web Developer WordPress</h4>
                  <p className="text-brand-muted text-[13px] mt-1">Freelance</p>
                </div>
              </div>
            </div>

            {/* EDUCACIÓN */}
            <div>
              <h3 className="text-xs font-bold text-brand-text tracking-widest uppercase mb-6 pb-2 border-b border-brand-border/50 inline-block">
                Educación
              </h3>
              <div className="space-y-6">
                <div className="relative pl-5 border-l border-brand-accent/30 hover:border-brand-accent transition-colors">
                  <div className="absolute w-2.5 h-2.5 bg-brand-accent rounded-full -left-[5.5px] top-1 shadow-brand-accent/70"></div>
                  <h4 className="text-brand-text font-semibold text-[14px]">Master Full Stack Dev</h4>
                  <p className="text-brand-muted text-[13px] mt-1">DiplomadosOnline.com</p>
                </div>
                <div className="relative pl-5 border-l border-brand-border hover:border-brand-accent/50 transition-colors">
                  <div className="absolute w-2 h-2 bg-brand-surface-subtle rounded-full -left-[4.5px] top-1.5"></div>
                  <h4 className="text-brand-text font-semibold text-[14px]">Ingeniería de Sistemas</h4>
                  <p className="text-brand-muted text-[13px] mt-1">I.U.P "Santiago Mariño"</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </main>
  );
}