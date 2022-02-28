import React from 'react'
import './Project3.scss'
import Image1 from '../../Images/Projects/Twitter_Monitor/Settings.png'
import Image2 from '../../Images/Projects/Twitter_Monitor/Twitter and ALO.png'
import Image3 from '../../Images/Projects/Twitter_Monitor/Twitter_Old_UI.png'
import Footer from '../../components/Footer/Footer'
import Fade from 'react-reveal/Fade';

function Project3() {

    
    return (
        <div className="twitterproject">
            <Fade bottom>
            <div className="section1">
                <h1>Twitter Monitor</h1>
                <img src={Image1} alt="" />
            </div></Fade>
            <div className="introduction">
                <Fade left>
                <h2>Introduction:</h2>
                <p>One of our flagships projects under which our client wanted the 
                agility of 50-60ms while monitoring twitter and receiving notifications 
                about the same. Sounds tough for an average programmer? Koders pulled 
                it off with elegance as we served not only the client’s needs but also 
                an impeccable sneaker bot with our hands-on experience of python and async 
                functions. Inscribing in the keywords, filtering them out in a matter of 
                milliseconds was challenging but, an average task, we do not do that here.</p>
                </Fade>
            </div>

            <div className="challenges">
                <Fade left>
                <h2>Challenges:</h2>
                <p>Twitter is one heck of a moderator when it comes to their platform. 
                The primary challenge with twitter was that it blocks the request if the 
                limit gets higher in streaming and fetching tweets. Other than that, 
                all notifications were to be integrated with discord and that was a 
                tricky task as well.</p>
                </Fade>
            </div>

            <div className="solution">
                <Fade left>
                <h2>Solution:</h2>
                <p>The solution lies in maintaining the different API keys with rotation 
                so that we do not exceed the limit rate. The execution took time but we 
                made a robust API rotation technique which is keeping up with the changing 
                times. The integration with discord was done by using the Webhook Library.</p></Fade>
            </div>

            
            <div className="tech">
                <Fade left>
                <h2>Tech Stack:</h2>
                <ul>
                    <li>Node</li>
                    <li>Electron</li>
                    <li>React</li>
                </ul>
                </Fade>
            </div>

           
            <div className="screenshots_twitter">
                <Fade left>
                <h2>Snapshots of the Application:</h2>
                </Fade>
                <Fade bottom>
                <div className="corousal">
                    <div className="img1">
                        <img src={Image1} alt="" />
                        <p>Settings</p>
                    </div>
                    <div className="img2">
                        <img src={Image2} alt="" />
                        <p>Twitter and ALO Page</p>
                    </div>
                    <div className="img3">
                        <img src={Image3} alt="" />
                        <p>Twitter Old UI</p>
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

export default Project3
