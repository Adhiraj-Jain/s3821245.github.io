import React from 'react';
import EachSkill from './EachSkill';

const EachSkillSection = (props) => {
    return (
        <div className="col-md-5">
            <span className="skill-tagline">{props.name}</span>
            <div className="eachSkill-section">
                {Object.keys(props.skills).map(key => {
                    return (<EachSkill skillName={key} value={props.skills[key]} />)
                }
                )}
            </div>
        </div>
    );
};

export default EachSkillSection;