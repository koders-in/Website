import React from 'react'
import './Project11.scss'
import Image1 from '../../Images/Projects/AIO World/HomePage.jpg'
import Footer from '../../components/Footer/Footer'
import Fade from 'react-reveal/Fade';
import Carousal8 from '../../components/Project_Corousal/Carousal8';

function Project11() {

    
    return (
        <div className="AIOproject">
            <Fade bottom>
            <div className="section1">
                <h1>AIO World</h1>
                <img src={Image1} alt="" />
            </div></Fade>
            <div className="introduction">
                <Fade left>
                <h2>Introduction:</h2>
                <p>Every action has an equal and opposite REACT-ion. All-in-one 
                responsive web application with pretty kool animations? So we present 
                to you, a React web app at your fingertips. All-in-one dashboard to 
                get informed of all the updates, announcements or news is something 
                that’d draw user’s attention to the bot.</p>
                </Fade>
            </div>

            <div className="challenges">
                <Fade left>
                <h2>Challenges:</h2>
                <p>As we were working on it, adding animation in site was where we encountered 
                some difficulty which led to consumption of a lot of time. Adding animations 
                that satisfy the user’s needs was challenging in the beginning but putting in 
                extra efforts to understand their user base is something Koders is good at.</p>
                </Fade>
            </div>

            <div className="solution">
                <Fade left>
                <h2>Solution:</h2>
                <p>React was user-friendly so we went through it over a couple of times and 
                that itself solved the problem. Team efforts and pretty good market research 
                helped Koders pull this project off.</p></Fade>
            </div>

            
            <div className="tech">
                <Fade left>
                <h2>Tech Stack:</h2>
                <ul>
                    <li>React</li>
                </ul>
                </Fade>
            </div>

            <div className="screenshots">
                <Fade left>
                <h2>Snapshots of the Application:</h2>
                </Fade>
                <Fade bottom>
                <div className="corousal">
                    <Carousal8/>
                </div>
                </Fade>
            </div>

            <div className="footer">
                <Footer/>
            </div>
        </div>
    )
}

export default Project11