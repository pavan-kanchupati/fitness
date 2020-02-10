import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Login from './Login';
import Register from './Register';
import './log.css';

class Location extends Component {
  render() {
    return (
        <Router>
            <div className="login-location">
                <div className="container" style={{height:"100%"}}>
                    <div className="row">
                        <div className="col-md-4 col-sm-12 col-12">
                            <Route exact path="/" component={Login} />
                            <Route path="/register" component={Register} />
                        </div>
                        <div className="col-md-8 col-sm-12 col-12">
                            <iframe 
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63499.5759094865!2d-96.82638045433593!3d32.81400551924428!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864e993d0ea3c1ff%3A0x1859d2cc74f588e2!2sThe+Dallas+World+Aquarium!5e0!3m2!1ses!2sar!4v1530636115082" 
                                width="100%" 
                                height="100%" 
                                frameBorder="0" 
                                allowFullScreen>
                            </iframe>
                        </div>
                    </div>

                </div>
            </div>
        </Router>
     
    );
  }
}

export default Location;
