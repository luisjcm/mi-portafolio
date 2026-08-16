import React, { useEffect, useState } from 'react';
import { useToast } from '../context/ToastContext';

export default function Contacto() {
  const { showToast } = useToast();
  // Estado para rastrear qué campos específicos tienen error
  const [errors, setErrors] = useState<{ name?: boolean; email?: boolean; message?: boolean }>({});

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); 
    
    const form = e.currentTarget;
    const formData = new FormData(form);
    const name = formData.get('name') as string;
    const email = formData.get('email') as string;
    const message = formData.get('message') as string;

    const newErrors: { name?: boolean; email?: boolean; message?: boolean } = {};
    let hasEmptyFields = false;

    // 1. Validar campos vacíos individualmente
    if (!name.trim()) { newErrors.name = true; hasEmptyFields = true; }
    if (!email.trim()) { newErrors.email = true; hasEmptyFields = true; }
    if (!message.trim()) { newErrors.message = true; hasEmptyFields = true; }

    if (hasEmptyFields) {
      setErrors(newErrors);
      showToast("Por favor, completa los campos resaltados en rojo.", "error");
      return;
    }

    // 2. Validar formato de correo electrónico
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setErrors({ email: true });
      showToast("Por favor, ingresa un correo electrónico válido.", "error");
      return;
    }

    // 3. Simulación de envío exitosa
    setErrors({}); // Limpiamos cualquier error residual
    showToast("Formulario inactivo temporalmente. ¡Escríbeme directo al WhatsApp!", "warning");
    form.reset();
  };

  // Función para quitar el borde rojo en cuanto el usuario empieza a escribir
  const clearError = (field: 'name' | 'email' | 'message') => {
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: false }));
    }
  };

  // Helpers para inyectar clases dinámicas basadas en el estado de error
  const getInputClasses = (hasError?: boolean) => {
    const base = "w-full bg-brand-surface-subtle border rounded-lg px-4 py-3 text-[14px] text-brand-text placeholder-brand-muted focus:outline-none focus:ring-1 transition-all resize-none";
    return hasError 
      ? `${base} border-red-500/50 focus:border-red-500 focus:ring-red-500/50`
      : `${base} border-brand-border focus:border-brand-accent/50 focus:ring-brand-accent/50`;
  };

  const getLabelClasses = (hasError?: boolean) => {
    return `text-[13px] font-medium ml-1 transition-colors ${hasError ? 'text-red-400' : 'text-brand-muted'}`;
  };

  return (
    <main className="w-full max-w-[800px] mx-auto p-6 mt-20 md:mt-24 min-h-screen animate-page-enter">
      
      <header className="mb-12">
        <h1 className="text-3xl md:text-4xl font-bold text-brand-text tracking-tight mb-4">
          Trabajemos Juntos
        </h1>
        <p className="text-lg text-brand-muted leading-relaxed max-w-xl">
          ¿Tienes un proyecto en mente, necesitas soporte técnico especializado o buscas un perfil para tu equipo? Hablemos.
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        
        <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-5">
          <div className="flex flex-col gap-2">
            <label htmlFor="name" className={getLabelClasses(errors.name)}>Nombre</label>
            <input 
              type="text" 
              id="name" 
              name="name" 
              required
              placeholder="Ej. Carlos Pérez"
              className={getInputClasses(errors.name)}
              onChange={() => clearError('name')}
            />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="email" className={getLabelClasses(errors.email)}>Email</label>
            <input 
              type="email" 
              id="email" 
              name="email"
              required
              placeholder="carlos@ejemplo.com"
              className={getInputClasses(errors.email)}
              onChange={() => clearError('email')}
            />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="message" className={getLabelClasses(errors.message)}>Mensaje</label>
            <textarea 
              id="message" 
              name="message"
              rows={4} 
              required
              placeholder="Cuéntame sobre tu proyecto..."
              className={getInputClasses(errors.message)}
              onChange={() => clearError('message')}
            ></textarea>
          </div>

          <button 
            type="submit" 
            className="mt-2 w-full font-semibold text-[14px] py-3 rounded-lg transition-all bg-brand-surface text-brand-text hover:bg-brand-surface-subtle active:scale-[0.98]"
          >
            Enviar Mensaje
          </button>
        </form>

        <div className="flex flex-col gap-8 md:pl-8">
          <div>
            <h3 className="text-brand-muted text-[11px] font-bold uppercase tracking-widest mb-3">Email Directo</h3>
            <a href="mailto:contacto@luisjcm.com" className="text-brand-text hover:text-brand-accent transition-colors text-[15px]">
              contacto@luisjcm.com
            </a>
          </div>

          <div>
            <h3 className="text-brand-muted text-[11px] font-bold uppercase tracking-widest mb-3">WhatsApp</h3>
            <a href="https://wa.me/584248887150" target="_blank" rel="noopener noreferrer" className="text-brand-text hover:text-brand-accent transition-colors text-[15px]">
              +58 424 888 7150
            </a>
          </div>

          <div>
            <h3 className="text-brand-muted text-[11px] font-bold uppercase tracking-widest mb-3">Redes</h3>
            <div className="flex gap-4">
              <a href="https://linkedin.com/in/luisjcm" target="_blank" rel="noopener noreferrer" className="text-brand-muted hover:text-brand-text transition-colors underline underline-offset-4 decoration-brand-border hover:decoration-brand-accent">LinkedIn</a>
              <a href="https://github.com/luisjcm" target="_blank" rel="noopener noreferrer" className="text-brand-muted hover:text-brand-text transition-colors underline underline-offset-4 decoration-brand-border hover:decoration-brand-accent">GitHub</a>
            </div>
          </div>
        </div>

      </div>
    </main>
  );
}