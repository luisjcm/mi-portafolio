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

        <div className="flex flex-col min-h-screen">
          <div className="flex-grow">

                <Routes>
                  {/* Tu portafolio principal */}
                  <Route path="/" element={<Home />} />
                  <Route path="/proyectos" element={<ProjectsIndex />} />

                  <Route path="/proyectos/:slug" element={<ProjectDetail />} />
                  <Route path="/sobre-mi" element={<SobreMi />} />       {/* <--- Nueva ruta */}
                  <Route path="/contacto" element={<Contacto />} />      {/* <--- Nueva ruta */}
                </Routes>

          </div>
        </div>

      <Footer />
      
    </Router>
  );
}

export default App;