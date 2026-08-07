import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import ProjectDetail from './pages/ProjectDetail';
import ProjectsIndex from './pages/ProjectsIndex';

function App() {
  return (
    <Router>

      <Header />

      <Routes>
        {/* Tu portafolio principal */}
        <Route path="/" element={<Home />} />

        <Route path="/proyectos" element={<ProjectsIndex />} />

        {/* Ruta dinámica para cada proyecto (El :slug indica que es una variable) */}
        <Route path="/proyectos/:slug" element={<ProjectDetail />} />
      </Routes>
    </Router>
  );
}

export default App;