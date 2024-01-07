import React, { useState } from 'react';
import './Navbar.css'; // Import the CSS file

const Navbar = () => {
  const [isActive, setIsActive] = useState(false);

  const toggleNav = () => {
    setIsActive(!isActive);
  };

  return (
    <nav className="navbar">
      <div className="nav-logo">Logo</div>
      <div className={isActive ? 'nav-links active' : 'nav-links'}>
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#contact">Contact</a>
        <a href="#services">Services</a>
      </div>
      <div className="burger-menu" onClick={toggleNav}>
        <div className={isActive ? 'line line1 active' : 'line line1'}></div>
        <div className={isActive ? 'line line2 active' : 'line line2'}></div>
        <div className={isActive ? 'line line3 active' : 'line line3'}></div>
      </div>
    </nav>
  );
};

export default Navbar;
