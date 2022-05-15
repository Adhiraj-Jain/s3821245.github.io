import React from 'react';
import mydata from '../../resume.json';
import "../../Stylesheets/Certification.css"

const awards = () => {
    const awardsData = mydata["awards"]
    return (
        <div>
            {Object.keys(awardsData).map(key => {
                return (<div className="my-3">
                    <span key={key} className="d-block">
                        <span className="degree">{awardsData[key]["name"]}</span>
                        <span className="d-block institution ps-0">Organised By - {awardsData[key]["institution"]}</span>
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