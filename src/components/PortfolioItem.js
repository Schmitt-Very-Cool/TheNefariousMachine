import React from "react";
import { Link } from 'react-router-dom';

function PortfolioItem({imageurl, title, description, link}){
    return(
        <div className="PortfolioItem">
            <div className="pImageWrapper">
                <img src={imageurl} alt="Thumbnail" className="pImage"/>
            </div>
            <div className="textcontainer">
                <div className="pTitle">
                    <Link to={link}>{title}</Link>
                </div>
                {description}
            </div>
        </div>
    )
}

export default PortfolioItem;