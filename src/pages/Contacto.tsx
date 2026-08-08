import React, { useEffect } from 'react';
import { useToast } from '../context/ToastContext';

export default function Contacto() {
  const { showToast } = useToast();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Disparamos nuestra notificación centralizada con estilo
    showToast("¡Mensaje recibido! Nos pondremos en contacto pronto.", "success");
    
    // Opcional: Limpiar los campos del formulario tras enviar
    (e.target as HTMLFormElement).reset();
  };

  return (
    <main className="w-full max-w-[800px] mx-auto p-6 mt-12 md:mt-20 min-h-screen animate-page-enter">
      
      <header className="mb-12">
        <h1 className="text-3xl md:text-4xl font-bold text-white tracking-tight mb-4">
          Trabajemos Juntos
        </h1>
        <p className="text-lg text-zinc-400 leading-relaxed max-w-xl">
          ¿Tienes un proyecto en mente, necesitas soporte técnico especializado o buscas un perfil para tu equipo? Hablemos.
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        
        {/* Formulario */}
        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          <div className="flex flex-col gap-2">
            <label htmlFor="name" className="text-[13px] text-zinc-300 font-medium ml-1">Nombre</label>
            <input 
              type="text" 
              id="name" 
              required
              placeholder="Ej. Carlos Pérez"
              className="w-full bg-zinc-900/50 border border-zinc-800 rounded-lg px-4 py-3 text-[14px] text-white placeholder-zinc-600 focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/50 transition-all"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="email" className="text-[13px] text-zinc-300 font-medium ml-1">Email</label>
            <input 
              type="email" 
              id="email" 
              required
              placeholder="carlos@ejemplo.com"
              className="w-full bg-zinc-900/50 border border-zinc-800 rounded-lg px-4 py-3 text-[14px] text-white placeholder-zinc-600 focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/50 transition-all"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="message" className="text-[13px] text-zinc-300 font-medium ml-1">Mensaje</label>
            <textarea 
              id="message" 
              rows={4} 
              required
              placeholder="Cuéntame sobre tu proyecto..."
              className="w-full bg-zinc-900/50 border border-zinc-800 rounded-lg px-4 py-3 text-[14px] text-white placeholder-zinc-600 focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/50 transition-all resize-none"
            ></textarea>
          </div>

          <button 
            type="submit" 
            className="mt-2 w-full bg-white text-black font-semibold text-[14px] py-3 rounded-lg hover:bg-zinc-200 transition-colors active:scale-[0.98]"
          >
            Enviar Mensaje
          </button>
        </form>

        {/* Info de contacto directo */}
        <div className="flex flex-col gap-8 md:pl-8">
          <div>
            <h3 className="text-zinc-500 text-[11px] font-bold uppercase tracking-widest mb-3">Email Directo</h3>
            <a href="mailto:hola@luisjcm.com" className="text-white hover:text-blue-400 transition-colors text-[15px]">
              hola@luisjcm.com
            </a>
          </div>

          <div>
            <h3 className="text-zinc-500 text-[11px] font-bold uppercase tracking-widest mb-3">WhatsApp</h3>
            <a href="https://wa.me/584248887150" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-400 transition-colors text-[15px]">
              +58 424 888 7150
            </a>
          </div>

          <div>
            <h3 className="text-zinc-500 text-[11px] font-bold uppercase tracking-widest mb-3">Redes</h3>
            <div className="flex gap-4">
              <a href="https://linkedin.com/in/luisjcm" target="_blank" rel="noopener noreferrer" className="text-zinc-300 hover:text-white transition-colors underline underline-offset-4 decoration-zinc-700 hover:decoration-blue-500">LinkedIn</a>
              <a href="https://github.com/luisjcm" target="_blank" rel="noopener noreferrer" className="text-zinc-300 hover:text-white transition-colors underline underline-offset-4 decoration-zinc-700 hover:decoration-blue-500">GitHub</a>
            </div>
          </div>
        </div>

      </div>
    </main>
  );
}