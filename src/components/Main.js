import React from 'react'
import Sidebar from '../components/Sidebar';
import Categories from '../components/Categories';
import Headline from './Headline';

function Main() {
    return (
        <div>  
            <div className="main">
                <Headline />
                <Sidebar />
            </div>
            <div className="categories">
                <Categories />
            </div>
        </div>
    )
}

export default Main
