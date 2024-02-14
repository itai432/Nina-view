import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import MainProject from './components/MainProject';
// Import AboutUs component when ready

const App: React.FC = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<MainProject />} />
        {/* Setup route for AboutUs component */}
      </Routes>
    </Router>
  );
};

export default App;