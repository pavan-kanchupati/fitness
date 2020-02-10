import React from 'react';
import "./ven-style.css";

const Card = props =>{
    return(
        <div className="venue text-center">
            <div className="overflow">
                <img src= {props.imgsrc} alt="image1" className="card-img-top"></img>
            </div>
            <div className="venue-body text-dark">
                <h4 className="venue-title">{props.title}</h4>
                <p className="venue-text text-secondary">{props.text}</p>
                <a href="#" className="btn btn-outline">Get Start</a>
            </div>
        </div>
    )
}
export default Card; 