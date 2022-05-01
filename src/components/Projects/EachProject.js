import React from 'react';
import { Link } from 'react-router-dom';
import "../../Stylesheets/Projects.css";

const EachProject = (props) => {
    return (
        <div class="eachProject col-sm-6 col-md-4 col-12">
            <div key={props.value} className="card bg-dark text-white">
                <img src={props.project["img"]} className="card-img" alt="..." />
                <div className="card-img-overlay d-flex flex-column">
                    <h5 className="card-title">{props.value}</h5>
                    {/* {props.isVisible && (<p className="card-text">{props.project["aim"]}</p>)} */}
                    <p className="card-text"><button className='Button' onClick={() => props.openModal(props)}>Know More</button></p>
                </div>
            </div>
        </div >
    );
};

{/* <Link className='button' to={"/projects/" + props.value}>Know More</Link> */ }
export default EachProject;