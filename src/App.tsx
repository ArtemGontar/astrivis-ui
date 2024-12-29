import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Dashboard from './components/Dashboard';

const App: React.FC = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/smart-wallets" element={<div>Smart Wallets Page</div>} />
        <Route path="/whales" element={<div>Whales Page</div>} />
      </Routes>
    </Router>
  );
};

export default App;