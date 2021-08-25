import React from 'react'
import Fade from 'react-reveal/Fade';
import './Blog_3.scss'
import {HashRouter, Link} from "react-router-dom";
import Image2 from '../../Images/arrow_left.svg'
import Image1 from '../../Images/AI_1.jpg'
import Image3 from '../../Images/AI_2.jpg'
import Footer from '../../components/Footer/Footer';

function Blog3() {    

    return (
        <div className="blogAutomation">
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
                <h1>Automation: The <span>Present</span> and <span>Future</span></h1>
            </div></Fade>
            <Fade bottom>
            <div className="section1">
                <div className="para1">
                    <p>
                    Automation is the technique of creating a tool or an apparatus 
                    which automates tasks thus minimizing human involvement. Tasks 
                    that are put on automation benefit a lot of industries like 
                    manufacturing, transportation, defense. Performing repetitive 
                    tasks is just the beginning of automation, machines are being 
                    programmed to be smarter and complete more work than the average 
                    human being can handle.</p><br></br>
                    <p>Automation or artificial intelligence at its basics can help 
                    remove errors, minimize the bias and create higher quantity 
                    products and/or services. It has evolved to help humans with 
                    the most basic of tasks. Most restaurants today use in-built 
                    automation systems to take the customer’s orders. This creates 
                    a direct communication channel between the workers and the 
                    workings of the employees can be monitored better. The orders 
                    will be much more organised and efficient. Automation systems 
                    have undoubtedly made our professional lives easier more than 
                    we let on. It is a technology which is here to stay with people 
                    for the present and future. In technology, usage of automation 
                    is increasing in software, hardware and machine layering.</p>
                    <br />
                    <p><i>“The first rule of any technology used in a business is 
                    that automation applied to an efficient operation will magnify 
                    the efficiency. The second is that automation applied to an 
                    inefficient operation will magnify the inefficiency.” </i> 
                    <span>- Bill Gates</span></p>
                </div>

                <div className="para2">
                    <p>Manual testing requires a human carefully screening through 
                    the screens and noting observations. This is a highly tedious 
                    process that involves high maintenance. Tests are repeated and 
                    various cycles of trials are carried out. Automation eliminates 
                    this process. It carries out fast calculations and helps the 
                    user gain a detailed perspective on the work that has to be 
                    completed. The tasks which lack humanness, so to say, which 
                    feel difficult to quantify are the easiest to break into pieces 
                    and automate.</p><br />
                    <p>Automation comes with a lot of benefits like higher efficiency 
                    due to streamlining of the process and improved worker safety. 
                    The tasks are repetitive, so the quality of the product is 
                    consistent and high. Automation is also faster and cheaper than 
                    manual labour. It eliminates the need of hiring many skilled 
                    workers. Automation is very easy to integrate and has a smaller 
                    environment footprint. They are also easy to maintain with simple 
                    quality checks.</p>
                </div>

                <div className="para3">
                    <p>Some applications of artificial intelligence are Virtual 
                    assistants and automobile manufacturing. In fact, robots have 
                    been able to do difficult tasks which require large mobilization 
                    with ease and now they even do intricate tasks which demand 
                    heavy precision. In healthcare, artificial intelligence has 
                    been helping coronavirus patients avoid contact with the 
                    doctors and nurses by conducting tests. Businesses use 
                    automation to help them with customer support. AI can help spot 
                    frauds and even increase sales.</p> 
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
                    <p>There are different types of Automation:</p>
                    <ol>
                        <li>
                            <p><span>Fixed Automation -</span> This is an 
                            automated production facility in which the process 
                            operations focus on equipment configuration. It is 
                            also called “hard automation”. The programming 
                            commands are composed in cams, gears, wiring and 
                            other hardware. Fixed automation types are 
                            exemplified by machining transfer lines, web handling 
                            and converting systems, material handling conveyor 
                            systems.</p>
                        </li>
                        
                        <li>
                            <p><span>Programmable Automation - </span> This is an 
                            automated production facility in which the process operations 
                            focus on equipment configuration. It is also called “hard 
                            automation”. The programming commands are composed in cams, 
                            gears, wiring and other hardware. Fixed automation types are 
                            exemplified by machining transfer lines, web handling and 
                            converting systems, material handling conveyor systems.</p>
                        </li>

                        <li>
                            <p><span>Flexible Automation - </span> This category has a 
                            capacity of producing different products in a small time frame. 
                            This lets the manufacturing of different parts with converging 
                            life cycles.It also has the ability to produce a part and its 
                            many variations.</p>
                        </li>
                    </ol>
                </div>

                <p>On the other side of the coin, automation or artificial intelligence 
                has a high initial cost. It does displace some workers. It 
                is also impossible to automate all the tasks, so trained 
                personnels are hired to monitor the tasks. But when comparing 
                the pros and cons, you will find that automation has more wins. 
                After the development of the application, Selenium is used for 
                web testing in automation. By understanding basics, we gain 
                deeper insight into the subject oriented languages like Java. 
                A little understanding of this programming language is beneficial 
                to the subject, here is a guide.</p>

                <p>Selenium is widely renowned as it requires fewer resources when 
                compared to other tools. Test scripts can interact with the browser 
                directly and you don’t need to learn programming logics to run 
                the script. Selenium is integrated with testing frameworks for 
                running tests and generating the reports. The android avatar of 
                this is an app called tasker. It is like selenium but it does 
                much more than selenium. It is for full phone automation whereas 
                selenium is only used for web automation and testing.</p>

                <p className="end">
                Despite the most common image in your mind of automated robots 
                taking jobs, automation or AI helps improve our productivity and 
                free us from menial tasks. This boosts up the quality of the 
                work and the morale of the workers. Automation helps people 
                better their own services and projects more quickly. You get 
                better and more consistent results when you include automation 
                    to your executive business strategy.</p>
            </div>
            </Fade>

            <div className="footer">
                <Footer/>
            </div>
        </div>
    )
}

export default Blog3
