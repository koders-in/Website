import React from 'react'
import Fade from 'react-reveal/Fade';
import './Blog.scss'
import Image1 from '../../Images/Blog.png'
import BlogTiles from '../../components/BlogTiles/BlogTiles';
import Footer from '../../components/Footer/Footer';

function Blog() {
    return (
        <div className="blog">
            <div className="heading">
                <Fade top>
                <img src={Image1} alt="" /></Fade>
                <Fade left>
                <h3>BLOGS</h3></Fade>
                <Fade left>
                <p>"Optimism is an occupational hazard of programming: feedback is the treatment."
                <br></br> -Kent Beck</p></Fade>
            </div>
            <div className="blogsection">
                <Fade left>
                <h4>NEW BLOGS</h4></Fade>
                <div className="blogtiles">
                    <BlogTiles/>
                </div>
            </div>

            <div className="footer">
                <Footer/>
            </div>
        </div>
    )
}

export default Blog
