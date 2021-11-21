import React from 'react';
import "../../Stylesheets/About.css"

const AboutMenu = (props) => {
    let classProperty = "about-li";
    if (props.setActive) {
        classProperty += " active";
    }
    return (
        <li onClick={props.showContents} className={classProperty}>
            <button className="" value={props.value} >{props.name}</button>
        </li>
    );
};

export default AboutMenu;