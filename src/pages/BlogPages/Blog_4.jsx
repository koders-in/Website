import React from 'react'
import Fade from 'react-reveal/Fade';
import './Blog_4.scss'
import {HashRouter, Link} from "react-router-dom";
import Image2 from '../../Images/arrow_left.svg'
import Image1 from '../../Images/UI_1.jpg'
import Image3 from '../../Images/UI_2.jpg'
import Footer from '../../components/Footer/Footer';

function Blog4() {    

    return (
        <div className="blogUIUX">
            <div className="headimage">
                <Fade top>
                <img src={Image1} alt="" /></Fade>
            </div>
            <Fade bottom>
            <div className="backbutton">
                <HashRouter>
                <Link to="/blog">
                    <img src={Image2} alt="" />
                    <p>Back</p>
                </Link>
                </HashRouter>
            </div>
            <div className="heading">
                <h1><span>UI</span> vs <span>UX</span>: How do they impact your <span>business</span>?</h1>
            </div></Fade>
            <Fade bottom>
            <div className="section1">
                <div className="para1">
                    <p>User experience (UX) design is the process design teams 
                    use to create products that provide meaningful and relevant 
                    experiences to users. This involves the design of the entire 
                    process of acquiring and integrating the product, including 
                    aspects of branding, design, usability and function. A UX 
                    designer is concerned with the entire process of acquiring 
                    and integrating a product, including aspects of branding, 
                    design, usability and function. UI design stands for 
                    “user interface.” The user interface is the graphical layout 
                    of an application. It consists of the buttons users click on, 
                    the text they read, the images, sliders, text entry fields, and 
                    all the rest of the items the user interacts with. This 
                    includes screen layout, transitions, interface animations and 
                    every single micro-interaction. Any sort of visual element, 
                    interaction, or animation must all be designed. In short;</p>
                    <br />
                    <p><span>UX Design </span>– Creating the macro interactions of your product or website.</p>
                    <br />
                    <p><span>UI Design </span>– Detailing of those macro interactions.</p>
                </div>

                <div className="para2">
                    <p>Let’s say at some point in the design process it’s decided 
                    that extra buttons need to be added to a given screen. This 
                    will change how the buttons will need to be organized and could 
                    require changing their shape or size. The UX team would determine 
                    the best way to lay out the buttons while the UI teams adapt 
                    their designs to fit the new layout. Constant communication and 
                    collaboration between UI and UX designers help to assure that 
                    the final user interface looks as good as it can, while also 
                    operating efficiently and intuitively.</p>
                </div>

                <div className="para3">
                    <p>UX and UI are not the same thing, but even folks within the 
                    industry perpetuate confusion by using the terms interchangeably. 
                    Both are absolutely essential for the workings of a business and 
                    greatly impacts user loyalty. You need to know this about business 
                    before starting an online business.</p> 
                </div>
            </div>
            </Fade>

            <Fade bottom>
            <div className="image2">
                <img src={Image3} alt="" />
            </div></Fade>

            <Fade bottom>
            <div className="section2">
                <div className="para1">
                    <p>Let's dive into detail into how businesses are affected by UI and UX:</p>
                    <ol>
                        <li>
                            <p><span>Improves Usability -</span> Whenever a user needs 
                            assistance or information in case of a fix, he should be able 
                            to get it without any delay. Assistance should be in a way that 
                            the user can follow stepwise to resolve the situation immediately. 
                            UI/UX is the key runner for this. They even help to undo user 
                            mistakes which is prominent to your design. Users are bound to
                            make mistakes and create errors. Your digital product should 
                            offer a choice to undo them. This is again an important part 
                            of UI/UX Design Trends.</p>
                        </li>
                        
                        <li>
                            <p><span>Visual Appearance - </span> They create simple to use functions, 
                            which are understandable with a minimum number of clicks. UI and 
                            UX facilitate clear communication with the users. Clarity is integral 
                            to your digital product design. It could be a mobile app or a website. 
                            Clients also visit applications or websites to buy products or 
                            services. If you are a business you need to make this process as 
                            smooth and visually appealing as possible. UI and UX both contribute 
                            in creating the best-looking pages which offer seamless experiences.</p>
                        </li>

                        <li>
                            <p><span>Business Expansion - </span> When a business online presence is 
                            appreciated or not, a lot of the credit of these reactions goes to UI/UX. 
                            It is a deterrent for the success of a business’s web presence, and the 
                            business thereof. Consumers seek amazing web experiences while making 
                            purchases. If you have new offers or products, the clients will appreciate 
                            carefully placed popups to help them make further add ons to the cart! 
                            Just don’t overdo them.</p>
                        </li>

                        <li>
                            <p><span>User Feedback - </span> The user feedback you receive during 
                            the quality assurance stage allows you to evaluate how real users 
                            interact with your product. Even if you think you have built a great 
                            product, it is ultimately the users who will determine your success. 
                            Do not wait until after product launch to start gathering this 
                            invaluable feedback. User feedback can help indicate if the 
                            design result is positive or negative. It is also important to 
                            collect feedback throughout the life of the product. After you 
                            have launched your product or released the new features, continue 
                            to collect feedback from users. This is the most accurate and personal 
                            method to measure product performance.</p>
                        </li>
                    </ol>
                </div>

                <p>The ultimate objective of UI/UX is to present an optimized 
                design and experience to create a lasting impression. Businesses 
                get a definite boost for future growth if the UI & UX aspects 
                are set right through the start as impressive, user-friendly 
                digital products are created for the representation. Thus, the business 
                game changes for the better!</p>

                <p className="end">
                We at <span>Koders</span> are waiting to hear from you to address your web presence needs 
                through UI/UX and help you communicate your brand to your customers. 
                Let us connect.</p>
            </div>
            </Fade>

            <div className="footer">
                <Footer/>
            </div>
        </div>
    )
}

export default Blog4
