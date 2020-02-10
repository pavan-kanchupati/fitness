import React from 'react'
import { Carousel } from 'antd';
import './happy-user.css'
import img from '../../resources/images/term.webp';

export default function HappyUser(){
    return(

        <div className="happyuser" style={{padding:"1rem 20rem 5rem 20rem"}}>
            <h2>HAPPY USER</h2>
            <hr/>
            <div className="container-fluid">
                <Carousel autoplay>
                    <div>
                        <div className="happy">
                            <img src= {img} alt="img" className="happy-img" style={{marginLeft:"44%"}}></img>
                            <h3>pavan kanchupati</h3>
                            <p>“I work for 8 hours a day and travel for 4 more hours. With that kind of lifestyle and work schedule, I thought I could never feel healthy again until I found The Fit Indian app. I love the fact that I don’t have to move out of my house to meet an expert who can guide me in regaining my health.”</p>
                         </div>
                    </div>
                    <div>
                        <div className="happy">
                            <img src= {img} alt="img2" className="happy-img" style={{marginLeft:"44%"}}></img>
                            <h3>Smith Keth</h3>
                            <p>“There’s nothing worse than dealing with post-partum weight gain (the hormones and the mess plus, having to look after the little one). It drove me nuts, but thanks to this app, their diet and workout plans have brought me back to normalcy within no time. Such a relief!”</p>
                        </div> 
                    </div>
                </Carousel>
            </div>
        </div>    
    )
}
 
