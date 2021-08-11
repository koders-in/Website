import React from 'react'
import './ServicesPage.scss'
import {HashRouter, Link} from "react-router-dom";
import Fade from 'react-reveal/Fade';
import Image1 from '../../Images/services.png'
import Image2 from '../../Images/arrow_left.svg'
import Image3 from '../../Images/ServicesTable.svg'
import Footer from '../Footer/Footer';

function ServicesPage() {
    return (
        <div className="servicespage" id="servicespage">
            <Fade top>
            <div className="heading">
                <img src={Image1} alt="" />
                <div className="wrapper">
                    <Fade left>
                    <h3>Our Services</h3></Fade>
                    <HashRouter>
                    <div className="backbutton">
                        <Link to ="/"
                        tag={Link}>
                            <Fade right>
                            <img src={Image2} alt="" />
                            <p>Back</p></Fade>
                        </Link>
                    </div>
                    </HashRouter>
                </div>
            </div></Fade>

            <div className="table">
                <Fade bottom>
                <img src={Image3} alt="" /></Fade>
            </div>

            <div className="footer">
                <Footer/>
            </div>
        </div>
    )
}

export default ServicesPage
