import React from 'react';

const EachWork = (props) => {
    return (
     <li>
        <div class="timeline-content">
          <h3 class="date">{props.work.year}</h3>
          <h1>{props.work.position}</h1>
          <span className="d-block location"><i className="fas fa-map-marker"></i> {props.work.location}</span>
          
          {props.buttonAvailable ? (<span key={0} className="col-md-8">
                    {props.show !== props.value && (<button className="detail-button" value={props.value} onClick={props.onClicked} >Details</button>)}
                    {props.show === props.value && (<span className="d-block summary">{props.work.summary}</span>)}
                </span>) : (<span key={1} className="">
                    <span className="d-block summary">{props.work.summary}</span>
                </span>)}
        </div>
      </li>
    );
};

export default EachWork;


//    <div className="row each-work my-4">
//             <div className="col-md-4">
//                 <span className="d-block company"></span>
//                 <span className="d-block year">{props.work.year}</span>
//             </div>
//             <div className="col-md-8">
//                 <span className="d-block position"></span>
                
//                 <span className="d-block location"><i className="fas fa-map-marker"></i> {props.work.location}</span>
//             </div>
//         </div >