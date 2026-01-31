import React from "react";
import "./Projects.css";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Smart Campus Management System",
      description: "A comprehensive web application for managing campus facilities, student attendance, and resource allocation with real-time updates.",
      techStack: ["React", "Node.js", "MongoDB", "Socket.io"],
      category: "Web Development"
    },
    {
      id: 2,
      title: "AI-Powered Chatbot",
      description: "Intelligent chatbot using natural language processing to answer student queries about college events, courses, and facilities.",
      techStack: ["Python", "TensorFlow", "Flask", "NLP"],
      category: "AI & ML"
    },
    {
      id: 3,
      title: "Automated Plant Watering System",
      description: "IoT-based system that monitors soil moisture and automatically waters plants while sending notifications to users.",
      techStack: ["Arduino", "ESP8266", "Sensors", "IoT"],
      category: "IoT"
    },
    {
      id: 4,
      title: "Line Following Robot",
      description: "Autonomous robot that follows a predefined path using infrared sensors and participates in robotics competitions.",
      techStack: ["Arduino", "Motors", "IR Sensors", "C++"],
      category: "Robotics"
    },
    {
      id: 5,
      title: "Student Performance Analytics",
      description: "Data analytics dashboard that visualizes student performance metrics and generates insights for improving academic outcomes.",
      techStack: ["Python", "Pandas", "Matplotlib", "Streamlit"],
      category: "Data Science"
    },
    {
      id: 6,
      title: "E-Learning Platform",
      description: "Online learning platform with video courses, quizzes, and progress tracking for students and educators.",
      techStack: ["React", "Express.js", "MySQL", "AWS"],
      category: "Web Development"
    }
  ];

  return (
    <div className="projects" data-testid="projects-page">
      {/* Page Header */}
      <section className="page-header" data-testid="projects-header">
        <div className="container">
          <h1 className="page-title" data-testid="projects-title">Our Projects</h1>
          <p className="page-subtitle">Explore innovative projects built by our talented members</p>
        </div>
      </section>

      {/* Projects Section */}
      <section className="projects-section" data-testid="projects-section">
        <div className="container">
          <div className="projects-grid">
            {projects.map((project) => (
              <div className="project-card" key={project.id} data-testid={`project-card-${project.id}`}>
                <div className="project-category">{project.category}</div>
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="tech-stack">
                  <p className="tech-label">Tech Stack:</p>
                  <div className="tech-tags">
                    {project.techStack.map((tech, index) => (
                      <span className="tech-tag" key={index} data-testid={`tech-tag-${project.id}-${index}`}>
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <button className="view-project-btn" data-testid={`view-project-${project.id}`}>
                  View Details
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contribute Section */}
      <section className="contribute-section" data-testid="contribute-section">
        <div className="container">
          <h2 className="contribute-title">Have a Project Idea?</h2>
          <p className="contribute-description">
            Join our club and turn your ideas into reality. Work with like-minded peers and experienced mentors.
          </p>
          <button className="btn-primary-large" data-testid="submit-project-btn">
            Submit Your Project
          </button>
        </div>
      </section>
    </div>
  );
};

export default Projects;
