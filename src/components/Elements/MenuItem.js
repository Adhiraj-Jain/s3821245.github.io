import React from "react";

const MenuItem = (props) => {
    return (
        <li className="nav-item">
            <a className="nav-link text" aria-current="page" href={props.href}>{props.text}</a>
        </li>
    );
}

export default MenuItem;