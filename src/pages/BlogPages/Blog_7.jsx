import React from 'react'
import Fade from 'react-reveal/Fade';
import './Blog_7.scss'
import {HashRouter, Link} from "react-router-dom";
import Image2 from '../../Images/arrow_left.svg'
import Image1 from '../../Images/QA_1.png'
import Image3 from '../../Images/QA_2.jpg'
import Footer from '../../components/Footer/Footer';

function Blog7() {    

    return (
        <div className="blogSQA">
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
                <h1>4 Reasons why <span>Software Quality Assurance</span> is Important?</h1>
            </div></Fade>
            <Fade bottom>
            <div className="section1">
                <div className="para1">
                    <p>Quality assurance or QA is a government mandated step in manufacturing. 
                    This is used to ensure that the product meets the technical requirements 
                    and the set industry standards. This is a highly underestimated topic. 
                    We need quality assurance for all products ranging from food to 
                    pharmaceuticals to electrical appliances, to ensure all the products 
                    we use are up to a certain standard.</p>
                    <br />
                    <p>In software, quality assurance means executing systems with the intent 
                    of finding bugs and defects and fixing them. This is a very important step 
                    after the software is created. Bugs should be taken seriously, because minor 
                    errors may suggest bigger problems underneath. Sloppy errors may cost you 
                    the trust and respect of your customers. You may even get slammed on 
                    social media. You might have heard about Therac-25. It was a machine meant 
                    to deliver radiation therapy to  cancer patients. However, race conditions 
                    in the codebase and lack of hardware safety features caused radiation overdoses 
                    which led to 3 deaths.You know what could have saved those lives? Testing and 
                    quality assurance.</p>
                </div>
                <div className="para2">
                    <p>Not only is it a basic step but it does have several benefits to it as well, 
                    they can be compiled into four categories;</p>
                    <ol>
                        <li>
                            <p><span>Saves Money and Time - </span> The later QAs find a bug, 
                            the more expensive it is to fix it. Fixing one bug may cause another, 
                            and another. Eventually, you will have to rewrite the entire system 
                            because of one flaw. Rule of thumb: prevention is better than cure.</p>
                        </li>
                        
                        <li>
                            <p><span>Stable and Competitive Product - </span> Unless tested, the software 
                            product may just never go live. The quality comprises many aspects, many of 
                            them are QAs job. If users launch your app and have a bad first experience 
                            with it because of some bug, they are very unlikely to try it ever again. 
                            That’s because first impressions are hard to change. Don’t make them think 
                            you didn’t care.</p>
                        </li>

                        <li>
                            <p><span>Safe - </span> The Therac-25 scenario would have been completely 
                            different if only the proper quality checks had been conducted. There is 
                            no doubt that if the products are challenged to stick up to standards, 
                            we as consumers would receive safer products. QA engineers constantly remind 
                            the team that they’re working to please the users and meet the specified 
                            requirements. It lets everybody be sure that the end product will be the 
                            same as the one planned.</p>
                        </li>

                        <li>
                            <p><span>Better User Experience - </span> Quality problems impact the User 
                            experience. Bugs and crashes infuriate users and impede their task 
                            completion — sometimes to the extent of demanding time-consuming 
                            workarounds. But these implementation errors also reduce learnability, 
                            because users often develop elaborate superstitions around the problem. 
                            When users’ mental models go off track, their ability to use the system’s 
                            bug-free parts is correspondingly impaired.</p>
                        </li>
                    </ol>
                </div>

                <div className="para3">
                    <p>No matter how simple a product may seem, there’s a ton of work behind the 
                    quality software. Good design is actually a lot harder to notice than poor design. 
                    In most cases, QA engineers make it possible for people to enjoy good products by 
                    checking if everything works well.</p>
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
                    <p>Quality Assurance includes lots of activities, 
                    from testing to reviewing the results. Most software products 
                    need QA engineers to; (1) set a mature development process, 
                    (2) ensure the quality of the released software, (3) prevent 
                    errors in the system before users find out about them.</p> 
                    <br />
                    <p>QAs use various techniques to check if a system meets all specified 
                    requirements and as it ‘should’.</p>
                    <br />
                    <p>It’s not easy to test a system without special skills, even an experienced 
                    developer is unlikely to succeed in it. That’s why the best teams have QAs and 
                    developers working together — to combine their skills in pursuit of quality 
                    software. The impeccable quality of your website in every aspect of its work is a pledge 
                    for your business reputation, more achieved conversions, better profits, and more.</p>
                    <br />
                    <p>The quality assurance team at Koders is ready to take care of making your website 
                    completely free of bugs. Contact us and we'll do it in accordance with the best 
                    quality assurance practices.</p>            
                </div>
            </div>
            </Fade>

            <div className="footer">
                <Footer/>
            </div>
        </div>
    )
}

export default Blog7
