import React from 'react'
import './Project6.scss'
import Image1 from '../../Images/Projects/Kourage/User Profile.jpg'
import Footer from '../../components/Footer/Footer'
import Fade from 'react-reveal/Fade';
import Carousal3 from '../../components/Project_Corousal/Carousal3';

function Project6() {

    
    return (
        <div className="kourageproject">
            <Fade bottom>
            <div className="section1">
                <h1>Kourage</h1>
                <img src={Image1} alt="" />
            </div></Fade>
            <div className="introduction">
                <Fade left>
                <h2>Introduction:</h2>
                <p>In an era of work from home, Kourage is a multi-functional bot 
                that takes care of a lot of tasks within. It helps in recording 
                attendance, reminds of the deadlines, bug management and daily work 
                done by the employees. Kourage is a customized discord bot that helps 
                you manage your server no matter the number, all hassle-free. That way 
                you can keep an eye on your employees or maybe just shut them and nap.</p>
                </Fade>
            </div>

            <div className="challenges">
                <Fade left>
                <h2>Challenges:</h2>
                <p>Heard of ‘too many cooks spoil the broth’ ? That is exactly what we 
                were afraid of. With so many young and talented developers working together, 
                we were in a classic situation of “ can’t do with, can’t do without’. So many 
                developers reduced the work but that also meant difficulty in merging.</p>
                </Fade>
            </div>

            <div className="solution">
                <Fade left>
                <h2>Solution:</h2>
                <p>We chose to “divide and rule” that is we divided the sections keeping 
                in mind a common protocol and coordinated amongst ourselves. After lots of koffee, 
                koding and kontinuous meetings, Viola! We successfully merged it.</p></Fade>
            </div>

            
            <div className="tech">
                <Fade left>
                <h2>Tech Stack:</h2>
                <ul>
                    <li>Python</li>
                    <li>Docker</li>
                </ul>
                </Fade>
            </div>

            <div className="screenshots">
                <Fade left>
                <h2>Snapshots of the Application:</h2>
                </Fade>
                <Fade bottom>
                <div className="corousal">
                    <Carousal3/>
                </div>
                </Fade>
            </div>

            <div className="footer">
                <Footer/>
            </div>
        </div>
    )
}

export default Project6
