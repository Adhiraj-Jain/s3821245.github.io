import React from 'react';
import mydata from '../../resume.json';
import "../../Stylesheets/Certification.css"

const certification = () => {
    const certificationData = mydata["certification"]
    return (
        <div className='certification'>
            {Object.keys(certificationData).map(key => {
                return (<div className="my-3">
                    <span key={key} className="d-block">
                        <span className="degree">{certificationData[key]["name"]}</span>
                        <span className='dash'>-</span>
                        <span className="institution">{certificationData[key]["institution"]}</span>
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