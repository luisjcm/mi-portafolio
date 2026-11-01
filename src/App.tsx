// src/App.tsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import ProjectDetail from './pages/ProjectDetail';
import ProjectsIndex from './pages/ProjectsIndex';
import SobreMi from './pages/SobreMi';
import Contacto from './pages/Contacto';
import LegalPage from './pages/LegalPage';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/proyectos" element={<ProjectsIndex />} />
          <Route path="/proyectos/:slug" element={<ProjectDetail />} />
          <Route path="/sobre-mi" element={<SobreMi />} />
          <Route path="/contacto" element={<Contacto />} />

          {/* Páginas Legales */}
          <Route path="/privacidad" element={<LegalPage />} />
          <Route path="/terminos" element={<LegalPage />} />
          <Route path="/accesibilidad" element={<LegalPage />} />
          <Route path="/cookies" element={<LegalPage />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;