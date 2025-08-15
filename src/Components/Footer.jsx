import React from "react";
import { Link } from "react-router-dom";
import '../styles.css';

const Footer = () => {
    return (
        <>
            <footer>
                <div className="foot">
                    <div className="footfirst">
                        <h3>Manijitya's Portfolio</h3>
                        <p>Passionate Web Developer</p>
                    </div>

                    <div className="footsecond">
                        <h4>Social Links</h4>
                        <ul>
                            <li>
                                <a href="https://github.com/Manijitya30" target="_blank" rel="noopener noreferrer">
                                    <i className="fab fa-github"></i> GitHub
                                </a>
                            </li>
                            <li>
                                <a href="https://www.linkedin.com/in/manijitya-kumar-parimi-21a86228b/" target="_blank" rel="noopener noreferrer">
                                    <i className="fab fa-linkedin"></i> LinkedIn
                                </a>
                            </li>
                            <li>
                                <a href="https://x.com/manijitya30185" target="_blank" rel="noopener noreferrer">
                                    <i className="fab fa-twitter"></i> Twitter
                                </a>
                            </li>
                            <li>
                                <a href="https://www.instagram.com/manijitya_1592/?next=%2F" target="_blank" rel="noopener noreferrer">
                                    <i className="fab fa-instagram"></i> Instagram
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div className="footthird">
                        <h4>Contact Info</h4>
                        <ul>
                            <li>📧 manijitya30@gmail.com</li>
                            <li>📱 +91 9908552005</li>
                            <li>📍 Jabalpur, Madhya Pradesh, India</li>
                        </ul>
                    </div>

                    <div className="footfour">
                        <h4>Links</h4>
                        <ul>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/About">About</Link></li>
                            <li><Link to="/Projects">Projects</Link></li>
                            <li><Link to="/ContactMe">Contact</Link></li>
                        </ul>
                    </div>
                </div>

                <div className="foot-rights">
                    CopyRight &#169; Manisportfolio.com | All rights reserved
                </div>
            </footer>
        </>
    );
};

export default Footer;
