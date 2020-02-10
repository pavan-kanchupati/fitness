import React,{Component} from 'react';
import { Element } from 'react-scroll'
import './resources/style.css';

//components 
import Header from './components/Header/Header.jsx'
import Featured from './components/featured/Featured.jsx'
//import VenueNfo from './components/venueNfo/VenueNfo.jsx'
import Cards from './components/venueNfo/Cards.jsx'
import Highlights from './components/Highlights/Highlights.jsx'
//import Pricing from './components/pricing/Pricing.jsx'
import Location from './components/location/Location.jsx'
import Footer from './components/Footer/Footer.jsx'
import { Workout } from './components/workout/Workout';
import Tracing from './components/tracing/Tracing';
import HappyUser from './components/happyuser/HappyUser';



class App extends Component{
  render(){
    return(
      <div className="App" style={{height:"1500px"}}>
        <Header></Header>

        <Element name="event">
          <Featured></Featured>
        </Element>
        
        <Element name="Nfo">
          {/*<VenueNfo></VenueNfo>*/}
          <Cards/>
        </Element>
        
        
        <Element name="highlights">
          <Highlights></Highlights>
        </Element>

        <Element name="workout">
          <Workout/>
        </Element>

        <Element name="tracing">
          <Tracing/>
        </Element>

        <Element name="happyuser">
          <HappyUser/>
        </Element>
       {/*
        <Element name="price">
          <Pricing></Pricing>
        </Element>*/}
        
        
        <Element name="location" style={{height:"30rem"}}>
          <Location></Location>
        </Element>
        
        <Footer></Footer>
        
      </div>
    )
  }
}

export default App;
