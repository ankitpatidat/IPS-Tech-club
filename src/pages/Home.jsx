import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./Home.css";

const Home = () => {
  useEffect(() => {
    // Add fade-in animation on load
    const elements = document.querySelectorAll('.fade-in');
    elements.forEach((el, index) => {
      setTimeout(() => {
        el.style.opacity = '1';
        el.style.transform = 'translateY(0)';
      }, index * 100);
    });
  }, []);

  return (
    <div className="home" >
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content fade-in">
          <h1 className="hero-title">
            Welcome to <span className="highlight">IPS TECH CLUB</span>
          </h1>
          <h2 className="hero-subtitle">Vijaynagar</h2>
          <p className="hero-tagline">
            Innovate. Create. Transform.
          </p>
          <p className="hero-description">
            Join the leading technical community where students learn, build, and innovate together.
          </p>
          <div className="hero-buttons">
            <Link to="/contact" className="btn btn-primary" >
              Join Us
            </Link>
            <Link to="/about" className="btn btn-secondary" >
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="highlights-section">
        <div className="container">
          <h2 className="section-title fade-in" >What We Do</h2>
          <div className="highlights-grid">
            <div className="highlight-card fade-in" >
              <div className="highlight-icon">💻</div>
              <h3>Workshops</h3>
              <p>Hands-on technical workshops on latest technologies and tools</p>
            </div>
            <div className="highlight-card fade-in" >
              <div className="highlight-icon">🚀</div>
              <h3>Hackathons</h3>
              <p>Competitive coding events and innovation challenges</p>
            </div>
            <div className="highlight-card fade-in" >
              <div className="highlight-icon">⚙️</div>
              <h3>Projects</h3>
              <p>Real-world project development and collaboration</p>
            </div>
            <div className="highlight-card fade-in" >
              <div className="highlight-icon">💡</div>
              <h3>Innovation</h3>
              <p>Foster creativity and cutting-edge technological solutions</p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section" >
        <div className="container">
          <div className="stats-grid">
            <div className="stat-card fade-in" >
              <h3 className="stat-number">500+</h3>
              <p className="stat-label">Active Members</p>
            </div>
            <div className="stat-card fade-in" >
              <h3 className="stat-number">50+</h3>
              <p className="stat-label">Events Conducted</p>
            </div>
            <div className="stat-card fade-in" >
              <h3 className="stat-number">100+</h3>
              <p className="stat-label">Projects Built</p>
            </div>
            <div className="stat-card fade-in" >
              <h3 className="stat-number">6+</h3>
              <p className="stat-label">Technical Domains</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <h2 className="cta-title fade-in">Ready to Start Your Tech Journey?</h2>
          <p className="cta-description fade-in">
            Join IPS Tech Club and be part of an amazing community of innovators and developers.
          </p>
          <Link to="/contact" className="btn btn-primary btn-large" >
            Get Started
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
