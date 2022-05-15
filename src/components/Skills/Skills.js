import React from 'react';
import "../../Stylesheets/Skills.css";
import mydata from '../../resume.json';
import EachSkillSection from './EachSkillSection';

const Skills = () => {
    const skills = mydata["skills"]
    return (
        <div id="skills" className="skill-section">
            <span className="section-headings skill-heading">Skills</span>
            <div className="skill-container container-fluid">
                <div className="row mb-3">
                    <EachSkillSection name="Web Development" skills={skills["Web Development"]} />
                    <div className="col-md-2"></div>
                    <EachSkillSection name="Object Oriented Programming Languages" skills={skills["Object Oriented Programming Languages"]} />
                </div>
                {/* <hr /> */}
                <div className="row mt-3">
                    <EachSkillSection name="Cloud and Databases" skills={skills["Cloud and Databases"]} />
                    <div className="col-md-2"></div>
                    <EachSkillSection name="Integrated Development Environments (IDE's)" skills={skills["Integrated Development Environments (IDE's)"]} />
                </div>
            </div>
        </div>
    );
};

export default Skills;