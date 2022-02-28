import React from 'react'
import './Career.scss'
import Fade from 'react-reveal/Fade';
import Image1 from '../../Images/career.png'
import Image2 from '../../Images/Career.jpg'
import Positions from '../../components/OpenPosition/Positions';
import Footer from '../../components/Footer/Footer';

function Career() {
    return (
        <div className="career">
            <div className="heading">
                <Fade top>
                <img src={Image1} alt="" /></Fade>
                <Fade left>
                <h3>KAREER AT KODERS</h3></Fade>
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
                <div className="pic">
                <img src= {Image2} alt="" />    
                </div></Fade>
            </div>

            <div className="pab">
                <div className="left">
                    <div className="point1">
                        <Fade bottom>
                        <h4>All's well that ends well</h4>
                        <p>We believe in “All work and no play makes Jack a dull boy” 
                        and we religiously celebrate our weekend with a fun-filled-friday 
                        night. As serious as we are regarding our work, we are equally 
                        serious about our weekend and hence we end it on high note on 
                        Friday where we discuss our work with the team and then end up 
                        skribbl-ing.</p></Fade>
                    </div>

                    <div className="point2">
                    <Fade bottom>
                        <h4>You are precious!</h4>
                        <p>Government of the Koders, by the koders, for the koders. 
                        Working at koders is like working at any other company but 
                        minus the pressure and plus the calm environment. As much as we 
                        value our clients, we value our employees too. Health is important, 
                        be it mental or dental. Hence the company allows its employees 
                        to take some time-off.</p></Fade>
                    </div>

                    <div className="point3">
                        <Fade bottom>
                        <h4>A place with 0 boss issues</h4>
                        <p>The word ‘boss’ makes us imagine a red-faced person who shouts 
                        and doesn’t talk, who is more of all the bullies you faced combined 
                        and never talks about anything but work. Don’t worry child, Koders is 
                        where you meet a boss that not only skribbles with you but also pushes 
                        you to do better.</p></Fade>
                    </div>
                </div>

                <div className="right">
                    <div className="point1">
                        <Fade bottom>
                        <h4>We have got your back and bank</h4>
                        <p>With colleagues like family and an environment so relaxed, 
                        working at Koders just keeps on getting better. Getting paid 
                        while working from home is no less than a boon, we tell you! 
                        And when the pay is performance based, that keeps us 
                        motivated.</p></Fade>
                    </div>

                    <div className="point2">
                        <Fade bottom>
                        <h4>Live it up</h4>
                        <p>Presenting to you, a bunch of young, dynamic koders who 
                        dedicate their time and energy into work. They are youthful, 
                        funny, hard-working and so many more adjectives from the grammar 
                        book.</p></Fade>
                    </div>

                    <div className="point3">
                        <Fade bottom>
                        <h4>Working is fun-tastic</h4>
                        <p>We provide flexible working hours to our employees because 
                        we know life happens while we are at work and with flexible 
                        work hours, we make sure you don't miss out on life.</p></Fade>
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
