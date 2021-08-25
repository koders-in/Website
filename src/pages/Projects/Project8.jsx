import React from 'react'
import './Project8.scss'
import Image1 from '../../Images/Projects/Machina/SignIn.jpg'
import Footer from '../../components/Footer/Footer'
import Fade from 'react-reveal/Fade';
import Carousal5 from '../../components/Project_Corousal/Carousal5';

function Project8() {

    
    return (
        <div className="Machinaproject">
            <Fade bottom>
            <div className="section1">
                <h1>Machina UI</h1>
                <img src={Image1} alt="" />
            </div></Fade>
            <div className="introduction">
                <Fade left>
                <h2>Introduction:</h2>
                <p>Machina UI is a bot to monitor products for different websites, and 
                show status as available, low or high. A classic dashboard to keep a track 
                of your checkouts, get version details and their updates along with a Analytics 
                section.  For integration, generally web sockets are used but here we used a 
                GRPC server. What is gRPC? It is a modern open source high performance Remote 
                Procedure Call (RPC) framework that can perform, no matter in which environment. 
                It can readily connect services in and across data centers with pluggable support 
                for load balancing, tracing, health checking and authentication.</p>
                </Fade>
            </div>

            <div className="challenges">
                <Fade left>
                <h2>Challenges:</h2>
                <p>This was the first time we worked using GRPC, we never had the privilege to 
                work with it before. To work with GRPC was something new in our syllabus, 
                something that we haven't done before but like any other first-bencher who can 
                solve anything that is thrown at them, we solved it too. It took us some time 
                to figure out, but there is nothing a little koffee and group meeting cannot 
                solve.</p>
                </Fade>
            </div>

            <div className="solution">
                <Fade left>
                <h2>Solution:</h2>
                <p>Envoy proxy, which works as middleware between front-end and back-end, 
                was employed. For running the envoy proxy server, a docker container was used. 
                The backend GRPC server was deployed on Node. Envoy uses  gRPC for its control 
                plane, where it picks up the  configuration from management server(s) and filters, 
                such as for rate limiting or authorization checks.</p></Fade>
            </div>

            
            <div className="tech">
                <Fade left>
                <h2>Tech Stack:</h2>
                <ul>
                    <li>React</li>
                    <li>Electron</li>
                    <li>GRPC</li>
                </ul>
                </Fade>
            </div>

            <div className="screenshots">
                <Fade left>
                <h2>Snapshots of the Application:</h2>
                </Fade>
                <Fade bottom>
                <div className="corousal">
                    <Carousal5/>
                </div>
                </Fade>
            </div>

            <div className="footer">
                <Footer/>
            </div>
        </div>
    )
}

export default Project8
