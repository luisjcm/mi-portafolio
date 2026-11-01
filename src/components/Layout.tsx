// src/components/Layout.tsx
import React from 'react';
import Header from './Header';
import Footer from './Footer';
import HeroBlueprint from './HeroBlueprint';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="relative isolate min-h-screen w-full overflow-x-clip bg-brand-bg">
      <HeroBlueprint />
      <Header />
      <div className="relative z-10 flex min-h-screen w-full max-w-full flex-col overflow-x-hidden pt-16">
        <main className="flex-grow w-full max-w-full">
          {children}
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default Layout;