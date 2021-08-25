import React from 'react'
import './Project9.scss'
import Image1 from '../../Images/Projects/UCToolbot/Account_generator.jpg'
import Footer from '../../components/Footer/Footer'
import Fade from 'react-reveal/Fade';
import Carousal6 from '../../components/Project_Corousal/Carousal6';

function Project9() {

    
    return (
        <div className="UCproject">
            <Fade bottom>
            <div className="section1">
                <h1>UC-Toolbot</h1>
                <img src={Image1} alt="" />
            </div></Fade>
            <div className="introduction">
                <Fade left>
                <h2>Introduction:</h2>
                <p>Electron app being the forte of our team, the toolbox. It facilitates the 
                creation of tasks, proxies, profiles, cookie gen, proxy gen, and other functionalities.
                Whether it’s frontend, backend or integration, Koders is here to kater to your needs. A 
                bot that fits your needs by completing time-taking tasks in a fraction of seconds. It 
                creates proxies, profiles, monitors accounts, etc. for easy automation by reducing the 
                turmoil on the server to a minimum. We can configure as many proxy profiles as we need. 
                Moreover, it is an electron app, so users don't have to use a browser to login and manage 
                their products.</p>
                </Fade>
            </div>

            <div className="challenges">
                <Fade left>
                <h2>Challenges:</h2>
                <p>Facing challenges is part of the job and that is what makes it interesting. 
                Our big challenge in this project was to integrate all the functionalities with the frontend 
                and make a complete responsive electron app.</p>
                </Fade>
            </div>

            <div className="solution">
                <Fade left>
                <h2>Solution:</h2>
                <p>The evening we hit a block in our project, we as a team sat together and 
                brainstormed together. We sought help from our one-and-only savior, Google, sat and 
                thought even harder and then EUREKA! We got it!</p></Fade>
            </div>

            
            <div className="tech">
                <Fade left>
                <h2>Tech Stack:</h2>
                <ul>
                    <li>React</li>
                    <li>Electron</li>
                    <li>Node</li>
                </ul>
                </Fade>
            </div>

            <div className="screenshots">
                <Fade left>
                <h2>Snapshots of the Application:</h2>
                </Fade>
                <Fade bottom>
                <div className="corousal">
                    <Carousal6/>
                </div>
                </Fade>
            </div>

            <div className="footer">
                <Footer/>
            </div>
        </div>
    )
}

export default Project9