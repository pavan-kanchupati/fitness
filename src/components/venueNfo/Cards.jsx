import React,{ Component} from 'react';
import Card from './CardUI';


import img1 from '../../resources/images/card/card1.jpg'
import img2 from '../../resources/images/card/card2.jpg'
import img3 from '../../resources/images/card/card3.jpg'
import img4 from '../../resources/images/card/card4.jpg'

class Cards extends Component{
    render(){
        return(
        <div className="bck">
            <div className="wrapper">
                <div className="activity-title">
                    <h2>Activity</h2>
                </div><hr style={{width:"55rem"}}></hr>
                <div className="container d-flex">
                    <div className="row">
                        <div className="col-md-3">
                            <Card imgsrc={img1} title="Health score" text="A hundred on hundred is always welcome in life, isn’t it? Why leave your health out? Check your health score right away!"/>
                        </div>
                        <div className="col-md-3">
                            <Card imgsrc={img2} title="Diet and Workout" text="For every health problem you have, we have a plan. Choose now from our personalized diet and workout plans."/>
                        </div>
                        <div className="col-md-3">
                            <Card imgsrc={img3} title="Track Your Health" text="Everything from your sleep hours to water, food, and alcohol consumption can now be tracked. Start tracking!"/>
                        </div>
                        <div className="col-md-3">
                            <Card imgsrc={img4} title="Nutritionists Support" text="Our panel of nutritionists are here to acquaint you with your body’s needs. Ask them for their health and expert opinion, now! "/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        );
    }
}

export default Cards;