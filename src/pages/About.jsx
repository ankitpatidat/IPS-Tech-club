import React from "react";
import "./About.css";

const About = () => {
  return (
    <div className="about" >
      {/* Page Header */}
      <section className="page-header" >
        <div className="container">
          <h1 className="page-title" >About Us</h1>
          <p className="page-subtitle">Learn more about IPS IES Tech Club</p>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="about-intro">
        <div className="container">
          <div className="intro-content">
            <h2 className="section-heading">What is IPS IES Tech Club?</h2>
            <p className="intro-text">
              IPS IES Tech Club is a student-driven technical community at IPS Academy, Vijaynagar. 
              We are dedicated to fostering innovation, creativity, and technical excellence among students. 
              Our club provides a platform for students to explore various domains of technology, 
              work on real-world projects, and develop skills that prepare them for future careers in technology.
            </p>
            <p className="intro-text">
              Through workshops, hackathons, seminars, and collaborative projects, we empower students 
              to think critically, solve problems, and turn their ideas into reality. We believe in 
              learning by doing and encourage hands-on experience in cutting-edge technologies.
            </p>
          </div>
        </div>
      </section>

      {/* Vision & Mission Section */}
      <section className="vision-mission" >
        <div className="container">
          <div className="vm-grid">
            <div className="vm-card" >
              <h3 className="vm-title">Our Vision</h3>
              <p className="vm-text">
                To create a vibrant community of tech enthusiasts who innovate, collaborate, 
                and drive technological advancement. We aim to be the leading technical club 
                that nurtures future tech leaders and entrepreneurs.
              </p>
            </div>
            <div className="vm-card" >
              <h3 className="vm-title">Our Mission</h3>
              <p className="vm-text">
                To provide students with opportunities to learn, experiment, and excel in various 
                technical domains. We strive to bridge the gap between theoretical knowledge and 
                practical application through hands-on projects and industry exposure.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Faculty Coordinator Section */}
      <section className="coordinator-section" >
        <div className="container">
          <h2 className="section-heading">Faculty Coordinator</h2>
          <div className="coordinator-card">
            <div className="coordinator-image">
              <div className="placeholder-img">FC</div>
            </div>
            <div className="coordinator-info">
              <h3 className="coordinator-name">Dr. Rajesh Kumar</h3>
              <p className="coordinator-designation">Professor, Computer Science Department</p>
              <p className="coordinator-bio">
                Dr. Rajesh Kumar has been guiding the Tech Club with his extensive experience 
                in software engineering and artificial intelligence. His mentorship has helped 
                students achieve remarkable success in various technical competitions and projects.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Student Leads Section */}
      <section className="leads-section" >
        <div className="container">
          <h2 className="section-heading">Student Leads</h2>
          <div className="leads-grid">
            <div className="lead-card" >
              <div className="lead-image">
                <div className="placeholder-img">AP</div>
              </div>
              <h3 className="lead-name">Aditya Patel</h3>
              <p className="lead-position">President</p>
              <p className="lead-details">B.Tech CSE, Final Year</p>
            </div>
            <div className="lead-card" >
              <div className="lead-image">
                <div className="placeholder-img">PS</div>
              </div>
              <h3 className="lead-name">Priya Sharma</h3>
              <p className="lead-position">Vice President</p>
              <p className="lead-details">B.Tech IT, Final Year</p>
            </div>
            <div className="lead-card" >
              <div className="lead-image">
                <div className="placeholder-img">RV</div>
              </div>
              <h3 className="lead-name">Rahul Verma</h3>
              <p className="lead-position">Technical Lead</p>
              <p className="lead-details">B.Tech CSE, Third Year</p>
            </div>
            <div className="lead-card" >
              <div className="lead-image">
                <div className="placeholder-img">SM</div>
              </div>
              <h3 className="lead-name">Sneha Mehta</h3>
              <p className="lead-position">Events Lead</p>
              <p className="lead-details">B.Tech IT, Third Year</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
