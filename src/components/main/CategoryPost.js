import React from 'react'
import { Link } from 'react-router-dom';

function CategoryPost(props) {
    return (
        <div className="category-post">
            <div className="category-title">
                <h3>Category Title</h3>
            </div>
            <div className="category-content">
                <div className="category-image">
                    <img src={props.categoryMain.urlToImage} alt="News Story" />
                </div>
                <div className="category-item-title">
                    <h3>{props.categoryMain.title}</h3>
                </div>
            </div>
                <div className="category-text">
                    <p>{props.categoryMain.description} <Link to="/category"><span>Read More...</span></Link></p>
                </div>
        </div>
    )
}

export default CategoryPost
