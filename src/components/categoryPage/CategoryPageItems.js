import React from 'react'
import CategoryPagePost from './CategoryPagePost'

function CategoryPageItems(props) {
    return (
        <div className="category-page-items">
            <ul>{props.categoryPagePost.map((categoryItems, index) => {
                    return <li key={index}> {<CategoryPagePost categoryItems={categoryItems} />} </li>
                    })
                }
            </ul>
        </div>
    )
}

export default CategoryPageItems
