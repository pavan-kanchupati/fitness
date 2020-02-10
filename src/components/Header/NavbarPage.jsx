import React from 'react';
import './Header-style.css'
import { scroller } from 'react-scroll'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import './Header-style.css'

function NavbarPage (){

  const scrollToElement = ( element ) => {
    scroller.scrollTo (element,{
        duration: 1500,
        delay: 100,
        smooth: true,
        offset: -90  //offset is used for scroll the exact place
    });
  
    }
    

  return(
    <div className="App">
      <nav className="navbar" id="mainNav">
        <List component="nav">
          <ListItem button onClick={() => scrollToElement('event')}>Home</ListItem>
          <ListItem button onClick={() => scrollToElement('Nfo')}> Activity</ListItem>
          <ListItem button onClick={() => scrollToElement('highlights')}>Helth</ListItem>
          <ListItem button onClick={() => scrollToElement('happyuser')}>Review</ListItem>
          <ListItem button onClick={() => scrollToElement('location')}>Location</ListItem>
          <ListItem button onClick={() => scrollToElement('location')} style={{borderLeft: "2px solid #eb3c5a",borderRight: "2px solid #f67831",borderTop:"2px solid #eb3c5a",borderBottom:"2px solid #f67831" }}>Sign Up</ListItem>
        </List>
      </nav>
    </div>
  )
}

export default NavbarPage; 