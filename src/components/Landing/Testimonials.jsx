import React from 'react'
import './Testimonials.scss'
import Fade from 'react-reveal/Fade';
import Image1 from '../../Images/Avatar_1.svg'
import Image2 from '../../Images/Avatar_2.svg'
import Image3 from '../../Images/Avatar_3.svg'

function Testimonials() {

    return (
        <div className="testimonials" id="testimonials">
            <Fade left>
            <h3>TESTIMONIALS</h3></Fade>
            <Fade bottom>
            <div className="wrapper">   
                <div className="cards">
                    <div className="card1">
                        <img src={Image1} alt="/"></img>
                        <h4>Elizabeth Martin</h4>
                        <h5>SaveSpace Inc.</h5>
                        <p>“Chamer is the most valuable business resource we have ever purchased. I would be lost without chamer.” </p>
                    </div>
                    <div className="card2">
                        <img src={Image2} alt="/"></img>
                        <h4>Alberto Donko</h4>
                        <h5>ScreepApp</h5>
                        <p>“Chamer is the most valuable business resource we have ever purchased. I would be lost without chamer.” </p>
                    </div>
                    <div className="card3">
                        <img src={Image3} alt="/"></img>
                        <h4>Alexander Parkinson</h4>
                        <h5>MyTravel.com</h5>
                        <p>“Chamer is the most valuable business resource we have ever purchased. I would be lost without chamer.” </p>
                    </div>
                </div>
            </div>
            </Fade>
        </div>
    )
}

export default Testimonials
