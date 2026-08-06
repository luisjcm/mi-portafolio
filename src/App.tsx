import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import ProjectDetail from './pages/ProjectDetail';

function App() {
  return (
    <Router>
      <Routes>
        {/* Tu portafolio principal */}
        <Route path="/" element={<Home />} />
        
        {/* Más adelante agregaremos aquí la ruta para los detalles de cada proyecto */}
        {/* Ruta dinámica para cada proyecto (El :slug indica que es una variable) */}
        <Route path="/proyectos/:slug" element={<ProjectDetail />} />
      </Routes>
    </Router>
  );
}

export default App;