// src/pages/Home.tsx
// Portada. Solo compone piezas; cada una vive en su propio archivo:
//   ProfileHeader → features/home/ProfileHeader.tsx
//   Tabs          → components/ui/Tabs.tsx
//   Pestañas      → features/home/tabs/  (registro en tabs/index.ts)
import { Suspense, useEffect } from 'react';
import ProfileHeader from '../features/home/ProfileHeader';
import Tabs from '../components/ui/Tabs';
import { HOME_TABS } from '../features/home/tabs';
import { useSlideTabs } from '../features/home/useSlideTabs';

export default function Home() {
  const { active, direction, select } = useSlideTabs(HOME_TABS.map((t) => t.label));
  const ActiveTab = HOME_TABS.find((t) => t.label === active)!.Component;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="w-full max-w-[800px] mx-auto px-5 md:px-6 py-8 md:py-12 animate-page-enter">
      <ProfileHeader />

      <Tabs tabs={HOME_TABS.map((t) => t.label)} active={active} onChange={select} />

      {/* Contenido de la pestaña activa (con animación de deslizamiento) */}
      <div key={active} className={`w-full ${direction === 'right' ? 'animate-slide-right' : 'animate-slide-left'}`}>
        <Suspense fallback={<div className="min-h-[200px]" />}>
          <ActiveTab />
        </Suspense>
      </div>
    </main>
  );
}
