// src/components/Navbar/Navbar.tsx

import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Navbar.module.css';

const Navbar: React.FC = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>Astrivis</div>
      <ul className={styles.navLinks}>
        <li>
          <NavLink
            to="/"
            end
            className={({ isActive }) => (isActive ? styles.active : '')}
          >
            Dashboard
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/smart-wallets"
            className={({ isActive }) => (isActive ? styles.active : '')}
          >
            Smart Wallets
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/whales"
            className={({ isActive }) => (isActive ? styles.active : '')}
          >
            Whales
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
