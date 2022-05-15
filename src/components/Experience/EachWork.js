import React from 'react';
// 660
const EachWork = (props) => {
    console.log(props.show);
    return (
        <div key={props.value} className="row each-work my-4">
            <div className="col-md-4">
                <span className="d-block company">{props.work.company}</span>
                <span className="d-block year">{props.work.year}</span>
            </div>
            <div className="col-md-8">
                <span className="d-block position">{props.work.position}</span>
                {props.buttonAvailable ? (<span className="col-md-8">
                    {props.show !== props.value && (<button className="detail-button" value={props.value} onClick={props.onClicked} >Details</button>)}
                    {props.show === props.value && (<span className="d-block summary"><span className="summary-heading">Summary: </span>{props.work.summary}</span>)}
                    {/* {props.show === props.value && (<button className="detail-button" value={-1} onClick={props.onClicked} >Hide Details</button>)} */}
                </span>) : (<span className="col-md-8">
                    <span className="d-block summary"><span className="summary-heading">Summary: </span>{props.work.summary}</span>
                </span>)}
                <span className="d-block location"><i className="fas fa-map-marker"></i> {props.work.location}</span>
            </div>
        </div >
    );
};

export default EachWork;