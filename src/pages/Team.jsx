import React from "react";
import "./Team.css";

const Team = () => {
  const coreTeam = [
    {
      id: 1,
      name: "Aditya Patel",
      position: "President",
      year: "Final Year",
      branch: "CSE",
      description: "Leading the tech club with passion and vision"
    },
    {
      id: 2,
      name: "Priya Sharma",
      position: "Vice President",
      year: "Final Year",
      branch: "IT",
      description: "Managing operations and team coordination"
    },
    {
      id: 3,
      name: "Rahul Verma",
      position: "Technical Lead",
      year: "Third Year",
      branch: "CSE",
      description: "Overseeing technical projects and workshops"
    },
    {
      id: 4,
      name: "Sneha Mehta",
      position: "Events Lead",
      year: "Third Year",
      branch: "IT",
      description: "Planning and executing club events"
    }
  ];

  const coordinators = [
    {
      id: 1,
      name: "Arjun Singh",
      position: "Web Development Coordinator",
      year: "Second Year",
      branch: "CSE"
    },
    {
      id: 2,
      name: "Ananya Gupta",
      position: "AI/ML Coordinator",
      year: "Second Year",
      branch: "IT"
    },
    {
      id: 3,
      name: "Rohan Joshi",
      position: "Robotics Coordinator",
      year: "Second Year",
      branch: "ECE"
    },
    {
      id: 4,
      name: "Kavya Reddy",
      position: "Design Coordinator",
      year: "Second Year",
      branch: "CSE"
    },
    {
      id: 5,
      name: "Vikram Kumar",
      position: "Social Media Coordinator",
      year: "Second Year",
      branch: "IT"
    },
    {
      id: 6,
      name: "Ishita Sharma",
      position: "Content Coordinator",
      year: "Second Year",
      branch: "CSE"
    }
  ];

  return (
    <div className="team" >
      {/* Page Header */}
      <section className="page-header" >
        <div className="container">
          <h1 className="page-title" >Our Team</h1>
          <p className="page-subtitle">Meet the amazing people behind IPS Tech Club</p>
        </div>
      </section>

      {/* Core Team Section */}
      <section className="core-team-section">
        <div className="container">
          <h2 className="section-heading" >Core Team</h2>
          <div className="team-grid">
            {coreTeam.map((member) => (
              <div className="team-card core-member" key={member.id} >
                <div className="member-image">
                  <div className="placeholder-img">
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </div>
                </div>
                <h3 className="member-name">{member.name}</h3>
                <p className="member-position">{member.position}</p>
                <p className="member-details">{member.year} | {member.branch}</p>
                <p className="member-description">{member.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Coordinators Section */}
      <section className="coordinators-section" >
        <div className="container">
          <h2 className="section-heading" >Domain Coordinators</h2>
          <div className="coordinators-grid">
            {coordinators.map((coordinator) => (
              <div className="team-card" key={coordinator.id} >
                <div className="member-image small">
                  <div className="placeholder-img">
                    {coordinator.name.split(' ').map(n => n[0]).join('')}
                  </div>
                </div>
                <h3 className="member-name">{coordinator.name}</h3>
                <p className="member-position">{coordinator.position}</p>
                <p className="member-details">{coordinator.year} | {coordinator.branch}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Team Section */}
      <section className="join-team-section" >
        <div className="container">
          <h2 className="join-title">Want to Join Our Team?</h2>
          <p className="join-description">
            We're always looking for passionate individuals to join our team. Be part of something amazing!
          </p>
          <button className="btn-primary-large" >
            Apply Now
          </button>
        </div>
      </section>
    </div>
  );
};

export default Team;
