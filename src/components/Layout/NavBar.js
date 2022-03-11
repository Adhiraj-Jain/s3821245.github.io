import React, { useState } from 'react';

import MenuItem from '../Elements/MenuItem';
import Resume from '../../resume.json';
import '../../Stylesheets/NavBar.css';

const handleMenuClick = (e) => {
    const currentState = this.state.showMenu;
    this.setState({ showMenu: !currentState });
}

const NavBar = () => {
    const [navBar, setNavBar] = useState(false);

    const changeBackground = () => {

        if (window.scrollY >= 50) {
            setNavBar(true)
        }
        else {
            setNavBar(false)
        }
    }

    window.addEventListener('scroll', changeBackground)

    const navBarClassName = 'navbarContainer container-fluid pt-0 mx-4' + (navBar ? ' scroll' : '');
    return (
        <nav className='navbar fixed-top navbar-expand-lg navbar-light py-0'>
            <div className={navBarClassName}>
                <a className="navbar-brand text p-4 text-white" href="#">{Resume.about.name}</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <i className="fas fa-bars"></i>
                </button>
                <div className="d-lg-flex flex-row-reverse collapse navbar-collapse p-3" id="navbarNav">
                    <ul className=" navbar-nav">
                        <MenuItem text="About Me" href="#aboutMe" onClick={handleMenuClick} />
                        <MenuItem text="Skills" href="#skills" onClick={handleMenuClick} />
                        <MenuItem text="Experience" href="#experience" onClick={handleMenuClick} />
                        <MenuItem text="Projects" href="#projects" onClick={handleMenuClick} />
                        <MenuItem text="Contact" href="#contactme" onClick={handleMenuClick} />
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default NavBar;