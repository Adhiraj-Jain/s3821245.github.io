import React from 'react';

import MenuItem from '../Elements/MenuItem';
import Resume from '../../resume.json';
import '../../Stylesheets/NavBar.css';

const handleMenuClick = (e) => {
    const currentState = this.state.showMenu;
    this.setState({ showMenu: !currentState });
}

const NavBar = () => {
    return (
        <nav class="navbar fixed-top navbar-expand-lg navbar-light bg-transparent">
            <div className="container-fluid">
                <a className="navbar-brand fs-2 text p-4 text-white" href="#">{Resume.about.name}</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <i class="fas fa-bars"></i>
                </button>
                <div class="d-lg-flex flex-row-reverse collapse navbar-collapse p-3" id="navbarNav">
                    <ul class=" navbar-nav">
                        <MenuItem text="About Me" href="#aboutMe" onClick={handleMenuClick} />
                        <MenuItem text="Skills" href="#skills" onClick={handleMenuClick} />
                        <MenuItem text="Experience" href="#experience" onClick={handleMenuClick} />
                        <MenuItem text="Articles" href="#articles" onClick={handleMenuClick} />
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default NavBar;