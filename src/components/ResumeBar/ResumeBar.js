import React, { useState } from 'react';
import Resume from '../../resume.json';
import '../../Stylesheets/ResumeBar.scss';

/* eslint-disable */
const ResumeBar = () => {
    const [navBar, setNavBar] = useState(false);

    const changeBackground = () => {

        if (window.scrollY >= 50) {
            setNavBar(true)
        }
        else {
            setNavBar(false)
        }
    }

    window.addEventListener('scroll', changeBackground)

    const navBarClassName = 'resumeContainer' + (navBar ? ' scroll' : '');
    return (
        <section className={navBarClassName}>
            <a className="resume-brand text" href="">{Resume.about.name}</a>
            <ul className="resume-ul">
                <li className="">
                    <a className="text" onClick={() => window.open("https://drive.google.com/file/d/1J6Ceo0InAXNVI1y1waFTaIvGY62Enjfq/view?usp=sharing", "_blank")} aria-current="page" href="">Resume</a>
                </li>
            </ul>
        </section>
    );
};

export default ResumeBar;