import React from "react";
import "../styles.css";
import { portfolioData } from "../data/portfolioData";

const Projects = () => {
  return (
    <main className="page-shell">
      <section className="section-heading">
        <p className="section-label">Projects</p>
        <h1>Selected work from my resume.</h1>
        <p className="section-copy">
          Each project reflects a different strength: impact, system thinking, responsiveness, and implementation detail.
        </p>
      </section>

      <section className="projects-board">
        {portfolioData.projects.map((project) => (
          <article key={project.title} className={`project-card card-surface accent-${project.accent}`}>
            <div className="project-header">
              <div>
                <p className="section-label">{project.status}</p>
                <h2>{project.title}</h2>
              </div>
              <span className="project-badge">{project.stack.length} tools</span>
            </div>

            <p className="project-summary">{project.summary}</p>

            <div className="project-tech">
              {project.stack.map((item) => (
                <span key={item} className="tech-tag">
                  {item}
                </span>
              ))}
            </div>

            <ul className="clean-list">
              {project.bullets.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          </article>
        ))}
      </section>
    </main>
  );
};

export default Projects;
