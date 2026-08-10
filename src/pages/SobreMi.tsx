import React, { useEffect } from 'react';

export default function SobreMi() {
  // Aseguramos que la vista cargue desde arriba
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="w-full max-w-[800px] mx-auto p-6 mt-20 md:mt-24 min-h-screen animate-page-enter">
      
      <header className="mb-12 relative">
        <div className="absolute -top-10 -left-10 w-32 h-32 bg-brand-accent/10 blur-[60px] rounded-full pointer-events-none"></div>
        <h1 className="text-3xl md:text-4xl font-bold text-brand-text tracking-tight mb-4 relative z-10">
          Sobre Mí
        </h1>
        <p className="text-lg text-brand-muted leading-relaxed max-w-2xl relative z-10">
          Ingeniero de Sistemas fusionando el soporte técnico de misión crítica con el desarrollo web de alto rendimiento.
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-5 gap-12">
        
        {/* Columna Izquierda: Historia */}
        <div className="md:col-span-3 space-y-6 text-brand-muted text-[15px] leading-relaxed">
          <p>
            Soy Luis Jesus Curbata. Mi enfoque profesional se basa en la intersección entre la infraestructura tecnológica y la creación de interfaces de usuario eficientes y escalables.
          </p>
          <p>
            Cuento con 6 años de experiencia en el sector TI. Mis inicios técnicos formales arrancaron en enero de 2020 como pasante, lo que me llevó a mi rol actual como Analista de HelpDesk y Soporte Técnico en Avior Airlines (donde previamente conocí de cerca la operación como Agente de Call Center desde 2018). Esta evolución en un entorno corporativo exigente me ha dado una perspectiva única sobre cómo la tecnología debe resolver problemas reales sin fallar bajo presión.
          </p>
          <p>
            En paralelo, construyo soluciones web de alto volumen como desarrollador freelance para agencias de marketing digital como Clinmedia y Newe Marketing. Me apasiona el ecosistema de JavaScript, construyendo stacks sólidos con React, Tailwind CSS, Node.js y PostgreSQL para bases de datos transaccionales.
          </p>
          <p>
            Para consolidar esta visión integral de la arquitectura de software, completé mi Máster en Full Stack Development certificado por la Universidad Central de Venezuela, manteniéndome siempre en constante aprendizaje.
          </p>
        </div>

        {/* Columna Derecha: Datos rápidos */}
        <div className="md:col-span-2 space-y-8">
          <div>
            <h3 className="text-brand-text font-bold text-[13px] uppercase tracking-wider mb-4 border-b border-brand-border pb-2">Experiencia Core</h3>
            <ul className="space-y-4">
              <li className="flex flex-col gap-1">
                <span className="text-brand-text text-[14px] font-medium">Analista HelpDesk IT</span>
                <span className="text-brand-muted text-[12px]">Avior Airlines • 2020 - Pres.</span>
              </li>
              <li className="flex flex-col gap-1">
                <span className="text-brand-text text-[14px] font-medium">Web Developer Freelance</span>
                <span className="text-brand-muted text-[12px]">Clinmedia & Newe Marketing</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-brand-text font-bold text-[13px] uppercase tracking-wider mb-4 border-b border-brand-border pb-2">Educación</h3>
            <ul className="space-y-4">
              <li className="flex flex-col gap-1">
                <span className="text-brand-text text-[14px] font-medium">Ingeniería de Sistemas</span>
                <span className="text-brand-muted text-[12px]">Titulación Profesional</span>
              </li>
              <li className="flex flex-col gap-1">
                <span className="text-brand-text text-[14px] font-medium">Máster Full Stack Dev</span>
                <span className="text-brand-muted text-[12px]">UCV</span>
              </li>
            </ul>
          </div>
        </div>
        
      </div>
    </main>
  );
}