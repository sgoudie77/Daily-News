import React, { useState, useEffect } from 'react'
import BtnHome from '../buttons/BtnHome'
import { Link } from 'react-router-dom';
import CategoryPageItems from './CategoryPageItems';

function CategoryPage() {
    
    const [headlinesList, setHeadlinesList] = useState(null);
    const API_KEY = process.env.REACT_APP_API_KEY;
    
    const category = 'business'

    const [articleUrl, setarticleUrl] = useState(`https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${API_KEY}`)


    useEffect(() => {
        fetch(articleUrl)
        .then((response) => {
            return response.json();
        })
        .then(data => {
            console.log(data);
            setHeadlinesList(data);
        })
    },[articleUrl])

    return (
        <div>
            <div className="category-page">
                <h2>Category Title</h2>
                {headlinesList && <CategoryPageItems categoryPagePost={headlinesList.articles.slice(4, 10)} />}
            </div>
            <div className="category-page-btn">
                <Link to="/"><BtnHome /></Link>
            </div>
        </div>
    )
}

export default CategoryPage
