import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './style.css';
import { ToastProvider } from './context/ToastContext';

// Inicializador de tu agente de IA (micro-frontend)
import './cubot/mount';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ToastProvider>
      <App />
    </ToastProvider>
  </React.StrictMode>
);