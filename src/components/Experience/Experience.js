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
        <section id="experience" className="experience-section container">
            <span className="section-headings d-inline">Experience</span>
            <div className="experience-container">
                {Object.keys(mydata[workType]).map((expKey, expKeyindex) => {
                    const name = mydata[workType][expKey]["company"];
                    const positions = mydata[workType][expKey]["positions"];
                    return (<div className="row each-work my-4">
                        <div className="company">{name}</div>
                        <div className="timeline">
                            <ul>
                                {Object.keys(positions).map((key, index) => {
                                    return (<EachWork buttonAvailable={showButton} show={currWork} value={key} work={positions[key]} onClicked={showContent} key={index + positions.length} />)
                                }
                                )}
                            </ul>
                        </div>
                    </div>
                    )
                }
                )}
            </div>
            <div className='switch'>
                <div className="switch-button">
                    <input className="switch-button-checkbox" type="checkbox" onClick={changeWorkType}></input>
                    <label className="switch-button-label"><span className="switch-button-label-span">Work</span></label>
                </div>
            </div>
        </section>
    );
};

export default Experience;

// return (<EachWork buttonAvailable={showButton} show={currWork} value={key} work={positions[key]} onClicked={showContent} key={index + positions.length} />)


// <section id="experience" className="experience-section">
// <span className="section-headings">Experience</span>
// <div className="experience-container container-fluid">
//     {Object.keys(mydata[workType]).map((key, index) => {
//         return (<EachWork buttonAvailable={showButton} show={currWork} value={key} work={mydata[workType][key]} onClicked={showContent} key={index + workType.length} />)
//     }
//     )}
// </div>
// <div className='switch'>
//     <div className="switch-button">
//         <input className="switch-button-checkbox" type="checkbox" onClick={changeWorkType}></input>
//         <label className="switch-button-label"><span className="switch-button-label-span">Work</span></label>
//     </div>
// </div>
// </section >

