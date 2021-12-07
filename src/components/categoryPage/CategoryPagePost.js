import React from 'react'
import { Link } from 'react-router-dom';

function CategoryPagePost(props) {
    return (
        <div className="category-page-post">
            <div className="category-page-image">
                {/* <img src={categoryImage} alt="News Story" /> */}
                <img src={props.categoryItems.urlToImage} alt="News Story" />
            </div>
            <div className="category-page-content">
                <div className="category-page-title">
                    <h3>{props.categoryItems.title}</h3>
                </div>
                <div className="category-page-text">
                    <p>{props.categoryItems.description} <Link to="/category"><span>Read More...</span></Link></p>
                </div>
            </div>
        </div>
    )
}

export default CategoryPagePost
