import React from 'react';
import "./card-style.css";

const Card = props =>{
    return(
        <div className="card">
            <div className="overflow">
                <img src= {props.imgsrc} alt="img" className="card-img-top"></img>
            </div>
        </div>
    )
}
export default Card; 