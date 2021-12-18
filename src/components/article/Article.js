import React, { useState, useEffect } from 'react'
import BtnHome from '../buttons/BtnHome'
import BtnCategories from '../buttons/BtnCategories'
import { Link } from 'react-router-dom';
// import headlineImg from '../img/bn-placeholder.jpg';
import ArticlePost from './ArticlePost';

function Article() {
    
    const [articleMain, setArticleMain] = useState(null);
    const API_KEY = process.env.REACT_APP_API_KEY;
    
    // const category = [
    //     'general', 
    //     'business', 
    //     'science', 
    //     'health', 
    //     'sports', 
    //     'tech'
    // ]

    const category = 'business'

    const [articleUrl, setarticleUrl] = useState(`https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${API_KEY}`)

    useEffect(() => {
        fetch(articleUrl)
        .then((response) => {
            return response.json();
        })
        .then(data => {
            console.log(data);
            setArticleMain(data);
        })
    },[articleUrl])
    
    return (
        <div>
            <div className="article">
                {articleMain && <ArticlePost articleDisplay={articleMain.articles[0]} />}
            </div>
            <div className="article-btns">
                <Link to="/"><BtnHome /></Link>
                <Link to="/category"><BtnCategories /></Link>
            </div>
        </div>
    )
}

export default Article
