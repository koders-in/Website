import React from 'react'
import "./TeamCards.scss"
import Fade from 'react-reveal/Fade';
import Image1 from '../../Images/Kartikey_Kushwah.jpg'
import Image6 from '../../Images/Shaloni_Modi.jpg'

function TeamCards() {
    return (
        <div className="teamcards">
            <Fade bottom>
            <div className="row1">
                <div className="card1">
                    <img src={Image1} alt="" />
                    <div className="box">
                        <h3>Kartikey Kushwah</h3>
                        <h5>Co-founder & CEO</h5>
                        <p>XHunter is a zealous and conscientious achiever with an 
                        impeccable vision to lead the technological industry. 
                        He has a plan and that is - To technically embellish the 
                        lives of people all around the globe. KODERS is a KORE of 
                        galvanized enthusiasts working for a vision beyond reality. 
                        In the words of his favorite role model "He's here to leave 
                        a dent into this Universe".</p>
                    </div>
                </div>

                <div className="card2">
                    <img src={Image6} alt="" />
                    <div className="box">
                        <h3>Shaloni Modi</h3>
                        <h5>Co-founder & CTO</h5>
                        <p>“If you want it, you go and get it” describes Panther, 
                        our Rock of Gibraltar. Her desire to learn the nooks and 
                        crannies of the cyber world keeps us on our toes. She's adept 
                        & well versed with technology and would help you develop your 
                        next robust project. She's the TedX speaker of Koders who 
                        invigorates positivity and new perspective in the team.</p>
                    </div>
                </div>
            </div>
            </Fade>
        </div>
    )
}

export default TeamCards
