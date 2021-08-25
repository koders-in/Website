import React from 'react'
import './Project2.scss'
import Image1 from '../../Images/Projects/Food_Delivery/Client App.jpg'
import Image2 from '../../Images/Projects/Food_Delivery/Restaurant_App.jpg'
import Footer from '../../components/Footer/Footer'
import Fade from 'react-reveal/Fade';

function Project2() {   
    return (
        <div className="foodproject">
            <Fade bottom>
            <div className="section2">
                <h1>Food Delivery Application</h1>
                <img src={Image1} alt="" />
            </div></Fade>
            <div className="introduction">
                <Fade left>
                <h2>Introduction:</h2>
                <p>Let’s get one thing straight, E-commerce is 
                the new normal so are the online grocery stores 
                but the development of these platforms has always been a 
                barrier. We understood the needs of the market and developed 
                a robust, cost-efficient, and top-notch hybrid E-Commerce 
                application. An application that serves the restaurant, the 
                client, and the delivery executive through one application to 
                smooth out the operations and monitor real-life activities.</p>
                </Fade>
            </div>

            <div className="challenges">
                <Fade left>
                <h2>Challenges:</h2>
                <p>Clubbing three apps together might sound like a recipe for debacle 
                but from the perspective of a shop/business owner, it's a blessing. 
                The challenge we had first mostly was to gel the apps  together and 
                make it work as a single unit. Through extensive trials and errors, 
                we were able to achieve it without compromising on any feature. 
                Instead, we developed a few handy admin features which are intuitive 
                and monitor activity in real life. The second challenge was the size 
                of this application, which, meh, Koders don't find it a challenge enough. 
                The application developed is well under the average E-commerce app size.</p>
                </Fade>
            </div>

            <div className="solution">
                <Fade left>
                <h2>Solution:</h2>
                <p>Team-work led us to develop a layer-on-layer application 
                process that was not only just efficient but friendly for all 
                sorts of mobile devices as we executed all the functionalities 
                by splitting them into pieces and then ran parallel integration 
                with each panel.</p></Fade>
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

            <div className="screenshots2">
                <Fade left>
                <h2>Snapshots of the Application:</h2>
                </Fade>
                <Fade bottom>
                <div className="corousal2">
                    <div className="img1">
                        <img src={Image1} alt="" />
                        <p>Client App</p>
                    </div>
                    <div className="img2">
                        <img src={Image2} alt="" />
                        <p>Restaurant App</p>
                    </div>
                    
                </div>
                </Fade>
            </div>

            <div className="footer">
                <Footer/>
            </div>
        </div>
    )
}

export default Project2
