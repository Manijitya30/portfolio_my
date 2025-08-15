import React from "react";
import '../styles.css';

const About = () => {
    return (
        
        <>
            <main className="page-container">
                <section className="about-section">
                    <div className="about-header">
                        <h1>About <span className="purple">Me</span></h1>
                        <p className="text-gray">Get to know more about who I am</p>
                    </div>

                    <div className="about-content">
                        <div className="about-image">
                            <img src="Photo1.png" alt="Manijitya Kumar" />
                        </div>

                        <div className="about-text">
                            <h2>Hello! I'm Manijitya Kumar</h2>
                            <p>I'm a passionate web developer with a love for creating beautiful, functional, and user-friendly websites. My journey in web development started with HTML and CSS, and has evolved to include modern frameworks and technologies.</p>

                            <div className="skills-section">
                                <h3>Skills & Technologies</h3>
                                <div className="skills-grid">
                                    <div className="skill-item">
                                        <span className="skill-name">HTML5</span>
                                    </div>
                                    <div className="skill-item">
                                        <span className="skill-name">CSS3</span>
                                    </div>
                                    <div className="skill-item">
                                        <span className="skill-name">JavaScript</span>
                                    </div>
                                    <div className="skill-item">
                                        <span className="skill-name">React</span>
                                    </div>
                                    <div className="skill-item">
                                        <span className="skill-name">Node.js</span>
                                    </div>
                                    <div className="skill-item">
                                        <span className="skill-name">Git</span>
                                    </div>
                                </div>
                            </div>

                            <div className="personal-info">
                                <h3>Personal Journey</h3>
                                <p>When I'm not coding, I enjoy exploring new technologies, contributing to open-source projects, and continuously learning about the latest trends in web development. I believe in writing clean, maintainable code and creating exceptional user experiences.</p>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
};

export default About;
