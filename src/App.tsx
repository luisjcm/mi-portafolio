// src/App.tsx
import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Background from './components/ui/Background';

const ProjectDetail = lazy(() => import('./pages/ProjectDetail'));
const ProjectsIndex = lazy(() => import('./pages/ProjectsIndex'));
const SobreMi = lazy(() => import('./pages/SobreMi'));
const Contacto = lazy(() => import('./pages/Contacto'));
const LegalPage = lazy(() => import('./pages/LegalPage'));
const NotFound = lazy(() => import('./pages/NotFound')); // <-- NUEVO

function App() {
  return (
    <Router>
      <Background />
      
      <div className="relative z-10 flex flex-col min-h-screen w-full max-w-full overflow-x-hidden">
        <Header />

        <div className="flex-grow w-full max-w-full pt-16">
          <Suspense fallback={<div className="min-h-[60vh]" />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/proyectos" element={<ProjectsIndex />} />
              <Route path="/proyectos/:slug" element={<ProjectDetail />} />
              <Route path="/sobre-mi" element={<SobreMi />} />
              <Route path="/contacto" element={<Contacto />} />

              <Route path="/privacidad" element={<LegalPage />} />
              <Route path="/terminos" element={<LegalPage />} />
              <Route path="/accesibilidad" element={<LegalPage />} />
              <Route path="/cookies" element={<LegalPage />} />

              {/* RUTA COMODÍN: Atrapa cualquier URL no definida */}
              <Route path="*" element={<NotFound />} /> 
            </Routes>
          </Suspense>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;