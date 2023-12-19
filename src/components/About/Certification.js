import React from 'react';
import mydata from '../../resume.json';
import "../../Stylesheets/Certification.css"

const certification = () => {
    const certificationData = mydata["certification"]
    return (
        <div className='certification'>
            {Object.keys(certificationData).map((key, index) => {
                return (<div key={index} className="my-3">
                    <span className="d-block">
                        <div className="institution">{certificationData[key]["institution"]}</div>
                        <div className="degree">{certificationData[key]["name"]}</div>
                        {/* <span className='dash'>-</span> */}
                    </span>
                    <span key={key} className="d-block year">
                        {certificationData[key]["year"]}
                    </span>
                </div>)
            }
            )}
        </div>
    );
};

export default certification;