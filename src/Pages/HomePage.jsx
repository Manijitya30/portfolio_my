import React, { useEffect, useRef } from "react";
import Typed from "typed.js";
import "../styles.css";
import { portfolioData } from "../data/portfolioData";

const HomePage = () => {
  const typedEl = useRef(null);

  useEffect(() => {
    const typed = new Typed(typedEl.current, {
      strings: portfolioData.heroRoles,
      typeSpeed: 42,
      backSpeed: 28,
      loop: true,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  const downloadResume = () => {
    const link = document.createElement("a");
    link.href = portfolioData.resumeFile;
    link.download = "P-Manijitya-Kumar-Resume.pdf";
    link.click();
  };

  return (
    <main className="page-shell home-shell">
      <section className="hero-grid">
        <div className="hero-copy card-surface">
          <p className="section-label">Student Portfolio</p>
          <h1>Building products with code, curiosity, and competitive precision.</h1>
          <p className="hero-text">{portfolioData.intro}</p>
          <div className="typed-line">
            <span>Focused on</span>
            <strong ref={typedEl}></strong>
          </div>

          <div className="hero-actions">
            <button className="primary-btn" onClick={downloadResume}>
              Download Resume
            </button>
            <a
              className="secondary-btn"
              href="https://github.com/Manijitya30"
              target="_blank"
              rel="noopener noreferrer"
            >
              View GitHub
            </a>
          </div>
        </div>

        <div className="hero-visual card-surface">
          <div className="portrait-wrap">
            <img src="Photo1.png" alt={portfolioData.name} />
          </div>
        </div>
      </section>

      <section className="stats-grid">
        {portfolioData.stats.map((stat) => (
          <article key={stat.label} className="stat-card card-surface">
            <h2>{stat.value}</h2>
            <p>{stat.label}</p>
          </article>
        ))}
      </section>

      <section className="feature-grid">
        <article className="feature-panel card-surface">
          <p className="section-label">Why This Portfolio Feels Different</p>
          <h2>Less template, more personality.</h2>
          <p>{portfolioData.mission}</p>
        </article>

        <article className="feature-panel card-surface">
          <p className="section-label">Education Snapshot</p>
          <h2>{portfolioData.education.institute}</h2>
          <p>{portfolioData.education.degree}</p>
          <p className="muted-line">
            {portfolioData.education.period} | {portfolioData.education.grade}
          </p>
        </article>
      </section>

      <section className="timeline-section">
        <div className="section-heading">
          <p className="section-label">Experience Track</p>
          <h2>Momentum built through leadership and practice.</h2>
        </div>

        <div className="timeline-list">
          {portfolioData.experience.map((item) => (
            <article key={item.title} className="timeline-card card-surface">
              <div className="timeline-meta">
                <span>{item.period}</span>
                <strong>{item.org}</strong>
              </div>
              <h3>{item.title}</h3>
              <ul>
                {item.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="timeline-section">
        <div className="section-heading">
          <p className="section-label">Extra-Curricular Activities</p>
          <h2>Interests that shape how I create and collaborate.</h2>
        </div>

        <div className="activity-grid">
          {portfolioData.extraCurricular.map((item) => (
            <article key={item.title} className="activity-card card-surface">
              <h3>{item.title}</h3>
              <ul className="clean-list">
                {item.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
};

export default HomePage;
