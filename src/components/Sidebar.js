import React, { useState, useEffect } from 'react'
import SidebarPost from './SidebarPost'

function Sidebar() {
    
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
        <div className="sidebar">
            {headlinesList && <SidebarPost headlines={headlinesList.articles[1]} />}  
            {headlinesList && <SidebarPost headlines={headlinesList.articles[2]} />}  
            {headlinesList && <SidebarPost headlines={headlinesList.articles[3]} />}  
        </div>
    )
}

export default Sidebar
