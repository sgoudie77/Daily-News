import React from 'react'
import BtnHome from './BtnHome'
import { Link } from 'react-router-dom';

function CategoryPage() {
    return (
        <div>
            <div className="category-page">
                <div className="category-page-image"></div>
                <div className="category-page-inner">
                    <div className="category-page-title"></div>
                    <div className="category-page-text"></div>
                </div>
            </div>
            <div className="category-page-btn">
                <Link to="/"><BtnHome /></Link>
            </div>
        </div>
    )
}

export default CategoryPage
