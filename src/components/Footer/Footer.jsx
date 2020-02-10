import React from 'react';
import Fade from 'react-reveal/Fade';
import './footer-style.css'

const Footer = () => {
    return (
        <footer className="footer">
            <Fade delay={500}>
                <div className="footer ">
                    <div className="container">
                        <div className="row">

                            <div className="col-md-3">
                                <p className="footer-list">Legal</p>
                                <ul>
                                    <li><a href="#">Terms and Conditions</a></li>
                                    <li><a href="#">Privacy policy</a></li>
                                    <li><a href="#">Refund Policy</a></li>
                                    <li><a href="#">cancellation Policy</a></li>
                                </ul>
                            </div>


                            <div className="col-md-3">
                                <p className="footer-list">Links</p>
                                <ul>
                                    <li><a href="#">Blog</a></li>
                                    <li><a href="#">About</a></li>
                                    <li><a href="#">Career</a></li>
                                </ul>
                            </div>

                            <div className="col-md-3">
                                <p className="footer-list">Support</p>
                                <ul>
                                    <li><a href="#">Send your queries to</a></li>
                                    <li className="container">   
                                        <a href="#news">support@pyritefitness.com</a>
                                    </li>
                                    <li><a href="#contact">Contact</a></li>
                                </ul>
                            </div>
                            
                            <div className="col-md-3">
                                <p className="footer-list">The Fit Indian</p>
                                <ul>
                                    <p style={{fontSize:"16px",textAlign:"justify"}}>
                                    The Fit Indian app is an all-inclusive platform that offers specialized, focused diet and workout plans; daily food and water consumption tracking; sleep cycle tracking and restoration.
                                    </p>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="footer_copyright">
                All rights reserved @ Pawan
                </div>
            </Fade>
        </footer>
    );
};

export default Footer;