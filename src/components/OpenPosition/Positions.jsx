import React from 'react'
import './Positions.scss'
import Fade from 'react-reveal/Fade';

function Positions() {
    return (
        <div className="positions">
            <Fade bottom>
            <h1>OPEN POSITIONS</h1></Fade>
            <Fade left>
            <div className="developers">
                <h3>Developers</h3>
                <h4>Roles & responsibilities:</h4>
                <ol>
                    <li>The applicant should have good analytical ability to tackle problems.</li>
                    <li>The applicant should be able to step ‘out-of’ comfort zone and adapt to the changing environment.</li>
                    <li>The applicant should have strong coding skills, the most crucial of which is debugging.</li>
                    <li>To establish needs and solutions, develop flowcharts, layouts, and documentation.</li>
                    <li>Produce specifications and determine operational feasibility.</li>
                    <li>Document and maintain software functionality.</li>
                </ol>
                
                <h4>Openings:</h4>
                <ol>
                    <li>Linux Server Admin - 02</li>
                    <li>Python Developer - 02</li>
                    <li>React Native Developer - 02</li>
                    <li>React Tester - 01</li>
                    <li>React Debugger - 01</li>
                    <li>Node Developer - 05</li>
                    <li>React Developer - 10</li>
                    <li>Quality and Assurance - 02</li>
                    <li>Full Stack Developer (MERN) - 05</li>
                </ol>

                <p>Join our <a href="https://dsc.gg/koders" target="_blank" rel="noreferrer">Kommunity</a> and stay tuned for further opportunities</p>
            </div>
            </Fade>
            <Fade left>
            <div className="social">
                <h3>Social Media Marketing</h3>
                <h4>Roles & responsibilities:</h4>
                <ol>
                    <li>Work closely with the team to develop social media campaigns that help to achieve corporate marketing goals.</li>
                    <li>Monitor the company's social media accounts and offer constructive interaction with users.</li>
                    <li>Researching current benchmark trends and audience preferences.</li>
                    <li>Work with the design, marketing, and content team to build a better social media image.</li>
                    <li>Prepare a content plan for the month.</li>
                </ol>
                
                <h4>Openings - 05</h4>

                <p>Join our <a href="https://dsc.gg/koders" target="_blank" rel="noreferrer">Kommunity</a> and stay tuned for further opportunities</p>
            </div>
            </Fade>
            <Fade left>
            <div className="content">
                <h3>Technical Content Writing</h3>
                <h4>Roles & responsibilities:</h4>
                <ol>
                    <li>Work with internal teams to obtain an in-depth understanding of the product and the documentation.</li>
                    <li>Produce high-quality documentation that meets applicable standards and is appropriate for its intended audience.</li>
                    <li>Write easy-to-understand user interface text, online help and developer guides.</li>
                    <li>Create short and crisp company specific content</li>
                    <li>Analyze existing and potential content, focusing on reuse and single-sourcing opportunities.</li>
                    <li>Create and maintain the information architecture.</li>
                </ol>
                
                <h4>Openings - 02</h4>

                <p>Join our <a href="https://dsc.gg/koders" target="_blank" rel="noreferrer">Kommunity</a> and stay tuned for further opportunities</p>
            </div>
            </Fade>
        </div>
    )
}

export default Positions
