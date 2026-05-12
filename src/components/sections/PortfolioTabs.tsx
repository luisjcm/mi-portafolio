import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const TABS = ['Proyectos', 'Stack', 'Trayectoria', 'Formación'];

export const PortfolioTabs: React.FC = () => {
  const [activeTab, setActiveTab] = useState('Proyectos');

  return (
    <section className="w-full mt-12 px-2 md:px-0">
      {/* Contenedor de Tabs: Scroll lateral en móvil, centrado en desktop */}
      <div className="flex border-b border-zinc-800 overflow-x-auto scrollbar-hide">
        <div className="flex w-full min-w-max md:min-w-0">
          {TABS.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`flex-1 relative pb-4 px-4 text-xs md:text-sm font-bold uppercase tracking-widest transition-all ${
                activeTab === tab ? 'text-brand-primary' : 'text-zinc-500 hover:text-zinc-300'
              }`}
            >
              {tab}
              {/* Línea animada (Solo aparece en la activa) */}
              {activeTab === tab && (
                <motion.div 
                  layoutId="activeTabUnderline"
                  className="absolute bottom-0 left-0 w-full h-[2px] bg-brand-primary shadow-brand-glow"
                />
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Contenido de la Tab con animación de desvanecimiento */}
      <div className="py-8 min-h-[300px]">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
          >
            {/* Aquí renderizaremos el contenido según el estado */}
            {activeTab === 'Proyectos' && <p className="text-zinc-400">Cargando tus proyectos...</p>}
            {activeTab === 'Stack' && <p className="text-zinc-400">React, TypeScript, Tailwind...</p>}
            {/* ... etc */}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};