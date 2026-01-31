import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer" >
      <div className="footer-container">
        {/* Footer Top Section */}
        <div className="footer-top">
          {/* About Section */}
          <div className="footer-section">
            <h3 className="footer-heading" >IPS TECH CLUB</h3>
            <p className="footer-text">
              Empowering students through technology, innovation, and collaboration. 
              Join us to explore, learn, and create amazing projects.
            </p>
          </div>

          {/* Quick Links */}
          <div className="footer-section">
            <h3 className="footer-heading" >Quick Links</h3>
            <ul className="footer-links">
              <li><Link to="/" >Home</Link></li>
              <li><Link to="/about" >About Us</Link></li>
              <li><Link to="/domains" >Domains</Link></li>
              <li><Link to="/events" >Events</Link></li>
            </ul>
          </div>

          {/* Resources */}
          <div className="footer-section">
            <h3 className="footer-heading">Resources</h3>
            <ul className="footer-links">
              <li><Link to="/projects">Projects</Link></li>
              <li><Link to="/team" >Team</Link></li>
              <li><Link to="/blog" >Blog</Link></li>
              <li><Link to="/contact" >Contact</Link></li>
            </ul>
          </div>

          {/* Connect Section */}
          <div className="footer-section">
            <h3 className="footer-heading" >Connect With Us</h3>
            <div className="social-links">
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="social-link"
               
              >
                Instagram
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="social-link"
                
              >
                LinkedIn
              </a>
              <a 
                href="mailto:ipstechclub@gmail.com" 
                className="social-link"
                
              >
                Email
              </a>
            </div>
          </div>
        </div>

        {/* Footer Bottom Section */}
        <div className="footer-bottom">
          <p className="footer-copyright" >
            &copy; {currentYear} IPS TECH CLUB Vijaynagar. All rights reserved.
          </p>
          <p className="footer-credit">
            Made with passion by Tech Club Team
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
