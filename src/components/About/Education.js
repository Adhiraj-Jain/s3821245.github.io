import React from 'react';
import mydata from '../../resume.json';
import "../../Stylesheets/Education.css"

const Education = () => {
    const educationData = mydata["education"]
    return (
        <div>
            {/* <p>{educationData[0]["degree"]}</p> */}
            {Object.keys(educationData).map(key => {
                return (<div className="my-3">
                    <span key={key} className="d-block">
                        <span className="degree">{educationData[key]["degree"]}</span>
                        -
                        <span className="institution">{educationData[key]["institution"]}</span>
                    </span>
                    <span key={key} className="d-block">
                        {educationData[key]["year"]}
                    </span>
                </div>)
            }
            )}
        </div>
    );
};

export default Education;