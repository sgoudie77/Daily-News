import React, { useState, useEffect } from 'react'
import CategoryPost from './CategoryPost'


function Categories(props) {
    
    return (
        <div className="categories-area">
            <ul>{props.categoryList.map((categoryMain, index) => {
                return <li key={index}> {<CategoryPost categoryMain={categoryMain} />} </li>
                })
            }
            </ul>
            {/* {headlinesList && <CategoryPost headlines={headlinesList.articles[4]} />}
            {headlinesList && <CategoryPost headlines={headlinesList.articles[5]} />}
            {headlinesList && <CategoryPost headlines={headlinesList.articles[6]} />}
            {headlinesList && <CategoryPost headlines={headlinesList.articles[7]} />}
            {headlinesList && <CategoryPost headlines={headlinesList.articles[8]} />}
            {headlinesList && <CategoryPost headlines={headlinesList.articles[9]} />} */}
        </div>
    )
}

export default Categories
