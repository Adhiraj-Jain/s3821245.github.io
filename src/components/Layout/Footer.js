import React from 'react';
import "../../Stylesheets/Footer.css";

const Footer = () => {
    return (
        <section id="footer">
            <div className="container">
                <ul className="d-flex flex-row justify-content-center align-items-center">
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

        </section>
    );
};

export default Footer;