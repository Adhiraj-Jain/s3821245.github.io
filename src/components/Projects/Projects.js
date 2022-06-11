import React, { useState, useEffect } from 'react';
import "../../Stylesheets/Projects.css";
import EachProject from './EachProject';
import mydata from '../../resume.json';

const Projects = ({ openModal }) => {
    const projects = mydata["projects"];
    const [aim, setAim] = useState(true);

    const showAim = () => {
        if (window.innerWidth <= 660) {
            setAim(false)
        }
        else { setAim(true) }
    }
    useEffect(showAim, [])
    window.onresize = showAim;

    return (
        <section id="projects">
            < div className="projects-bg" >
                <div className="project-heading">
                    <span className="section-headings">Projects</span>
                </div>
                <div id="projects-container" className="container">
                    <div className="row">
                        {Object.keys(projects).map(key => {
                            return (<EachProject key={key} value={key} isVisible={aim} project={projects[key]} openModal={openModal} />)
                        }
                        )}
                    </div>
                </div>
            </div >

        </section>
    );
};

export default Projects;