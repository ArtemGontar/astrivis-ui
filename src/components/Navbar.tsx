import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar: React.FC = () => {
  return (
    <nav className="navbar">
      <ul>
        <li><NavLink to="/dashboard">Dashboard</NavLink></li>
        <li><NavLink to="/smart-wallets">Smart Wallets</NavLink></li>
        <li><NavLink to="/whales">Whales</NavLink></li>
      </ul>
    </nav>
  );
};

export default Navbar;