import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "../styles.css";
import { portfolioData } from "../data/portfolioData";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="site-nav">
      <NavLink to="/" end className="brand-mark" onClick={closeMenu}>
        <span className="brand-badge">MK</span>
        <div>
          <p>{portfolioData.shortName}</p>
          <span>{portfolioData.title}</span>
        </div>
      </NavLink>

      <button
        type="button"
        className={`nav-toggle ${isMenuOpen ? "open" : ""}`}
        aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
        aria-expanded={isMenuOpen}
        onClick={() => setIsMenuOpen((current) => !current)}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      <div className={`nav-links ${isMenuOpen ? "nav-links-open" : ""}`}>
        <NavLink
          to="/"
          end
          className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}
          onClick={closeMenu}
        >
          Home
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}
          onClick={closeMenu}
        >
          About
        </NavLink>
        <NavLink
          to="/projects"
          className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}
          onClick={closeMenu}
        >
          Projects
        </NavLink>
        <NavLink
          to="/contact"
          className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}
          onClick={closeMenu}
        >
          Contact
        </NavLink>
      </div>
    </nav>
  );
};

export default NavBar;
