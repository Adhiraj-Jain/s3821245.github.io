import React from 'react';
import mydata from '../../resume.json';
import "../../Stylesheets/Education.css"

const Education = () => {
    const educationData = mydata["education"]
    return (
        <div>
            {Object.keys(educationData).map((key, index) => {
                return (<div className="my-3" key={index}>
                    <span className="d-block">
                        <span className="degree">{educationData[key]["degree"]}</span>
                        <span className='dash'>-</span>
                        <span className="institution">{educationData[key]["institution"]}</span>
                    </span>
                    <span key={key} className="d-block year">
                        {educationData[key]["year"]}
                    </span>
                </div>)
            }
            )}
        </div>
    );
};

export default Education;