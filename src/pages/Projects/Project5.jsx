import React from 'react'
import './Project5.scss'
import Image1 from '../../Images/Projects/Cloud_Kitchen/Home.jpg'
import Footer from '../../components/Footer/Footer'
import Fade from 'react-reveal/Fade';
import Carousal2 from '../../components/Project_Corousal/Carousal_2'

function Project5() {

    
    return (
        <div className="kitchenproject">
            <Fade bottom>
            <div className="section1">
                <h1>Cloud Kitchen</h1>
                <img src={Image1} alt="" />
            </div></Fade>
            <div className="introduction">
                <Fade left>
                <h2>Introduction:</h2>
                <p>A little food has never hurt anyone nor our Cloud Kitchen, which is a 
                React application. It helps the different restaurants and food outlets to 
                maximize their business as it provides food-delivery, customization of the 
                dish and adding requests or notes. It is more of your one-stop for all 
                food-items, hence increasing the efficiency of work and it is made keeping 
                in mind the customer’s needs.</p>
                </Fade>
            </div>

            <div className="challenges">
                <Fade left>
                <h2>Challenges:</h2>
                <p>There is no project without a little challenge. Our service is to the client 
                and hence client satisfaction is a priority. Initially the client needed a slider 
                cart which we had to fit in. Every team faced their own set of challenges and so 
                did our designing team! Designing the application was a bit of a bummer.</p>
                </Fade>
            </div>

            <div className="solution">
                <Fade left>
                <h2>Solution:</h2>
                <p>Thanks to our team of champion UI/UX designers, we pulled off a good-looking 
                website, rather a beautiful one! We had to go through a few iterations before coming 
                up with the design we currently have. The team worked well both for the design and the 
                frontend work.</p></Fade>
            </div>

            
            <div className="tech">
                <Fade left>
                <h2>Tech Stack:</h2>
                <ul>
                    <li>React</li>
                </ul>
                </Fade>
            </div>

            <div className="screenshots">
                <Fade left>
                <h2>Snapshots of the Application:</h2>
                </Fade>
                <Fade bottom>
                <div className="corousal">
                    <Carousal2/>
                </div>
                </Fade>
            </div>

            <div className="footer">
                <Footer/>
            </div>
        </div>
    )
}

export default Project5
