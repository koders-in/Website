import React from 'react'
import Fade from 'react-reveal/Fade';
import './ProjectCards.scss'
import {HashRouter, Link} from "react-router-dom";
import Image1 from '../../assets/images/projects/Notes_App/Login.webp'
import Image2 from '../../assets/images/projects/Food_Delivery/Client App.webp'
import Image3 from '../../assets/images/projects/Twitter_Monitor/Settings.webp'
import Image4 from '../../assets/images/projects/Virtual_hover_pen.webp'
import Image5 from '../../assets/images/projects/Cloud_Kitchen/Home.webp'
import Image6 from '../../assets/images/projects/Kourage/User Profile.webp'
import Image7 from '../../assets/images/projects/HawaUI/HomePage.webp'
import Image8 from '../../assets/images/projects/Machina/SignIn.webp'
import Image9 from '../../assets/images/projects/UCToolbot/Account_generator.webp'
import Image10 from '../../assets/images/projects/SquaredIO/Dashboard.webp'
import Image11 from '../../assets/images/projects/AIO World/HomePage.webp'

function ProjectCards() {
    return (
        <div className="projectcards" id="projectscards">
            <HashRouter>
            <div className="cards">
                <div className="row1 row">
                    <Fade left>
                    <div className="card1 card">
                        <img src={Image1} alt="Log in page of mobile application to take notes" />
                        <h4>Notes Application</h4>
                        <p>You take notes to remember and not forget. 
                        Hence the ‘Notes Application’, on the surface 
                        this application might appear to be lackluster 
                        but the real deal lies in its privacy and 
                        congenial features.</p>
                        <Link to="/projects/Notes Application"
                        tag={Link} aria-label="read more">
                           <p>Read more</p>
                        </Link>
                    </div>
                    </Fade>
                    <Fade right>
                    <div className="card2 card">
                        <img src={Image2} alt="Food delivery application displaying restaurants with options to search, apply offers and configure various choices" />
                        <h4>Food Delivery Application</h4>
                        <p>Let’s get one thing straight, E-commerce 
                        is the new normal so are the online grocery 
                        stores but the development of these platforms 
                        has always been a barrier.</p>
                        <Link to="/projects/Food Delivery Application"
                        tag={Link} aria-label="read more">
                           <p>Read more</p>
                        </Link>
                    </div>
                    </Fade>
                </div>

                <div className="row2 row">
                    <Fade left>
                    <div className="card1 card">
                        <img src={Image3} alt="Twitter monitor application settings page showing user details and space to configure keys and webhooks" />
                        <h4>Twitter Monitor</h4>
                        <p>One of our flagships projects under which 
                        our client wanted the agility of 50-60ms while 
                        monitoring twitter and receiving notifications 
                        about the same. Sounds tough for an average 
                        programmer?</p>
                        <Link to="/projects/Twitter Monitor"
                        tag={Link} aria-label="read more">
                           <p>Read more</p>
                        </Link>
                    </div>
                    </Fade>
                    <Fade right>
                    <div className="card2 card">
                        <img src={Image4} alt="Text Koders being written on a screen by a person" />
                        <h4>Virtual Hover Pen</h4>
                        <p>The project was to build a Virtual Pen with Virtual 
                        Eraser on a real time VideoStream. It was made as a 
                        contribution to society so that anyone, by using the 
                        code provided, could create a real virtual pen for the 
                        desktop.</p>
                        <Link to="/projects/Virtual Hover Pen"
                        tag={Link} aria-label="read more">
                           <p>Read more</p>
                        </Link>
                    </div>
                    </Fade>
                </div>

                <div className="row3 row">
                    <Fade left>
                    <div className="card1 card">
                        <img src={Image5} alt="Home page of My Kitchen application featuring a man decorating food to be served" />
                        <h4>Cloud Kitchen</h4>
                        <p>A little food has never hurt anyone nor our Cloud 
                        Kitchen, which is a react application. It helps the 
                        different restaurants and food outlets to maximize their 
                        business as it provides food-delivery, customization of the 
                        dish and adding requests or notes.</p>
                        <Link to="/projects/Cloud Kitchen"
                        tag={Link} aria-label="read more">
                           <p>Read more</p>
                        </Link>
                    </div>
                    </Fade>
                    <Fade right>
                    <div className="card2 card">
                        <img src={Image6} alt="A message from bot displaying details about a user" />
                        <h4>Kourage</h4>
                        <p>In an era of work from home, Kourage is a multi-functional 
                        bot that takes care of a lot of tasks within. It helps in 
                        recording attendance, reminds of the deadlines, bug management 
                        and daily work done by the employees.</p>
                        <Link to="/projects/Kourage"
                        tag={Link} aria-label="read more">
                           <p>Read more</p>
                        </Link>
                    </div>
                    </Fade>
                </div>

                <div className="row4 row">
                    <Fade left>
                    <div className="card1 card">
                        <img src={Image7} alt="Dashboard of Hawa UI that displays statistics about e-commerce websites" />
                        <h4>Hawa UI</h4>
                        <p>HAWA UI is a bot to monitor products for different websites, 
                        and show status as available, low or high. For integration, 
                        generally web sockets are used but here we used grpc server.</p>
                        <Link to="/projects/Hawa UI"
                        tag={Link} aria-label="read more">
                           <p>Read more</p>
                        </Link>
                    </div>
                    </Fade>
                    <Fade right>
                    <div className="card2 card">
                        <img src={Image8} alt="Sign in screen of Machina UI" />
                        <h4>Machina</h4>
                        <p>Machina is a toolbot that monitors e-commerce websites for 
                        ‘cop the drop’ functionality. Simple frontend using React by 
                        maintaining aspect ratio.</p>
                        <Link to="/projects/Machina"
                        tag={Link} aria-label="read more">
                           <p>Read more</p>
                        </Link>
                    </div>
                    </Fade>
                </div>

                <div className="row5 row">
                    <Fade left>
                    <div className="card1 card">
                        <img src={Image9} alt="Account generator page of UC Toolbot displaying options to configure the account details" />
                        <h4>UC-Toolbot</h4>
                        <p>Electron app being the forte of our team, the toolbox. 
                        It facilitates the creation of tasks, proxies, profiles, 
                        cookie gen, proxy gen, and other functionalities.Whether 
                        it’s frontend, backend or integration, Koders is here to 
                        kater to your needs.</p>
                        <Link to="/projects/UC-Toolbot"
                        tag={Link} aria-label="read more">
                           <p>Read more</p>
                        </Link>
                    </div>
                    </Fade>
                    <Fade right>
                    <div className="card2 card">
                        <img src={Image10} alt="Home page of Squared IO featuring Premimum retailer bot details" />
                        <h4>Squared IO</h4>
                        <p>Squared IO is a next generation automated platform for 
                        botting sites. With a responsive 1:1 UI and great animations, 
                        we built Squared IO's frontend as well as the site.</p>
                        <Link to="/projects/Squared IO"
                        tag={Link} aria-label="read more">
                           <p>Read more</p>
                        </Link>
                    </div>
                    </Fade>
                </div>

                <div className="row6 row">
                    <Fade left>
                    <div className="card1 card">
                        <img src={Image11} alt="Home page of AIO World describing advantages of the product" />
                        <h4>AIO World</h4>
                        <p>Every action has an equal and opposite REACT-ion. 
                        All-in-one responsive web application with pretty kool 
                        animations? So we present to you, a React web app at 
                        your fingertips.</p>
                        <Link to="/projects/AIO World"
                        tag={Link} aria-label="read more">
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
