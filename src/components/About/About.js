import React, { useState } from 'react';
import "../../Stylesheets/About.css";
import AboutMenu from '../Elements/AboutMenu.js'
import Education from './Education';
import $ from 'jquery';
import Certification from "./Certification";
import Awards from "./Awards"
import mydata from '../../resume.json';

const About = () => {
    const [category, setCategory] = useState('1');
    const showContent = (name) => {
        setCategory(name.target.value)
    }
    const aboutJson = mydata['about']

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
                        {aboutJson['aboutme'].map((text, index) => {
                            return (<p key={text} className="about-para mt-4">{text}</p>)
                        })}

                        <ul className="about-ul">
                            <AboutMenu showContents={showContent} value='1' name="Education" setActive={true} />
                            <AboutMenu showContents={showContent} value='2' name="Certifications" />
                            <AboutMenu showContents={showContent} value='3' name="Awards" />
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