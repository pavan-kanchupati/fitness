import React,{ Component} from 'react';
import Cards from './Cards'

export class Workout extends Component {
    render(){
        return(
                <div className="workout" style={{ width:"100%"}}>
                   <Cards/>
                </div>
        );
    }
}
