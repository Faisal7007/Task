import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa'; // Import the icons from react-icons
import './Navbar2.css'; // CSS for the navbar styles

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="nav-logo">Your Logo</div>
      <div className={`nav-menu ${isOpen ? 'active' : ''}`}>
        <ul>
          <li><a href="#home" onClick={toggleMenu}>Home</a></li>
          <li><a href="#about" onClick={toggleMenu}>About</a></li>
          <li><a href="#contact" onClick={toggleMenu}>Contact</a></li>
          <li><a href="#gallery" onClick={toggleMenu}>Gallery</a></li>
        </ul>
      </div>
      <div className="menu-toggle" onClick={toggleMenu}>
        {isOpen ? <FaTimes /> : <FaBars />}
      </div>
    </nav>
  );
};

export default Navbar;
