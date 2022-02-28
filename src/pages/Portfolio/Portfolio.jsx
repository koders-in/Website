import React from 'react'
import CountUp from 'react-countup';
import Fade from 'react-reveal/Fade';
import './Portfolio.scss'
import Footer from "../../components/Footer/Footer"
import Image1 from '../../Images/c&d.png'
import Image2 from '../../Images/Featured Projects.png'
import Image3 from '../../Images/Technology.svg'
import ProjectCards from '../../components/Project_Cards/ProjectCards';

function Portfolio() {
    return (
        <div className="portfolio" id="portfolio">
            <div className="heading">
                <img src={Image1} alt="" />
                <Fade left>
                <h3>Portfolio</h3></Fade>
            </div>
            <div className="wrapper">
                <div className="left">
                    <Fade left>
                    <h3>We believe in the power of the 
                        individual to make great things.
                    </h3>
                    <p>We exist to help people with creative 
                        ideas stand out and succeed. We create 
                        a modern platform that enables millions 
                        to build a brand, share their stories, 
                        and transact with their customers in an 
                        impactful and beautiful online presence.
                    </p>
                    </Fade>
                </div>
                <div className="right">
                <div className="counts">
                    <Fade right>
                    <h3>HAPPY CLIENTS</h3>
                    <h1>
                        <CountUp 
                        end={147}
                        duration={5.00} 
                        />
                    </h1>
                    <h3>PROJECTS COMPLETED</h3>
                    <h1>
                        <CountUp 
                        end={170}
                        duration={5.00} 
                        />
                    </h1>
                    <h3>CUPS OF COFFEE</h3>
                    <h1>
                        <CountUp 
                        end={121}
                        separator=","
                        decimal=","
                        duration={5.00} 
                        />
                    </h1>
                    </Fade>
                    </div>
                </div>
            </div>
            <div className="featuredprojects">
                <Fade bottom>
                <img src={Image2} alt="" />
                </Fade>
            </div>
            <div className="technologies">
                <Fade bottom>
                <h3>TECHNOLOGIES</h3>
                <img src={Image3} alt="" />
                </Fade>
            </div>
            <div className="projects">
                <h3>OUR PROJECTS</h3>
                <ProjectCards/>
            </div>

            <Footer/>
        </div>
    )
}

export default Portfolio
