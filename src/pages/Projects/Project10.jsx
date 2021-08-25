import React from 'react'
import './Project10.scss'
import Image1 from '../../Images/Projects/SquaredIO/Dashboard.jpg'
import Footer from '../../components/Footer/Footer'
import Fade from 'react-reveal/Fade';
import Carousal7 from '../../components/Project_Corousal/Carousal7';

function Project10() {

    
    return (
        <div className="projectsquared">
            <Fade bottom>
            <div className="section1">
                <h1>Squared IO</h1>
                <img src={Image1} alt="" />
            </div></Fade>
            <div className="introduction">
                <Fade left>
                <h2>Introduction:</h2>
                <p>Squared IO is a next generation automated platform for botting sites. 
                With a responsive 1:1 UI and great animations, we built Squared IO's 
                frontend as well as the site. It is a retailer bot whose aim is to be fast 
                and precise while making automation easier. Other than that it can create 
                and edit tasks while adding proxies and navigates with ease. One of it's 
                kind retailer bot built with speed and precision, currently supporting Walmart, 
                Target, Amazon , Best Buy, and many more</p>
                </Fade>
            </div>

            <div className="challenges">
                <Fade left>
                <h2>Challenges:</h2>
                <p>The site on the desktop looked all good but the mobile view didn't look 
                as good as on the desktop so our team put a lot of work into it. Developing 
                a user-friendly UI that was meant to be fast and supports easier navigation 
                along with their dashboard was a bit of a challenge.</p>
                </Fade>
            </div>

            <div className="solution">
                <Fade left>
                <h2>Solution:</h2>
                <p>We sat together and scratched our heads and came up with the solution. 
                We added proper media queries and then solved the issue. Added small 
                bits of animation and made the site very user friendly and enhanced their 
                experience.</p></Fade>
            </div>

            
            <div className="tech">
                <Fade left>
                <h2>Tech Stack:</h2>
                <ul>
                    <li>React</li>
                    <li>Electron</li>
                </ul>
                </Fade>
            </div>

            <div className="screenshots">
                <Fade left>
                <h2>Snapshots of the Application:</h2>
                </Fade>
                <Fade bottom>
                <div className="corousal">
                    <Carousal7/>
                </div>
                </Fade>
            </div>

            <div className="footer">
                <Footer/>
            </div>
        </div>
    )
}

export default Project10