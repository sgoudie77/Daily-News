import React from 'react';
// import headlineImg from '../img/bn-placeholder.jpg';
import { Link } from 'react-router-dom';

function Headline(props) {
    return ( 
        <div className="headline">
            <div className="headline-img">
                {/* <img src={headlineImg} alt="Headline News" /> */}
                <img src={props.headlines.urlToImage} alt="Headline News" />
            </div>
            <div className="headline-title">
                <h1>{props.headlines.title}</h1>
            </div>
            <div className="headline-text">
                <p>{props.headlines.description}</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam euismod ex vitae tellus faucibus venenatis. Etiam euismod ex vitae tellus faucibus venenatis. Etiam euismod ex vitae tellus faucibus venenatis. Nulla bibendum scelerisque urna vel commodo. Nam ut tortor quam. Sed ultricies nisl ut tortor consequat, quis placerat sem pretium. Maecenas imperdiet massa in lobortis scelerisque. Ut fringilla, quam eget euismod porta, turpis sem dictum justo, in porta lectus metus non est. Vestibulum vestibulum rutrum metus in consectetur <Link to="/article"><span>Read More...</span></Link></p>
            </div>
        </div>
    )
}

export default Headline;
