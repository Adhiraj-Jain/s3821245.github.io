import React from 'react';
import "../../Stylesheets/Footer.scss";

const Footer = () => {
    return (
        <footer id="footer" className=''>
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
            <span className="copyright-div">© 2022 by Adhiraj Jain</span>
            <span className="copyright-div">All product names, images, logos, and brands are property of their respective owners</span>
        </footer>

    );
};

export default Footer;