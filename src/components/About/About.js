import React, { useState } from 'react';
import "../../Stylesheets/About.css";
import AboutMenu from '../Elements/AboutMenu.js'
import Education from './Education';
import $ from 'jquery';
import Certification from "./Certification";
import Awards from "./Awards"

const About = () => {
    const [category, setCategory] = useState('1');
    const showContent = (name) => {
        // if(name == 1)
        setCategory(name.target.value)
    }

    $(".about-li").on("click", function () {
        $(".about-li").removeClass("active");
        $(this).addClass("active");
    });

    return (
        <section id='aboutMe' className="aboutme container-fluid px-0">
            <div className="row about-row">
                <div className="about-pic-col col-lg-6">
                    <img className="" src="Aboutme.jpg" alt="About"></img>
                </div>
                <div className="about-text-col col-lg-6 mt-2">
                    <div className="col-lg-10">
                        <span className="section-headings about-text">About me</span>
                        <h3 className="about-heading mt-3">Software Developer based in Australia</h3>
                        <p className="about-para mt-4">I'm web designer, and I'm very passionate and dedicated to my work.
                            With 20 years experience as a professional web developer,
                            I have acquired the skills and knowledge necessary to make your project a success.
                            I enjoy every step of the design process, from discussion and collaboration.</p>
                        <ul className="d-flex flex-row justify-content-start about-ul">
                            {/* <li onClick={showContent} className="about-li active">
                                <button className="" value="1" >Education & Certification</button>
                            </li> */}
                            <AboutMenu showContents={showContent} value='1' name="Education" setActive={true} />
                            <AboutMenu showContents={showContent} value='2' name="Certifications" />
                            <AboutMenu showContents={showContent} value='3' name="Awards" />
                            {/* <AboutMenu showContents={showContent} value='4' name="Experience" /> */}
                        </ul>
                        {category === '1' && <Education />}
                        {category === '2' && <Certification />}
                        {category === '3' && <Awards />}
                    </div>
                </div>
            </div>
        </section >
    );
};

export default About;