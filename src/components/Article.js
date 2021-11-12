import React from 'react'
import BtnHome from './BtnHome'
import BtnCategories from './BtnCategories'
import { Link } from 'react-router-dom';
import headlineImg from '../img/bn-placeholder.jpg';

function Article() {
    return (
        <div>
            <div className="article">
                <div className="article-image">
                    <img src={headlineImg} />
                </div>
                <div className="article-title">
                    <h2>Article Title</h2>
                </div>
                <div className="article-text">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam euismod ex vitae tellus faucibus venenatis. Etiam euismod ex vitae tellus faucibus venenatis. Etiam euismod ex vitae tellus faucibus venenatis. Nulla bibendum scelerisque urna vel commodo. Nam ut tortor quam. Sed ultricies nisl ut tortor consequat, quis placerat sem pretium. Maecenas imperdiet massa in lobortis scelerisque. Ut fringilla, quam eget euismod porta, turpis sem dictum justo, in porta lectus metus non est. Vestibulum vestibulum rutrum metus in consectetur. Quisque venenatis sem sed erat venenatis pharetra a in eros. Suspendisse et facilisis ipsum. Morbi in volutpat dui. Quisque venenatis sem sed erat venenatis pharetra a in eros. Suspendisse et facilisis ipsum. Morbi in volutpat dui. Quisque venenatis sem sed erat venenatis pharetra a in eros. Suspendisse et facilisis ipsum. Morbi in volutpat dui. Curabitur eget viverra dui.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam euismod ex vitae tellus faucibus venenatis. Etiam euismod ex vitae tellus faucibus venenatis. Etiam euismod ex vitae tellus faucibus venenatis. Nulla bibendum scelerisque urna vel commodo. Nam ut tortor quam. Sed ultricies nisl ut tortor consequat, quis placerat sem pretium. Maecenas imperdiet massa in lobortis scelerisque. Ut fringilla, quam eget euismod porta, turpis sem dictum justo, in porta lectus metus non est. Vestibulum vestibulum rutrum metus in consectetur.</p>
                </div>
            </div>
            <div className="article-btns">
                <Link to="/"><BtnHome /></Link>
                <Link to="/category"><BtnCategories /></Link>
            </div>
        </div>
    )
}

export default Article
