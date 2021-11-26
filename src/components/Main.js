import React, { useState, useEffect } from 'react'
import Sidebar from '../components/Sidebar';
import Categories from '../components/Categories';
import Headline from './Headline';

function Main() {
    
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
            <div className="main">
                {headlinesList && <Headline headlines={headlinesList.articles[0]} />}
                {headlinesList && <Sidebar headlines={headlinesList.articles[1]} />}
            </div>
            <div className="categories">
                <Categories />
            </div>
        </div>
    )
}

export default Main
