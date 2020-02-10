import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import Slide from 'react-reveal/Slide';
import './highlight.css';

import img2 from '../../resources/images/healthscoreboard.jpg';

class Discount extends Component {

    state = {
        discountStart:0,
        discountEnd:100
    }


    percentage = () => {
        if(this.state.discountStart < this.state.discountEnd){
            this.setState({
                discountStart: this.state.discountStart + 1
            })
        }
    }

    componentDidUpdate(){
        setTimeout(()=>{
            this.percentage()
        },30)
    }


    render() {
        return (
            <div className="center_wrapper">
                <div className="discount_wrapper">
                    <div className="contanier">
                        <div className="row">
                            <div className="col-md-6">
                                <Fade
                                    onReveal={()=> this.percentage()}
                                >
                                    <div className="discount_percentage">
                                        <span>{this.state.discountStart}%</span>
                                        <span></span>
                                    </div>
                                </Fade>
                            </div>

                            <div className="col-md-6">
                                <Slide right>
                                    <div className="discount_description">
                                        <div className="" style={{padding:"20px"}}>
                                            <img src={img2} alt=""/>
                                        </div>
                                    </div>
                                </Slide>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Discount;