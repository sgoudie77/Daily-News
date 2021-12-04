import React from 'react'
// import categoryImage from '../img/news-placeholder.png'
import { Link } from 'react-router-dom';

function CategoryPost(props) {
    return (
        <div className="category-post">
            <div className="category-title">
                <h3>{props.headlines.title}</h3>
            </div>
            <div className="category-content">
                <div className="category-image">
                    {/* <img src={categoryImage} alt="News Story" /> */}
                    <img src={props.headlines.urlToImage} alt="News Story" />
                </div>
                <div className="category-text">
                    <p>{props.headlines.description} <Link to="/category"><span>Read More...</span></Link></p>
                </div>
            </div>
        </div>
    )
}

export default CategoryPost
