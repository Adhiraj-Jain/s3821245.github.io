import React from 'react';
import ParticleBackground from '../../ParticleBackground';
import "../../Stylesheets/Header.css";
import NavBar from './NavBar';
import TextAnimation from '../About/TextAnimation';

const Header = () => {
    return (
        <div className="Header particles-js">
            <ParticleBackground />
            <NavBar />
            <TextAnimation />
        </div>
    );
};

export default Header;