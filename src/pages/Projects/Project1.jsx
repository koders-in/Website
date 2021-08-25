import React from 'react'
import './Project1.scss'
import Image1 from '../../Images/Projects/Notes_App/Login.jpg'
import ProjectCorousal1 from '../../components/Project_Corousal/ProjectCorousal_1'
import Footer from '../../components/Footer/Footer'
import Fade from 'react-reveal/Fade';


function Project_1() {

    
    return (
        <div className="project1">
            <Fade bottom>
            <div className="section1">
                <h1>Notes Application</h1>
                <img src={Image1} alt="" />
            </div></Fade>
            <div className="introduction">
                <Fade left>
                <h2>Introduction:</h2>
                <p>You take notes to remember and not forget. 
                Hence the ‘Notes Application’, on the surface this 
                application might appear to be lackluster but the real 
                deal lies in its privacy and congenial features. A minimalist interface, extremely easy to use. Notes 
                bring out maximum productivity with an interface tailor-made 
                for professional individuals and students. Take notes your way 
                and create your own flair.</p>
                </Fade>
            </div>

            <div className="challenges">
                <Fade left>
                <h2>Challenges:</h2>
                <p>This project proved to be more tricky than challenging. 
                We had a clear vision for this app to be privacy-oriented 
                and give the user a seamless experience. Managing room 
                firebase and real-time firebase data were quick to solve. 
                Thereafter making the app comfy with all screen sizes 
                presented a slight encumbrance but we solved it nimbly by 
                making the use of in-hand experience and a few trial runs. 
                Making use of libraries eased our workload.</p>
                <p>For the privacy part, the notes stored are encrypted 
                and password protection enhances the overall security factor.</p>
                </Fade>
            </div>

            <div className="solution">
                <Fade left>
                <h2>Solution:</h2>
                <p>Async and libraries of scalable sizes were our knight shining armor. 
                Async helped us to add all the real-time databases to the room 
                databases with no hiccups. The libraries helped us to make 
                sure that the application adapts to the screen size and is as 
                serene as it's meant to be. Be it the 4-inch screen or gigantic 
                6.8 inch screen, we assured the adaptability for all types of 
                screens.</p></Fade>
            </div>

            <div className="tech">
                <Fade left>
                <h2>Tech Stack:</h2>
                <ul>
                    <li>JAVA</li>
                    <li>XML</li>
                    <li>Firebase Realtime Database</li>
                    <li>Firebase Authentication</li>
                    <li>Room Database</li>
                </ul>
                </Fade>
            </div>

            <div className="screenshots1">
                <Fade left>
                <h2>Snapshots of the Application:</h2>
                </Fade>
                <Fade bottom>
                <div className="corousal1">
                    <ProjectCorousal1/>
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
