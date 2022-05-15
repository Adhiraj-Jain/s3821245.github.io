import React from 'react';
import { FaStar } from 'react-icons/fa';

const EachSkill = (props) => {
    return (
        <span key={props.skillName} className="skill-row">
            <span className="skillname">{props.skillName}</span>
            {/* <span className="stars">
                {[...Array(5)].map((star, i) => {
                    const currVal = i + 1
                    if (currVal <= props.value) {
                        return <FaStar className="filled-star" />
                    }
                    else {
                        return <FaStar className="unfilled-star" />
                    }
                })}
            </span> */}
            {/* <span className="">{props.value}</span> */}
        </span>
    );
};

export default EachSkill;