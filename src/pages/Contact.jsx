import React, { useState } from "react";
import "./Contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simple frontend form - just show success message
    setSubmitted(true);
    // Reset form after 3 seconds
    setTimeout(() => {
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: ""
      });
      setSubmitted(false);
    }, 3000);
  };

  return (
    <div className="contact" >
      {/* Page Header */}
      <section className="page-header">
        <div className="container">
          <h1 className="page-title" >Contact Us</h1>
          <p className="page-subtitle">Get in touch with IPS Tech Club</p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="contact-section" >
        <div className="container">
          <div className="contact-grid">
            {/* Contact Information */}
            <div className="contact-info" >
              <h2 className="info-heading">Get In Touch</h2>
              <p className="info-description">
                Have questions or want to join our club? We'd love to hear from you!
              </p>

              <div className="contact-details">
                <div className="contact-item" >
                  <div className="contact-icon">📧</div>
                  <div className="contact-text">
                    <h3>Email</h3>
                    <p>ipstechclub@gmail.com</p>
                  </div>
                </div>

                <div className="contact-item">
                  <div className="contact-icon">📍</div>
                  <div className="contact-text">
                    <h3>Location</h3>
                    <p>IPS Academy, Vijaynagar<br />Indore, Madhya Pradesh</p>
                  </div>
                </div>

                <div className="contact-item" >
                  <div className="contact-icon">🔗</div>
                  <div className="contact-text">
                    <h3>Social Media</h3>
                    <div className="social-links">
                      <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" >
                        Instagram
                      </a>
                      <span> | </span>
                      <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" >
                        LinkedIn
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="contact-form-container" >
              <h2 className="form-heading">Send Us a Message</h2>
              
              {submitted && (
                <div className="success-message" >
                  ✓ Thank you! Your message has been sent successfully.
                </div>
              )}

              <form className="contact-form" onSubmit={handleSubmit} >
                <div className="form-group">
                  <label htmlFor="name">Your Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Enter your name"
                    
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Your Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="Enter your email"
                   
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="subject">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    placeholder="What's this about?"
                    
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="5"
                    placeholder="Your message here..."
                   
                  ></textarea>
                </div>

                <button type="submit" className="submit-btn" >
                  Send Message
                </button>
              </form>

              <div className="form-footer">
                <p>Or fill out our <a href="https://forms.google.com" target="_blank" rel="noopener noreferrer" >Google Form</a></p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
