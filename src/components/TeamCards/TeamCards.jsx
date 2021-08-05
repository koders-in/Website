import React from 'react'
import "./TeamCards.scss"
import Fade from 'react-reveal/Fade';
import Footer from '../Footer/Footer'
import Image1 from '../../Images/Team_1.jpg'
import Image2 from '../../Images/facebook.svg'
import Image3 from '../../Images/instagram.svg'
import Image4 from '../../Images/twitter.svg'
import Image5 from '../../Images/linkedin-rect.svg'
import Image6 from '../../Images/Team_2.jpg'
import Image7 from '../../Images/Team_3.jpg'
import Image8 from '../../Images/Team_4.jpg'

function TeamCards() {
    return (
        <div className="teamcards">
            <Fade bottom>
            <div className="row1">
                <div className="card1">
                    <img src={Image1} alt="" />
                    <div className="box">
                        <h3>XHunter</h3>
                        <h5>Co-founder & CEO</h5>
                        <p>Adipiscing elit, sed do eiusmod tempor incididunt ut labore</p>
                        <div className="handles">
                            <a href="/" className="facebook">
                                <img src={Image2} alt="" />
                            </a>
                            <a href="/" className="instagram">
                                <img src={Image3} alt="" />
                            </a>
                            <a href="/" className="linkdin">
                                <img src={Image4} alt="" />
                            </a>
                            <a href="/" className="twitter">
                                <img src={Image5} alt="" />
                            </a>
                        </div>
                    </div>
                </div>

                <div className="card2">
                    <img src={Image6} alt="" />
                    <div className="box">
                        <h3>Panther</h3>
                        <h5>Co-founder & CTO</h5>
                        <p>Adipiscing elit, sed do eiusmod tempor incididunt ut labore</p>
                        <div className="handles">
                            <a href="/" className="facebook">
                                <img src={Image2} alt="" />
                            </a>
                            <a href="/" className="instagram">
                                <img src={Image3} alt="" />
                            </a>
                            <a href="/" className="linkdin">
                                <img src={Image4} alt="" />
                            </a>
                            <a href="/" className="twitter">
                                <img src={Image5} alt="" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            </Fade>
            <Fade bottom>
            <div className="row2">
                <div className="card1">
                    <img src={Image7} alt="" />
                    <div className="box">
                        <h3>Shark</h3>
                        <h5>COO</h5>
                        <p>Adipiscing elit, sed do eiusmod tempor incididunt ut labore</p>
                        <div className="handles">
                            <a href="/" className="facebook">
                                <img src={Image2} alt="" />
                            </a>
                            <a href="/" className="instagram">
                                <img src={Image3} alt="" />
                            </a>
                            <a href="/" className="linkdin">
                                <img src={Image4} alt="" />
                            </a>
                            <a href="/" className="twitter">
                                <img src={Image5} alt="" />
                            </a>
                        </div>
                    </div>
                </div>

                <div className="card2">
                    <img src={Image8} alt="" />
                    <div className="box">
                        <h3>Shan</h3>
                        <h5>CFO</h5>
                        <p>Adipiscing elit, sed do eiusmod tempor incididunt ut labore</p>
                        <div className="handles">
                            <a href="/" className="facebook">
                                <img src={Image2} alt="" />
                            </a>
                            <a href="/" className="instagram">
                                <img src={Image3} alt="" />
                            </a>
                            <a href="/" className="linkdin">
                                <img src={Image4} alt="" />
                            </a>
                            <a href="/" className="twitter">
                                <img src={Image5} alt="" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            </Fade>

            <div className="footer">
                <Footer/>
            </div>
        </div>
    )
}

export default TeamCards
