import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="navbar" >
      <div className="navbar-container">
        {/* Logo */}
        <Link to="/" className="navbar-logo" onClick={closeMenu} >
          <span className="logo-text">IPS TECH CLUB</span>
        </Link>

        {/* Hamburger Menu Icon */}
        <div 
          className={`hamburger ${isMenuOpen ? "active" : ""}`} 
          onClick={toggleMenu}
         
        >
          <span></span>
          <span></span>
          <span></span>
        </div>

        {/* Navigation Links */}
        <ul className={`nav-menu ${isMenuOpen ? "active" : ""}`}>
          <li className="nav-item">
            <Link to="/" className="nav-link" onClick={closeMenu} >
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/about" className="nav-link" onClick={closeMenu} >
              About
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/domains" className="nav-link" onClick={closeMenu} >
              Domains
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/events" className="nav-link" onClick={closeMenu} >
              Events
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/projects" className="nav-link" onClick={closeMenu} >
              Projects
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/team" className="nav-link" onClick={closeMenu} >
              Team
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/blog" className="nav-link" onClick={closeMenu} >
              Blog
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/contact" className="nav-link nav-link-contact" onClick={closeMenu} >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
