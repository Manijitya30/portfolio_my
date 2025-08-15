import React, { useEffect, useRef } from "react";
import '../styles.css';
import Typed from "typed.js";

const HomePage = () => {
    const typedEl = useRef(null);

    useEffect(() => {
        const typed = new Typed(typedEl.current, {
            strings: ['Web Developer', 'Coder'],
            typeSpeed: 50,
            backSpeed: 50,
            loop: true,
        });

        return () => {
            typed.destroy();
        };
    }, []);

    const downloadResume = () => {
        const link = document.createElement('a');
        link.href = 'Manijitya_r.pdf'; // file in public folder
        link.download = 'Manijitya.pdf';
        link.click();
    };

    return (
        <>
            <main>
                <section className="firstsec">
                    <div className="leftsec">
                        <div>
                            Hi, My name is <span className="purple">Manijitya Kumar</span>
                        </div>
                        <div>and I am a Passionate</div>
                        {/* Typed.js text here */}
                        <span ref={typedEl}></span>
                        
                        <div className="buttons">
                            <button className="btn" onClick={downloadResume}>Download Resume</button>
                            <a href="https://github.com/Manijitya30">
                                <button className="btn">Visit Github</button>
                            </a>
                        </div>
                    </div>
                    <div className="rightsec">
                        <img src="Photo1.png" alt="" />
                    </div>
                </section>
                <hr />
                <section className="secondsec">
                    <span className="text-gray">What I have done so far</span>
                    <h1>Work Experience</h1>

                    <div className="box">
                        {[...Array(6)].map((_, index) => (
                            <div className="vert" key={index}>
                                <img className="image-top" src="programphoto.jpg" alt="" />
                                <div className="vert-text">HTML Developer (2010-2012)</div>
                                <div className="vert-desc">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit explicabo, distinctio doloribus delectus consectetur temporibus blanditiis. Quos aspernatur recusandae iusto deleniti provident rem qui blanditiis suscipit labore totam? Modi, debitis.
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            </main>
        </>
    );
};

export default HomePage;
