import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import MainProject from './components/MainProject';
import AboutUs from './pages/AboutUs';

const App: React.FC = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<MainProject />} />
        <Route path="/About-Us" element={<AboutUs />} />
      </Routes>
    </Router>
  );
};

export default App;