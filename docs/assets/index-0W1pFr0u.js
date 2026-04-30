(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e=document.getElementById(`tab-content`),t=document.querySelectorAll(`nav button`),n={Proyectos:`
<div class="space-y-6 animate-in fade-in duration-500">
  <p class="text-zinc-400 text-sm ml-1">Trabajos destacados como Web Developer & Systems Engineer:</p>
  
  <div class="grid grid-cols-1 gap-4">
    <!-- Proyecto 1: E-commerce -->
    <div class="group p-5 border border-zinc-800 rounded-2xl bg-zinc-900/10 hover:bg-zinc-900/40 hover:border-zinc-700 transition-all cursor-pointer">
      <div class="flex justify-between items-start mb-3">
        <h3 class="font-bold text-white text-lg group-hover:text-blue-400 transition-colors">E-commerce de Alto Rendimiento</h3>
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="text-zinc-600 group-hover:text-white transition-colors"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
      </div>
      
      <p class="text-sm text-zinc-400 leading-relaxed mb-4">
        Despliegue ágil de una tienda virtual utilizando el ecosistema WordPress y WooCommerce, optimizada para tiempos de carga mínimos bajo estándares de Core Web Vitals.
      </p>
      
      <!-- Badges de Tecnología -->
      <div class="flex flex-wrap gap-2">
        <span class="px-2.5 py-1 rounded-md bg-zinc-800/50 text-zinc-400 text-[11px] font-medium border border-zinc-700/50 flex items-center gap-1">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>
          WordPress
        </span>
        <span class="px-2.5 py-1 rounded-md bg-zinc-800/50 text-zinc-400 text-[11px] font-medium border border-zinc-700/50 flex items-center gap-1">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/></svg>
          WooCommerce
        </span>
        <span class="px-2.5 py-1 rounded-md bg-zinc-800/50 text-zinc-400 text-[11px] font-medium border border-zinc-700/50 flex items-center gap-1">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m13 2-2 10h8l-2 10"/></svg>
          Optimization
        </span>
      </div>
    </div>

    <!-- Proyecto 2: Landing Page Moderna -->
    <div class="group p-5 border border-zinc-800 rounded-2xl bg-zinc-900/10 hover:bg-zinc-900/40 hover:border-zinc-700 transition-all cursor-pointer">
      <div class="flex justify-between items-start mb-3">
        <h3 class="font-bold text-white text-lg group-hover:text-blue-400 transition-colors">Portfolio Moderno v2</h3>
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="text-zinc-600 group-hover:text-white transition-colors"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
      </div>
      
      <p class="text-sm text-zinc-400 leading-relaxed mb-4">
        Desarrollo de sitio personal con arquitectura SPA utilizando Vite y Tailwind CSS, enfocado en una experiencia de usuario fluida y diseño minimalista.
      </p>
      
      <div class="flex flex-wrap gap-2">
        <span class="px-2.5 py-1 rounded-md bg-zinc-800/50 text-zinc-400 text-[11px] font-medium border border-zinc-700/50 flex items-center gap-1">
          Vite
        </span>
        <span class="px-2.5 py-1 rounded-md bg-zinc-800/50 text-zinc-400 text-[11px] font-medium border border-zinc-700/50 flex items-center gap-1">
          Tailwind CSS
        </span>
        <span class="px-2.5 py-1 rounded-md bg-zinc-800/50 text-zinc-400 text-[11px] font-medium border border-zinc-700/50 flex items-center gap-1">
          JavaScript ES6+
        </span>
      </div>
    </div>
  </div>
</div>
`,"Stack Tecnico":`
    <div class="grid grid-cols-2 gap-3 animate-in fade-in">
      <div class="p-3 bg-zinc-900/30 border border-zinc-800 rounded-lg text-center">Modern JS (ES6+)</div>
      <div class="p-3 bg-zinc-900/30 border border-zinc-800 rounded-lg text-center">Tailwind CSS</div>
      <div class="p-3 bg-zinc-900/30 border border-zinc-800 rounded-lg text-center">WordPress/Elementor</div>
      <div class="p-3 bg-zinc-900/30 border border-zinc-800 rounded-lg text-center">Ubuntu 24.04 LTS</div>
      <div class="p-3 bg-zinc-900/30 border border-zinc-800 rounded-lg text-center">Git & GitHub</div>
      <div class="p-3 bg-zinc-900/30 border border-zinc-800 rounded-lg text-center">Vite</div>
    </div>
`,Trayectoria:`
<div class="space-y-6 animate-in fade-in">
      <div class="relative pl-6 border-l border-zinc-800">
        <div class="absolute w-3 h-3 bg-white rounded-full -left-[6.5px] top-1"></div>
        
        <h4 class="font-bold text-white">IT Support Analyst - Avior Airlines</h4>
        
        <span class="text-xs text-zinc-500">2020 — Presente</span>
        
        <p class="text-sm text-zinc-400 mt-2">Analista senior de soporte técnico e infraestructura IT.</p>

      </div>
      <div class="relative pl-6 border-l border-zinc-800">

        <div class="absolute w-3 h-3 bg-zinc-800 rounded-full -left-[6.5px] top-1"></div>
        
        <h4 class="font-bold text-white">Magíster en Full Stack Development</h4>
        
        <span class="text-xs text-zinc-500">UCV</span>
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
`};function r(r){t.forEach(e=>{e.className=`flex-1 pb-3 text-[12px] md-text[15px] font-semibold transition-all whitespace-nowrap ${e.textContent.trim()===r?`text-white border-b border-white`:`text-zinc-500 hover:text-zinc-300`}`}),e.innerHTML=n[r]||n.Proyectos}r(`Proyectos`),t.forEach(e=>{e.addEventListener(`click`,()=>r(e.textContent.trim()))});