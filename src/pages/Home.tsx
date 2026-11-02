// src/pages/Home.tsx
import { Suspense, useEffect } from 'react';
import ProfileHeader from '../features/home/ProfileHeader';
import Tabs from '../components/ui/Tabs';
import TabSkeleton from '../components/ui/TabSkeleton';
import { HOME_TABS } from '../features/home/tabs';
import { useSlideTabs } from '../features/home/useSlideTabs';

export default function Home() {
  const { active, direction, select } = useSlideTabs(HOME_TABS.map((t) => t.label));
  const ActiveTab = HOME_TABS.find((t) => t.label === active)!.Component;

  // dentro de Home.tsx
  const preload = (label: string) => {
  HOME_TABS.find((t) => t.label === label)?.preload?.();
};

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="w-full max-w-[800px] mx-auto px-5 md:px-6 py-8 md:py-12 animate-page-enter">
      <ProfileHeader />

      <Tabs tabs={HOME_TABS.map((t) => t.label)} active={active} onChange={select} onHover={preload} />

      <div
        key={active}
        className={`w-full ${
          direction === 'right' ? 'animate-slide-right' : 'animate-slide-left'
        }`}
      >
        <Suspense fallback={<TabSkeleton rows={3} />}>
        <ActiveTab />
      </Suspense>
      </div>
    </main>
  );
}