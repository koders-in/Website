import React from 'react'
import Fade from 'react-reveal/Fade';
import { Link, HashRouter } from 'react-router-dom';
import './BlogTiles.scss'
import Image1 from '../../Images/Hacking_1.jpg'
import Image2 from '../../Images/ecom_1.jpg'
import Image3 from '../../Images/AI_1.jpg'
import Image4 from '../../Images/UI_1.jpg'
import Image5 from '../../Images/seo_1.jpg'
import Image6 from '../../Images/dark_web_1.jpeg'
import Image7 from '../../Images/QA_1.png'

function BlogTiles() {
    return (
        <div className="blogtiles">
            <Fade bottom>
            <div className="blog1">
               <div className="left">
                   <h5>Cyber Security</h5>
                   <h3>Hacking Humans is easier than Hacking Computers</h3>
                   <p>Being a hacker isn't as easy as it may sound. And you should 
                    beware of snake oil salesmen who guarantee you to make the next 
                    'Kevin Mitnick' for a few bucks. Raiding area 51 would be a better 
                    plan, just in case.</p>
                    <HashRouter>
                        <Link to="/Hacking-Humans-is-easier-than-Hacking-Computers"
                        tag={Link}>
                            Read More
                        </Link>
                    </HashRouter>
               </div>
               <div className="right">
                   <div className="pic">
                       <img src={Image1} alt="" />
                   </div>
               </div>
            </div>
            </Fade>

            <Fade bottom>
            <div className="blog2">
               <div className="left">
                   <h5>E-Commerce</h5>
                   <h3>Website or Mobile App - What to know before 
                    taking your business online?</h3>
                   <p>Hello Mighty Creator, I am sure you have a great 
                    idea about taking your business online. Maybe you 
                    don’t know where to start? But you need an online 
                    presence for your business to increase marketing 
                    and create a loyal customer base.</p>
                    <HashRouter>
                        <Link to="/Website-or-Mobile-App"
                        tag={Link}>
                            Read More
                        </Link>
                    </HashRouter>
               </div>
               <div className="right">
                   <div className="pic">
                        <img src={Image2} alt="" />
                   </div>
               </div>
            </div>
            </Fade>

            <Fade bottom>
            <div className="blog3">
               <div className="left">
                   <h5>Artificial Intelligence</h5>
                   <h3>Automation: the present and future</h3>
                   <p>Automation is the technique of creating a 
                    tool or an apparatus which automates tasks 
                    thus minimizing human involvement. Tasks that 
                    are put on automation benefit a lot of industries 
                    like manufacturing, transportation, defense.</p>
                    <HashRouter>
                        <Link to="/Automation-the-present-and-future"
                        tag={Link}>
                            Read More
                        </Link>
                    </HashRouter>
               </div>
               <div className="right">
                   <div className="pic">
                        <img src={Image3} alt="" />
                   </div>
               </div>
            </div>
            </Fade>


            <Fade bottom>
            <div className="blog4">
               <div className="left">
                   <h5>UI & UX</h5>
                   <h3>UI vs UX: How do they impact your business?</h3>
                   <p>User experience (UX) design is the process design 
                    teams use to create products that provide meaningful 
                    and relevant experiences to users. This involves the 
                    design of the entire process of acquiring and integrating 
                    the product, including aspects of branding, design, 
                    usability and function.</p>
                    <HashRouter>
                        <Link to="/UI-vs-UX"
                        tag={Link}>
                            Read More
                        </Link>
                    </HashRouter>
               </div>
               <div className="right">
                   <div className="pic">
                        <img src={Image4} alt="" />
                   </div>
               </div>
            </div>
            </Fade>

            <Fade bottom>
            <div className="blog5">
               <div className="left">
                   <h5>Digital Marketing</h5>
                   <h3>What you need to know about SEO before starting a website?</h3>
                   <p>SEO or Search Engine Optimization is the process 
                    of improving the quantity and quality of search 
                    traffic to your website or product through organic 
                    search engine results. Google has a crawler that 
                    gathers data about everything that can be found on 
                    the Internet.</p>
                    <HashRouter>
                        <Link to="/What you need to know about SEO before starting a website"
                        tag={Link}>
                            Read More
                        </Link>
                    </HashRouter>
               </div>
               <div className="right">
                   <div className="pic">
                        <img src={Image5} alt="" />
                   </div>
               </div>
            </div>
            </Fade>

            <Fade bottom>
            <div className="blog6">
               <div className="left">
                   <h5>Dark Web</h5>
                   <h3>The Dark Web is notorious</h3>
                   <p>The dark web is notorious. You can 
                    find fake credit cards, hitmen, dope sellers, 
                    and all sorts of other illicit substances. 
                    Hold up, hold up, hold up! The line written 
                    above by no means could be repudiated. 
                    But this is not the dark web. The dark web 
                    was never concomitant with felonious acts.</p>
                    <HashRouter>
                        <Link to="/The Dark Web is notorious"
                        tag={Link}>
                            Read More
                        </Link>
                    </HashRouter>
               </div>
               <div className="right">
                   <div className="pic">
                        <img src={Image6} alt="" />
                   </div>
               </div>
            </div>
            </Fade>

            <Fade bottom>
            <div className="blog7">
               <div className="left">
                   <h5>Quality Assurance</h5>
                   <h3>4 Reasons why Software Quality Assurance is Important?</h3>
                   <p>Quality assurance or QA is a government mandated step in 
                    manufacturing. This is used to ensure that the product meets 
                    the technical requirements and the set industry standards. 
                    This is a highly underestimated topic.</p>
                    <HashRouter>
                        <Link to="/4 Reasons why Software Quality Assurance is Important"
                        tag={Link}>
                            Read More
                        </Link>
                    </HashRouter>
               </div>
               <div className="right">
                   <div className="pic">
                        <img src={Image7} alt="" />
                   </div>
               </div>
            </div>
            </Fade>
        </div>
    )
}

export default BlogTiles
