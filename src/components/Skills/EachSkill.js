import React from 'react';

const EachSkill = (props) => {
    return (
        <span key={props.skillName} className="skill-row">
            <span className="skillname" key={props.skillName}>{props.skillName}</span>
        </span>
    );
};

export default EachSkill;