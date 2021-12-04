import React, { useState, useEffect } from 'react'
import CategoryPost from './CategoryPost'


function Categories() {
    
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
        <div className="categories-main">
            {headlinesList && <CategoryPost headlines={headlinesList.articles[4]} />}
            {headlinesList && <CategoryPost headlines={headlinesList.articles[5]} />}
            {headlinesList && <CategoryPost headlines={headlinesList.articles[6]} />}
            {headlinesList && <CategoryPost headlines={headlinesList.articles[7]} />}
            {headlinesList && <CategoryPost headlines={headlinesList.articles[8]} />}
            {headlinesList && <CategoryPost headlines={headlinesList.articles[9]} />}
        </div>
    )
}

export default Categories
