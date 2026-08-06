import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';

function App() {
  return (
    <Router>
      <Routes>
        {/* Tu portafolio principal */}
        <Route path="/" element={<Home />} />
        
        {/* Más adelante agregaremos aquí la ruta para los detalles de cada proyecto */}
      </Routes>
    </Router>
  );
}

export default App;