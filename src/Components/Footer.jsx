import React from "react";
import { Link } from "react-router-dom";
import "../styles.css";
import { portfolioData } from "../data/portfolioData";

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="footer-grid">
        <div>
          <p className="footer-eyebrow">Portfolio</p>
          <h3>{portfolioData.name}</h3>
          <p>{portfolioData.tagline}</p>
        </div>

        <div>
          <p className="footer-eyebrow">Explore</p>
          <div className="footer-links">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/projects">Projects</Link>
            <Link to="/contact">Contact</Link>
          </div>
        </div>

        <div>
          <p className="footer-eyebrow">Connect</p>
          <div className="footer-links">
            {portfolioData.socialLinks.map((link) => (
              <a key={link.label} href={link.href} target="_blank" rel="noopener noreferrer">
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <span>{portfolioData.email}</span>
        <span>{portfolioData.phone}</span>
        <span>{portfolioData.location}</span>
      </div>
    </footer>
  );
};

export default Footer;
