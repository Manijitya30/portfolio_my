import React from "react";
import '../styles.css';

const ContactMe = () => {
    return (
        <>
            <main className="page-container">
                <section className="contact-section">
                    <div className="contact-header">
                        <h1>Get In <span className="purple">Touch</span></h1>
                        <p className="text-gray">Let's work together on your next project</p>
                    </div>

                    <div className="contact-content">
                        <div className="contact-info">
                            <h2>Contact Information</h2>
                            <div className="contact-item">
                                <h3>📧 Email</h3>
                                <p>Manijitya30@gmail.com</p>
                            </div>
                            <div className="contact-item">
                                <h3>📱 Phone</h3>
                                <p>+91 12345 67890</p>
                            </div>
                            <div className="contact-item">
                                <h3>📍 Location</h3>
                                <p>India</p>
                            </div>
                            <div className="contact-item">
                                <h3>🔗 Social Links</h3>
                                <div className="social-links">
                                    <a href="https://github.com/manijitya" target="_blank" rel="noopener noreferrer" className="social-link">GitHub</a>
                                    <a href="https://linkedin.com/in/manijitya" target="_blank" rel="noopener noreferrer" className="social-link">LinkedIn</a>
                                    <a href="https://twitter.com/manijitya" target="_blank" rel="noopener noreferrer" className="social-link">Twitter</a>
                                </div>
                            </div>
                        </div>

                        <div className="contact-form">
                            <h2>Send Me a Message</h2>
                            <form action="https://formspree.io/f/mzzvwdjo" method="post">
                                <div className="form-group">
                                    <label htmlFor="name">Name</label>
                                    <input type="text" id="name" name="name" required />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="email">Email</label>
                                    <input type="email" id="email" name="email" required />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="subject">Subject</label>
                                    <input type="text" id="subject" name="subject" required />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="message">Message</label>
                                    <textarea id="message" name="message" rows="5" required></textarea>
                                </div>
                                <button type="submit" className="btn submit-btn">Send Message</button>
                            </form>
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
};

export default ContactMe;
