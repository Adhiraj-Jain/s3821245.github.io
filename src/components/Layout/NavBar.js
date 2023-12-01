import React, { useState, useEffect, useRef } from 'react';

import MenuItem from '../Elements/MenuItem';
import '../../Stylesheets/NavBar.scss';

/* eslint-disable */

const handleMenuClick = (e) => {
    const currentState = this.state.showMenu;
    this.setState({ showMenu: !currentState });
}

const NavBar = ({ pageHeight }) => {

    const [navBar, setNavBar] = useState(false);
    const [scrollBarHeight, setScrollBarHeight] = useState(0);
    const ref = useRef(null);

    useEffect(() => {
        if (ref.current !== null) {
            setScrollBarHeight(ref.current.clientHeight);
        }
    }, []);
    const [scrollPosition, setScrollPosition] = useState(0);
    const handleScroll = () => {
        const position = window.pageYOffset;
        setScrollPosition(position);
    };

    const changeBackground = () => {

        if (window.scrollY >= 50) {
            setNavBar(true)
        }
        else {
            setNavBar(false)
        }
    }

    useEffect(() => {
        window.addEventListener("scroll", handleScroll, { passive: true });

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <nav className='navbar'>
            <ul className="navbar-nav" ref={ref} dir="rtl">
                <MenuItem text="Home" href="#home" onClick={handleMenuClick} />
                <MenuItem text="About Me" href="#aboutMe" onClick={handleMenuClick} />
                <MenuItem text="Skills" href="#skills" onClick={handleMenuClick} />
                <MenuItem text="Experience" href="#experience" onClick={handleMenuClick} />
                <MenuItem text="Projects" href="#projects" onClick={handleMenuClick} />
                <MenuItem text="Gallery" href="#gallery" onClick={handleMenuClick} />
                <MenuItem text="Contact" href="#contactme" onClick={handleMenuClick} />
            </ul>
        </nav>
    );
};

export default NavBar;