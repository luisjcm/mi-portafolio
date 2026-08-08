import React, { createContext, useContext, useState, ReactNode } from 'react';

// 1. Definimos los tipos de alertas disponibles
export type ToastType = 'success' | 'error' | 'info';

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
      
      {/* COMPONENTE VISUAL DEL TOAST (Top-Center y diseño de píldora) */}
      {toast && (
        <div className={`fixed top-24 left-1/2 -translate-x-1/2 z-[200] flex items-center gap-3 px-5 py-3 rounded-full border backdrop-blur-xl bg-zinc-900/95 shadow-2xl transition-all duration-300 animate-page-enter
          ${toast.type === 'success' ? 'border-green-500/30 text-green-400' : ''}
          ${toast.type === 'error' ? 'border-red-500/30 text-red-400' : ''}
          ${toast.type === 'info' ? 'border-blue-500/30 text-blue-400' : ''}
        `}>
          {/* Icono Dinámico según el tipo */}
          {toast.type === 'success' && (
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>
          )}
          {toast.type === 'error' && (
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line></svg>
          )}
          {toast.type === 'info' && (
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg>
          )}
          
          <span className="text-[13px] font-medium tracking-wide text-zinc-200">
            {toast.message}
          </span>
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