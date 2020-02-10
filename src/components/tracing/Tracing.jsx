import React,{ Component } from 'react'
import { Progress } from 'antd';
import './trace-style.css';
import img from '../../resources/images/healthTrackImg.png'



 class Tracing extends Component{
    render(){
        return(

            <div className="container trace">
                <div className="trace-title">
                    <h2>TRACK YOUR HEALTH</h2>
                </div><hr/>
                <div className="row">
                    <div className="col-md-6">
                        <div className="overflow">
                            <img src= {img} alt="image1" className="helth-img"></img>
                         </div>
                    </div>
                    <div className="col-md-6">
                        <div className="trace-cont">
                            <p>
                            How do you know that these diet and workout plans are making the difference? Apart from the fact that you can indeed feel the difference, you can use our unique tracking
                            feature to check your health score and keep track of it throughout your health journey.
                            </p>
                        </div>
                        <div>
                            <Progress percent={30} style={{marginTop:"10px"}}/>
                            <Progress percent={50} status="active" style={{marginTop:"20px"}}/>
                            <Progress percent={70} status="exception" style={{marginTop:"20px"}} />
                            <Progress percent={100} style={{marginTop:"20px"}} />
                            <Progress percent={50} showInfo={false}  style={{marginTop:"20px"}}/>
                        </div>
                    </div>
                </div>
            </div>


        
        );
    }
}
export default Tracing;