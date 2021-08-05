import React from 'react'
import Fade from 'react-reveal/Fade';
import './ProjectCards.scss'
import {HashRouter, Link} from "react-router-dom";
import Image1 from '../../Images/Projects/1.PNG'

function ProjectCards() {
    return (
        <div className="projectcards" id="projectscards">
            <HashRouter>
            <div className="cards">
                <div className="row1">
                    <Fade left>
                    <div className="card1">
                        <img src={Image1} alt="" />
                        <h4>AIO World</h4>
                        <p>Every action has an equal and 
                            opposite REACT-ion. All-in-one 
                            responsive web application with 
                            pretty kool animations? So here 
                            is a React web app at your 
                            fingertips.
                        </p>
                        <Link to="/projects/AIO-World"
                        tag={Link}>
                           <p>Read more</p>
                        </Link>
                    </div>
                    </Fade>
                    <Fade right>
                    <div className="card2">
                        <img src={Image1} alt="" />
                        <h4>AIO World</h4>
                        <p>Every action has an equal and 
                            opposite REACT-ion. All-in-one 
                            responsive web application with 
                            pretty kool animations? So here 
                            is a React web app at your 
                            fingertips.
                        </p>
                        <Link to="/projects/AIO-World"
                        tag={Link}>
                           <p>Read more</p>
                        </Link>
                    </div>
                    </Fade>
                </div>

                <div className="row2">
                    <Fade left>
                    <div className="card1">
                        <img src={Image1} alt="" />
                        <h4>AIO World</h4>
                        <p>Every action has an equal and 
                            opposite REACT-ion. All-in-one 
                            responsive web application with 
                            pretty kool animations? So here 
                            is a React web app at your 
                            fingertips.
                        </p>
                        <Link to="/projects/AIO-World"
                        tag={Link}>
                           <p>Read more</p>
                        </Link>
                    </div>
                    </Fade>
                    <Fade right>
                    <div className="card2">
                        <img src={Image1} alt="" />
                        <h4>AIO World</h4>
                        <p>Every action has an equal and 
                            opposite REACT-ion. All-in-one 
                            responsive web application with 
                            pretty kool animations? So here 
                            is a React web app at your 
                            fingertips.
                        </p>
                        <Link to="/projects/AIO-World"
                        tag={Link}>
                           <p>Read more</p>
                        </Link>
                    </div>
                    </Fade>
                </div>

                <div className="row3">
                    <Fade left>
                    <div className="card1">
                        <img src={Image1} alt="" />
                        <h4>AIO World</h4>
                        <p>Every action has an equal and 
                            opposite REACT-ion. All-in-one 
                            responsive web application with 
                            pretty kool animations? So here 
                            is a React web app at your 
                            fingertips.
                        </p>
                        <Link to="/projects/AIO-World"
                        tag={Link}>
                           <p>Read more</p>
                        </Link>
                    </div>
                    </Fade>
                    <Fade right>
                    <div className="card2">
                        <img src={Image1} alt="" />
                        <h4>AIO World</h4>
                        <p>Every action has an equal and 
                            opposite REACT-ion. All-in-one 
                            responsive web application with 
                            pretty kool animations? So here 
                            is a React web app at your 
                            fingertips.
                        </p>
                        <Link to="/projects/AIO-World"
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
