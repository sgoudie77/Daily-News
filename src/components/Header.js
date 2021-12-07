import React from 'react'
import logo from '../img/GNS-logo.png'
// import { Link, NavLink } from 'react-router-dom';

function Header() {
    return (
        <div className="navbar">
            <div className="logo">
                <img src={logo} alt="logo" />
            </div>
            <div className="nav-links">
                <ul>
                    <li>General</li>
                    <li>Business</li>
                    <li>Science</li>
                    <li>Health</li>
                    <li>Sports</li>
                    <li>Technology</li>

                    {/* <li><NavLink to="/category">General</NavLink></li>
                    <li><NavLink to="/category">Business</NavLink></li>
                    <li><NavLink to="/category">Science</NavLink></li>
                    <li><NavLink to="/category">Health</NavLink></li>
                    <li><NavLink to="/category">Sports</NavLink></li>
                    <li><NavLink to="/category">Technology</NavLink></li> */}
                </ul>
            </div>
        </div>
    )
}

export default Header
