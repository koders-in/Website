import React from 'react'
import Fade from 'react-reveal/Fade';
import './ProjectCards.scss'
import {HashRouter, Link} from "react-router-dom";
import Image1 from '../../Images/Projects/Notes_App/Login.jpg'
import Image2 from '../../Images/Projects/Food_Delivery/Client App.jpg'
import Image3 from '../../Images/Projects/Twitter_Monitor/Settings.png'
import Image4 from '../../Images/Projects/Virtual_hover_pen.png'
import Image5 from '../../Images/Projects/Cloud_Kitchen/Home.jpg'
import Image6 from '../../Images/Projects/Kourage/User Profile.jpg'
import Image7 from '../../Images/Projects/HawaUI/HomePage.jpg'
import Image8 from '../../Images/Projects/Machina/SignIn.jpg'
import Image9 from '../../Images/Projects/UCToolbot/Account_generator.jpg'
import Image10 from '../../Images/Projects/SquaredIO/Dashboard.jpg'
import Image11 from '../../Images/Projects/AIO World/HomePage.jpg'

function ProjectCards() {
    return (
        <div className="projectcards" id="projectscards">
            <HashRouter>
            <div className="cards">
                <div className="row1">
                    <Fade left>
                    <div className="card1">
                        <img src={Image1} alt="" />
                        <h4>Notes Application</h4>
                        <p>You take notes to remember and not forget. 
                        Hence the ‘Notes Application’, on the surface 
                        this application might appear to be lackluster 
                        but the real deal lies in its privacy and 
                        congenial features.</p>
                        <Link to="/projects/Notes Application"
                        tag={Link}>
                           <p>Read more</p>
                        </Link>
                    </div>
                    </Fade>
                    <Fade right>
                    <div className="card2">
                        <img src={Image2} alt="" />
                        <h4>Food Delivery Application</h4>
                        <p>Let’s get one thing straight, E-commerce 
                        is the new normal so are the online grocery 
                        stores but the development of these platforms 
                        has always been a barrier.</p>
                        <Link to="/projects/Food Delivery Application"
                        tag={Link}>
                           <p>Read more</p>
                        </Link>
                    </div>
                    </Fade>
                </div>

                <div className="row2">
                    <Fade left>
                    <div className="card1">
                        <img src={Image3} alt="" />
                        <h4>Twitter Monitor</h4>
                        <p>One of our flagships projects under which 
                        our client wanted the agility of 50-60ms while 
                        monitoring twitter and receiving notifications 
                        about the same. Sounds tough for an average 
                        programmer?</p>
                        <Link to="/projects/Twitter Monitor"
                        tag={Link}>
                           <p>Read more</p>
                        </Link>
                    </div>
                    </Fade>
                    <Fade right>
                    <div className="card2">
                        <img src={Image4} alt="" />
                        <h4>Virtual Hover Pen</h4>
                        <p>The project was to build a Virtual Pen with Virtual 
                        Eraser on a real time VideoStream. It was made as a 
                        contribution to society so that anyone, by using the 
                        code provided, could create a real virtual pen for the 
                        desktop.</p>
                        <Link to="/projects/Virtual Hover Pen"
                        tag={Link}>
                           <p>Read more</p>
                        </Link>
                    </div>
                    </Fade>
                </div>

                <div className="row3">
                    <Fade left>
                    <div className="card1">
                        <img src={Image5} alt="" />
                        <h4>Cloud Kitchen</h4>
                        <p>A little food has never hurt anyone nor our Cloud 
                        Kitchen, which is a react application. It helps the 
                        different restaurants and food outlets to maximize their 
                        business as it provides food-delivery, customization of the 
                        dish and adding requests or notes.</p>
                        <Link to="/projects/Cloud Kitchen"
                        tag={Link}>
                           <p>Read more</p>
                        </Link>
                    </div>
                    </Fade>
                    <Fade right>
                    <div className="card2">
                        <img src={Image6} alt="" />
                        <h4>Kourage</h4>
                        <p>In an era of work from home, Kourage is a multi-functional 
                        bot that takes care of a lot of tasks within. It helps in 
                        recording attendance, reminds of the deadlines, bug management 
                        and daily work done by the employees.</p>
                        <Link to="/projects/Kourage"
                        tag={Link}>
                           <p>Read more</p>
                        </Link>
                    </div>
                    </Fade>
                </div>

                <div className="row4">
                    <Fade left>
                    <div className="card1">
                        <img src={Image7} alt="" />
                        <h4>Hawa UI</h4>
                        <p>HAWA UI is a bot to monitor products for different websites, 
                        and show status as available, low or high. For integration, 
                        generally web sockets are used but here we used grpc server.</p>
                        <Link to="/projects/Hawa UI"
                        tag={Link}>
                           <p>Read more</p>
                        </Link>
                    </div>
                    </Fade>
                    <Fade right>
                    <div className="card2">
                        <img src={Image8} alt="" />
                        <h4>Machina</h4>
                        <p>Machina is a toolbot that monitors e-commerce websites for 
                        ‘cop the drop’ functionality. Simple frontend using React by 
                        maintaining aspect ratio.</p>
                        <Link to="/projects/Machina"
                        tag={Link}>
                           <p>Read more</p>
                        </Link>
                    </div>
                    </Fade>
                </div>

                <div className="row5">
                    <Fade left>
                    <div className="card1">
                        <img src={Image9} alt="" />
                        <h4>UC-Toolbot</h4>
                        <p>Electron app being the forte of our team, the toolbox. 
                        It facilitates the creation of tasks, proxies, profiles, 
                        cookie gen, proxy gen, and other functionalities.Whether 
                        it’s frontend, backend or integration, Koders is here to 
                        kater to your needs.</p>
                        <Link to="/projects/UC-Toolbot"
                        tag={Link}>
                           <p>Read more</p>
                        </Link>
                    </div>
                    </Fade>
                    <Fade right>
                    <div className="card2">
                        <img src={Image10} alt="" />
                        <h4>Squared IO</h4>
                        <p>Squared IO is a next generation automated platform for 
                        botting sites. With a responsive 1:1 UI and great animations, 
                        we built Squared IO's frontend as well as the site.</p>
                        <Link to="/projects/Squared IO"
                        tag={Link}>
                           <p>Read more</p>
                        </Link>
                    </div>
                    </Fade>
                </div>

                <div className="row6">
                    <Fade left>
                    <div className="card1">
                        <img src={Image11} alt="" />
                        <h4>AIO World</h4>
                        <p>Every action has an equal and opposite REACT-ion. 
                        All-in-one responsive web application with pretty kool 
                        animations? So we present to you, a React web app at 
                        your fingertips.</p>
                        <Link to="/projects/AIO World"
                        tag={Link}>
                           <p>Read more</p>
                        </Link>
                    </div>
                    </Fade>
                </div>
            </div>
            </HashRouter>
        </div>
    )
}

export default ProjectCards
