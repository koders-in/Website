import React from 'react'
import Fade from 'react-reveal/Fade';
import { Link, HashRouter } from 'react-router-dom';
import './BlogTiles.scss'

function BlogTiles() {
    return (
        <div className="blogtiles">
            <Fade bottom>
            <div className="blog1">
               <div className="left">
                   <h5>category tag</h5>
                   <h3>Hacking Humans is easier than Hacking Computers</h3>
                   <p>Being a hacker isn't as easy as it may sound. And you should 
                    beware of snake oil salesmen who guarantee you to make the next 
                    'Kevin Mitnick' for a few bucks. Raiding area 51 would be a better 
                    plan, just in case.</p>
                    <HashRouter>
                        <Link to="/"
                        tag={Link}>
                            Read More
                        </Link>
                    </HashRouter>
               </div>
               <div className="right">
                   <div className="pic"></div>
               </div>
            </div>
            </Fade>

            <Fade bottom>
            <div className="blog2">
               <div className="left">
                   <h5>category tag</h5>
                   <h3>Hacking Humans is easier than Hacking Computers</h3>
                   <p>Being a hacker isn't as easy as it may sound. And you should 
                    beware of snake oil salesmen who guarantee you to make the next 
                    'Kevin Mitnick' for a few bucks. Raiding area 51 would be a better 
                    plan, just in case.</p>
                    <HashRouter>
                        <Link to="/"
                        tag={Link}>
                            Read More
                        </Link>
                    </HashRouter>
               </div>
               <div className="right">
                   <div className="pic"></div>
               </div>
            </div>
            </Fade>

            <Fade bottom>
            <div className="blog3">
               <div className="left">
                   <h5>category tag</h5>
                   <h3>Hacking Humans is easier than Hacking Computers</h3>
                   <p>Being a hacker isn't as easy as it may sound. And you should 
                    beware of snake oil salesmen who guarantee you to make the next 
                    'Kevin Mitnick' for a few bucks. Raiding area 51 would be a better 
                    plan, just in case.</p>
                    <HashRouter>
                        <Link to="/"
                        tag={Link}>
                            Read More
                        </Link>
                    </HashRouter>
               </div>
               <div className="right">
                   <div className="pic"></div>
               </div>
            </div>
            </Fade>
        </div>
    )
}

export default BlogTiles
