import React, { useState, useEffect } from 'react'
import SidebarPost from './SidebarPost'

function Sidebar(props) {
    
    // const [headlinesList, setHeadlinesList] = useState(null);
    // const API_KEY = process.env.REACT_APP_API_KEY;
    
    // useEffect(() => {
    //     fetch('https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=' + API_KEY)
    //     .then((response) => {
    //         return response.json();
    //     })
    //     .then(data => {
    //         console.log(data);
    //         setHeadlinesList(data);
    //     })
    // },[])    

    // use map to get 3 posts with li
    // map((element, index, array) => { ... })

    return (
        <div className="sidebar">
            <ul>{props.sidebarNews.map((sidebarPost, index) => {
                return <li key={index}> {<SidebarPost sidebarPost={sidebarPost} />} </li>
                    })
                }
            </ul>
            {/* <SidebarPost sidebarPost={props.sidebarNews[0]} />
            <SidebarPost sidebarPost={props.sidebarNews[1]} />
            <SidebarPost sidebarPost={props.sidebarNews[2]} />   */}
        </div>
    )
}

export default Sidebar
