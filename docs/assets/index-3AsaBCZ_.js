(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e=document.getElementById(`tab-content`),t=document.querySelectorAll(`nav button`),n=document.getElementById(`tab-wrapper`);n.style.minHeight=`300px`;var r={Proyectos:`
<div class="space-y-8">
  <p class="text-zinc-400 text-sm ml-1">Selección de proyectos recientes y colaboraciones internacionales:</p>
  
  <!-- Contenedor principal -->
  <div class="grid grid-cols-1 gap-6">
    

    <!-- Proyecto 1 -->

    


        <div class="group p-5 border border-zinc-800 rounded-2xl bg-zinc-900/10 hover:bg-zinc-900/40 hover:border-zinc-700 transition-all transform ">
            <div class="flex justify-between items-start mb-3">
                    <h3 class="font-bold text-white text-lg group-hover:text-emerald-400 transition-colors">Portfolio Moderno v2.0</h3>

                          <span class="shrink-0 text-[10px] bg-emerald-500/10 text-emerald-400 px-2 py-0.5 rounded-full border border-emerald-500/20">Proyecto en Producción</span>

            </div>

                    <p class="text-xs text-zinc-500 mb-3">Maquetación WordPress & UI Implementation</p>


                    <p class="text-sm text-zinc-400 leading-relaxed mb-4">
                            Mi proyecto más reciente es este portfolio: una SPA (Single Page Application) construida con Vite y Tailwind CSS, enfocada en optimización de rendimiento y micro-animaciones fluidas.
                    </p>



                              <div class="flex flex-wrap gap-2">

                                    <span class="px-2.5 py-1.5 rounded-lg bg-zinc-800/50 text-zinc-400 text-[11px] border border-zinc-700/50 flex items-center gap-1.5 transition-all hover:border-zinc-500">
                                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" class="text-purple-400">
                                        <path d="m13 2-2 10h8l-2 10"/>
                                      </svg>
                                      Vite
                                    </span>

                                    <span class="px-2.5 py-1.5 rounded-lg bg-zinc-800/50 text-zinc-400 text-[11px] border border-zinc-700/50 flex items-center gap-1.5 transition-all hover:border-zinc-500">
                                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" class="text-sky-400">
                                        <path d="M20.24 12.24a6 6 0 0 0-8.49-8.49L5 10.5V19h8.5z"/>
                                        <line x1="16" y1="8" x2="2" y2="22"/>
                                        <line x1="17.5" y1="15" x2="9" y2="15"/>
                                      </svg>
                                      Tailwind CSS
                                    </span>

                                    <span class="px-2.5 py-1.5 rounded-lg bg-zinc-800/50 text-zinc-400 text-[11px] border border-zinc-700/50 flex items-center gap-1.5 transition-all hover:border-zinc-500">
                                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" class="text-yellow-400">
                                        <path d="M20 7h-9l-3-3H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2z"/>
                                        <path d="M16 11l-4 4-2-2"/>
                                      </svg>
                                      JavaScript ES6+
                                    </span>

                              </div>
          </div>

 <!-- Segundo Contenedor: dividido en dos columnas por cada fila -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">


           

<!-- Nuevo Proyecto 2-->

              <div class="group p-4 border border-zinc-800 rounded-2xl bg-zinc-900/10 hover:border-zinc-700 transition-all flex flex-col">
                  
                  <div class="aspect-video mb-4 overflow-hidden rounded-xl bg-zinc-800">
                    <img src="./web6.png" alt="Proyecto Nuevo 2" class="w-full h-full object-cover opacity-70 group-hover:opacity-100 transition-opacity">
                  </div>

                  <div class="flex justify-between items-start gap-4 mb-1">
                    <h4 class="font-bold text-white text-md leading-tight">Migración de Landing Page "The Accelerator" en WordPress.
                    </h4>
                    <span class="shrink-0 text-[10px] bg-emerald-500/10 text-emerald-400 px-2 py-0.5 rounded-full border border-emerald-500/20">Proyecto en Producción</span>
                  </div>

                  <p class="text-xs text-zinc-500 mb-3">Arquitectura de Software y UX Avanzada</p>

                  <div class="flex flex-wrap gap-2 mb-4">
                    <span class="px-2.5 py-1.5 rounded-lg bg-zinc-800/50 text-zinc-400 text-[10px] border border-zinc-700/50 flex items-center gap-1.5 transition-all hover:border-zinc-500">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" class="text-indigo-400">
                        <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><line x1="3" y1="9" x2="21" y2="9"/><line x1="9" y1="21" x2="9" y2="9"/>
                      </svg>
                      Landing Page Design
                    </span>

                    <span class="px-2.5 py-1.5 rounded-lg bg-zinc-800/50 text-zinc-400 text-[10px] border border-zinc-700/50 flex items-center gap-1.5 transition-all hover:border-zinc-500">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" class="text-rose-500">
                        <path d="M17 7l-10 10"/><path d="M7 7l10 10"/>
                      </svg>
                      Unbounce Replica
                    </span>

                  
                  </div>

                  <p class="text-[13px] text-zinc-400 leading-relaxed text-justify">
                          Este proyecto consistió en replicar fielmente el diseño y la funcionalidad de la landing page del programa 'The Accelerator', originalmente alojada en Unbounce, para integrarla de manera óptima en un entorno de WordPress. El cliente necesitaba la flexibilidad y el control que ofrece WordPress sin perder la identidad visual ni la efectividad de sus llamadas a la acción (CTAs) originales. Solución Implementada: Recreación pixel-perfect del diseño original utilizando Elementor Pro. Migración completa de textos, imágenes y estructura de marca. Optimización de velocidad de carga y adaptación 100% responsiva para todos los dispositivos. El resultado final fue una landing page idéntica a la original, pero ahora totalmente administrable, más rápida y lista para potenciar las conversiones del programa.
                  </p>
              </div>

                 <!-- Proyecto 3 -->

                      <div class="group p-4 border border-zinc-800 rounded-2xl bg-zinc-900/10 hover:border-zinc-700 transition-all">

                            <div class="aspect-video mb-4 overflow-hidden rounded-xl bg-zinc-800">

                                    <img src="./web1.jpg" alt="Proyecto Abogados" class="w-full h-full object-cover opacity-70 group-hover:opacity-100 transition-opacity">
                          
                            </div>


                      <div class="flex justify-between items-start gap-4 mb-1">
                      
                            <h4 class="font-bold text-white text-md mb-1">Desarrollo de Plataforma Web Corporativa | Piñero Robledillo Abogados
                            </h4>

                            <span class="shrink-0 text-[9px] bg-amber-500/10 text-amber-500 px-2 py-0.5 rounded-full border border-amber-500/20 font-medium mt-1">Caso de Estudio</span>

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
                              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" class="text-emerald-400">
                                <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/>
                                <line x1="2" y1="20" x2="22" y2="20"/>
                              </svg>
                              Responsive Design
                            </span>
                    </div>

                        <p class="text-[13px] text-zinc-400 leading-relaxed text-justify">
                          Desarrollé una plataforma web de alto impacto para este despacho jurídico, enfocada en proyectar solidez y autoridad profesional. Mediante una arquitectura de información estratégica y maquetación ágil con Elementor Pro y Hello, implementé una interfaz moderna y 100% responsive. El resultado fue un sitio web optimizado en rendimiento que garantiza una experiencia de usuario impecable, logrando una presencia digital robusta alineada con los estándares de confianza del sector legal.


                        </p>
            </div>


              <!-- Proyecto 4 -->
              <div class="group p-4 border border-zinc-800 rounded-2xl bg-zinc-900/10 hover:border-zinc-700 transition-all">

                          <div class="aspect-video mb-4 overflow-hidden rounded-xl bg-zinc-800">

                            <img src="./web3.png" alt="Proyecto Ecommerce" class="w-full h-full object-cover opacity-70 group-hover:opacity-100 transition-opacity">

                          </div>


                  <div class="flex justify-between items-start mb-1">

                            <h4 class="font-bold text-white text-md mb-1">
                            E-commerce Especializado para Mobiliario de Diseño | Maki Tendencias
                            </h4>

                            <span class="shrink-0 text-[9px] bg-amber-500/10 text-amber-500 px-2 py-0.5 rounded-full border border-amber-500/20 font-medium mt-1">Caso de Estudio</span>
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

                          <!-- ChatGPT (AI) -->
                          <span class="px-2.5 py-1.5 rounded-lg bg-zinc-800/50 text-zinc-400 text-[10px] border border-zinc-700/50 flex items-center gap-1.5 transition-all hover:border-zinc-500">
                            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" class="text-emerald-500">
                              <path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"/>
                              <circle cx="12" cy="12" r="2"/>
                            </svg>
                            ChatGPT
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
                            

                            </div>

                      <p class="text-[13px] text-zinc-400 leading-relaxed text-justify">
                        Desarrollé una plataforma de comercio electrónico con WooCommerce para "Maki Tendencias", un negocio enfocado en muebles de diseño exclusivo. Implementé un catálogo visual de alto impacto y una experiencia de compra fluida mediante la integración de pasarelas de pago y gestión de inventario personalizada. El resultado es una tienda online robusta y profesional que proyecta la calidad artesanal de la marca, facilitando la conversión de visitantes en clientes y expandiendo su alcance comercial al entorno digital.
                      </p>
              </div>


              <!-- Proyecto 5-->

              <div class="group p-4 border border-zinc-800 rounded-2xl bg-zinc-900/10 hover:border-zinc-700 transition-all">

                          <div class="aspect-video mb-4 overflow-hidden rounded-xl bg-zinc-800">

                            <img src="./web4.png" alt="Proyecto WordPress" class="w-full h-full object-cover opacity-70 group-hover:opacity-100 transition-opacity">

                          </div>


                  <div class="flex justify-between items-start mb-1">

                            <h4 class="font-bold text-white text-md mb-1">
                            Web Corporativa y Catálogo de Servicios | MGC Legal
                            </h4>

                            <span class="shrink-0 text-[9px] bg-amber-500/10 text-amber-500 px-2 py-0.5 rounded-full border border-amber-500/20 font-medium mt-1">Caso de Estudio</span>
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
                              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" class="text-emerald-400">
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
                            </div>

                          <p class="text-[13px] text-zinc-400 leading-relaxed text-justify">
                            Diseñé y desarrollé la presencia digital de MGC Legal, un estudio jurídico con visión global. El proyecto consistió en la creación de una plataforma concisa y profesional, estructurada como una carta de presentación digital de alto impacto. Utilizando WordPress y Astra, logré una arquitectura de información práctica que organiza sus servicios de forma clara y directa. El resultado es una web ligera, funcional y optimizada, ideal para proyectar la cercanía y el enfoque resolutivo que caracteriza al bufete.
                          </p>
              </div>
              
                  <!-- Proyecto 6-->

                  <div class="group p-4 border border-zinc-800 rounded-2xl bg-zinc-900/10 hover:border-zinc-700 transition-all flex flex-col">
                  
                  <div class="aspect-video mb-4 overflow-hidden rounded-xl bg-zinc-800">
                    <img src="./web5.png" alt="Proyecto Nuevo 1" class="w-full h-full object-cover opacity-70 group-hover:opacity-100 transition-opacity">
                  </div>

                  <div class="flex justify-between items-start gap-4 mb-1">
                    <h4 class="font-bold text-white text-md leading-tight">Plataforma de Gestión Inmobiliaria y Catálogo | Alicante</h4>
                    <span class="shrink-0 text-[9px] bg-amber-500/10 text-amber-500 px-2 py-0.5 rounded-full border border-amber-500/20 font-medium mt-1">Caso de Estudio</span>
                  </div>

                  <p class="text-xs text-zinc-500 mb-3">Estrategia Digital y Desarrollo a Medida</p>

                  <div class="flex flex-wrap gap-2 mb-4">
                    <span class="px-2.5 py-1.5 rounded-lg bg-zinc-800/50 text-zinc-400 text-[10px] border border-zinc-700/50 flex items-center gap-1.5 transition-all hover:border-zinc-500">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" class="text-blue-400"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>
                      WordPress
                    </span>
                    <span class="px-2.5 py-1.5 rounded-lg bg-zinc-800/50 text-zinc-400 text-[10px] border border-zinc-700/50 flex items-center gap-1.5 transition-all hover:border-zinc-500">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" class="text-emerald-400"><path d="m21 21-6-6"/><circle cx="10" cy="10" r="7"/></svg>
                      Optimización
                    </span>
                  </div>

                  <p class="text-[13px] text-zinc-400 leading-relaxed text-justify">
Diseñé y desarrollé la web corporativa para la Inmobiliaria Alicante, enfocada en la visualización estratégica de propiedades y la generación de leads cualificados. Estructuré el sitio sobre el ecosistema WordPress + Astra, configurando galerías de alta resolución optimizadas y formularios de contacto estratégicos para facilitar la conversión de visitantes en clientes potenciales. Una herramienta de ventas digital robusta y profesional que transmite la solidez del mercado inmobiliario, optimizada para dispositivos móviles y con una arquitectura de navegación que reduce la tasa de rebote en las búsquedas de propiedades.

                  </p>
              </div>

              <!-- Proyecto 7-->

              <div class="group p-4 border border-zinc-800 rounded-2xl bg-zinc-900/10 hover:border-zinc-700 transition-all">

                          <div class="aspect-video mb-4 overflow-hidden rounded-xl bg-zinc-800">

                            <img src="./web2.png" alt="Proyecto DeportIA" class="w-full h-full object-cover opacity-70 group-hover:opacity-100 transition-opacity">

                          </div>


                  <div class="flex justify-between items-start mb-1">

                            <h4 class="font-bold text-white text-md mb-1">Plataforma Digital de Innovación Tecnológica | DeportIA</h4>

                            <span class="shrink-0 text-[9px] bg-amber-500/10 text-amber-500 px-2 py-0.5 rounded-full border border-amber-500/20 font-medium mt-1">Caso de Estudio</span>
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
                            </div>

                      <p class="text-[13px] text-zinc-400 leading-relaxed text-justify">
                                  Realicé el desarrollo inicial y la arquitectura de la plataforma, liderando el rediseño visual para alinear la interfaz con las tendencias de IA y optimizar la experiencia de usuario (UX). Implementé una maquetación ágil de interfaces bajo una estructura técnica modular, utilizando herramientas que permiten al cliente gestionar actualizaciones de forma autónoma sin comprometer la integridad del código o el diseño. Una plataforma robusta y escalable que sirve como base sólida para el crecimiento del proyecto, logrando un sitio web de alta disponibilidad que el equipo de DeportIA puede operar con total independencia técnica.

                      </p>
              </div>

              
        </div>




</div>


    </div>
</div>
`,"Stack Tecnico":`
    <div class="grid grid-cols-1 md:grid-cols-2 gap-3 animate-in fade-in duration-500">
      
      <!-- Modern JS -->
      <div class="flex items-center gap-3 p-4 bg-zinc-900/30 border border-zinc-800 rounded-xl hover:border-zinc-600 transition-colors group">
        <svg class="text-zinc-500 group-hover:text-yellow-400 transition-colors" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 7h-9l-3-3H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2z"/><path d="M16 11l-4 4-2-2"/></svg>
        <span class="text-[14px] font-medium text-zinc-300">Modern JS (ES6+)</span>
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

      <!-- Python (Nueva Habilidad) -->
      <div class="flex items-center gap-3 p-4 bg-zinc-900/30 border border-zinc-800 rounded-xl hover:border-zinc-600 transition-colors group">
        <svg class="text-zinc-500 group-hover:text-blue-300 transition-colors" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2v10m0 0l-4-4m4 4l4-4M5 20h14"/></svg>
        <span class="text-[14px] font-medium text-zinc-300">Python (básico)</span>
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
`,Trayectoria:`
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
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
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
`,Formacion:`
<div class="space-y-6 animate-in fade-in">

      <div class="p-4 border border-zinc-800 rounded-xl bg-zinc-900/20">
        <h4 class="font-bold text-white">Ingeniería de Sistemas
        
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-4 h-4 text-blue-500 inline-block ml-1 mb-1">
        <path fill-rule="evenodd" d="M8.603 3.799A4.49 4.49 0 0112 2.25c1.357 0 2.573.6 3.397 1.549a4.49 4.49 0 013.498 1.307 4.49 4.49 0 011.307 3.497A4.49 4.49 0 0121.75 12a4.49 4.49 0 01-1.549 3.397 4.49 4.49 0 01-1.307 3.497 4.49 4.49 0 01-3.497 1.307A4.49 4.49 0 0112 21.75a4.49 4.49 0 01-3.397-1.549 4.49 4.49 0 01-3.498-1.306 4.49 4.49 0 01-1.307-3.498A4.49 4.49 0 012.25 12c0-1.357.6-2.573 1.549-3.397a4.49 4.49 0 011.307-3.497 4.49 4.49 0 013.497-1.307zm7.007 6.387a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clip-rule="evenodd" />
      </svg>
        </h4>
        <p class="text-sm text-zinc-400 font-medium">Pregrado | 2014 - 2021</p>
      </div>

      <div class="p-4 border border-zinc-800 rounded-xl bg-zinc-900/20">
        <h4 class="font-bold text-white">Master en Full Stack Development
        
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-4 h-4 text-blue-500 inline-block ml-1 mb-1">
        <path fill-rule="evenodd" d="M8.603 3.799A4.49 4.49 0 0112 2.25c1.357 0 2.573.6 3.397 1.549a4.49 4.49 0 013.498 1.307 4.49 4.49 0 011.307 3.497A4.49 4.49 0 0121.75 12a4.49 4.49 0 01-1.549 3.397 4.49 4.49 0 01-1.307 3.497 4.49 4.49 0 01-3.497 1.307A4.49 4.49 0 0112 21.75a4.49 4.49 0 01-3.397-1.549 4.49 4.49 0 01-3.498-1.306 4.49 4.49 0 01-1.307-3.498A4.49 4.49 0 012.25 12c0-1.357.6-2.573 1.549-3.397a4.49 4.49 0 011.307-3.497 4.49 4.49 0 013.497-1.307zm7.007 6.387a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clip-rule="evenodd" />
      </svg>
        </h4>
        <p class="text-sm text-zinc-400">UCV - Diplomadosonline.com | 2024 — 2025</p>
      </div>

      <div class="p-4 border border-zinc-800 rounded-xl bg-zinc-900/20">
        <h4 class="font-bold text-white text-teal-400">Certificación JavaScript Moderno
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-4 h-4 text-blue-500 inline-block ml-1 mb-1">
        <path fill-rule="evenodd" d="M8.603 3.799A4.49 4.49 0 0112 2.25c1.357 0 2.573.6 3.397 1.549a4.49 4.49 0 013.498 1.307 4.49 4.49 0 011.307 3.497A4.49 4.49 0 0121.75 12a4.49 4.49 0 01-1.549 3.397 4.49 4.49 0 01-1.307 3.497 4.49 4.49 0 01-3.497 1.307A4.49 4.49 0 0112 21.75a4.49 4.49 0 01-3.397-1.549 4.49 4.49 0 01-3.498-1.306 4.49 4.49 0 01-1.307-3.498A4.49 4.49 0 012.25 12c0-1.357.6-2.573 1.549-3.397a4.49 4.49 0 011.307-3.497 4.49 4.49 0 013.497-1.307zm7.007 6.387a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clip-rule="evenodd" />
      </svg>
        </h4>
        <p class="text-sm text-zinc-400 italic">Udemy - Completado en Abril 2026</p>
      </div>

      

    </div>
`};window.addEventListener(`resize`,()=>{let t=e.scrollHeight;n.style.transition=`none`,n.style.height=`${t}px`,setTimeout(()=>{n.style.transition=`height 0.4s ease-in-out`},50)});function i(i){e.style.opacity=`0`,e.style.transform=`translateX(-20px)`,setTimeout(()=>{e.innerHTML=r[i]||r.Proyectos,n.style.height=n.style.height,requestAnimationFrame(()=>{let t=e.scrollHeight;n.style.height=`${t}px`,n.style.minHeight=`0px`}),e.style.transform=`translateX(20px)`,requestAnimationFrame(()=>{e.style.opacity=`1`,e.style.transform=`translateX(0)`})},300),t.forEach(e=>{e.className=`flex-1 pb-3 text-[12px] md:text[15px] font-semibold transition-all whitespace-nowrap ${e.textContent.trim()===i?`text-white border-b border-white`:`text-zinc-500 hover:text-zinc-300`}`})}i(`Proyectos`),t.forEach(e=>{e.addEventListener(`click`,()=>i(e.textContent.trim()))});