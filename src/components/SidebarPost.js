import React from 'react'
import sidebarImage from '../img/bn-placeholder.jpg'

function SidebarPost() {
    return (
        <div className="sidebar-post">
            <div className="sidebar-image">
                <img src={sidebarImage} />
            </div>
            <div className="sidebar-title">
                <h3>Top News Title</h3>
            </div>
            <div className="sidebar-text">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam euismod ex vitae tellus faucibus venenatis. Nulla bibendum scelerisque urna <span>Read More...</span></p>
            </div>
        </div>
    )
}

export default SidebarPost
