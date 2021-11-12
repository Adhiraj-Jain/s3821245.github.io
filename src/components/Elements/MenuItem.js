import React from "react";

const MenuItem = (props) => {
    return (
        <li class="nav-item">
            <a class="nav-link fs-4 text mx-3 text-white pb-3" aria-current="page" href={props.href}>{props.text}</a>
        </li>
    );
}

export default MenuItem;