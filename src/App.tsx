// src/App.tsx
import React from 'react';
import { Header } from './components/layout/Header';
import { Hero } from './components/sections/Hero';
import { PortfolioTabs } from './components/sections/PortfolioTabs';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 selection:bg-brand-primary/30">
      {/* 1. Header Fijo con Glassmorphism */}
      <Header />
        
      {/* 2. Contenedor Principal */}
      <main className="max-w-5xl mx-auto px-4 pt-10 pb-20">
        {/* Aquí irán las secciones que escalaremos luego: Hero, Portfolio, etc. */}
        <section className="text-center py-20">
          
            <Hero />
            <PortfolioTabs />

        </section>
      </main>

      {/* 3. Footer (Opcional por ahora) */}
    </div>
  );
};

export default App;