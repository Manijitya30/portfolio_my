import React from "react";
import "../styles.css";
import { portfolioData } from "../data/portfolioData";

const ContactMe = () => {
  const profileHighlights = [
    "Backend systems",
    "Problem solving",
    "Full-stack projects",
  ];

  return (
    <main className="page-shell">
      <section className="section-heading contact-heading">
        <p className="section-label">Contact</p>
        <h1>Let&apos;s build something useful.</h1>
        <p className="section-copy">
          Reach out for internships, collaborations, student opportunities, or full-stack development discussions.
        </p>
      </section>

      <section className="contact-layout">
        <article className="contact-panel card-surface contact-intro-panel">
          <div className="contact-panel-top">
            <p className="section-label">Open To</p>
            <h2>Conversations around backend engineering, product ideas, and internships.</h2>
            <p className="contact-lead">
              I enjoy working on practical systems, thoughtful APIs, and products that solve real problems. If you have an opportunity or idea worth building, I&apos;d love to hear about it.
            </p>
          </div>

          <div className="contact-highlight-row">
            {profileHighlights.map((item) => (
              <span key={item} className="contact-highlight-chip">
                {item}
              </span>
            ))}
          </div>

          <div className="contact-card-grid">
            <div className="contact-detail-card">
              <span>Email</span>
              <a href={`mailto:${portfolioData.email}`}>{portfolioData.email}</a>
            </div>
            <div className="contact-detail-card">
              <span>Phone</span>
              <a href={`tel:${portfolioData.phone.replace(/\s+/g, "")}`}>{portfolioData.phone}</a>
            </div>
            <div className="contact-detail-card">
              <span>Location</span>
              <p>{portfolioData.location}</p>
            </div>
          </div>

          <div className="contact-social-block">
            <p className="section-label">Find Me Online</p>
            <div className="social-links contact-social-links">
              {portfolioData.socialLinks.map((link) => (
                <a key={link.label} href={link.href} target="_blank" rel="noopener noreferrer" className="social-link">
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </article>

        <article className="contact-panel card-surface contact-form-panel">
          <div className="contact-form-header">
            <p className="section-label">Message Form</p>
            <h2>Send a Message</h2>
            <p className="contact-form-copy">
              Share the role, project, or idea you have in mind. I&apos;ll get back as soon as I can.
            </p>
          </div>
          <form action="https://formspree.io/f/mzzvwdjo" method="post" className="contact-form">
            <div className="contact-form-grid">
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input type="text" id="name" name="name" placeholder="Your name" required />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" placeholder="you@example.com" required />
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="subject">Subject</label>
              <input type="text" id="subject" name="subject" placeholder="Internship, project, collaboration..." required />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" rows="5" placeholder="Tell me a little about what you'd like to discuss." required></textarea>
            </div>
            <button type="submit" className="primary-btn submit-btn">
              Send Message
            </button>
          </form>
        </article>
      </section>
    </main>
  );
};

export default ContactMe;
