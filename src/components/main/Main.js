import React, { useState, useEffect } from 'react';
import Sidebar from '../sidebar/Sidebar';
import Categories from './Categories';
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
                {headlinesList && <Sidebar sidebarNews={headlinesList.articles.slice(1, 4)} />}
            </div>
            <div className="categories-main">
                {headlinesList && <Categories categoryList={headlinesList.articles.slice(4, 10)} />}
            </div>
        </div>
    )
}

export default Main;
