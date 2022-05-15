import React from 'react';
import EachSkill from './EachSkill';

const EachSkillSection = (props) => {
    return (
        <div className="col-md-5">
            <span className="skill-tagline">{props.name}</span>
            <div className="skills">
                {Object.keys(props.skills).map(key => {
                    return (<div className="skillname">{key}</div>)
                }
                )}
            </div>
        </div>
    );
};

export default EachSkillSection;

{/* <EachSkill skillName={key} value={props.skills[key]} /> */ }