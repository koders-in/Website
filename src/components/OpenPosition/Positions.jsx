import React from 'react'
import './Positions.scss'
import Fade from 'react-reveal/Fade';
import Image1 from '../../Images/positions_1.png'
import Image2 from '../../Images/positions_2.png'
import Image3 from '../../Images/positions_3.png'
import Image4 from '../../Images/positions_4.png'

function Positions() {
    return (
        <div className="positions">
            <Fade bottom>
            <h1>OPEN POSITIONS</h1></Fade>
            <div className="developers">
                <Fade left>
                <h3>Developers</h3>
                <h4>Levels of Working:</h4></Fade>
                <Fade bottom>
                <img src={Image1} alt="" /></Fade>
                <div className="spositions">
                    <div className="wrapper">
                        <Fade left>
                        <div className="left">
                            <h5>Intern Level 1 Dev:</h5>
                            <ol>
                                <li>Needs to have logical reasoning</li>
                                <li>Strong coding skill is important</li>
                                <li>Knowledge about debugging is necessary</li>
                                <li>Develop flowcharts, layout and documentation</li>
                                <li>Maintain software functionality</li>
                            </ol>

                            <h5>Intern Level 2 Dev:</h5>
                            <ol>
                                <li>Perform the day-to-day duties</li>
                                <li>Collaborate with and take responsibility of the teams</li>
                                <li>Mentor inten lvl1 devs</li>
                                <li>Respond to requests made by the developers.</li>
                            </ol>

                            <h5>Junior Dev:</h5>
                            <ol>
                                <li>Must determine operational functionality</li>
                                <li>Work on fixing bugs</li>
                                <li>Watch over technical performance</li>
                                <li>Addressing and discussing issues and proposed solutions with superiors.</li>
                            </ol>
                        </div>
                        </Fade>

                        <Fade right>
                        <div className="right">
                            <h5>Quality and Assurance Specialist:</h5>
                            <ol>
                                <li>Plan and execute quality assurance policies and procedures.</li>
                                <li>Performing routine inspections and quality tests.</li>
                                <li>Identifying and resolving workflow and production issues.</li>
                                <li>Documenting quality assurance activities and creating audit reports.</li>
                            </ol>

                            <h5>Senior Dev:</h5>
                                <ol>
                                    <li>Execute tasks in SDLC.</li>
                                    <li>Review and debug code.</li>
                                    <li>Perform validation and verification testing.</li>
                                    <li>Fixing and improving products.</li>
                                </ol>

                            <h5>Project Manager:</h5>
                                <ol>
                                    <li>Organizing team project for work.</li>
                                    <li>Managing reports and other necessary documents.</li>
                                    <li>Time management.</li>
                                    <li>Planning,executing, monitoring and delivering projects on time.</li>
                                </ol>
                        </div>
                        </Fade>
                    </div>
                </div>

                <h4>Roles & Responsibilities:</h4>
                    <div className="roles">
                        <ol>
                            <li>The applicant should know how to solve problems.</li>
                            <li>The applicant should be able to adapt, accordingly.</li>
                            <li>The applicant must have strong coding skills, debugging being the most important one.</li>
                            <li>To establish needs and solutions, develop flowcharts, layouts, and documentation.</li>
                            <li>Produce specifications and determine operational feasibility.</li>
                            <li>Document and maintain software functionality.</li>
                        </ol>
                    </div>
                
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
            </div>

            <div className="social">
            <Fade left>
                <h3>Marketing</h3>
                <h4>Levels of Working:</h4></Fade>
                <Fade bottom>
                <img src={Image2} alt="" /></Fade>
                <div className="spositions">
                    <div className="wrapper">
                        <Fade left>
                        <div className="left">
                            <h5>Marketing Intern Level 1:</h5>
                            <ol>
                                <li>Develop social media campaigns.</li>
                                <li>Up-to-date with the current trends and audience preferences.</li>
                                <li>Prepare content plan for the month.</li>
                                <li>Work with other teams to better our social media handle.</li>
                            </ol>

                            <h5>Marketing Intern Level 2:</h5>
                            <ol>
                                <li>Managing social media and lay-out plans.</li>
                                <li>Create recruitment database.</li>
                                <li>Record feedback responses.</li>
                                <li>Help grow our market and approach potential clients.</li>
                                <li>Keeping the company engaged.</li>
                            </ol>

                            <h5>Marketing Executive/Coordinator:</h5>
                            <ol>
                                <li>Coordinating with the interns to better the content.</li>
                                <li>Collab and monitor other team’s work for better results.</li>
                                <li>Help attain corporate goals.</li>
                            </ol>
                        </div>
                        </Fade>

                        <Fade right>
                        <div className="right">
                            <h5>Marketing Manager:</h5>
                            <ol>
                                <li>Establish and maintain marketing strategies.</li>
                                <li>Evaluate market conditions, data on customers and competitors in order to implement marketing changes.</li>
                                <li>Identifying and resolving workflow and production issues.</li>
                                <li>Plan, direct and coordinate marketing policies.</li>
                            </ol>

                            <h5>Marketing VP:</h5>
                                <ol>
                                    <li>Promote the company’s products and services.</li>
                                    <li>Work with the heads of other departments and aim to out-do our competition.</li>
                                    <li>Takes interviews, hiring and training staff and act as a spokesperson for the company.</li>
                                </ol>

                            <h5>Chief Marketing Officer (CMO):</h5>
                                <ol>
                                    <li>Responsible and take charge for all areas of marketing.</li>
                                    <li>Oversee planning, development and execution of all initiatives.</li>
                                    <li>Generate revenue through successful marketing.</li>
                                </ol>
                        </div>
                        </Fade>
                    </div>
                </div>

                <Fade left>
                <h4>Roles & Responsibilities:</h4>
                    <div className="roles">
                        <ol>
                            <li>Work closely with the team to develop social media campaigns that help to achieve corporate marketing goals.</li>
                            <li>Monitor the company's social media accounts and offer constructive interaction with users.</li>
                            <li>Research about the current trends and audience preferences.</li>
                            <li>Work with the design, marketing, and content team to better our social media image.</li>
                            <li>Prepare a content plan for the month.</li>
                        </ol>
                    </div>
                
                <h4>Openings: 02</h4>
                </Fade>
            </div>
           
         
            <div className="content">
            <Fade left>
                <h3>Technical Content Writing</h3>
                <h4>Levels of Working:</h4></Fade>
                <Fade bottom>
                <img src={Image3} alt="" /></Fade>
                <div className="spositions">
                    <div className="wrapper">
                        <Fade left>
                        <div className="left">
                            <h5>Intern Kopywriter:</h5>
                            <ol>
                                <li>Creating short and crisp company specific content.</li>
                                <li>Create and maintain information architecture.</li>
                                <li>High quality documentation for social media.</li>
                                <li>Stay up-to-date with developments and generate new ideas to draw the audience's attention.</li>
                            </ol>

                            <h5>Junior Kopywriter:</h5>
                            <ol>
                                <li>Manage content distribution to online channels and social media platforms to increase web traffic.</li>
                                <li>Proofread contents and then make the necessary changes.</li>
                                <li>Develop an editorial calendar and ensure the content team is on board.</li>
                                <li>Help grow our market and approach potential clients.</li>
                                <li>Develop and  collaborate with marketing and design teams to plan and develop site content, style and layout.</li>
                            </ol>
                        </div>
                        </Fade>

                        <Fade right>
                        <div className="right">
                            <h5>Senior Kopywriter:</h5>
                            <ol>
                                <li>Content strategy carefully curated for short term and long term marketing targets.</li>
                                <li>Create, edit, proofread and improve writers’ posts and post engaging contents.</li>
                                <li>Liaise with content writers to ensure brand consistency & Optimize content according to SEO best practices.</li>
                                <li>Ensure compliance with law (e.g. copyright and data protection).</li>
                            </ol>

                            <h5>Chief Content Officer (CCO):</h5>
                            <ol>
                                <li>Ensuring the content is consistent in terms of style, quality and tone of voice.</li>
                                <li>Mapping out a content strategy that supports and extends marketing initiatives.</li>
                                <li>Hire and supervise content/story leaders in all  content verticals.</li>
                                <li>Work closely with the company's Chief Design Officer on all creative and branding initiatives to ensure a consistent message across channels.</li>
                            </ol>
                        </div>
                        </Fade>
                    </div>
                </div>

                <h4>Roles & Responsibilities:</h4>
                    <div className="roles">
                        <ol>
                            <li>Work with internal teams to obtain an in-depth understanding of the product and the documentation.</li>
                            <li>Produce high-quality documentation that meets applicable standards and is appropriate for its intended audience.</li>
                            <li>Write easy-to-understand user interface text, online help and developer guides.</li>
                            <li>Create short and crisp company specific content.</li>
                            <li>Analyze existing and potential content, focusing on reuse and single-sourcing opportunities.</li>
                            <li>Create and maintain the information architecture.</li>
                        </ol>
                    </div>
                
                <h4>Openings: 02</h4>
            </div>

            <div className="design">
            <Fade left>
                <h3>Designing</h3>
                <h4>Levels of Working:</h4></Fade>
                <Fade bottom>
                <img src={Image4} alt="" /></Fade>
                <div className="spositions">
                    <div className="wrapper">
                        <Fade left>
                        <div className="left">
                            <h5>Intern Graphic Designer:</h5>
                            <ol>
                                <li>Following trends for better trends.</li>
                                <li>Think out-of-the box for better idea.</li>
                                <li>Fluent knowledge of design tools and software.</li>
                                <li>Develop illustrations, posters and logos.</li>
                            </ol>

                            <h5>Junior Graphic Designer:</h5>
                            <ol>
                                <li>Understand the project and accordingly come up with ideas.</li>
                                <li>Team up with other departments for better work.</li>
                                <li>Take feedback for improvement.</li>
                            </ol>

                            <h5>Senior Graphic Designer:</h5>
                            <ol>
                                <li>Reviewing the task done by Junior Graphic Designer.</li>
                                <li>Come up with fresh concepts.</li>
                                <li>Ensure brand consistency for all projects.</li>
                                <li>Taking care of the design from start to end result</li>
                            </ol>
                        </div>
                        </Fade>

                        <Fade right>
                        <div className="right">
                            <h5>Design Manager:</h5>
                            <ol>
                                <li>Keeping the team motivated.</li>
                                <li>Taking care of the client’s need regarding the design.</li>
                                <li>Keeping a record of the whole design process.</li>
                                <li>Making sure the designs are easy to understand and of high quality.</li>
                            </ol>

                            <h5>Creative Executive:</h5>
                            <ol>
                                <li>Ensure the brand consistency and positive brand image.</li>
                                <li>Guide and resolve issues faced by other graphic designers.</li>
                                <li>Serve as a liaison between the other teams.</li>
                                <li>Document the progress of the design.</li>
                            </ol>

                            <h5>Chief Creative Officer (CCO):</h5>
                            <ol>
                                <li>Head the team and choose ideas that are of best-interest for the company.</li>
                                <li>Watching over the progress of the entire team from time-to-time.</li>
                                <li>Motivating and encouraging design teams.</li>
                                <li>Developing and managing all aspects of design and creative output.</li>
                            </ol>
                        </div>
                        </Fade>
                    </div>
                </div>

                <h4>Roles & Responsibilities:</h4>
                    <div className="roles">
                        <ol>
                            <li>Staying up-to-date with industry trends for better reach.</li>
                            <li>Encouraging others to share their ideas and nurturing creativity.</li>
                            <li>A full and fluent knowledge of current design tools and software.</li>
                            <li>The ability to think creatively and deliver impressive concepts.</li>
                            <li>Develop illustrations, logos and other designs using software or by hand.</li>
                            <li>Work with copywriters to produce the final design.</li>
                        </ol>
                    </div>
                
                <h4>Openings: 01</h4>
            </div>

            <div className="kommunity">
                <p>Join our <a href="https://dsc.gg/koders">Kommunity</a> and stay tuned for further opportunities.</p>
            </div>
        </div>
    )
}

export default Positions
