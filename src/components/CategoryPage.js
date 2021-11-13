import React from 'react'
import BtnHome from './BtnHome'
// import categoryImage from '../img/news-placeholder.png'
import { Link } from 'react-router-dom';
import CategoryPost from './CategoryPost';

function CategoryPage() {
    return (
        <div>
            <div className="category-page">
                <h2>Category Title</h2>
                <CategoryPost />
                {/* <div className="category-page-image">
                    <img src={categoryImage} />
                </div>
                <div className="category-page-inner">
                    <div className="category-page-title">
                        <h3>Category News Title</h3>
                    </div>
                    <div className="category-page-text">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam euismod ex vitae tellus faucibus venenatis. Nulla bibendum scelerisque urna.</p>
                    </div>
                </div> */}
            </div>
            <div className="category-page-btn">
                <Link to="/"><BtnHome /></Link>
            </div>
        </div>
    )
}

export default CategoryPage
