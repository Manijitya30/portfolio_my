import React from "react";
import '../styles.css';

const Projects = () => {
    const openLink = (url) => {
        window.open(url, "_blank");
    };

    return (
        <>
            <main className="page-container">
                <section className="projects-section">
                    <div className="projects-header">
                        <h1>My <span className="purple">Projects</span></h1>
                        <p className="text-gray">Here are some of the projects I've worked on</p>
                    </div>

                    <div className="projects-grid">
                        <div className="project-card" onClick={() => openLink('https://github.com/manijitya/portfolio-website')}>
                            <div className="project-content">
                                <h3>Portfolio Website</h3>
                                <p>A responsive personal portfolio website built with HTML, CSS, and JavaScript. Features modern design and smooth animations.</p>
                                <div className="project-tech">
                                    <span className="tech-tag">HTML</span>
                                    <span className="tech-tag">CSS</span>
                                    <span className="tech-tag">JavaScript</span>
                                </div>
                            </div>
                        </div>

                        <div className="project-card" onClick={() => openLink('https://github.com/manijitya/web-calculator')}>
                            <div className="project-content">
                                <h3>Web Calculator</h3>
                                <p>A fully functional calculator web application with a clean interface and advanced mathematical operations.</p>
                                <div className="project-tech">
                                    <span className="tech-tag">JavaScript</span>
                                    <span className="tech-tag">CSS</span>
                                    <span className="tech-tag">HTML</span>
                                </div>
                            </div>
                        </div>

                        <div className="project-card" onClick={() => openLink('https://github.com/manijitya/todo-app')}>
                            <div className="project-content">
                                <h3>Todo Application</h3>
                                <p>A task management application with local storage, drag-and-drop functionality, and priority levels.</p>
                                <div className="project-tech">
                                    <span className="tech-tag">React</span>
                                    <span className="tech-tag">CSS</span>
                                    <span className="tech-tag">LocalStorage</span>
                                </div>
                            </div>
                        </div>

                        <div className="project-card" onClick={() => openLink('https://github.com/manijitya/weather-app')}>
                            <div className="project-content">
                                <h3>Weather Dashboard</h3>
                                <p>Real-time weather application with location-based forecasts and interactive maps using weather APIs.</p>
                                <div className="project-tech">
                                    <span className="tech-tag">JavaScript</span>
                                    <span className="tech-tag">API</span>
                                    <span className="tech-tag">CSS</span>
                                </div>
                            </div>
                        </div>

                        <div className="project-card" onClick={() => openLink('https://github.com/manijitya/e-commerce-site')}>
                            <div className="project-content">
                                <h3>E-commerce Platform</h3>
                                <p>Full-stack e-commerce website with user authentication, shopping cart, and payment integration.</p>
                                <div className="project-tech">
                                    <span className="tech-tag">Node.js</span>
                                    <span className="tech-tag">Express</span>
                                    <span className="tech-tag">MongoDB</span>
                                </div>
                            </div>
                        </div>

                        <div className="project-card" onClick={() => openLink('https://github.com/manijitya/blog-platform')}>
                            <div className="project-content">
                                <h3>Blog Platform</h3>
                                <p>A content management system for bloggers with rich text editor, categories, and comment system.</p>
                                <div className="project-tech">
                                    <span className="tech-tag">React</span>
                                    <span className="tech-tag">Node.js</span>
                                    <span className="tech-tag">MySQL</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
};

export default Projects;
