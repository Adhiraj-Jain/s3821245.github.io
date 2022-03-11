import React from 'react';
import "../../Stylesheets/Footer.css";

const Footer = () => {
    return (
        <section id="footer">
            <div class="container">
                <ul className="d-flex flex-row justify-content-center align-items-center">
                    <li>
                        <a href="https://www.linkedin.com/in/adhiraj-jain/"><i class="fab fa-linkedin-in"></i></a>
                    </li>
                    <li>
                        <a href="https://github.com/Adhiraj-Jain"><i class="fab fa-github"></i></a>
                    </li>
                    <li>
                        <a href="https://twitter.com/adhirajjain09"><i class="fab fa-twitter"></i></a>
                    </li>

                </ul>
            </div>

        </section>
    );
};

export default Footer;