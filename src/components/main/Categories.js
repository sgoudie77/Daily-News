import React from 'react'
import CategoryPost from './CategoryPost'


function Categories(props) {

    return (
        <div className="categories-area">
            <ul>
                {props.categoryList.map((categoryMain, index) => {
                return <li key={index}> {<CategoryPost categoryMain={categoryMain} />} </li>
                })
            }
            </ul>
        </div>
    )
}

export default Categories
