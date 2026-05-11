import React from "react";
import "../styles.css";
import { portfolioData } from "../data/portfolioData";

const About = () => {
  return (
    <main className="page-shell">
      <section className="section-heading">
        <p className="section-label">About Me</p>
        <h1>{portfolioData.name}</h1>
        <p className="section-copy">{portfolioData.tagline}</p>
      </section>

      <section className="about-layout">
        <article className="about-story card-surface">
          <h2>My approach</h2>
          <p>{portfolioData.intro}</p>
          <p>{portfolioData.mission}</p>
        </article>

        <article className="about-story card-surface">
          <h2>Education</h2>
          <p>{portfolioData.education.institute}</p>
          <p>{portfolioData.education.degree}</p>
          <p className="muted-line">{portfolioData.education.location}</p>
          <p className="muted-line">
            {portfolioData.education.period} | {portfolioData.education.grade}
          </p>
        </article>
      </section>

      <section className="skills-columns">
        {portfolioData.skills.map((skillGroup) => (
          <article key={skillGroup.group} className="skill-column card-surface">
            <p className="section-label">{skillGroup.group}</p>
            <div className="skill-chip-wrap">
              {skillGroup.items.map((item) => (
                <span key={item} className="skill-chip">
                  {item}
                </span>
              ))}
            </div>
          </article>
        ))}
      </section>

      <section className="feature-grid">
        <article className="feature-panel card-surface">
          <p className="section-label">Achievements</p>
          <ul className="clean-list">
            {portfolioData.achievements.map((achievement) => (
              <li key={achievement}>{achievement}</li>
            ))}
          </ul>
        </article>

        <article className="feature-panel card-surface">
          <p className="section-label">Profiles</p>
          <div className="profile-list">
            {portfolioData.profiles.map((profile) =>
              profile.href ? (
                <a
                  key={profile.label}
                  href={profile.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="profile-item"
                >
                  <strong>{profile.label}</strong>
                  <span>{profile.value}</span>
                </a>
              ) : (
                <div key={profile.label} className="profile-item">
                  <strong>{profile.label}</strong>
                  <span>{profile.value}</span>
                </div>
              )
            )}
          </div>
        </article>
      </section>
    </main>
  );
};

export default About;
