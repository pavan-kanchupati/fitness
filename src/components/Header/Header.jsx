import React,{Component} from 'react'

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
//import MenuIcon from '@material-ui/icons/Menu';
//import IconButton from '@material-ui/core/IconButton';

//import SideDrawer from './SideDrawer';

import Navbarpage from './NavbarPage'



class Header extends Component{

    state = {
        drawerOpen : false,
        
        headerShow : false   // navbar trasparent to solid 
    }


    // navbar trasparent to solid 
    componentDidMount () {
        window.addEventListener('scroll',this.handleScroll);
    }
    
    //-------------- in case multple pages ----------------------------//
    //componentWillUnmount () {
        //window.addEventListener('scroll',this.handleScroll);
    //}

    // navbar trasparent to solid 
    handleScroll = () => {
        if(window.scrollY > 0){
            this.setState({
                headerShow : true
            })
        }
        else{
            this.setState({
                headerShow : false
            })
        }
    }


    toggleDrawer = (value) => {
        this.setState({
            drawerOpen : value
        })
    }
    render(){
        return(
            <AppBar position="fixed" 
                    style={
                        {
                            backgroundColor: this.state.headerShow ? '#2f2f2f' : 'transparent',  // navbar trasparent to solid 
                            boxShadow:'none',
                            padding:'10px 0px'}
                            }>
                <Toolbar>
                    <div className="header_logo">
                        <div className="font_righteous header_logo_venue">The Fit <span style={{color:"#d93d00"}}>India</span></div>
                        <div className="header_logo_title">Being fit is not rocket science!</div>
                    </div>
    
                    <Navbarpage/>
                
                        {/*---------

                        //this is side navbar 
                            <IconButton arial-label="menu" 
                                        color="inherit" 
                                        onClick={()=>this.toggleDrawer(true)}>
                                <MenuIcon/>
                            </IconButton>

                            
                            <SideDrawer
                                open={this.state.drawerOpen}
                                onClose={(value)=>this.toggleDrawer(value)}
                            /> ---------*/}
                </Toolbar>
            </AppBar>
        );
    }
}

export default Header;