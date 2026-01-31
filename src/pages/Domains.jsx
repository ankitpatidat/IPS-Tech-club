import React from "react";
import "./Domains.css";

const Domains = () => {
  const domains = [
    {
      id: 1,
      name: "Programming",
      icon: "💻",
      description: "Master competitive programming, data structures, algorithms, and software development. Learn languages like C++, Python, Java, and more."
    },
    {
      id: 2,
      name: "Robotics",
      icon: "🤖",
      description: "Build intelligent robots, explore automation, and work with Arduino, Raspberry Pi, and various sensors and actuators."
    },
    {
      id: 3,
      name: "AI & Data Science",
      icon: "🧠",
      description: "Dive into machine learning, deep learning, natural language processing, and data analytics using Python and popular frameworks."
    },
    {
      id: 4,
      name: "Web Development",
      icon: "🌐",
      description: "Create stunning websites and web applications using HTML, CSS, JavaScript, React, Node.js, and modern web technologies."
    },
    {
      id: 5,
      name: "Electronics & IoT",
      icon: "⚡",
      description: "Design circuits, work with microcontrollers, and build IoT solutions connecting devices to the internet."
    },
    {
      id: 6,
      name: "Mobile Development",
      icon: "📱",
      description: "Develop mobile applications for Android and iOS using React Native, Flutter, and native development tools."
    }
  ];

  return (
    <div className="domains" data-testid="domains-page">
      {/* Page Header */}
      <section className="page-header" data-testid="domains-header">
        <div className="container">
          <h1 className="page-title" data-testid="domains-title">Our Domains</h1>
          <p className="page-subtitle">Explore diverse technical fields and find your passion</p>
        </div>
      </section>

      {/* Domains Grid */}
      <section className="domains-section" data-testid="domains-section">
        <div className="container">
          <div className="domains-grid">
            {domains.map((domain) => (
              <div className="domain-card" key={domain.id} data-testid={`domain-card-${domain.id}`}>
                <div className="domain-icon">{domain.icon}</div>
                <h3 className="domain-name">{domain.name}</h3>
                <p className="domain-description">{domain.description}</p>
                <div className="domain-footer">
                  <button className="learn-more-btn" data-testid={`learn-more-${domain.id}`}>
                    Explore More
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Section */}
      <section className="join-domain-section" data-testid="join-domain-section">
        <div className="container">
          <h2 className="join-title">Interested in Any Domain?</h2>
          <p className="join-description">
            Join our tech club and explore multiple domains. Work on exciting projects and enhance your skills.
          </p>
          <button className="btn-primary-large" data-testid="join-now-btn">
            Join Now
          </button>
        </div>
      </section>
    </div>
  );
};

export default Domains;
