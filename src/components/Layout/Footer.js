import React from 'react';
import "../../Stylesheets/Footer.css";

const Footer = () => {
    return (
        <div id="footer" className='footer'>
            <ul className="">
                <li>
                    <a href="https://www.linkedin.com/in/adhiraj-jain/"><i className="fab fa-linkedin-in"></i></a>
                </li>
                <li>
                    <a href="https://github.com/Adhiraj-Jain"><i className="fab fa-github"></i></a>
                </li>
                <li>
                    <a href="https://twitter.com/adhirajjain09"><i className="fab fa-twitter"></i></a>
                </li>
            </ul>
        </div>
    );
};

export default Footer;