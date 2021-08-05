import React from 'react'
import Fade from 'react-reveal/Fade';
import {HashRouter, Link} from "react-router-dom";
import './Services.scss'
import Image1  from '../../Images/service.svg'
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
                        <img src={Image1} alt="/"></img>
                        <Link to="/services"
                        tag={Link}>
                           <h2>Services</h2>
                        </Link>
                    </div>
                    <div className="card2">
                        <img src={Image2} alt="/"></img>
                        <Link to="/technologies"
                        tag={Link}>
                            <h2>Technologies</h2>
                        </Link>
                    </div>
                    <div className="card3">
                        <img src={Image3} alt="/"></img>
                        <Link to="/industries"
                        tag={Link}>
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
