import React from 'react'
import './Project4.scss'
import Image1 from '../../Images/Projects/Virtual_hover_pen.png'
import Footer from '../../components/Footer/Footer'
import Fade from 'react-reveal/Fade';

function Project4() {

    
    return (
        <div className="penproject">
            <Fade bottom>
            <div className="section1">
                <h1>Virtual Hover Pen</h1>
                <img src={Image1} alt="" />
            </div></Fade>
            <div className="introduction">
                <Fade left>
                <h2>Introduction:</h2>
                <p>The project was to build a Virtual Pen with Virtual Eraser on a real 
                time VideoStream. It was made as a contribution to society so that anyone, 
                by using the code provided, could create a real virtual pen for the desktop. 
                The project is based on the development of 5 major tasks i.e. Creation of 
                binary mask, Pen Detection, Writing with pen, Clearing Screen Functionality, 
                and Adding an Eraser Functionality in the whole process. This whole application 
                will fundamentally be built on Contour Detection. One can consider Contours as 
                something like a closed curve having the same color or intensity.</p>
                </Fade>
            </div>

            <div className="challenges">
                <Fade left>
                <h2>Challenges:</h2>
                <p>To create a hover pen using which you could just wave a pen in the air to 
                draw something virtually and it draws on the screens of our computer. It 
                involves no use of any special hardware to achieve this, just a plain simple 
                computer vision project. In the project, we don't even need to use machine 
                learning or deep learning to achieve this.</p>
                </Fade>
            </div>

            <div className="solution">
                <Fade left>
                <h2>Solution:</h2>
                <p>The Project surely has a large future scope and many other functionalities 
                to add so here’s a breakdown of each step of our application:</p>
                <p><strong>Step 1:</strong> Find the color range of the target object and save it.</p>
                <p><strong>Step 2:</strong> Apply the correct morphological operations to reduce noise in the video.</p>
                <p><strong>Step 3:</strong> Detect and track the colored object with contour detection.</p>
                <p><strong>Step 4:</strong> Find the object’s x,y location coordinates to draw on the screen.</p>
                <p><strong>Step 5:</strong> Add a Wiper functionality to wipe off the whole screen.</p>
                <p><strong>Step 6:</strong> Add an Eraser Functionality to erase parts of the drawing.</p></Fade>
            </div>

            
            <div className="tech">
                <Fade left>
                <h2>Tech Stack:</h2>
                <ul>
                    <li>Python (version &#8805; 3.5)</li>
                    <li>OpenCV Library (version &#8805; 3)</li>
                    <li>Numpy Library</li>
                    <li>A working webcam for the desktop</li>
                </ul>
                </Fade>
            </div>
            <div className="footer">
                <Footer/>
            </div>
        </div>
    )
}

export default Project4
