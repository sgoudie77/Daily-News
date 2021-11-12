import React from 'react'
import { Link } from 'react-router-dom';

function BtnCategories() {
    return (
        <div>
            <Link to="/category"><button className="btn-categories">Back to categories</button></Link> 
        </div>
    )
}

export default BtnCategories
