import React, { useEffect } from 'react';

export default function SobreMi() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="relative min-h-screen overflow-hidden pb-20 animate-page-enter">
      
      {/* VECTORES DE FONDO CON TAILWIND (BLOBS DE LUZ) */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
        <div className="absolute -top-[10%] -left-[10%] w-[500px] h-[500px] rounded-full bg-brand-accent/10 blur-[120px]"></div>
        <div className="absolute top-[50%] -right-[10%] w-[600px] h-[600px] rounded-full bg-blue-600/10 blur-[150px]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(#ffffff15_1px,transparent_1px)] [background-size:24px_24px] opacity-30"></div>
      </div>

      <div className="max-w-6xl mx-auto px-6 mt-20 md:mt-24 relative z-10">
        
        {/* CABECERA ESTANDARIZADA */}
        <header className="flex flex-col gap-3 mb-10 md:mb-12 relative z-10">
          <h1 className="text-3xl md:text-4xl font-bold text-brand-text tracking-tight m-0">
            Sobre Mí
          </h1>
          <p className="text-[14px] md:text-lg text-brand-muted leading-relaxed max-w-2xl m-0">
            Soy Ingeniero de Sistemas. Tengo 6 años de experiencia en el sector Soporte Técnico IT, y actualmente tengo 1 año emprendiendo como Desarrollador Web freelance remotamente para agencias digitales.
          </p>
        </header>

        {/* CONTENIDO PRINCIPAL A 3 COLUMNAS (12 Grid) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          
          {/* SECCIÓN IZQUIERDA: GRÁFICO TECH (Ocupa 8 columnas) */}
          <div className="lg:col-span-8 space-y-10">
            
            {/* GRÁFICO TECNOLÓGICO: Ventana de Código */}
            <div className="w-full rounded-xl overflow-hidden border border-brand-border/60 bg-[#0d1117] shadow-2xl relative group">
              <div className="absolute inset-0 bg-linear-to-tr from-brand-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              {/* Barra superior estilo Mac */}
              <div className="flex items-center px-4 py-3 bg-[#161b22] border-b border-brand-border/40">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 rounded-full bg-[#ff5f56]"></div>
                  <div className="w-3 h-3 rounded-full bg-[#ffbd2e]"></div>
                  <div className="w-3 h-3 rounded-full bg-[#27c93f]"></div>
                </div>
                <div className="mx-auto text-[11px] text-brand-muted font-mono">developer.ts</div>
              </div>
              
              {/* Contenido del Código */}
              <div className="p-5 font-mono text-[13px] md:text-[14px] leading-loose overflow-x-auto">
                <span className="text-[#ff7b72]">const</span> <span className="text-[#79c0ff]">luisjcm</span> <span className="text-[#ff7b72]">=</span> <span className="text-[#e6edf3]">{'{'}</span>
                <br/>
                <span className="ml-4 text-[#79c0ff]">rol:</span> <span className="text-[#a5d6ff]">'Frontend Web Developer'</span><span className="text-[#e6edf3]">,</span>
                <br/>
                <span className="ml-4 text-[#79c0ff]">ubicacion:</span> <span className="text-[#a5d6ff]">'Barcelona, Venezuela'</span><span className="text-[#e6edf3]">,</span>
                <br/>
                <span className="ml-4 text-[#79c0ff]">stackPrincipal:</span> <span className="text-[#e6edf3]">[</span>
                <br/>
                <span className="ml-8 text-[#a5d6ff]">'React'</span><span className="text-[#e6edf3]">,</span> <span className="text-[#a5d6ff]">'Tailwind CSS'</span><span className="text-[#e6edf3]">,</span>
                <br/>
                <span className="ml-8 text-[#a5d6ff]">'WordPress'</span><span className="text-[#e6edf3]">,</span> <span className="text-[#a5d6ff]">'Elementor'</span>
                <br/>
                <span className="ml-4 text-[#e6edf3]">],</span>
                <br/>
                <span className="ml-4 text-[#79c0ff]">entorno:</span><span className="text-[#a5d6ff]">'Linux Ubuntu'</span>
                <br/>
                <span className="ml-4 text-[#79c0ff]">estado:</span> <span className="text-[#a5d6ff]">'Desarrollando...'</span>
                <br/>
                <span className="text-[#e6edf3]">{'};'}</span>
              </div>
            </div>

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
                  <div className="absolute w-2.5 h-2.5 bg-brand-accent rounded-full -left-[5.5px] top-1 shadow-[0_0_8px_rgba(59,130,246,0.8)]"></div>
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
                  <div className="absolute w-2.5 h-2.5 bg-brand-accent rounded-full -left-[5.5px] top-1 shadow-[0_0_8px_rgba(59,130,246,0.8)]"></div>
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