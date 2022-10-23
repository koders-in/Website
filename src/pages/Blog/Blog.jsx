import React from "react";
import Fade from "react-reveal/Fade";
import "./Blog.scss";
import Image1 from "../../Images/Blog.webp";
import BlogTiles from "../../components/BlogTiles/BlogTiles";
import Footer from "../../components/Footer/Footer";
import PageContainer from "../../components/PageContainer/PageContainer";

function Blog() {
  return (
    <PageContainer showScrollOnDelay={true}>
      <div className="blog">
        <div className="heading section-margin">
          <img src={Image1} alt="A monitor displaying code for a webpage" />
          <div className="header-content">
            <div className="container ">
              <Fade left>
                <h3>BLOGS</h3>
              </Fade>
              <Fade left>
                <p>
                  "Optimism is an occupational hazard of programming: feedback is
                  the treatment."
                  <br></br> -Kent Beck
                </p>
              </Fade>
            </div>
          </div>
        </div>
        <div className="blogsection container">
          <h4 className="new-blog-title mb-5">NEW BLOGS</h4>
          {/* <Fade left> */}
          {/* </Fade> */}
          <div className="blogtiles">
            <BlogTiles />
          </div>
        </div>

        <div className="footer">
          <Footer />
        </div>
      </div>
    </PageContainer>
  );
}

export default Blog;
