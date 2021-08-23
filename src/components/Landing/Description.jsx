import React from 'react'
import './Description.scss'
import Fade from 'react-reveal/Fade';
import Image1 from '../../Images/Creative.svg'
import Image2 from '../../Images/Efficient.svg'
import Image3 from '../../Images/Proffiecient.svg'
import Motto2 from "../../Images/motto2.png"

function Description() {
    return (
        <div className="desc" id="desc">
            <div className="wrapper">
                <Fade left>
                <h3>ABOUT KODERS</h3>
                <div className="boxdesc">
                    {/* <h1>We strive to make the <br></br>best for our customers.</h1> */}
                    <img src={Motto2} alt="/"></img> 
                </div>
                </Fade>
                <Fade bottom>
                <p>Koders isn't your normal software development firm. Koders provide a platform where people can engage themselves in
                various tech-related activities, be it keeping themselves updated with the latest technology trends, learning a new topic, 
                or maybe teaching one. This is a family of driven enthusiasts where people from various fields come along to contribute 
                their part and help build up the family. We aren't making just customer relations here, we're building a family of
                technological cognizance.</p>
                </Fade>
                <div className="flashcards">
                    <Fade left>
                    <div className="card1">
                        <img src={Image1} alt=""></img>
                        <h4>Creative</h4>
                        <p>Forget about weeks and weeks of persuasion and reminders. 
                        We give our clients a fixed timeline and serve well before it.
                        Our aim is to serve you the finished project with all your
                        desired changes in an efficient & agile manner.
                        </p>
                    </div>
                    </Fade>
                    <Fade bottom>
                    <div className="card2">
                        <img src={Image3} alt=""></img>
                        <h4>Proficient</h4>
                        <p>Our team is a family of developers who code to embellish 
                        programs and make it aesthetic. Creativity is primordial
                        for our team. Get in touch and you may find some 
                        talented musicians, sketch artists too ;)
                        </p>
                    </div>
                    </Fade>
                    <Fade right>
                    <div className="card3">
                        <img src={Image2} alt=""></img>
                        <h4>Efficient</h4>
                        <p>With leading and cutting edge knowledge of all the 
                        contemporary changes in the world of technology,
                        we are always a step ahead in our game. Constant
                        improvement and adaptation is our key feature.
                        </p>
                    </div>
                    </Fade>
                </div>
            </div>
        </div>
    )
}

export default Description
