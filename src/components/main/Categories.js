import React from 'react'
import CategoryPost from './CategoryPost'
import { MenuItems } from '../constants/Constants';

function Categories(props) {
    
    const categories = [
        {
            categoryTitle: 'General',
            url: '#'
        },
        {
            categoryTitle: 'Business',
            url: '#'
        },
        {
            categoryTitle: 'Science',
            url: '#'
        },
        {
            categoryTitle: 'Health',
            url: '#'
        },
        {
            categoryTitle: 'Sports',
            url: '#'
        },
        {
            categoryTitle: 'Tech',
            url: '#'
        }
    ]
//categoryTitle={categoryTitle}
    return (
        <div className="categories-area">
            <ul>{props.categoryList.map((categoryMain, index) => {
                return <li key={index}> {<CategoryPost categoryMain={categoryMain} />} </li>
                })
            }
            </ul>
        </div>
    )
}

export default Categories
