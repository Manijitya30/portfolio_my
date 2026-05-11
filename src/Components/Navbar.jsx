import React from "react";
import { NavLink } from "react-router-dom";
import "../styles.css";
import { portfolioData } from "../data/portfolioData";

const NavBar = () => {
  return (
    <nav className="site-nav">
      <NavLink to="/" end className="brand-mark">
        <span className="brand-badge">MK</span>
        <div>
          <p>{portfolioData.shortName}</p>
          <span>{portfolioData.title}</span>
        </div>
      </NavLink>

      <div className="nav-links">
        <NavLink to="/" end className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}>
          Home
        </NavLink>
        <NavLink to="/about" className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}>
          About
        </NavLink>
        <NavLink to="/projects" className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}>
          Projects
        </NavLink>
        <NavLink to="/contact" className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}>
          Contact
        </NavLink>
      </div>
    </nav>
  );
};

export default NavBar;
