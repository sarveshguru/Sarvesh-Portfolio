import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    return (
        <nav>
            <div className="container nav-c">
                <Link to="/" className="navbar-logo">
                    <img
                        src="https://www.coolgenerator.com/Data/Textdesign/202401/68400a78d6b46c5aef4e31ff02a9f113.png"
                        alt="Sarvesh Choudhary"
                    />
                </Link>
                <div className="navbar-p-links">
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
            </div>
        </nav>
    );
};

export default Navbar;
