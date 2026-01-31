import React, { useState } from "react";
import "./Events.css";

const Events = () => {
  const [activeTab, setActiveTab] = useState("upcoming");

  const upcomingEvents = [
    {
      id: 1,
      title: "Web Development Workshop",
      date: "March 15, 2024",
      time: "10:00 AM - 4:00 PM",
      venue: "Lab 101",
      description: "Learn to build modern web applications using React and Node.js",
      type: "Workshop"
    },
    {
      id: 2,
      title: "Tech Hackathon 2024",
      date: "March 25-26, 2024",
      time: "24 Hours",
      venue: "Main Auditorium",
      description: "48-hour coding marathon to build innovative solutions",
      type: "Hackathon"
    },
    {
      id: 3,
      title: "AI & Machine Learning Seminar",
      date: "April 5, 2024",
      time: "2:00 PM - 5:00 PM",
      venue: "Seminar Hall",
      description: "Guest lecture by industry expert on latest AI trends",
      type: "Seminar"
    }
  ];

  const pastEvents = [
    {
      id: 1,
      title: "Python Programming Bootcamp",
      date: "February 10, 2024",
      participants: "150+",
      description: "Intensive 3-day bootcamp on Python fundamentals and advanced concepts",
      type: "Workshop"
    },
    {
      id: 2,
      title: "IoT Innovation Challenge",
      date: "January 20, 2024",
      participants: "80+",
      description: "Students built innovative IoT projects solving real-world problems",
      type: "Competition"
    },
    {
      id: 3,
      title: "Tech Talk Series: Cloud Computing",
      date: "December 15, 2023",
      participants: "200+",
      description: "Expert session on cloud technologies and deployment strategies",
      type: "Seminar"
    },
    {
      id: 4,
      title: "Robotics Workshop",
      date: "November 5, 2023",
      participants: "100+",
      description: "Hands-on workshop on building robots using Arduino",
      type: "Workshop"
    }
  ];

  return (
    <div className="events" >
      {/* Page Header */}
      <section className="page-header" >
        <div className="container">
          <h1 className="page-title" >Events & Activities</h1>
          <p className="page-subtitle">Stay updated with our latest workshops, hackathons, and seminars</p>
        </div>
      </section>

      {/* Events Section */}
      <section className="events-section" >
        <div className="container">
          {/* Tabs */}
          <div className="events-tabs" >
            <button
              className={`tab-btn ${activeTab === "upcoming" ? "active" : ""}`}
              onClick={() => setActiveTab("upcoming")}
              
            >
              Upcoming Events
            </button>
            <button
              className={`tab-btn ${activeTab === "past" ? "active" : ""}`}
              onClick={() => setActiveTab("past")}
              
            >
              Past Events
            </button>
          </div>

          {/* Upcoming Events */}
          {activeTab === "upcoming" && (
            <div className="events-grid" >
              {upcomingEvents.map((event) => (
                <div className="event-card" key={event.id}>
                  <div className="event-type">{event.type}</div>
                  <h3 className="event-title">{event.title}</h3>
                  <div className="event-details">
                    <p className="event-info">
                      <span className="info-icon">📅</span> {event.date}
                    </p>
                    <p className="event-info">
                      <span className="info-icon">⏰</span> {event.time}
                    </p>
                    <p className="event-info">
                      <span className="info-icon">📍</span> {event.venue}
                    </p>
                  </div>
                  <p className="event-description">{event.description}</p>
                  <button className="register-btn" >
                    Register Now
                  </button>
                </div>
              ))}
            </div>
          )}

          {/* Past Events */}
          {activeTab === "past" && (
            <div className="events-grid" >
              {pastEvents.map((event) => (
                <div className="event-card past-event" key={event.id} >
                  <div className="event-type">{event.type}</div>
                  <h3 className="event-title">{event.title}</h3>
                  <div className="event-details">
                    <p className="event-info">
                      <span className="info-icon">📅</span> {event.date}
                    </p>
                    <p className="event-info">
                      <span className="info-icon">👥</span> {event.participants} Participants
                    </p>
                  </div>
                  <p className="event-description">{event.description}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Events;
