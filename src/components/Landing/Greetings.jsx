import React from 'react'
import './Greetings.scss'
import Image1 from '../../Images/Flow.svg'
import Image2 from '../../Images/Moto.png'
import Image3 from '../../Images/Logo2.svg'
import Image4 from '../../Images/Arrow.svg'
import Fade from 'react-reveal/Fade';


function Greetings() {
    return (
        <div className="greetings" id="greetings">
            <Fade left>
            <div className="left">
                <img src={Image1} className="float" alt="" />
                    <div className="content">
                        <h3>Your Vision,</h3>
                        <h1>Our Kreation</h1>
                        <p>An institution that caters to all your 
                        software <br></br>needs with their touch of Koding.</p>
                        <img src={Image2} alt="/"></img>
                        <div className="arrow">
                            <a href="#desc">
                                <img src={Image4} alt="" />
                            </a>
                        </div>
                </div>
            </div>
            </Fade>
            <div className="right">
            <Fade right>
                <div className="image">
                    <img src={Image3} alt="/" />
                </div>
                </Fade>
            </div>
        </div>
    )
}

export default Greetings
