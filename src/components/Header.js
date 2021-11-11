import React from 'react'
import logo from '../img/GNS-logo.png';

function Header() {
    return (
        <div className="navbar">
            <div className="logo">
                <img src={logo} alt="logo" />
            </div>
            <div className="nav-links">
                <ul>
                    <li>World</li>
                    <li>Business</li>
                    <li>Politics</li>
                    <li>Health</li>
                    <li>Sports</li>
                    <li>Travel</li>
                </ul>
            </div>
        </div>
    )
}

export default Header
