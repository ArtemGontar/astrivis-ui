import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Dashboard from './components/Dashboard/Dashboard';
import styles from './App.module.css';

const SmartWallets: React.FC = () => (
  <div className={styles.page}>
    <h2>Smart Wallets</h2>
    <p>Content for Smart Wallets will go here.</p>
  </div>
);

const Whales: React.FC = () => (
  <div className={styles.page}>
    <h2>Whales</h2>
    <p>Content for Whales will go here.</p>
  </div>
);

const App: React.FC = () => {
  return (
    <Router>
      <div className={styles.app}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/smart-wallets" element={<SmartWallets />} />
          <Route path="/whales" element={<Whales />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
