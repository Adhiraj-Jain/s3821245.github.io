import React from 'react';
import ParticleBackground from '../../ParticleBackground';
import "../../Stylesheets/Header.css";
import TextAnimation from '../About/TextAnimation';

const Header = ({ pageWidth, pageHeight }) => {
    return (
        <section id="home" className="Header particles-js">
            <TextAnimation />
            {pageWidth > 1024 && (<ParticleBackground />)}

        </section>
    );
};

export default Header;