import React from 'react'
import sidebarImage from '../img/bn-placeholder.jpg'
import { Link } from 'react-router-dom';

function SidebarPost(props) {
    return (
        <div className="sidebar-post">
            <div className="sidebar-image">
                <img src={sidebarImage} alt="Top News" />
                {/* <img src={props.headlines.urlToImage} alt="Top News" /> */}
            </div>
            <div className="sidebar-title">
                {/* <h3>{props.headlines.title}</h3> */}
                <h3>News Title</h3>
            </div>
            <div className="sidebar-text">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam euismod ex vitae tellus faucibus venenatis. Nulla bibendum scelerisque urna <Link to="/article"><span>Read More...</span></Link></p>
            </div>
        </div>
    )
}

export default SidebarPost
