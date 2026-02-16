import React from 'react';
import '../styles/Navbar.css';
import naacImage from "./naac-png.png";

const Navbar = () => {
  return (
    <nav className="navbar">
      <a 
        href="https://presidencyuniversity.in" 
        target="_blank" 
        rel="noopener noreferrer"
        className="logo-link"
      >
        <img 
          src="https://presidencyuniversity.in/assets/images/logo.png" 
          alt="Presidency University Logo" 
          className="navbar-logo"
        />
        <img 
          src={naacImage} 
          alt="Presidency University Logo" 
          className="navbar-logo"
        />
        
      </a>
      im
    </nav>
  );
};

export default Navbar;