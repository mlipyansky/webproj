// src/components/Header.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Header.css';

function Header() {
  return (
    <header className="header">
      <div className="header-content">
      <div className="site-logo">
          <Link to="/">
            <img 
              src="/main_logo.png" 
              alt="Hungry Hawks Logo" 
              className="logo-image"
            />
          </Link>
        </div>
        <nav className="main-nav">
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/search" className="nav-link">Search</Link>
          <Link to="/meal-planning" className="nav-link">Meal Planning</Link>
          <Link to="/map" className="nav-link">Map View</Link>
          <Link to="/login" className="nav-link">Register/Login</Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;