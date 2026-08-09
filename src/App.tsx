import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import ProjectDetail from './pages/ProjectDetail';
import ProjectsIndex from './pages/ProjectsIndex';
import SobreMi from './pages/SobreMi';
import Contacto from './pages/Contacto';

function App() {
  return (
    <Router>
      <Header />

      {/* pt-16 compensa de forma fija la altura de 64px del Header en TODAS las páginas */}
      <div className="flex flex-col min-h-screen w-full max-w-full overflow-x-hidden pt-16">
        <div className="flex-grow w-full max-w-full">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/proyectos" element={<ProjectsIndex />} />
            <Route path="/proyectos/:slug" element={<ProjectDetail />} />
            <Route path="/sobre-mi" element={<SobreMi />} />
            <Route path="/contacto" element={<Contacto />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;