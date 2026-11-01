import React, { useState, useEffect } from 'react';
import HeroProfile from '../components/HeroProfile';
import ProjectsTab from '../components/ProjectsTab';
import StackTab from '../components/StackTab';
import TrajectoryTab from '../components/TrajectoryTab';
import EducationTab from '../components/EducationTab';

export default function Home() {
  const [activeTab, setActiveTab] = useState('Proyectos');
  const [slideDir, setSlideDir] = useState<'right' | 'left'>('right'); 
  const tabs = ['Proyectos', 'Stack Técnico', 'Trayectoria', 'Formación'];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleTabChange = (newTab: string) => {
    const currentIndex = tabs.indexOf(activeTab);
    const newIndex = tabs.indexOf(newTab);
    if (currentIndex === newIndex) return;

    setSlideDir(newIndex > currentIndex ? 'right' : 'left');
    setActiveTab(newTab);
  };

  return (
    <main className="relative w-full min-h-screen animate-page-enter overflow-hidden">
      <div className="relative z-10 w-full flex flex-col items-center">

        {/* SECCIÓN HERO (Perfil) */}
        <div className="w-full max-w-[800px] px-5 md:px-6 pt-8 md:pt-12 pb-10">
          <HeroProfile />
        </div>

        {/* SECCIÓN DE TABS Y CONTENIDO */}
        <div className="w-full max-w-[800px] px-5 md:px-6 pb-20">
          <nav className="mb-8 flex w-full gap-1 overflow-x-auto rounded-xl border border-brand-border/50 bg-brand-bg/65 p-1.5 shadow-lg shadow-black/10 backdrop-blur-md scrollbar-hide">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => handleTabChange(tab)}
                className={`relative shrink-0 cursor-pointer whitespace-nowrap rounded-lg px-3.5 py-2.5 text-[12px] font-medium transition-all duration-300 ${
                  activeTab === tab
                    ? 'border border-brand-accent/25 bg-brand-accent/[0.08] text-brand-text shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]'
                    : 'border border-transparent text-brand-muted hover:bg-white/[0.04] hover:text-brand-text'
                }`}
              >
                {tab}
                {activeTab === tab && (
                  <span className="absolute inset-x-3 -bottom-[1px] h-px bg-brand-accent shadow-[0_0_8px_rgba(120,169,208,0.5)]"></span>
                )}
              </button>
            ))}
          </nav>

          <div key={activeTab} className={`w-full ${slideDir === 'right' ? 'animate-slide-right' : 'animate-slide-left'}`}>
            {activeTab === 'Proyectos' && <ProjectsTab />}
            {activeTab === 'Stack Técnico' && <StackTab />}
            {activeTab === 'Trayectoria' && <TrajectoryTab />}
            {activeTab === 'Formación' && <EducationTab />}
          </div>
        </div>

      </div>
    </main>
  );
}