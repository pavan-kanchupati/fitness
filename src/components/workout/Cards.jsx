import React,{ Component} from 'react';
import Card from './CardUI';

import img5 from '../../resources/images/card/card5.jpg'
import img6 from '../../resources/images/card/card6.jpg'
import img7 from '../../resources/images/card/card7.jpg'
import img8 from '../../resources/images/card/card8.jpg'
import img9 from '../../resources/images/card/card9.jpg'
import img10 from '../../resources/images/card/card10.jpg'
import img11 from '../../resources/images/card/card11.jpg'
import img12 from '../../resources/images/card/card12.jpg'

class Cards extends Component{
    render(){
        return(
            <div className="work-title" style={{width:"99%"}}>
                <div className="activity-title">
                    <h2>DIET AND WORKOUT PLANS</h2>
                </div>
                <hr style={{width:"55rem"}}></hr>

                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-3">
                            <Card imgsrc={img5} />
                        </div>
                        <div className="col-md-3">
                            <Card imgsrc={img6} title="Diet and Workout" text="For every health problem you have, we have a plan. Choose now from our personalized diet and workout plans."/>
                        </div>
                        <div className="col-md-3">
                            <Card imgsrc={img7} title="Track Your Health" text="Everything from your sleep hours to water, food, and alcohol consumption can now be tracked. Start tracking!"/>
                        </div>
                        <div className="col-md-3">
                            <Card imgsrc={img8} title="Nutritionists Support" text="Our panel of nutritionists are here to acquaint you with your body’s needs. Ask them for their health and expert opinion, now! "/>
                        </div>
                    </div>
                </div>

                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-3">
                            <Card imgsrc={img9} />
                        </div>
                        <div className="col-md-3">
                            <Card imgsrc={img10}/>
                        </div>
                        <div className="col-md-3">
                            <Card imgsrc={img11}/>
                        </div>
                        <div className="col-md-3">
                            <Card imgsrc={img12}/>
                        </div>
                    </div>
                </div>
            </div>       
        );
    }
}

export default Cards;