import React, { useState, useEffect } from 'react';
import "../../Stylesheets/Projects.css";
import EachProject from './EachProject';
import mydata from '../../resume.json';
import Popup from './Popup'

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
        <div id="projects">
            <div class="projects-bg">
                <div id="projects-container" className="container">
                    <div class="row">
                        {Object.keys(projects).map(key => {
                            return (<EachProject value={key} isVisible={aim} project={projects[key]} openModal={openModal} />)
                        }
                        )}
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Projects;