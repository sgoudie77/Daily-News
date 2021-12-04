import React from 'react'
// import { Link } from 'react-router-dom';

function ArticlePost(props) {
    
    return (
        <div className="article">
            <div className="article-image">
                    {/* <img src={headlineImg} alt="Headline News" /> */}
                <img src={props.articleDisplay.urlToImage} alt="Headline News" />
            </div>
            <div className="article-title">
                <h2>{props.articleDisplay.title}</h2>
            </div>
            <div className="article-text">
                <p>{props.articleDisplay.content}</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam euismod ex vitae tellus faucibus venenatis. Etiam euismod ex vitae tellus faucibus venenatis. Etiam euismod ex vitae tellus faucibus venenatis. Nulla bibendum scelerisque urna vel commodo. Nam ut tortor quam. Sed ultricies nisl ut tortor consequat, quis placerat sem pretium. Maecenas imperdiet massa in lobortis scelerisque. Ut fringilla, quam eget euismod porta, turpis sem dictum justo, in porta lectus metus non est. Vestibulum vestibulum rutrum metus in consectetur.</p>
            </div>
        </div>
    )
}

export default ArticlePost
