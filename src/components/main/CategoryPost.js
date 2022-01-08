import React from 'react'
import { Link } from 'react-router-dom';


function CategoryPost(props) {
    
    // const categories = [
    //     {
    //         categoryTitle: 'General',
    //         url: '#'
    //     },
    //     {
    //         categoryTitle: 'Business',
    //         url: '#'
    //     },
    //     {
    //         categoryTitle: 'Science',
    //         url: '#'
    //     },
    //     {
    //         categoryTitle: 'Health',
    //         url: '#'
    //     },
    //     {
    //         categoryTitle: 'Sports',
    //         url: '#'
    //     },
    //     {
    //         categoryTitle: 'Tech',
    //         url: '#'
    //     }
    // ]
    
    return (
        <div className="category-post">
            <div className="category-title">
                <h3>Category Title</h3>
                {/* {MenuItems.map((item, index) => {
                    return (
                        <h3 key={index}>
                            {item.link}
                        </h3>
                    )
                })} */}
            </div>
            <div className="category-content">
                <div className="category-image">
                    <img src={props.categoryMain.urlToImage} alt="News Story" />
                </div>
                <div className="category-item-title">
                    <h3>{props.categoryMain.title}</h3>
                </div>
            </div>
                <div className="category-text">
                    <p>{props.categoryMain.description} <Link to="/category"><span>Read More...</span></Link></p>
                </div>
        </div>
    )
}

export default CategoryPost
