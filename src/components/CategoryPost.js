import React from 'react'
import categoryImage from '../img/news-placeholder.png'
import { Link } from 'react-router-dom';

function CategoryPost() {
    return (
        <div className="category-post">
            <div className="category-title">
                <h3>Category Title</h3>
            </div>
            <div className="category-content">
                <div className="category-image">
                    <img src={categoryImage} />
                </div>
                <div className="category-text">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam euismod ex vitae tellus faucibus venenatis. Nulla bibendum scelerisque urna <Link to="/category"><span>Read More...</span></Link></p>
                </div>
            </div>
        </div>
    )
}

export default CategoryPost
