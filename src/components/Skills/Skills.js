import React from 'react';
import "../../Stylesheets/Skills.css";
import mydata from '../../resume.json';
import EachSkillSection from './EachSkillSection';

const Skills = () => {
    const skills = mydata["skills"]
    return (
        <section id="skills" className="skill-section">
            <span className="section-headings skill-heading">Skills</span>
            <div className="skill-container container-fluid">
                <div className="row mb-3">
                    <EachSkillSection keyNumber={0} name="Web Development" skills={skills["Web Development"]} />
                    <div className="col-md-2"></div>
                    <EachSkillSection keyNumber={1} name="Object Oriented Programming Languages" skills={skills["Object Oriented Programming Languages"]} />
                </div>
                <div className="row mt-3">
                    <EachSkillSection keyNumber={2} name="Cloud and Databases" skills={skills["Cloud and Databases"]} />
                    <div className="col-md-2"></div>
                    <EachSkillSection keyNumber={3} name="Tools and Technologies" skills={skills["Tools and Technologies"]} />
                </div>
            </div>
        </section>
    );
};

export default Skills;