import React from 'react'
import { Link } from 'react-router-dom';

function SidebarPost(props) {
    return (
        <div className="sidebar-post">
            <div className="sidebar-image">
                <img src={props.sidebarPost.urlToImage} alt="Top News" />
            </div>
            <div className="sidebar-title">
                <h3>{props.sidebarPost.title}</h3>
            </div>
            <div className="sidebar-text">
                <p>{props.sidebarPost.description} <Link to="/article"><span>Read More...</span></Link></p>
            </div>
        </div>
    )
}

export default SidebarPost
