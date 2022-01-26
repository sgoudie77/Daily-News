import React, { useState, useEffect } from 'react';
import Sidebar from '../sidebar/Sidebar';
import Categories from './Categories';
import Headline from './Headline';

function Main() {
    
    // const [catList, setCatList] = useState(null);

    // const catList = [generalList[0], businessList[0], technologyList[0], sportsList[0], healthList[0], scienceList[0]]; 

    const [generalList, setGeneralList] = useState(null);
    const [businessList, setBusinessList] = useState(null);
    const [technologyList, setTechnologyList] = useState(null);
    const [sportsList, setSportsList] = useState(null);
    const [healthList, setHealthList] = useState(null);
    const [scienceList, setScienceList] = useState(null);
    
    const API_KEY = process.env.REACT_APP_API_KEY;

    const [articleUrlGeneral, setarticleUrlGeneral] = useState(`https://newsapi.org/v2/top-headlines?country=us&category=general&apiKey=${API_KEY}`)
    const [articleUrlBusiness, setarticleUrlBusiness] = useState(`https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=${API_KEY}`)
    const [articleUrlTechnology, setarticleUrlTechnology] = useState(`https://newsapi.org/v2/top-headlines?country=us&category=technology&apiKey=${API_KEY}`)
    const [articleUrlHealth, setarticleUrlHealth] = useState(`https://newsapi.org/v2/top-headlines?country=us&category=health&apiKey=${API_KEY}`)
    const [articleUrlSports, setarticleUrlSports] = useState(`https://newsapi.org/v2/top-headlines?country=us&category=sports&apiKey=${API_KEY}`)
    const [articleUrlScience, setarticleUrlScience] = useState(`https://newsapi.org/v2/top-headlines?country=us&category=science&apiKey=${API_KEY}`)

    useEffect(() => {
        fetch(articleUrlGeneral)
        .then((response) => {
            return response.json();
        })
        .then(data => {
            console.log(data);
            setGeneralList(data);
        })
        fetch(articleUrlBusiness)
        .then((response) => {
            return response.json();
        })
        .then(data => {
            console.log(data);
            setBusinessList(data);
        })
        fetch(articleUrlSports)
        .then((response) => {
            return response.json();
        })
        .then(data => {
            console.log(data);
            setSportsList(data);
        })
        fetch(articleUrlTechnology)
        .then((response) => {
            return response.json();
        })
        .then(data => {
            console.log(data);
            setTechnologyList(data);
        })
        fetch(articleUrlHealth)
        .then((response) => {
            return response.json();
        })
        .then(data => {
            console.log(data);
            setHealthList(data);
        })
        fetch(articleUrlScience)
        .then((response) => {
            return response.json();
        })
        .then(data => {
            console.log(data);
            setScienceList(data);
        })
    },[])
    
    // const categories = [
    //     {
    //         categoryTitle: 'general',
    //         categoryLink: '#'
    //     }, 
    //     {
    //         categoryTitle: 'sports',
    //         categoryLink: '#'
    //     },
    //     {
    //         categoryTitle: 'tech',
    //         categoryLink: '#'
    //     }, 
    //     {
    //         categoryTitle: 'business',
    //         categoryLink: '#'
    //     }, 
    //     {
    //         categoryTitle: 'science',
    //         categoryLink: '#'
    //     }, 
    //     {
    //         categoryTitle: 'health',
    //         categoryLink: '#'
    //     }
    // ]

    // const categories = ['general', 'sports', 'tech', 'business', 'science', 'health'];
    // const { categoryTitle } = categories;
    
    // const categoryTitles = [];
    // const categoryLinks = [];
    
    // categories.map((item, index) => {
    //     return {item}
    // })
    
    return (
        <div>
            <div className="main">
                {generalList && <Headline headlines={generalList.articles[0]} />}
                {generalList && <Sidebar sidebarNews={generalList.articles.slice(1, 4)} />}
            </div>
            <div className="categories-main">
                {/* {categoriesList && <Categories categoryList={categoriesList.articles.slice(0,6)} />} */}
                {sportsList && <Categories categoryList={sportsList.articles.slice(0,6)} />}
                {/* {catList && <Categories categoryList={catList.articles[0]} />} */}
            </div>
        </div>
    )
}

export default Main;
