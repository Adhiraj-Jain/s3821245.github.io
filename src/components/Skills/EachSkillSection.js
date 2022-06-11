import React from 'react';

const EachSkillSection = (props) => {
    return (
        <div key={props.keyNumber} className="col-md-5" >
            <span className="skill-tagline">{props.name}</span>
            <div className="skills">
                {Object.keys(props.skills).map((key, index) => {
                    return (<div className="skillname" key={index}>{key}</div>)
                }
                )}
            </div>
        </div>
    );
};

export default EachSkillSection;