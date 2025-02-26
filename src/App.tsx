import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import UyenPage from './pages/Portfolio';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<UyenPage />} />
        <Route path="/home" element={<UyenPage />} />
        <Route path="/portfolio-uyen" element={<UyenPage />} />
        <Route path="/portfolio-uyen/uyen" element={<UyenPage />} />
      </Routes>
    </Router>
  );
};

export default App;