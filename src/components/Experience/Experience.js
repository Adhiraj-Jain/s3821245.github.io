import React, { useState, useEffect } from 'react';
import "../../Stylesheets/Experience.css"
import mydata from '../../resume.json';
import EachWork from './EachWork';
import $ from 'jquery';

const Experience = () => {
    const works = mydata["work"]
    const [currWork, setWork] = useState(-1);
    const [showButton, setButton] = useState(false);

    const showContent = (name) => {
        setWork(name.target.value)
    }

    const changeButton = () => {
        // console.log(window.innerWidth)
        if (window.innerWidth <= 660) {
            // console.log("This is triggered!!", window.innerWidth)
            setButton(true)
        }
        else {
            setButton(false)
        }
    }
    useEffect(changeButton, [])
    // window.addEventListener('resize', changeButton)
    window.onresize = changeButton;

    return (
        <div id="experience" className="experience-section">
            <span className="section-headings">Experience</span>
            <div className="experience-container container-fluid">
                {Object.keys(works).map(key => {
                    return (<EachWork buttonAvailable={showButton} show={currWork} value={key} work={works[key]} onClicked={showContent} />)
                }
                )}
            </div>
        </div>
    );
};

export default Experience;