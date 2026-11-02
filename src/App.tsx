import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';

// Las demás páginas se descargan solo cuando el visitante entra a ellas (lazy).
// Para añadir una página: crea su archivo en /pages y agrega su lazy() + su <Route>.
const ProjectDetail = lazy(() => import('./pages/ProjectDetail'));
const ProjectsIndex = lazy(() => import('./pages/ProjectsIndex'));
const SobreMi = lazy(() => import('./pages/SobreMi'));
const Contacto = lazy(() => import('./pages/Contacto'));
const LegalPage = lazy(() => import('./pages/LegalPage'));

function App() {
  return (
    <Router>
      <Header />

      {/* pt-16 compensa de forma fija la altura de 64px del Header en TODAS las páginas */}
      <div className="flex flex-col min-h-screen w-full max-w-full overflow-x-hidden pt-16">
        <div className="flex-grow w-full max-w-full">
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
          </Routes>
          </Suspense>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;