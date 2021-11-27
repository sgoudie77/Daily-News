import React, { useState, useEffect } from 'react'
import BtnHome from './BtnHome'
import BtnCategories from './BtnCategories'
import { Link } from 'react-router-dom';
// import headlineImg from '../img/bn-placeholder.jpg';
import ArticlePost from './ArticlePost';

function Article() {
    
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
            <div className="article">
                {headlinesList && <ArticlePost headlines={headlinesList.articles[0]} />}
                {/* <div className="article-image">
                    <img src={props.headlines.urlToImage} alt="Headline News" />
                </div>
                <div className="article-title">
                    <h2>{props.headlines.title}</h2>
                </div>
                <div className="article-text">
                <p>{props.headlines.content}</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam euismod ex vitae tellus faucibus venenatis. Etiam euismod ex vitae tellus faucibus venenatis. Etiam euismod ex vitae tellus faucibus venenatis. Nulla bibendum scelerisque urna vel commodo. Nam ut tortor quam. Sed ultricies nisl ut tortor consequat, quis placerat sem pretium. Maecenas imperdiet massa in lobortis scelerisque. Ut fringilla, quam eget euismod porta, turpis sem dictum justo, in porta lectus metus non est. Vestibulum vestibulum rutrum metus in consectetur.</p>
                </div> */}
            </div>
            <div className="article-btns">
                <Link to="/"><BtnHome /></Link>
                <Link to="/category"><BtnCategories /></Link>
            </div>
        </div>
    )
}

export default Article
