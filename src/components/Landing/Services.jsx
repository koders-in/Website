import React from 'react'
import Fade from 'react-reveal/Fade';
import {HashRouter, Link} from "react-router-dom";
import './Services.scss'
import Image1  from '../../Images/Service.png'
import Image2  from '../../Images/technology.png'
import Image3  from '../../Images/Industry.png'

function Services() {
    return (
        <div className="services" id="ser">
            <HashRouter>
            <div className="wrapper">
                <Fade left>
                <h3>Our Services</h3></Fade>
                <div className="flashcards">
                    <Fade bottom>
                    <div className="card1">
                    <Link to="/services"
                        tag={Link}>
                        <img src={Image1} alt="/"></img>
                           <h2>Services</h2>
                        </Link>
                    </div>
                    <div className="card2">
                    <Link to="/technologies"
                        tag={Link}>
                        <img src={Image2} alt="/"></img>
                            <h2>Technologies</h2>
                        </Link>
                    </div>
                    <div className="card3">
                    <Link to="/industries"
                        tag={Link}>
                        <img src={Image3} alt="/"></img>
                            <h2>Industries</h2>
                        </Link>
                    </div>
                    </Fade>
                </div>
            </div>
            </HashRouter>
        </div>
    )
}

export default Services
