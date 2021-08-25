import React from 'react'
import './About.scss'
import Fade from 'react-reveal/Fade';
import Image1 from '../../Images/aboutus.png'
import Image2 from '../../Images/VKI.png'
import Image3 from '../../Images/about_1.jpg'
import Image4 from '../../Images/about_2.jpg'
import Image5 from '../../Images/about_3.jpg'
import Image6 from '../../Images/about_4.jpg'
import Footer from '../../components/Footer/Footer';

function AboutUs() {
    return (
        <div className="aboutus" id="aboutus">
            <div className="heading">
                <Fade top>
                <img src={Image1} alt="" /></Fade>
                <Fade left>
                <h3>ABOUT US</h3></Fade>
            </div>
            <div className="section1">
                    <Fade left>
                    <img src={Image2} alt=""/>
                    <p>At Koders we build the software with new dimensions. The team at Koders help to add value 
                    to your business by creating client-centered products and pave the way for success. We believe
                    in utilizing the untapped potential of our team to bring out the best for our customers.
                    </p></Fade>
                    <div className="text">
                        <div className="left">
                            <Fade left>
                                <img src={Image3} alt="" />
                            </Fade>
                        </div>
                        <div className="right">
                            <Fade right>
                            <h4>WHO WE ARE?</h4>
                            <p>We are a group of like-minded people who are striving their best to provide real world 
                                solutions to your ideas. We are here to bring your dreams to reality by providing high 
                                quality service.
                            </p></Fade>
                        </div>
                    </div>
            </div>

            <div className="section2">
                <Fade left>
                <h2>HOW DID THIS JOURNEY BEGIN?</h2>
                <h3>Our Founders XHunter and Panther!</h3>
                </Fade>
                <div className="row1">
                    <Fade left>
                    <div className="left">
                    <p>Kartikey and Saloni, our co-founders, gave their idea a boost in 2018. 
                    Kartikey started this journey by himself ,but subsequently connected with 
                    like-minded individuals with whom he could collaborate. Starting as Koders 
                    was not pre-planned.</p>
                    <p>The interest of developing and creating apps for fun drove towards a path 
                    of exploring new opportunities. From working on minor projects in college 
                    to majors, from one in number to many. The cycle began by thinking OUT OF THE BOX!
                    </p>
                    </div>
                    </Fade>
                    <Fade right>
                    <div className="right">
                        <img src={Image5} alt="" />
                    </div>
                    </Fade>
                </div>

                <div className="row2">
                    <Fade left>
                    <div className="left">
                        <img src={Image4} alt="" />
                    </div>
                    </Fade>
                    <Fade right>
                        <div className="right">
                        <p>We expanded our reach from students to working with Indian clients and eventually 
                        to international clients. The more they observed the industry, the more strategies 
                        they devised for moving forward in the field.
                        </p>
                        <p>A broad element of technology has been addressed, from working with fundamental 
                        coding languages to working with full stack development. The group has taken on hurdles 
                        while also inspiring young brains.
                        </p>
                    </div>
                    </Fade>
                </div>

                <div className="row3">
                    <Fade left>
                    <div className="left">
                    <p>Our primary goal is to target the global bot market with a variety of our own service-based 
                        offerings.The goal is to kreate a terrific social network for office employees to play, learn, 
                        and develop. We are determined to deliver exceptional software quality with branching to security, 
                        maintenance, QA team so the products running under productions can be handled well.
                    </p>
                    <p>Finally, Koders did not emerge from the ashes with a prophetic vision. It was created for the people, 
                    by the people.
                    </p>
                    </div>
                    </Fade>
                    <Fade right>
                    <div className="right">
                        <img src={Image6} alt="" />
                    </div></Fade>
                </div>
            </div>

            <Fade bottom>
            <div className="mission">
                <h2>MISSION</h2>
                <p className="Line1">We stand by our morals. For someone to succeed in life, your commitment to your morals is what 
                makes you the man. Our mission is to kreate simple solutions for complex problems. As it is rightly said:
                </p>

                <h5>"Simplicity is about subtracting the obvious and adding the meaningful." — John Maeda</h5>

                <p>The aim is to foster technological innovation and to embellish the lives of people all around the globe. 
                The members of our team have committed themselves to responsible behaviour and proper conduct. Koders stand 
                together with our clients to be the inspiration we seek.
                </p>
            </div>
            </Fade>
            
            <Fade bottom>
            <div className="vision">
                <h2>VISION</h2>

                <h5>"Kode less, Kreate more"</h5>

                <p>To build the best and invent a better tomorrow with the help of the great growling engine -Technology. 
                Koders is Kore of galvanized enthusiasts working for a vision beyond reality.
                </p>
            </div>
            </Fade>

            <div className="footer">
                <Footer/>
            </div>
        </div>
    )
}

export default AboutUs
