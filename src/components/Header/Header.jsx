import React from 'react'
import {HashRouter, Link} from "react-router-dom";
import './Header.scss'
import Image1 from '../../Images/Logo.png'
import Fade from 'react-reveal/Fade';


function Header() {

    const link = "/";

    return (
        <div className='header' id='#header'>
            <HashRouter>
            <Fade top>
            <div className="wrapper">
                <div className="left">
                    <Link to={link} tag={Link}>
                        <img src={Image1} alt="/"></img>
                    </Link>
                </div>
                <div className="right">
                    <ul className="Quick Links">
                        <li className="au">
                            <Link to="/aboutus"
                            tag={Link}>
                               About Us
                            </Link>
                        </li>
                        <li className="te">
                            <Link to="/ourteam"
                            tag={Link}>
                               Team
                            </Link>
                        </li>
                        <li className="te">
                            <Link to="/portfolio"
                            tag={Link}>
                               Portfolio
                            </Link>
                        </li>
                        <li className="te">
                           <Link to="/blog"
                            tag={Link}>
                               Blog
                            </Link>
                        </li>
                        <li className="te">
                            <Link to="/kommunity"
                            tag={Link}>
                               Kommunity
                            </Link>
                        </li>
                        <li className="te">
                            <Link to="/Kareer"
                            tag={Link}>
                               Kareer
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
            </Fade>
            </HashRouter>
        </div>
    )
}

export default Header
