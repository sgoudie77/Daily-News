import React from 'react'
import sidebarImage from '../img/bn-placeholder.jpg'
import { Link } from 'react-router-dom';

function SidebarPost() {
    return (
        <div className="sidebar-post">
            <div className="sidebar-image">
                <img src={sidebarImage} alt="Top News" />
            </div>
            <div className="sidebar-title">
                <h3>Top News Title</h3>
            </div>
            <div className="sidebar-text">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam euismod ex vitae tellus faucibus venenatis. Nulla bibendum scelerisque urna <Link to="/article"><span>Read More...</span></Link></p>
            </div>
        </div>
    )
}

export default SidebarPost
