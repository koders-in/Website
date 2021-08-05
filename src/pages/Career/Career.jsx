import React from 'react'
import './Career.scss'
import Fade from 'react-reveal/Fade';
import Image1 from '../../Images/career.png'
import Positions from '../../components/OpenPosition/Positions';
import Footer from '../../components/Footer/Footer';

function Career() {
    return (
        <div className="career">
            <div className="heading">
                <Fade top>
                <img src={Image1} alt="" /></Fade>
                <Fade left>
                <h3>KAREER <br></br>AT KODERS</h3></Fade>
            </div>
            <div className="section1">
                <Fade left>
                <h1>WORK WITH KODERS TO KREATE THE BEST!</h1>
                <h3>A real visualisation of Dunder-Mifflin with the 
                Gen Z quoting- ‘work to live, not live to work’. 
                Gen Z and Millenials vibe with each other like ‘peanut butter 
                and jelly’ on a sandwich to kreate perfection. We’re looking for 
                people who aren’t afraid to show their geeky nerdy side and 
                passionate about the things they are Pro at. If you think you 
                are one, then Koders may be the place for you to grow and 
                showcase your skills.</h3></Fade> 
            </div>

            <div className="section2">
                <Fade left>
                <h1>PERKS & BENEFITS</h1></Fade>
                <Fade bottom>
                <div className="pic"></div></Fade>
            </div>

            <div className="pab">
                <div className="left">
                    <div className="point1">
                        <Fade bottom>
                        <h4>Relax, we’ve got you covered.</h4>
                        <p>We take care of our employees in more ways than one. 
                        Our competitive benefits package includes premium medical, 
                        dental, and vision coverage for employees and their dependent 
                        children. We also offer up to 20 weeks of paid family leave, 
                        fertility and adoption benefits, daily gourmet lunches and 
                        snacks, and more.
                        </p></Fade>
                    </div>

                    <div className="point2">
                    <Fade bottom>
                        <h4>Work-life balance.</h4>
                        <p>We believe that quality time outside the office is vital 
                        to our employees’ satisfaction at work. That’s why our flexible 
                        PTO plan encourages team members to take time off so they can come 
                        back refreshed. Employees also get two free lifetime Squarespace 
                        sites to pursue their creative passions and side hustles
                        </p></Fade>
                    </div>

                    <div className="point3">
                        <Fade bottom>
                        <h4>Stay informed.</h4>
                        <p>We’re dedicated to ensuring all employees have the information 
                        they need to do their jobs well. Our monthly All Hands meetings, 
                        email newsletters, and CEO Office Hours are just a few of the programs 
                        we run to bring our three offices together and share key aspects of the 
                        business across the entire organization.
                        </p></Fade>
                    </div>
                </div>

                <div className="right">
                    <div className="point1">
                        <Fade bottom>
                        <h4>We value our people.</h4>
                        <p>We’re serious about sharing in Squarespace’s successes. 
                        All employees receive an equity package in the company as 
                        part of their total compensation, and we match up to 4% of a 
                        team member’s annual salary in 401(K) (US) or Pension (Ireland) 
                        contributions.</p></Fade>
                    </div>

                    <div className="point2">
                        <Fade bottom>
                        <h4>We give back.</h4>
                        <p>We anonymously match any donation our employees make (up to $/€ 600) 
                        so they can support the organizations they care about most—times two. 
                        We also arrange programming for team members to volunteer at specialized 
                        customer workshops and community activities.</p></Fade>
                    </div>

                    <div className="point3">
                        <Fade bottom>
                        <h4>Live it up.</h4>
                        <p>One benefit of having amazing coworkers is enjoying each other’s company, 
                        and we make up some good excuses to have fun together. Squarespace’s weekly 
                        catered happy hours are a great way to connect with coworkers and unwind after 
                        the week. Throughout the year, we host programming ranging from crafting to 
                        trivia and customer markets. During the summer, we throw family-friendly events 
                        and activities, and our holiday parties have been known to get fancy.</p></Fade>
                    </div>
                </div>
            </div>

            <div className="openings">
                <Positions/>
            </div>

            <div className="footer">
                <Footer/>
            </div>
        </div>
    )
}

export default Career
