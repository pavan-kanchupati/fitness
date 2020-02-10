import React from 'react'
import Carrousel from './Carrousel.jsx'
import TimeUntil from './TimeUntil.jsx'


const Featured = () => {
    return (
        <div style={{position:'relative'}}>

            <Carrousel/>

            <div className = "artist_name ">
                <div className="wrapper">
                    Arina Grande
                </div>
            </div>
            <TimeUntil></TimeUntil>
        </div>
        
    );
}

export default Featured;