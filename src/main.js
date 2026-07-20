import './style.css'
import './cubot/mount.tsx';


const tabContent = document.getElementById('tab-content');
const buttons = document.querySelectorAll('nav button');

const tabWrapper = document.getElementById('tab-wrapper');
tabWrapper.style.minHeight = "300px";




const projectData = {
    'abogados': {
        title: "Piñero Robledillo Abogados",
        description: "Desarrollé una plataforma web de alto impacto para este despacho jurídico, enfocada en proyectar solidez y autoridad profesional. Mediante una arquitectura de información estratégica y maquetación ágil con Elementor Pro y Hello, implementé una interfaz moderna y 100% responsive. El resultado fue un sitio web optimizado en rendimiento que garantiza una experiencia de usuario impecable, logrando una presencia digital robusta alineada con los estándares de confianza del sector legal.", 
        badges: ['WordPress', 'Elementor Pro', 'Responsive Web Design'],
        images: ['./web1.jpg', './web1-1.jpg', './web1-2.jpg', './web1-3.jpg', './web1-4.jpg'] // Asegúrate de tener estas rutas
    },
    'maki': {
        title: "E-commerce Especializado para Mobiliario de Diseño | Maki Tendencias",
        description: "Desarrollé una plataforma de comercio electrónico con WooCommerce para 'Maki Tendencias', un negocio enfocado en muebles de diseño exclusivo. Implementé un catálogo visual de alto impacto y una experiencia de compra fluida mediante la integración de pasarelas de pago y gestión de inventario personalizada. El resultado es una tienda online robusta y profesional que proyecta la calidad artesanal de la marca, facilitando la conversión de visitantes en clientes y expandiendo su alcance comercial al entorno digital.",
        badges: ['WooCommerce', 'WordPress', 'Gestión de inventario'],
        images: ['./web3.png', './web3-1.png', './web3-2.png', './web3-3.png', './web3-4.png', './web3-5.png', './web3-6.png', './web3-7.png']
    },
    'mgc-legal': {
        title: "Web Corporativa y Catálogo de Servicios | MGC Legal",
        description: "Diseñé y desarrollé la presencia digital de MGC Legal, un estudio jurídico con visión global. El proyecto consistió en la creación de una plataforma concisa y profesional, estructurada como una carta de presentación digital de alto impacto. Utilizando WordPress y Hello, logré una arquitectura de información práctica que organiza sus servicios de forma clara y directa. El resultado es una web ligera, funcional y optimizada, ideal para proyectar la cercanía y el enfoque resolutivo que caracteriza al bufete.",
        badges: ['WordPress', 'Hello Elementor', 'UI/UX Design', 'SEO Optimized', 'Elementor Pro'],
        images: ['./web4.png', './web4-1.png', './web4-2.png', './web4-3.png', './web4-4.png'] // Ajusta las rutas según tus archivos
    },
    'inmobiliaria-alicante': {
        title: "Plataforma de Gestión Inmobiliaria y Catálogo | Alicante",
        description: "Diseñé y desarrollé la web corporativa para la Inmobiliaria Alicante, enfocada en la visualización estratégica de propiedades y la generación de leads cualificados. Estructuré el sitio sobre el ecosistema WordPress + Hello Elementor, configurando galerías de alta resolución optimizadas y formularios de contacto estratégicos para facilitar la conversión de visitantes en clientes potenciales. Una herramienta de ventas digital robusta y profesional que transmite la solidez del mercado inmobiliario, optimizada para dispositivos móviles y con una arquitectura de navegación que reduce la tasa de rebote en las búsquedas de propiedades.",
        badges: ['WordPress', 'Estrategia Digital', 'Hello Elementor', 'Lead Generation'],
        images: ['./web5.png', './web5-1.png', './web5-2.png', './web5-3.png', './web5-4.png', './web5-5.png', './web5-6.png', './web5-7.png', './web5-8.png']
    },
    'deportia': {
        title: "Plataforma Digital de Innovación Tecnológica | DeportIA",
        description: "Realicé el desarrollo inicial y la arquitectura de la plataforma, liderando el rediseño visual para alinear la interfaz con las tendencias de IA y optimizar la experiencia de usuario (UX). Implementé una maquetación ágil de interfaces bajo una estructura técnica modular, utilizando herramientas que permiten al cliente gestionar actualizaciones de forma autónoma sin comprometer la integridad del código o el diseño. Una plataforma robusta y escalable que sirve como base sólida para el crecimiento del proyecto, logrando un sitio web de alta disponibilidad.",
        badges: ['WordPress', 'WooCommerce'],
        images: ['./web2.png', './web2-1.png', './web2-2.png', './web2-3.png', './web2-4.png', './web2-5.png', './web2-6.png', './web2-7.png', './web2-8.png', './web2-9.png', './web2-10.png', './web2-11.png']
    },
    'authapp': {
        title: "AuthApp MFA | Sistema de Autenticación Segura",
        description: "Desarrollo de un Producto Mínimo Viable (MVP) enfocado en la seguridad mediante autenticación de múltiples factores (MFA). Este prototipo funcional demuestra la viabilidad técnica de flujos de registro robustos, gestión de sesiones y validación estricta en el frontend. Como prueba de concepto (PoC), presenta una interfaz limpia y directa que sienta las bases estructurales para una futura implementación a gran escala, priorizando los estándares de protección de datos.",
        badges: ['Seguridad', 'MFA', 'Frontend', 'UI/UX'],
        images: ['./authapp1.jpg', './authapp2.jpg','./authapp3.jpg', './authapp4.jpg','./authapp5.jpg', './authapp6.jpg','./authapp7.jpg',] // Ajusta estas rutas a tus imágenes .webp
    },
    'zstephanie': {
        title: "Portafolio Creativo | Zstephanie",
        description: "Diseño y desarrollo de un portafolio web personalizado integrando Sanity como Headless CMS para la gestión dinámica del contenido visual. Una arquitectura moderna que separa el contenido de la presentación, garantizando un rendimiento óptimo y una experiencia visual fluida que resalta el trabajo de la artista.",
        badges: ['Sanity CMS', 'Headless', 'Web Design', 'UI/UX'],
        images: ['./zstephanie1.png', './zstephanie2.png', './zstephanie3.png']
    },
    'teffy': {
        title: "Plataforma de Estética y Belleza | Teffy Beauty Lab",
        description: "Creación de una plataforma digital atractiva y funcional centrada en la identidad visual de la marca. El sitio integra un carrito de compras dinámico y está estructurado para facilitar tanto la exploración de servicios como la venta directa de productos. Una solución enfocada en optimizar la tasa de conversión y la captura de clientes potenciales, asegurando una experiencia de compra intuitiva y 100% responsiva en dispositivos móviles.",
        badges: ['Web Design', 'UI/UX', 'Estrategia Digital'],
        images: ['./teffy1.png', './teffy2.png', './teffy3.png','./teffy4.png', './teffy5.png', './teffy6.png']
    },
    'portafolio': {
        title: "Portfolio Moderno v3.1 | Single Page Application",
        description: "Desarrollo de mi portafolio personal. Una SPA (Single Page Application) construida desde cero con Vite y Tailwind CSS. Me enfoqué en una arquitectura estática super ligera sin dependencias innecesarias, con micro-animaciones fluidas, manipulación directa del DOM con Vanilla JS y un diseño oscuro moderno enfocado en la experiencia de usuario (UX).",
        badges: ['Vite', 'Tailwind CSS', 'JavaScript ES6+', 'UI/UX'],
        // Nota: asumo que "portafolio.img" te referías a un archivo de imagen. 
        // Cambia la extensión .png por .webp o .jpg si es necesario.
        images: ['./portafolio.png'] 
    }
};

window.showToast = (type) => {
    const toast = document.getElementById('toast');
    const message = document.getElementById('toast-message');
    const iconContainer = document.getElementById('toast-icon');

    // Definición de iconos y mensajes
    const config = {
        'contact': {
            message: "En mantenimiento... ¡Intenta luego!",
            icon: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-amber-400">
         <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"></path>
         <line x1="12" y1="9" x2="12" y2="13"></line>
         <line x1="12" y1="17" x2="12.01" y2="17"></line>
       </svg>`
        },
        'cv': {
            message: "Esto aún no está disponible. ¡Gracias por tu interés!",
            icon: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" class="text-blue-400">
         <circle cx="12" cy="12" r="10"></circle>
         <line x1="12" y1="16" x2="12" y2="12"></line>
         <line x1="12" y1="8" x2="12.01" y2="8"></line>
       </svg>` // Icono de bombilla o idea
        }
    };

    // Aplicar configuración
    const data = config[type];

    if (!data) return;

    message.innerText = data.message;
    iconContainer.innerHTML = data.icon;

    toast.classList.remove('opacity-0', 'translate-y-10', 'pointer-events-none');
    toast.classList.add('opacity-100', 'translate-y-0');

    setTimeout(() => {
        toast.classList.remove('opacity-100', 'translate-y-0');
        toast.classList.add('opacity-0', 'translate-y-10', 'pointer-events-none');
    }, 5000);

};


const content = {

'Proyectos': /* html */ `
<div class="space-y-8">
  <p class="text-zinc-400 text-sm ml-1">Selección de proyectos recientes y colaboraciones internacionales:</p>
  
  <!-- Contenedor principal -->
  <div class="grid grid-cols-1 gap-6">
    <!-- Proyecto 1 -->

    

             

        

        



 <!-- Segundo Contenedor: dividido en dos columnas por cada fila -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">

     <!-- Proyecto Authapp -->
              <div class="group p-4 border border-zinc-800 rounded-2xl bg-zinc-900/10 hover:border-zinc-700 transition-all flex flex-col">
                  
                  <div class="relative aspect-video mb-4 overflow-hidden rounded-xl bg-zinc-950 group/img border border-zinc-800/50 cursor-pointer flex items-center justify-center" onclick="openProjectModal('authapp')">
                      
                      <!-- 1. FONDO DIFUMINADO: Rellena el espacio vacío -->
                      <img src="./authapp1.jpg" alt="Fondo" class="absolute inset-0 w-full h-full object-cover blur-xl opacity-30 scale-125 transition-all duration-500 group-hover:opacity-40">
                      
                      <!-- 2. IMAGEN PRINCIPAL: Más grande (115% de alto) para efecto cercanía y con sombra -->
                      <img src="./authapp1.jpg" alt="Proyecto AuthApp" class="relative z-10 h-[115%] w-auto object-contain drop-shadow-[0_10px_20px_rgba(0,0,0,0.8)] rounded-lg group-hover:scale-105 transition-all duration-500">
                      
                      <!-- Botón superior derecho (z-20 para estar encima de la imagen) -->
                      <div class="absolute top-3 right-3 flex items-center justify-center p-2 bg-white/5 backdrop-blur-md border border-white/10 rounded-xl shadow-xl group-hover/img:opacity-0 transition-all duration-300 z-20">
                          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-white/70">
                              <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7"/>
                          </svg>
                      </div>

                      <!-- Overlay Hover (z-20 para estar encima de todo) -->
                      <div class="absolute inset-0 flex items-center justify-center opacity-0 group-hover/img:opacity-100 transition-opacity duration-300 bg-zinc-900/60 backdrop-blur-[2px] z-20">
                          <div class="flex items-center gap-2 px-5 py-2.5 text-[11px] font-bold text-white bg-zinc-800/50 border border-zinc-700 rounded-full uppercase tracking-widest">
                              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-blue-500">
                                  <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/>
                              </svg>
                              Explorar Galería
                          </div>
                      </div>
                  </div>
                  
                  <div class="flex justify-between items-start gap-4 mb-1">
                      <h4 class="font-bold text-white text-md leading-tight">AuthApp MFA | Autenticación Segura</h4>
                      <span class="shrink-0 text-[9px] bg-blue-500/10 text-blue-400 px-2 py-0.5 rounded-full border border-blue-500/20 font-medium">Nuevo</span>
                  </div>
                  <p class="text-xs text-zinc-500 mb-3">Gestión de Accesos y Seguridad Frontend</p>
                  <div class="flex flex-wrap gap-2 mb-4">
                  <!-- React Native -->
                  <span class="px-2.5 py-1.5 rounded-lg bg-zinc-800/50 text-zinc-400 text-[10px] border border-zinc-700/50 flex items-center gap-1.5 transition-all hover:border-zinc-500">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" class="text-blue-400">
                      <rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect>
                      <line x1="12" y1="18" x2="12.01" y2="18"></line>
                    </svg>
                    React Native
                  </span>
                  <!-- Expo Go -->
                  <span class="px-2.5 py-1.5 rounded-lg bg-zinc-800/50 text-zinc-400 text-[10px] border border-zinc-700/50 flex items-center gap-1.5 transition-all hover:border-zinc-500">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" class="text-violet-400">
                      <polygon points="5 3 19 12 5 21 5 3"></polygon>
                    </svg>
                    Expo Go
                  </span>
                      <span class="px-2.5 py-1.5 rounded-lg bg-zinc-800/50 text-zinc-400 text-[10px] border border-zinc-700/50 flex items-center gap-1.5 transition-all hover:border-zinc-500">
                          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" class="text-emerald-400"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
                          MFA Security
                      </span>
                  </div>
              </div>

              <!-- Proyecto Zstephanie -->
              <div class="group p-4 border border-zinc-800 rounded-2xl bg-zinc-900/10 hover:border-zinc-700 transition-all flex flex-col">
                  <div class="relative aspect-video mb-4 overflow-hidden rounded-xl bg-zinc-800 group/img border border-zinc-800/50 cursor-pointer" onclick="openProjectModal('zstephanie')">
                      <img src="./zstephanie1.png" alt="Portafolio Zstephanie" class="w-full h-full object-cover opacity-70 group-hover:opacity-100 transition-opacity">
                      <div class="absolute top-3 right-3 flex items-center justify-center p-2 bg-white/5 backdrop-blur-md border border-white/10 rounded-xl shadow-xl group-hover/img:opacity-0 transition-all duration-300">
                          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-white/70">
                              <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7"/>
                          </svg>
                      </div>
                      <div class="absolute inset-0 flex items-center justify-center opacity-0 group-hover/img:opacity-100 transition-opacity duration-300 bg-zinc-900/60 backdrop-blur-[2px]">
                          <div class="flex items-center gap-2 px-5 py-2.5 text-[11px] font-bold text-white bg-zinc-800/50 border border-zinc-700 rounded-full uppercase tracking-widest">
                              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-blue-500">
                                  <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/>
                              </svg>
                              Explorar Galería
                          </div>
                      </div>
                  </div>
                  <div class="flex justify-between items-start gap-4 mb-1">
                      <h4 class="font-bold text-white text-md leading-tight">Portafolio Creativo | Zstephanie</h4>
                      <span class="shrink-0 text-[9px] bg-blue-500/10 text-blue-400 px-2 py-0.5 rounded-full border border-blue-500/20 font-medium">Nuevo</span>
                  </div>
                  <p class="text-xs text-zinc-500 mb-3">Integración Headless CMS y Diseño UI</p>
                  <div class="flex flex-wrap gap-2 mb-4">
                  <!-- React -->
                  <span class="px-2.5 py-1.5 rounded-lg bg-zinc-800/50 text-zinc-400 text-[10px] border border-zinc-700/50 flex items-center gap-1.5 transition-all hover:border-zinc-500">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" class="text-cyan-400">
                      <circle cx="12" cy="12" r="2"></circle>
                      <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(45 12 12)"></ellipse>
                      <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(-45 12 12)"></ellipse>
                    </svg>
                    React
                  </span>
                      <span class="px-2.5 py-1.5 rounded-lg bg-zinc-800/50 text-zinc-400 text-[10px] border border-zinc-700/50 flex items-center gap-1.5 transition-all hover:border-zinc-500">
                          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" class="text-rose-500"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/></svg>
                          Sanity CMS
                      </span>
                  </div>
              </div>

       <!-- Proyecto Teffy -->
              <div class="group p-4 border border-zinc-800 rounded-2xl bg-zinc-900/10 hover:border-zinc-700 transition-all flex flex-col">
                  <div class="relative aspect-video mb-4 overflow-hidden rounded-xl bg-zinc-800 group/img border border-zinc-800/50 cursor-pointer" onclick="openProjectModal('teffy')">
                      <img src="./teffy1.png" alt="Teffy Beauty Lab" class="w-full h-full object-cover opacity-70 group-hover:opacity-100 transition-opacity">
                      <div class="absolute top-3 right-3 flex items-center justify-center p-2 bg-white/5 backdrop-blur-md border border-white/10 rounded-xl shadow-xl group-hover/img:opacity-0 transition-all duration-300">
                          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-white/70">
                              <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7"/>
                          </svg>
                      </div>
                      <div class="absolute inset-0 flex items-center justify-center opacity-0 group-hover/img:opacity-100 transition-opacity duration-300 bg-zinc-900/60 backdrop-blur-[2px]">
                          <div class="flex items-center gap-2 px-5 py-2.5 text-[11px] font-bold text-white bg-zinc-800/50 border border-zinc-700 rounded-full uppercase tracking-widest">
                              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-blue-500">
                                  <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/>
                              </svg>
                              Explorar Galería
                          </div>
                      </div>
                  </div>
                  <div class="flex justify-between items-start gap-4 mb-1">
                      <h4 class="font-bold text-white text-md leading-tight">Plataforma Digital | Teffy Beauty Lab</h4>
                      <span class="shrink-0 text-[9px] bg-blue-500/10 text-blue-400 px-2 py-0.5 rounded-full border border-blue-500/20 font-medium">Nuevo</span>
                  </div>
                  <p class="text-xs text-zinc-500 mb-3">Identidad Visual y Experiencia de Usuario</p>
                  <div class="flex flex-wrap gap-2 mb-4">
                  <!-- React -->
                    <span class="px-2.5 py-1.5 rounded-lg bg-zinc-800/50 text-zinc-400 text-[10px] border border-zinc-700/50 flex items-center gap-1.5 transition-all hover:border-zinc-500">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" class="text-cyan-400">
                        <circle cx="12" cy="12" r="2"></circle>
                        <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(45 12 12)"></ellipse>
                        <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(-45 12 12)"></ellipse>
                      </svg>
                      React
                    </span>
                      <span class="px-2.5 py-1.5 rounded-lg bg-zinc-800/50 text-zinc-400 text-[10px] border border-zinc-700/50 flex items-center gap-1.5 transition-all hover:border-zinc-500">
                          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" class="text-pink-400"><path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/></svg>
                          UI/UX Design
                      </span>
                      <!-- WooCommerce -->
                          <span class="px-2.5 py-1.5 rounded-lg bg-zinc-800/50 text-zinc-400 text-[10px] border border-zinc-700/50 flex items-center gap-1.5 transition-all hover:border-zinc-500">
                            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" class="text-amber-500">
                              <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
                            </svg>
                            E-commerce
                          </span>
                  </div>
              </div>

      <!-- Proyecto Portafolio -->
              <div class="group p-4 border border-zinc-800 rounded-2xl bg-zinc-900/10 hover:border-zinc-700 transition-all flex flex-col">
                  
                  <div class="relative aspect-video mb-4 overflow-hidden rounded-xl bg-zinc-800 group/img border border-zinc-800/50 cursor-pointer" onclick="openProjectModal('portafolio')">
                      
                      <img src="./portafolio.png" alt="Portfolio Personal" class="w-full h-full object-cover opacity-70 group-hover:opacity-100 transition-opacity">
                      
                      <div class="absolute top-3 right-3 flex items-center justify-center p-2 bg-white/5 backdrop-blur-md border border-white/10 rounded-xl shadow-xl group-hover/img:opacity-0 transition-all duration-300">
                          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-white/70">
                              <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7"/>
                          </svg>
                      </div>

                      <div class="absolute inset-0 flex items-center justify-center opacity-0 group-hover/img:opacity-100 transition-opacity duration-300 bg-zinc-900/60 backdrop-blur-[2px]">
                          <div class="flex items-center gap-2 px-5 py-2.5 text-[11px] font-bold text-white bg-zinc-800/50 border border-zinc-700 rounded-full uppercase tracking-widest">
                              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-blue-500">
                                  <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/>
                              </svg>
                              Explorar Galería
                          </div>
                      </div>
                  </div>

                  <div class="flex justify-between items-start gap-4 mb-1">
                      <h4 class="font-bold text-white text-md leading-tight">Portfolio Moderno v3.1</h4>
                      
                      <span class="shrink-0 flex items-center gap-1.5 text-[10px] bg-blue-500/10 text-blue-400 px-2 py-0.5 rounded-full border border-blue-500/20">
                          <span class="relative flex h-1.5 w-1.5">
                              <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                              <span class="relative inline-flex rounded-full h-1.5 w-1.5 bg-blue-500"></span>
                          </span>
                          Sitio Activo
                      </span>
                  </div>

                  <p class="text-xs text-zinc-500 mb-3">Single Page Application SPA</p>

                  <div class="flex flex-wrap gap-2 mb-4">
                      <span class="px-2.5 py-1.5 rounded-lg bg-zinc-800/50 text-zinc-400 text-[10px] border border-zinc-700/50 flex items-center gap-1.5 transition-all hover:border-zinc-500">
                          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" class="text-purple-400">
                              <path d="m13 2-2 10h8l-2 10"/>
                          </svg>
                          Vite
                      </span>
                      <span class="px-2.5 py-1.5 rounded-lg bg-zinc-800/50 text-zinc-400 text-[10px] border border-zinc-700/50 flex items-center gap-1.5 transition-all hover:border-zinc-500">
                          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" class="text-sky-400">
                              <path d="M20.24 12.24a6 6 0 0 0-8.49-8.49L5 10.5V19h8.5z"/><line x1="16" y1="8" x2="2" y2="22"/><line x1="17.5" y1="15" x2="9" y2="15"/>
                          </svg>
                          Tailwind CSS
                      </span>
                      <span class="px-2.5 py-1.5 rounded-lg bg-zinc-800/50 text-zinc-400 text-[10px] border border-zinc-700/50 flex items-center gap-1.5 transition-all hover:border-zinc-500">
                          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" class="text-yellow-400">
                              <path d="M20 7h-9l-3-3H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2z"/><path d="M16 11l-4 4-2-2"/>
                          </svg>
                          JavaScript ES6+
                      </span>
                  </div>
              </div>


      <!-- Proyecto Workana-->
    <div class="group p-4 border border-zinc-800 rounded-2xl bg-zinc-900/10 hover:border-zinc-700 transition-all flex flex-col">
          
          <!-- CAMBIO:
               Se añadió cursor-pointer y onclick
               para que toda la imagen sea clickeable -->
        
              <a 
                href="https://dev-theacceleratorwp-ljcm.pantheonsite.io/"
                target="_blank"
                rel="noopener noreferrer"
                class="relative aspect-video mb-4 overflow-hidden rounded-xl bg-zinc-800 group/img border border-zinc-800/50 block cursor-pointer">

                  <img 
                      src="./web6.png" 
                      alt="Proyecto Nuevo 2" 
                      class="w-full h-full object-cover opacity-70 group-hover:opacity-100 transition-opacity">

                  <!-- ICONO SUPERIOR DERECHO -->
                  <div class="absolute top-3 right-3 flex items-center justify-center p-2 
                    bg-white/5 backdrop-blur-md border border-white/10 rounded-xl 
                    shadow-xl group-hover/img:opacity-0 transition-all duration-300">
                    
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-white/70">
                        <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7"/>
                    </svg>
                  </div>

                <!-- CAMBIO:
                     Overlay replicado del proyecto Abogados
                     eliminando el botón <a> -->
                <div class="absolute inset-0 flex items-center justify-center opacity-0 group-hover/img:opacity-100 transition-opacity duration-300 bg-zinc-900/60 backdrop-blur-[2px]">

                    <div class="flex items-center gap-2 px-5 py-2.5 text-[11px] font-bold text-white bg-zinc-800/50 border border-zinc-700 rounded-full uppercase tracking-widest">

                        <!-- Icono -->
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-blue-500">
                            <line x1="7" y1="17" x2="17" y2="7"/>
                            <polyline points="7 7 17 7 17 17"/>
                        </svg>

                        Ver Proyecto
                    </div>
                </div>
  </a>

          <div class="flex justify-between items-start gap-4 mb-1">
            <h4 class="font-bold text-white text-md leading-tight">
              Migración Landing Page "The Accelerator"
            </h4>

            <span class="shrink-0 flex items-center gap-1.5 text-[10px] bg-blue-500/10 text-blue-400 px-2 py-0.5 rounded-full border border-blue-500/20">
                <span class="relative flex h-1.5 w-1.5">
                    <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                    <span class="relative inline-flex rounded-full h-1.5 w-1.5 bg-blue-500"></span>
                </span>
                Sitio Activo
            </span>
          </div>

          <p class="text-xs text-zinc-500 mb-3">
            Réplica Pixel-Perfect y Optimización de Conversión
          </p>

          <div class="flex flex-wrap gap-2 mb-4">

            <span class="px-2.5 py-1.5 rounded-lg bg-zinc-800/50 text-zinc-400 text-[10px] border border-zinc-700/50 flex items-center gap-1.5 transition-all hover:border-zinc-500">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" class="text-indigo-400">
                <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
                <line x1="3" y1="9" x2="21" y2="9"/>
                <line x1="9" y1="21" x2="9" y2="9"/>
              </svg>
              Landing Page Design
            </span>

            <span class="px-2.5 py-1.5 rounded-lg bg-zinc-800/50 text-zinc-400 text-[10px] border border-zinc-700/50 flex items-center gap-1.5 transition-all hover:border-zinc-500">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" class="text-rose-500">
                <path d="M17 7l-10 10"/>
                <path d="M7 7l10 10"/>
              </svg>
              Unbounce Replica
            </span>

          </div>

        <!--  <p class="text-[13px] text-zinc-400 leading-relaxed text-justify">
Este proyecto consistió en replicar fielmente el diseño y la funcionalidad de la landing page del programa 'The Accelerator' de Workana, originalmente alojada en Unbounce, para integrarla de manera óptima en un entorno de WordPress.        </p>-->
</div> 



              <!-- Proyecto de Robledillo Abogados -->

               <div class="group p-4 border border-zinc-800 rounded-2xl bg-zinc-900/10 hover:border-zinc-700 transition-all">

                            <div 
                            class= "relative aspect-video mb-4 overflow-hidden rounded-xl bg-zinc-800 group/img border border-zinc-800/50 cursor-pointer"
                            onclick="openProjectModal('abogados')">

                                    <img src="./web1.jpg" alt="Proyecto Abogados" class="w-full h-full object-cover opacity-70 group-hover:opacity-100 transition-opacity">
                          
                            <div class="absolute top-3 right-3 flex items-center justify-center p-2 bg-white/5 backdrop-blur-md border border-white/10 rounded-xl shadow-xl group-hover/img:opacity-0 transition-all duration-300">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-white/70">
                                <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7"/>
                            </svg>
                        </div>

                        <div class="absolute inset-0 flex items-center justify-center opacity-0 group-hover/img:opacity-100 transition-opacity duration-300 bg-zinc-900/60 backdrop-blur-[2px]">
                        <div class="flex items-center gap-2 px-5 py-2.5 text-[11px] font-bold text-white bg-zinc-800/50 border border-zinc-700 rounded-full uppercase tracking-widest">
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-blue-500">
                                <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/>
                            </svg>
                            Explorar Galería
                        </div>
                    </div>
                  </div>


                      <div class="flex justify-between items-start gap-4 mb-1">
                      
                            <h4 class="font-bold text-white text-md mb-1">Sitio Corporativo | Piñero Robledillo Abogados
                            </h4>

                            <span class="shrink-0 text-[9px] bg-zinc-500/10 text-zinc-500 px-2 py-0.5 rounded-full border border-zinc-500/20 font-medium">
                              Histórico
                          </span>

                      </div>

                                <p class="text-xs text-zinc-500 mb-3">Interfaz Corporativa y Estrategia SEO Legal</p>

                  <div class="flex flex-wrap gap-2 mb-4">
                              <span class="px-2.5 py-1.5 rounded-lg bg-zinc-800/50 text-zinc-400 text-[10px] border border-zinc-700/50 flex items-center gap-1.5 transition-all hover:border-zinc-500">
                              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" class="text-blue-400">
                                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                              </svg>
                              WordPress
                            </span>

                    
                            <span class="px-2.5 py-1.5 rounded-lg bg-zinc-800/50 text-zinc-400 text-[10px] border border-zinc-700/50 flex items-center gap-1.5 transition-all hover:border-zinc-500">
                              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" class="text-blue-400">
                                <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/>
                                <line x1="2" y1="20" x2="22" y2="20"/>
                              </svg>
                              Responsive Design
                            </span>

                            <span class="px-2.5 py-1.5 rounded-lg bg-zinc-800/50 text-zinc-400 text-[10px] border border-zinc-700/50 flex items-center gap-1.5 transition-all hover:border-zinc-500 cursor-default select-none">
                              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" class="text-zinc-500">
                                  <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/>
                              </svg>
                              Snapshot de Diseño
                          </span>

                    </div>

                        
            </div>  

           


              <!-- Proyecto 4 -->
              <div class="group p-4 border border-zinc-800 rounded-2xl bg-zinc-900/10 hover:border-zinc-700 transition-all">

                          <div 
                            class= "relative aspect-video mb-4 overflow-hidden rounded-xl bg-zinc-800 group/img border border-zinc-800/50 cursor-pointer"
                            onclick="openProjectModal('maki')">

                                   <img src="./web3.png" alt="Proyecto Ecommerce" class="w-full h-full object-cover opacity-70 group-hover:opacity-100 transition-opacity">
                          
                            <div class="absolute top-3 right-3 flex items-center justify-center p-2 bg-white/5 backdrop-blur-md border border-white/10 rounded-xl shadow-xl group-hover/img:opacity-0 transition-all duration-300">
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-white/70">
                                    <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7"/>
                                </svg>
                            </div>

                                <div class="absolute inset-0 flex items-center justify-center opacity-0 group-hover/img:opacity-100 transition-opacity duration-300 bg-zinc-900/60 backdrop-blur-[2px]">
                                    <div class="flex items-center gap-2 px-5 py-2.5 text-[11px] font-bold text-white bg-zinc-800/50 border border-zinc-700 rounded-full uppercase tracking-widest">
                                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-blue-500">
                                              <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/>
                                          </svg>
                                          Explorar Galería
                                      </div>
                                  </div>
                  </div>


                  <div class="flex justify-between items-start mb-1">

                            <h4 class="font-bold text-white text-md mb-1">
                            E-commerce Especializado para Mobiliario de Diseño | Maki Tendencias
                            </h4>

                            <span class="shrink-0 text-[9px] bg-zinc-500/10 text-zinc-500 px-2 py-0.5 rounded-full border border-zinc-500/20 font-medium">
                              Histórico
                          </span>
                            </div>

                            <p class="text-xs text-zinc-500 mb-3">UX para E-commerce e Integración de Pasarelas de Pago</p>

                            <div class="flex flex-wrap gap-2 mb-4">
                            
                            <span class="px-2.5 py-1.5 rounded-lg bg-zinc-800/50 text-zinc-400 text-[10px] border border-zinc-700/50 flex items-center gap-1.5 transition-all hover:border-zinc-500">
                            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" class="text-blue-400">
                              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                            </svg>
                            WordPress
                          </span>

                          <!-- WooCommerce -->
                          <span class="px-2.5 py-1.5 rounded-lg bg-zinc-800/50 text-zinc-400 text-[10px] border border-zinc-700/50 flex items-center gap-1.5 transition-all hover:border-zinc-500">
                            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" class="text-amber-500">
                              <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
                            </svg>
                            WooCommerce
                          </span>


                          <!-- Gestión de Inventario -->
                          <span class="px-2.5 py-1.5 rounded-lg bg-zinc-800/50 text-zinc-400 text-[10px] border border-zinc-700/50 flex items-center gap-1.5 transition-all hover:border-zinc-500">
                            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" class="text-rose-400">
                              <path d="M21 8V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v2"/>
                              <path d="M21 12H3"/>
                              <path d="M21 16v2a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-2"/>
                              <rect x="7" y="12" width="10" height="8"/>
                            </svg>
                            Gestión de Inventario
                          </span> 

                          <span class="px-2.5 py-1.5 rounded-lg bg-zinc-800/50 text-zinc-400 text-[10px] border border-zinc-700/50 flex items-center gap-1.5 transition-all hover:border-zinc-500 cursor-default select-none">
                              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" class="text-zinc-500">
                                  <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/>
                              </svg>
                              Snapshot de Diseño
                          </span>
                            

                            </div>

                      
              </div>


              <!-- Proyecto 5-->

              <div class="group p-4 border border-zinc-800 rounded-2xl bg-zinc-900/10 hover:border-zinc-700 transition-all">

                          <div 
                            class= "relative aspect-video mb-4 overflow-hidden rounded-xl bg-zinc-800 group/img border border-zinc-800/50 cursor-pointer"
                            onclick="openProjectModal('mgc-legal')">

                                   <img src="./web4.png" alt="Proyecto WordPress" class="w-full h-full object-cover opacity-70 group-hover:opacity-100 transition-opacity">
                          
                            <div class="absolute top-3 right-3 flex items-center justify-center p-2 bg-white/5 backdrop-blur-md border border-white/10 rounded-xl shadow-xl group-hover/img:opacity-0 transition-all duration-300">
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-white/70">
                                    <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7"/>
                                </svg>
                            </div>

                                <div class="absolute inset-0 flex items-center justify-center opacity-0 group-hover/img:opacity-100 transition-opacity duration-300 bg-zinc-900/60 backdrop-blur-[2px]">
                                    <div class="flex items-center gap-2 px-5 py-2.5 text-[11px] font-bold text-white bg-zinc-800/50 border border-zinc-700 rounded-full uppercase tracking-widest">
                                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-blue-500">
                                              <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/>
                                          </svg>
                                          Explorar Galería
                                      </div>
                                  </div>
                  </div>


                  <div class="flex justify-between items-start mb-1">

                            <h4 class="font-bold text-white text-md mb-1">
                            Web Corporativa y Catálogo de Servicios | MGC Legal
                            </h4>

                            <span class="shrink-0 text-[9px] bg-zinc-500/10 text-zinc-500 px-2 py-0.5 rounded-full border border-zinc-500/20 font-medium">
                              Histórico
                          </span>
                            </div>

                            <p class="text-xs text-zinc-500 mb-3">Identidad Corporativa y Arquitectura de Servicios</p>

                            <div class="flex flex-wrap gap-2 mb-4">
                            
                              <span class="px-2.5 py-1.5 rounded-lg bg-zinc-800/50 text-zinc-400 text-[10px] border border-zinc-700/50 flex items-center gap-1.5 transition-all hover:border-zinc-500">
                            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" class="text-blue-400">
                              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                            </svg>
                            WordPress
                          </span>
                              <span class="px-2.5 py-1.5 rounded-lg bg-zinc-800/50 text-zinc-400 text-[10px] border border-zinc-700/50 flex items-center gap-1.5 transition-all hover:border-zinc-500">
                              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" class="text-pink-400">
                                <path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/>
                              </svg>
                              UI/UX Design
                            </span>

                            <span class="px-2.5 py-1.5 rounded-lg bg-zinc-800/50 text-zinc-400 text-[10px] border border-zinc-700/50 flex items-center gap-1.5 transition-all hover:border-zinc-500">
                              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" class="text-blue-400">
                                <path d="m21 21-6-6"/><circle cx="10" cy="10" r="7"/><path d="M7 10h6"/><path d="M10 7v6"/>
                              </svg>
                              SEO Optimized
                            </span>

                            <span class="px-2.5 py-1.5 rounded-lg bg-zinc-800/50 text-zinc-400 text-[10px] border border-zinc-700/50 flex items-center gap-1.5 transition-all hover:border-zinc-500">
                              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" class="text-red-400">
                                <rect x="3" y="3" width="18" height="18" rx="2"/><path d="M9 9v6"/><path d="M12 9v6"/><path d="M15 9v6"/>
                              </svg>
                              Elementor Pro
                            </span>

                            <span class="px-2.5 py-1.5 rounded-lg bg-zinc-800/50 text-zinc-400 text-[10px] border border-zinc-700/50 flex items-center gap-1.5 transition-all hover:border-zinc-500 cursor-default select-none">
                              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" class="text-zinc-500">
                                  <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/>
                              </svg>
                              Snapshot de Diseño
                          </span>
                            </div>

                          
              </div>
              
                  <!-- Proyecto 6-->

                  <div class="group p-4 border border-zinc-800 rounded-2xl bg-zinc-900/10 hover:border-zinc-700 transition-all flex flex-col">
                  
                  <div 
                            class= "relative aspect-video mb-4 overflow-hidden rounded-xl bg-zinc-800 group/img border border-zinc-800/50 cursor-pointer"
                            onclick="openProjectModal('inmobiliaria-alicante')">

                                   <img src="./web5.png" alt="Proyecto WordPress" class="w-full h-full object-cover opacity-70 group-hover:opacity-100 transition-opacity">
                          
                            <div class="absolute top-3 right-3 flex items-center justify-center p-2 bg-white/5 backdrop-blur-md border border-white/10 rounded-xl shadow-xl group-hover/img:opacity-0 transition-all duration-300">
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-white/70">
                                    <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7"/>
                                </svg>
                            </div>

                                <div class="absolute inset-0 flex items-center justify-center opacity-0 group-hover/img:opacity-100 transition-opacity duration-300 bg-zinc-900/60 backdrop-blur-[2px]">
                                    <div class="flex items-center gap-2 px-5 py-2.5 text-[11px] font-bold text-white bg-zinc-800/50 border border-zinc-700 rounded-full uppercase tracking-widest">
                                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-blue-500">
                                              <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/>
                                          </svg>
                                          Explorar Galería
                                      </div>
                                  </div>
                  </div>

                  <div class="flex justify-between items-start gap-4 mb-1">
                    <h4 class="font-bold text-white text-md leading-tight">Plataforma de Gestión Inmobiliaria y Catálogo | Alicante</h4>
                    
                    <span class="shrink-0 text-[9px] bg-zinc-500/10 text-zinc-500 px-2 py-0.5 rounded-full border border-zinc-500/20 font-medium">
                              Histórico
                          </span>

                  </div>

                  <p class="text-xs text-zinc-500 mb-3">Estrategia Digital y Desarrollo a Medida</p>

                  <div class="flex flex-wrap gap-2 mb-4">
                    <span class="px-2.5 py-1.5 rounded-lg bg-zinc-800/50 text-zinc-400 text-[10px] border border-zinc-700/50 flex items-center gap-1.5 transition-all hover:border-zinc-500">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" class="text-blue-400"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>
                      WordPress
                    </span>
                    <span class="px-2.5 py-1.5 rounded-lg bg-zinc-800/50 text-zinc-400 text-[10px] border border-zinc-700/50 flex items-center gap-1.5 transition-all hover:border-zinc-500">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" class="text-blue-400"><path d="m21 21-6-6"/><circle cx="10" cy="10" r="7"/></svg>
                      Optimización
                    </span>

                    <span class="px-2.5 py-1.5 rounded-lg bg-zinc-800/50 text-zinc-400 text-[10px] border border-zinc-700/50 flex items-center gap-1.5 transition-all hover:border-zinc-500 cursor-default select-none">
                              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" class="text-zinc-500">
                                  <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/>
                              </svg>
                              Snapshot de Diseño
                          </span>

                  </div>

                  
              </div>

              <!-- Proyecto 7-->

              <div class="group p-4 border border-zinc-800 rounded-2xl bg-zinc-900/10 hover:border-zinc-700 transition-all">

                          <div 
                            class= "relative aspect-video mb-4 overflow-hidden rounded-xl bg-zinc-800 group/img border border-zinc-800/50 cursor-pointer"
                            onclick="openProjectModal('deportia')">

                                   <img src="./web2.png" alt="Proyecto DeportIA" class="w-full h-full object-cover opacity-70 group-hover:opacity-100 transition-opacity">
                          
                            <div class="absolute top-3 right-3 flex items-center justify-center p-2 bg-white/5 backdrop-blur-md border border-white/10 rounded-xl shadow-xl group-hover/img:opacity-0 transition-all duration-300">
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-white/70">
                                    <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7"/>
                                </svg>
                            </div>

                                <div class="absolute inset-0 flex items-center justify-center opacity-0 group-hover/img:opacity-100 transition-opacity duration-300 bg-zinc-900/60 backdrop-blur-[2px]">
                                    <div class="flex items-center gap-2 px-5 py-2.5 text-[11px] font-bold text-white bg-zinc-800/50 border border-zinc-700 rounded-full uppercase tracking-widest">
                                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-blue-500">
                                              <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/>
                                          </svg>
                                          Explorar Galería
                                      </div>
                                  </div>
                  </div>


                  <div class="flex justify-between items-start mb-1">

                            <h4 class="font-bold text-white text-md mb-1">Plataforma Digital de Innovación Tecnológica | DeportIA</h4>

                            <span class="shrink-0 text-[9px] bg-zinc-500/10 text-zinc-500 px-2 py-0.5 rounded-full border border-zinc-500/20 font-medium">
                              Histórico
                          </span>
                            </div>

                            <p class="text-xs text-zinc-500 mb-3">Interfaz preparada para IA y Arquitectura Modular</p>

                            <div class="flex flex-wrap gap-2 mb-4">
                            
                              <span class="px-2.5 py-1.5 rounded-lg bg-zinc-800/50 text-zinc-400 text-[10px] border border-zinc-700/50 flex items-center gap-1.5 transition-all hover:border-zinc-500">
                                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" class="text-blue-400">
                                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                                </svg>
                                WordPress
                              </span>

                              
                              <span class="px-2.5 py-1.5 rounded-lg bg-zinc-800/50 text-zinc-400 text-[10px] border border-zinc-700/50 flex items-center gap-1.5 transition-all hover:border-zinc-500">
                                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" class="text-amber-500">
                                  <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
                                </svg>
                                WooCommerce
                              </span>

                          <span class="px-2.5 py-1.5 rounded-lg bg-zinc-800/50 text-zinc-400 text-[10px] border border-zinc-700/50 flex items-center gap-1.5 transition-all hover:border-zinc-500 cursor-default select-none">
                                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" class="text-zinc-500">
                                    <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/>
                                </svg>
                                Snapshot de Diseño
                          </span>

                            </div>

                      
              </div>

              
        </div>




</div>


    </div>
</div>
`,

'Stack Técnico': /* html */ `
    <div class="grid grid-cols-1 md:grid-cols-2 gap-3 animate-in fade-in duration-500">
      
      <!-- Modern JS -->
      <div class="flex items-center gap-3 p-4 bg-zinc-900/30 border border-zinc-800 rounded-xl hover:border-zinc-600 transition-colors group">
        <svg class="text-zinc-500 group-hover:text-yellow-400 transition-colors" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 7h-9l-3-3H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2z"/><path d="M16 11l-4 4-2-2"/></svg>
        <span class="text-[14px] font-medium text-zinc-300">JavaScript (ES6+)</span>
      </div>

      <!-- Tailwind CSS -->
      <div class="flex items-center gap-3 p-4 bg-zinc-900/30 border border-zinc-800 rounded-xl hover:border-zinc-600 transition-colors group">
        <svg class="text-zinc-500 group-hover:text-sky-400 transition-colors" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20.24 12.24a6 6 0 0 0-8.49-8.49L5 10.5V19h8.5z"/><line x1="16" y1="8" x2="2" y2="22"/><line x1="17.5" y1="15" x2="9" y2="15"/></svg>
        <span class="text-[14px] font-medium text-zinc-300">Tailwind CSS</span>
      </div>

      <!-- WordPress/Elementor -->
      <div class="flex items-center gap-3 p-4 bg-zinc-900/30 border border-zinc-800 rounded-xl hover:border-zinc-600 transition-colors group">
        <svg class="text-zinc-500 group-hover:text-blue-500 transition-colors" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>
        <span class="text-[14px] font-medium text-zinc-300">WordPress/Elementor</span>
      </div>

      <div class="flex items-center gap-3 p-4 bg-zinc-900/30 border border-zinc-800 rounded-xl hover:border-zinc-600 transition-colors group">
  <svg 
    class="text-zinc-500 group-hover:text-blue-400 transition-colors" 
    width="20" 
    height="20" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    stroke-width="2" 
    stroke-linecap="round" 
    stroke-linejoin="round"
  >
    <polyline points="16 18 22 12 16 6"></polyline>
    <polyline points="8 6 2 12 8 18"></polyline>
  </svg>
  
  <span class="text-[14px] font-medium text-zinc-300">HTML & CSS</span>
</div>

      <!-- Git & GitHub -->
      <div class="flex items-center gap-3 p-4 bg-zinc-900/30 border border-zinc-800 rounded-xl hover:border-zinc-600 transition-colors group">
        <svg class="text-zinc-500 group-hover:text-white transition-colors" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/></svg>
        <span class="text-[14px] font-medium text-zinc-300">Git & GitHub</span>
      </div>

      <!-- Vite -->
      <div class="flex items-center gap-3 p-4 bg-zinc-900/30 border border-zinc-800 rounded-xl hover:border-zinc-600 transition-colors group">
        <svg class="text-zinc-500 group-hover:text-purple-400 transition-colors" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m13 2-2 10h8l-2 10"/></svg>
        <span class="text-[14px] font-medium text-zinc-300">Vite</span>
      </div>

    </div>
`,

'Trayectoria': /* html */ `
<div class="space-y-8 animate-in fade-in duration-500">
  
  <!-- Experiencia Freelance -->
  <div class="relative pl-6 border-l border-zinc-800">
    <div class="absolute w-3 h-3 bg-white rounded-full -left-[6.5px] top-1"></div>
    
    <h4 class="font-bold text-white text-lg leading-tight">Desarrollador Web WordPress </h4>

      <p class="text-xs text-zinc-500 mb-2">Freelance / Proyectos a medida.</p>

    <div class="flex flex-wrap gap-2 mt-3">
      
      <span class="px-2.5 py-1 rounded-md bg-zinc-800/50 text-blue-400/80 text-[11px] font-medium border border-blue-900/30 flex items-center gap-1.5">
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
        Jun. 2025 - Actualidad
      </span>
      <span class="px-2.5 py-1 rounded-md bg-zinc-800/50 text-zinc-400 text-[11px] font-medium border border-zinc-700/50 flex items-center gap-1.5">
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>
        WordPress
      </span>
      <span class="px-2.5 py-1 rounded-md bg-zinc-800/50 text-zinc-400 text-[11px] font-medium border border-zinc-700/50 flex items-center gap-1.5">
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>
        HTML/CSS/JS
      </span>
    </div>
    
    <p class="text-sm text-zinc-400 mt-4 leading-relaxed">
      Diseño y desarrollo de plataformas web orientadas a la conversión y alto rendimiento. Implementación de interfaces intuitivas (UI/UX), optimización SEO técnica y despliegue de soluciones e-commerce escalables para clientes B2B.
    </p>
  </div>

  <!-- Experiencia Avior Airlines -->
  <div class="relative pl-6 border-l border-zinc-800">
    <div class="absolute w-3 h-3 bg-zinc-800 rounded-full -left-[6.5px] top-1"></div>
    
    <h4 class="font-bold text-white text-lg leading-tight">Analista de Help Desk (Presencial)</h4>
    <p class="text-xs text-zinc-500 mb-2">Avior Airlines C.A.</p>

    <div class="flex flex-wrap gap-2 mt-3">
      <span class="px-2.5 py-1 rounded-md bg-zinc-800/50 text-blue-400/80 text-[11px] font-medium border border-blue-900/30 flex items-center gap-1.5">
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
        Ene. 2020 — Actualidad
      </span>
      <span class="px-2.5 py-1 rounded-md bg-zinc-800/50 text-zinc-400 text-[11px] font-medium border border-zinc-700/50 flex items-center gap-1.5">
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"/><line x1="2" y1="20" x2="22" y2="20"/></svg>
        Soporte IT
      </span>
      <span class="px-2.5 py-1 rounded-md bg-zinc-800/50 text-zinc-400 text-[11px] font-medium border border-zinc-700/50 flex items-center gap-1.5">
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
        Active Directory
      </span>
      <span class="px-2.5 py-1 rounded-md bg-zinc-800/50 text-zinc-400 text-[11px] font-medium border border-zinc-700/50 flex items-center gap-1.5">
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/></svg>
        PRTG Monitor
      </span>
    </div>
    
    <p class="text-sm text-zinc-400 mt-4 leading-relaxed">
      Soporte técnico a gran escala garantizando la continuidad operativa de más de 800 usuarios corporativos. Monitoreo constante de Data Center, resolución de incidencias críticas y mantenimiento de infraestructura IT bajo entornos de alta exigencia.
    </p>
  </div>

</div>
`,

'Formación': /* html */ `
<div class="space-y-6 animate-in fade-in">

      <div class="p-4 border border-zinc-800 rounded-xl bg-zinc-900/20">
        <h4 class="text-xs md:text-xl font-bold text-white">Ingeniería de Sistemas
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-4 h-4 text-blue-500 inline-block ml-1 mb-1">
          <path fill-rule="evenodd" d="M8.603 3.799A4.49 4.49 0 0112 2.25c1.357 0 2.573.6 3.397 1.549a4.49 4.49 0 013.498 1.307 4.49 4.49 0 011.307 3.497A4.49 4.49 0 0121.75 12a4.49 4.49 0 01-1.549 3.397 4.49 4.49 0 01-1.307 3.497 4.49 4.49 0 01-3.497 1.307A4.49 4.49 0 0112 21.75a4.49 4.49 0 01-3.397-1.549 4.49 4.49 0 01-3.498-1.306 4.49 4.49 0 01-1.307-3.498A4.49 4.49 0 012.25 12c0-1.357.6-2.573 1.549-3.397a4.49 4.49 0 011.307-3.497 4.49 4.49 0 013.497-1.307zm7.007 6.387a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clip-rule="evenodd" />
        </svg>
        </h4>
        <p class="text-xs md:text-sm text-zinc-400 font-medium">Pregrado | 2014 - 2021</p>
      </div>

      <div class="p-4 border border-zinc-800 rounded-xl bg-zinc-900/20">
        <h4 class="text-xs md:text-xl font-bold text-white">Master en Full Stack Developer
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-4 h-4 text-blue-500 inline-block ml-1 mb-1">
          <path fill-rule="evenodd" d="M8.603 3.799A4.49 4.49 0 0112 2.25c1.357 0 2.573.6 3.397 1.549a4.49 4.49 0 013.498 1.307 4.49 4.49 0 011.307 3.497A4.49 4.49 0 0121.75 12a4.49 4.49 0 01-1.549 3.397 4.49 4.49 0 01-1.307 3.497 4.49 4.49 0 01-3.497 1.307A4.49 4.49 0 0112 21.75a4.49 4.49 0 01-3.397-1.549 4.49 4.49 0 01-3.498-1.306 4.49 4.49 0 01-1.307-3.498A4.49 4.49 0 012.25 12c0-1.357.6-2.573 1.549-3.397a4.49 4.49 0 011.307-3.497 4.49 4.49 0 013.497-1.307zm7.007 6.387a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clip-rule="evenodd" />
        </svg>
        </h4>
        <p class="text-xs md:text-sm text-zinc-400">UCV - Diplomadosonline.com | 2024 - 2025</p>
      </div>

      <div class="p-4 border border-zinc-800 rounded-xl bg-zinc-900/20">
        <h4 class="text-xs md:text-xl font-bold text-white">Certificación Workana "The Accelerator"
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-4 h-4 text-blue-500 inline-block ml-1 mb-1">
          <path fill-rule="evenodd" d="M8.603 3.799A4.49 4.49 0 0112 2.25c1.357 0 2.573.6 3.397 1.549a4.49 4.49 0 013.498 1.307 4.49 4.49 0 011.307 3.497A4.49 4.49 0 0121.75 12a4.49 4.49 0 01-1.549 3.397 4.49 4.49 0 01-1.307 3.497 4.49 4.49 0 01-3.497 1.307A4.49 4.49 0 0112 21.75a4.49 4.49 0 01-3.397-1.549 4.49 4.49 0 01-3.498-1.306 4.49 4.49 0 01-1.307-3.498A4.49 4.49 0 012.25 12c0-1.357.6-2.573 1.549-3.397a4.49 4.49 0 011.307-3.497 4.49 4.49 0 013.497-1.307zm7.007 6.387a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clip-rule="evenodd" />
        </svg>
        </h4>
        <p class="text-xs md:text-sm text-zinc-400">Workana Academy | Marzo 2026</p>
      </div>

      <div class="p-4 border border-zinc-800 rounded-xl bg-zinc-900/20">
        <h4 class="text-xs md:text-xl font-bold text-white">Certificación JavaScript Moderno
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-4 h-4 text-blue-500 inline-block ml-1 mb-1">
          <path fill-rule="evenodd" d="M8.603 3.799A4.49 4.49 0 0112 2.25c1.357 0 2.573.6 3.397 1.549a4.49 4.49 0 013.498 1.307 4.49 4.49 0 011.307 3.497A4.49 4.49 0 0121.75 12a4.49 4.49 0 01-1.549 3.397 4.49 4.49 0 01-1.307 3.497 4.49 4.49 0 01-3.497 1.307A4.49 4.49 0 0112 21.75a4.49 4.49 0 01-3.397-1.549 4.49 4.49 0 01-3.498-1.306 4.49 4.49 0 01-1.307-3.498A4.49 4.49 0 012.25 12c0-1.357.6-2.573 1.549-3.397a4.49 4.49 0 011.307-3.497 4.49 4.49 0 013.497-1.307zm7.007 6.387a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clip-rule="evenodd" />
        </svg>
        </h4>
        <p class="text-xs md:text-sm text-zinc-400 ">Udemy | Abril 2026</p>
      </div>

      

    </div>
`

};

window.addEventListener('resize', () => {

  const newHeight = tabContent.scrollHeight;
  tabWrapper.style.transition = 'none';
  tabWrapper.style.height = `${newHeight}px`;

  setTimeout(() => {
    tabWrapper.style.transition = 'height 0.4s ease-in-out';
  }, 50);
});

function switchTab (tabName) {


  tabContent.style.opacity = "0";
  tabContent.style.transform = 'translateX(-20px)'

  setTimeout(() => {

    tabContent.innerHTML = content[tabName] || content['Proyectos'];

    tabWrapper.style.height = tabWrapper.style.height;


    requestAnimationFrame(() => {

          const newHeight = tabContent.scrollHeight;
          tabWrapper.style.height = `${newHeight}px`;
        tabWrapper.style.minHeight = "0px";

    });

    tabContent.style.transform = "translateX(20px)";

    requestAnimationFrame(() => {
      tabContent.style.opacity = "1";
      tabContent.style.transform = "translateX(0)";
    });

  }, 300);

  buttons.forEach(btn => {
    const isActive = btn.textContent.trim() === tabName;
    btn.className = `flex-1 pb-3 text-[12px] md:text[15px] font-semibold transition-all whitespace-nowrap ${ 
      isActive ? 'text-white border-b border-white' : 'text-zinc-500 hover:text-zinc-300'
    }`;
  });

  

}

switchTab('Proyectos');

buttons.forEach(btn => {
  btn.addEventListener('click', () => switchTab(btn.textContent.trim()));
});

window.openProjectModal = (id) => {
    const data = projectData[id];
    if (!data) return;

    const modal = document.getElementById('project-modal');
    
    // Inyectar Título y Descripción
    document.getElementById('modal-title').innerText = data.title;
    document.getElementById('modal-description').innerText = data.description;
    
    // Inyectar Badges con estilo minimalista
    const badgeDiv = document.getElementById('modal-badges');
    badgeDiv.innerHTML = data.badges.map(b => `
        <span class="px-2 py-0.5 rounded-md bg-zinc-800/50 text-zinc-400 text-[9px] md:text-[10px] font-medium border border-zinc-700/30 tracking-tight">
            ${b}
        </span>
    `).join('');
    
    // Inyectar Galería de Imágenes (¡AQUÍ ESTÁ EL AJUSTE RESPONSIVE!)
    const galleryDiv = document.getElementById('modal-gallery');
    galleryDiv.innerHTML = data.images.map(img => `
    <div class="w-full rounded-2xl overflow-hidden border border-zinc-800 bg-zinc-900/40 shadow-xl mb-4 flex justify-center p-2 md:p-4">
        <img src="${img}" class="w-full max-h-[60vh] md:max-h-[75vh] object-contain block rounded-xl" alt="Project Capture">
    </div>
`).join('');

    // Mostrar con transición
    modal.classList.remove('hidden');
    modal.classList.add('flex');
    setTimeout(() => {
        modal.classList.add('opacity-100');
        modal.querySelector('.relative').classList.replace('scale-95', 'scale-100');
    }, 10);
};

window.closeModal = () => {
    const modal = document.getElementById('project-modal');
    const content = modal.querySelector('.relative');
    
    modal.classList.remove('opacity-100');
    content.classList.replace('scale-100', 'scale-95');
    
    setTimeout(() => {
        modal.classList.replace('flex', 'hidden');
    }, 300);
};
