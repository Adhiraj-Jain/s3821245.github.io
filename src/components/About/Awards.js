import React from 'react';
import mydata from '../../resume.json';
import "../../Stylesheets/Certification.css"

const awards = () => {
    const awardsData = mydata["awards"]
    return (
        <div>
            {Object.keys(awardsData).map((key, index) => {
                return (<div key={index} className="my-3">
                    <span className="d-block">
                        <div className="degree">{awardsData[key]["name"]}</div>
                        <div className="d-block institution ps-0">{awardsData[key]["institution"]}</div>
                    </span>
                    <span key={key} className="d-block year">
                        {awardsData[key]["year"]}
                    </span>
                </div>)
            }
            )}
        </div>
    );
};

export default awards;