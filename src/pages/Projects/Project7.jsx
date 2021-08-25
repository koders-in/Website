import React from 'react'
import './Project7.scss'
import Image1 from '../../Images/Projects/HawaUI/HomePage.jpg'
import Footer from '../../components/Footer/Footer'
import Fade from 'react-reveal/Fade';
import Carousal4 from '../../components/Project_Corousal/Carousal4';

function Project7() {

    
    return (
        <div className="Hawaproject">
            <Fade bottom>
            <div className="section1">
                <h1>Hawa UI</h1>
                <img src={Image1} alt="" />
            </div></Fade>
            <div className="introduction">
                <Fade left>
                <h2>Introduction:</h2>
                <p>Hawa is a toolbot that monitors e-commerce websites for ‘cop the drop’ 
                functionality. Simple frontend using React by maintaining aspect ratio. 
                Give us your figma and we will create the exact design to make your work 
                possible in ‘snap of seconds’. This toolbot is of help to the users regarding 
                products on e-commerce sites. It notifies the customer regarding the availability 
                of a certain product and price at the drop-time.</p>
                </Fade>
            </div>

            <div className="challenges">
                <Fade left>
                <h2>Challenges:</h2>
                <p>Life is not a bed of roses and neither was maintaining the aspect ratio 
                in this project. While working on Hawa UI, maintaining the aspect ratio proved 
                to be a tough challenge but us being us, we overcame this situation.</p>
                </Fade>
            </div>

            <div className="solution">
                <Fade left>
                <h2>Solution:</h2>
                <p>Us working with electron was like asking a lion to hunt. Needless to say, 
                we were in our natural habitat. Just happy Koders, koding. The best part about 
                using electron is that it provides a flexible abstraction for native operating 
                system features. Therefore, our developers could maintain a single codebase for 
                their cross-platform application which will run on the most popular platforms.</p></Fade>
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
                    <Carousal4/>
                </div>
                </Fade>
            </div>

            <div className="footer">
                <Footer/>
            </div>
        </div>
    )
}

export default Project7
