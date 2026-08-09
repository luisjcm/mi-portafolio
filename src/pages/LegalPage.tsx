import React, { useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';

interface LegalContent {
  title: string;
  description: string;
  sections: { heading: string; text: string | string[] }[];
}

const LEGAL_DATA: Record<string, LegalContent> = {
  '/privacidad': {
    title: 'Política de Privacidad',
    description: 'Última actualización: Agosto 2026. Esta política detalla cómo se maneja la información en este portafolio.',
    sections: [
      { heading: '1. Recopilación de Datos', text: 'Este sitio web no almacena de forma oculta datos personales de navegación. La información solo se recopila de manera voluntaria cuando utilizas el asistente virtual (Cubot) o te comunicas vía correo electrónico.' },
      { heading: '2. Uso de la Información', text: 'Los datos suministrados en el formulario de contacto o chat (nombre y correo profesional) se utilizan exclusivamente para responder a tus consultas de servicios, ofertas de empleo o feedback técnico.' },
      { heading: '3. Seguridad', text: 'La seguridad de tus datos es una prioridad. Se implementan conexiones cifradas (HTTPS) y servicios de infraestructura en la nube con altos estándares de seguridad (Supabase/PostgreSQL) para evitar accesos no autorizados.' }
    ]
  },
  '/terminos': {
    title: 'Términos de Uso',
    description: 'Última actualización: Agosto 2026. Cláusulas legales sobre el uso y navegación de esta plataforma.',
    sections: [
      { heading: '1. Propiedad Intelectual', text: 'El código fuente, diseño de la interfaz, textos explicativos y casos de estudio expuestos en este portafolio son propiedad intelectual de luisjcm, a menos que se indique lo contrario.' },
      { heading: '2. Uso Permitido', text: 'Queda permitida la visualización del contenido y la descarga del Currículum Vitae para fines exclusivamente profesionales de reclutamiento o revisión técnica. No se autoriza la duplicación masiva del diseño con fines comerciales.' },
      { heading: '3. Limitación de Responsabilidad', text: 'El contenido técnico y los proyectos se presentan "tal cual", como muestra de capacidades profesionales. No me hago responsable por fallos derivados de la implementación externa del código compartido en los repositorios públicos.' }
    ]
  },
  '/accesibilidad': {
    title: 'Declaración de Accesibilidad',
    description: 'Compromiso con la inclusión digital y la usabilidad para todos los usuarios.',
    sections: [
      { heading: '1. Estándares Aplicados', text: 'Este portafolio ha sido maquetado siguiendo las pautas WCAG 2.1 en su nivel AA. Se da prioridad al orden semántico del HTML, navegación por teclado y contraste cromático adecuado sobre el fondo oscuro.' },
      { heading: '2. Características Técnicas', text: [
        '• Contraste de texto optimizado para evitar fatiga visual.',
        '• Estructura responsiva que permite ampliación de fuentes del navegador sin romper el diseño.',
        '• Etiquetas descriptivas en elementos interactivos para lectores de pantalla.'
      ]},
      { heading: '3. Feedback Continuo', text: 'Si encuentras alguna barrera de accesibilidad o tienes problemas al interactuar con el asistente virtual, te invito a reportarlo directamente a contacto@luisjcm.com.' }
    ]
  },
  '/cookies': {
    title: 'Política de Cookies',
    description: 'Transparencia total sobre el almacenamiento de datos locales en tu navegador.',
    sections: [
      { heading: '1. ¿Qué son las cookies?', text: 'Las cookies son pequeños archivos de texto que las plataformas almacenan en tu dispositivo para recordar configuraciones de visualización o estados técnicos.' },
      { heading: '2. Cookies Utilizadas', text: 'Este portafolio es estrictamente técnico y minimalista. Solo utiliza cookies técnicas esenciales para mantener el estado de la sesión del chat interactivo (Cubot) mientras navegas por las pestañas.' },
      { heading: '3. Desactivación', text: 'Puedes restringir, bloquear o borrar las cookies de este o cualquier otro sitio web utilizando la configuración del navegador de tu dispositivo móvil o de escritorio.' }
    ]
  }
};

export default function LegalPage() {
  const { pathname } = useLocation();
  const content = LEGAL_DATA[pathname];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  if (!content) {
    return (
      <main className="w-full max-w-[800px] mx-auto p-6 mt-20 text-center min-h-screen flex flex-col justify-center items-center">
        <h1 className="text-xl font-bold text-white mb-3">Página no encontrada</h1>
        <Link to="/" className="px-4 py-2 bg-white text-black font-semibold text-xs rounded-xl hover:bg-zinc-200 transition-colors">
          Volver al Inicio
        </Link>
      </main>
    );
  }

  return (
    /* 💡 Agregamos key={pathname} para que React reinicie la animación al cambiar de página legal */
    <main 
      key={pathname} 
      className="w-full max-w-[800px] min-w-0 mx-auto px-5 md:px-6 py-6 md:py-8 pb-28 md:pb-16 min-h-screen animate-page-enter"
    >
      
      {/* BOTÓN VOLVER */}
      <div className="mb-6">
        <Link to="/" className="inline-flex items-center gap-2 text-xs font-medium text-zinc-400 hover:text-white transition-colors bg-zinc-900/60 border border-zinc-800 px-3 py-1.5 rounded-lg active:scale-95">
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <line x1="19" y1="12" x2="5" y2="12"></line>
            <polyline points="12 19 5 12 12 5"></polyline>
          </svg>
          Volver al Inicio
        </Link>
      </div>

      {/* ENCABEZADO */}
      <header className="mb-8 border-b border-zinc-800/60 pb-6">
        <h1 className="text-xl md:text-2xl font-bold text-white tracking-tight mb-2">
          {content.title}
        </h1>
        <p className="text-[13px] text-zinc-400 leading-relaxed max-w-2xl">
          {content.description}
        </p>
      </header>

      {/* SECCIONES DINÁMICAS */}
      <div className="space-y-6">
        {content.sections.map((section, idx) => (
          <section key={idx} className="space-y-2">
            <h2 className="text-sm md:text-base font-bold text-white">
              {section.heading}
            </h2>
            {Array.isArray(section.text) ? (
              <ul className="space-y-1.5 pl-2">
                {section.text.map((line, i) => (
                  <li key={i} className="text-[13px] md:text-sm text-zinc-300 leading-relaxed">
                    {line}
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-[13px] md:text-sm text-zinc-300 leading-relaxed">
                {section.text}
              </p>
            )}
          </section>
        ))}
      </div>

    </main>
  );
}