import React from 'react'
import categoryImage from '../img/news-placeholder.png'

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
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam euismod ex vitae tellus faucibus venenatis. Nulla bibendum scelerisque urna <span>Read More...</span></p>
                </div>
            </div>
        </div>
    )
}

export default CategoryPost
