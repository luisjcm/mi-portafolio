import React, { createContext, useContext, useState, ReactNode } from 'react';

// 1. Definimos los tipos de alertas disponibles
export type ToastType = 'success' | 'error' | 'info' | 'warning';

interface ToastContextType {
  showToast: (message: string, type?: ToastType) => void;
}

const ToastContext = createContext<ToastContextType | undefined>(undefined);

export function ToastProvider({ children }: { children: ReactNode }) {
  const [toast, setToast] = useState<{ message: string; type: ToastType } | null>(null);

  const showToast = (message: string, type: ToastType = 'success') => {
    setToast({ message, type });
    
    // Auto-ocultar después de 4 segundos
    setTimeout(() => {
      setToast(null);
    }, 4000);
  };

return (
    <ToastContext.Provider value={{ showToast }}>
      {children}
      
      {/* COMPONENTE VISUAL DEL TOAST (Responsivo: Protege el espacio de Cubot en móvil) */}
      {toast && (
        <div className={`fixed top-5 left-1/2 -translate-x-1/2 md:top-auto md:bottom-6 md:left-6 md:translate-x-0 z-200 flex items-center gap-2.5 px-3.5 py-2.5 rounded-xl border bg-brand-surface-subtle shadow-2xl shadow-brand-accent/20 transition-all duration-300 animate-page-enter w-fit max-w-[85vw] md:max-w-sm text-left
    ${toast.type === 'success' ? 'border-brand-primary/50 text-brand-primary' : ''}
    ${toast.type === 'error' ? 'border-brand-accent/50 text-brand-accent' : ''}
    ${toast.type === 'info' ? 'border-brand-accent/50 text-brand-accent' : ''}
    ${toast.type === 'warning' ? 'border-brand-primary/50 text-brand-primary' : ''}
  `}>
          
          {/* Iconos con tamaño responsivo y flex-shrink-0 para evitar que se aplasten si el texto baja de línea */}
          {toast.type === 'success' && (
            <svg className="w-4 h-4 md:w-[18px] md:h-[18px] flex-shrink-0 mt-0.5 md:mt-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>
          )}
          {toast.type === 'error' && (
            <svg className="w-4 h-4 md:w-[18px] md:h-[18px] flex-shrink-0 mt-0.5 md:mt-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line></svg>
          )}
          {toast.type === 'info' && (
            <svg className="w-4 h-4 md:w-[18px] md:h-[18px] flex-shrink-0 mt-0.5 md:mt-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg>
          )}
          {toast.type === 'warning' && (
            <svg className="w-4 h-4 md:w-[18px] md:h-[18px] flex-shrink-0 mt-0.5 md:mt-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path><line x1="12" y1="9" x2="12" y2="13"></line><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>
          )}
          
          {/* Texto ligeramente más pequeño en móviles */}
          <p className="text-[12px] md:text-[13px] text-brand-muted font-normal leading-snug">            
            {toast.message}
          </p>
        </div>
      )}
    </ToastContext.Provider>
  );
}

// 2. Custom Hook para consumir el contexto fácilmente
export function useToast() {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error('useToast debe ser usado dentro de un ToastProvider');
  }
  return context;
}