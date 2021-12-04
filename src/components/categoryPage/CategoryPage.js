import React, {  useState, useEffect } from 'react'
import BtnHome from '../buttons/BtnHome'
// import categoryImage from '../img/news-placeholder.png'
import { Link } from 'react-router-dom';
import CategoryPost from '../main/CategoryPost';
import CategoryPagePost from './CategoryPagePost'

function CategoryPage() {
    
    const [headlinesList, setHeadlinesList] = useState(null);
    const API_KEY = process.env.REACT_APP_API_KEY;
    
    useEffect(() => {
        fetch('https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=' + API_KEY)
        .then((response) => {
            return response.json();
        })
        .then(data => {
            console.log(data);
            setHeadlinesList(data);
        })
    },[])

    return (
        <div>
            {/* <CategoryPagePost /> */}
            <div className="category-page">
                <h2>Category Title</h2>
                {headlinesList && <CategoryPagePost headlines={headlinesList.articles[4]} />}
                {headlinesList && <CategoryPagePost headlines={headlinesList.articles[5]} />}
                {headlinesList && <CategoryPagePost headlines={headlinesList.articles[6]} />}
                {headlinesList && <CategoryPagePost headlines={headlinesList.articles[7]} />}
                {headlinesList && <CategoryPagePost headlines={headlinesList.articles[8]} />}
                {headlinesList && <CategoryPagePost headlines={headlinesList.articles[9]} />}
            </div>
            <div className="category-page-btn">
                <Link to="/"><BtnHome /></Link>
            </div>
        </div>
    )
}

export default CategoryPage