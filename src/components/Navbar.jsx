import React, { useEffect, useRef, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';
import sc from '../Assets/sc_logo.png'

const Navbar = () => {

    const [showMenu, setShowMenu] = useState(false);
    const navbarRef = useRef(null);

    const toggleMenu = () => {
        setShowMenu(!showMenu);
    }
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (navbarRef.current && !navbarRef.current.contains(event.target)) {
                setShowMenu(false);
            }
        };

        document.addEventListener('click', handleClickOutside);

        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, []);


    return (
        <nav ref={navbarRef}>
            <div className="container nav-c">
                <Link to="/" className="navbar-logo">
                    <img
                        src={sc}
                        alt="Sarvesh Choudhary"
                    />
                </Link>
                <div className={`navbar-p-links ${showMenu ? `show-menu` : ''}`}>
                    <div className="p-ling">
                        <NavLink to="/">HOME</NavLink>
                    </div>
                    <div className="p-ling">
                        <NavLink to="/about">ABOUT</NavLink>
                    </div>
                    <div className="p-ling">
                        <NavLink to="/projects">PROJECTS</NavLink>
                    </div>
                    <div className="p-ling">
                        <NavLink to="/resume">RESUME</NavLink>
                    </div>
                </div>
                
                <div className={`menu-btn ${showMenu ? 'rotate-icon' : ''}`} onClick={toggleMenu}>
                    <FontAwesomeIcon icon={showMenu ? faXmark : faBars} />
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
