import React, { useState, useEffect } from 'react';
import "../../Stylesheets/Experience.css"
import mydata from '../../resume.json';
import EachWork from './EachWork';

const Experience = () => {
    const [currWork, setWork] = useState(-1);
    const [showButton, setButton] = useState(false);
    const [workType, setWorkType] = useState("work");

    const showContent = (name) => {
        setWork(name.target.value)
    }

    const changeButton = () => {
        if (window.innerWidth <= 660) {
            setButton(true)
        }
        else {
            setButton(false)
        }
    }

    const changeWorkType = () => {
        if (workType.match("work")) {
            setWorkType("volunteer")
        }
        else {
            setWorkType("work")
        }
    }

    useEffect(changeButton, [])
    window.onresize = changeButton;

    return (
        <section id="experience" className="experience-section">
            <span className="section-headings">Experience</span>
            <div className="experience-container container-fluid">
                {Object.keys(mydata[workType]).map((key, index) => {
                    return (<EachWork buttonAvailable={showButton} show={currWork} value={key} work={mydata[workType][key]} onClicked={showContent} key={index + workType.length} />)
                }
                )}
            </div>
            <div className='switch'>
                <div className="switch-button">
                    <input className="switch-button-checkbox" type="checkbox" onClick={changeWorkType}></input>
                    <label className="switch-button-label"><span className="switch-button-label-span">Work</span></label>
                </div>
            </div>
        </section >
    );
};

export default Experience;