import React from 'react';
import "../../Stylesheets/About.css";
import TextAnimation from './TextAnimation';

const About = () => {
    return (
        <section className="aboutme container-fluid px-0">
            <div className="row align-items-center">
                <div className="col-lg-6">
                    <img className="" src="Aboutme.jpg"></img>
                </div>
                <div className="col-lg-6 text-center d-none d-lg-block mt-5"></div>
            </div>
        </section>
    );
};

export default About;