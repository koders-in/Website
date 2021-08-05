import React from 'react'
import './Project1.scss'
import Image1 from '../../Images/Projects/1.PNG'
import ProjectCorousal from '../../components/Project_Corousal/ProjectCorousal'
import Footer from '../../components/Footer/Footer'
import Fade from 'react-reveal/Fade';


function Project_1() {

    
    return (
        <div className="project1">
            <Fade bottom>
            <div className="section1">
                <h1>AIO World</h1>
                <img src={Image1} alt="" />
            </div></Fade>
            <div className="introduction">
                <Fade left>
                <h2>Introduction:</h2>
                <p>E-commerce is the new normal, so are the 
                online grocery stores but the development of 
                these platforms has always been a barrier. 
                We understood the need for the market and developed 
                a robust, cost-efficient, and top-notch hybrid 
                E-Commerce application. An application that serves 
                the restaurant, the client, and the delivery executive 
                through one application to smooth out the operations 
                and monitor real-life activities.</p>
                </Fade>
            </div>

            <div className="challenges">
                <Fade left>
                <h2>Challenges:</h2>
                <p>Clubbing three apps together might sound like a recipe 
                for debacle but from the perspective of a shop/business owner, 
                it's a blessing. The challenge we had first mostly was making 
                the apps gel together and work as a single unit. Through 
                extensive trials and errors, we were able to achieve it without 
                compromising on any feature. Instead, we developed a few handy 
                admin features which are intuitive and monitor activity in real life. 
                The second challenge was the size of this application, which, 
                meh, Koders don't find it a challenge enough. The application 
                developed is well under the average E-commerce app size.</p></Fade>
            </div>

            <div className="solution">
                <Fade left>
                <h2>Solution:</h2>
                <p>Team-work led us to develop a layer-on-layer application 
                process that was not only just efficient but friendly 
                for all sorts of mobile devices as we executed all the 
                functionalities by splitting them into pieces and then 
                ran parallel integration with each panel.</p></Fade>
            </div>

            <div className="tech">
                <Fade left>
                <h2>Tech Stack:</h2>
                <ul>
                    <li>Ionic</li>
                    <li>Cordova</li>
                    <li>Laravel Framework</li>
                    <li>Angular Js</li>
                </ul>
                </Fade>
            </div>

            <div className="screenshots">
                <Fade left>
                <h2>Snapshots of the Application:</h2>
                </Fade>
                <Fade bottom>
                <div className="corousal">
                    <ProjectCorousal/>
                </div>
                </Fade>
            </div>

            <div className="footer">
                <Footer/>
            </div>
        </div>
    )
}

export default Project_1
