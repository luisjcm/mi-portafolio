import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './style.css';

// Inicializador de tu agente de IA (micro-frontend)
import './cubot/mount';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);