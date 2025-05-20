// src/components/Header.js
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Header.css';

function Header() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    // Check if session_id cookie exists when component mounts
    const isLoggedIn = document.cookie.split(';').some(item => item.trim().startsWith('session_id='));
    setIsLoggedIn(isLoggedIn);
  }, []);

  const handleLogout = () => {
    // Delete the session_id cookie by setting its expiration to the past
    document.cookie = "session_id=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    // Refresh the page
    window.location.reload();
  };

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

          {isLoggedIn ? (
            <button onClick={handleLogout} className="nav-link logout-btn">Logout</button>
          ) : (
            <Link to="/login" className="nav-link">Register/Login</Link>
          )}
        </nav>
      </div>
    </header>
  );
}

export default Header;
