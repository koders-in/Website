import React from "react";
import "./Testimonials.scss";
import Fade from "react-reveal/Fade";
import Image1 from "../../Images/person-1.png";
import Image2 from "../../Images/person-2.png";
import Image3 from "../../Images/person-3.png";
import Image4 from "../../Images/person-4.png";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

function Testimonials() {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 764, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };

  return (
    <div className="container section-margin" id="testimonials">
      <Fade left>
        <h3 className="title-margin">TESTIMONIALS</h3>
      </Fade>
      <Fade bottom>
        <div className="testimonial-wrapper">
          <div className="cards">
            <Carousel
              swipeable={true}
              draggable={true}
              responsive={responsive}
              ssr={true} // means to render carousel on server-side.
              infinite={true}
              autoPlaySpeed={1000}
              keyBoardControl={true}
              customTransition="all .5"
              transitionDuration={500}
              containerClass="carousel-container"
              removeArrowOnDeviceType={["tablet", "mobile"]}
              dotListClass="custom-dot-list-style"
              itemClass="carousel-item-padding-40-px"
            >
              <div className="card1">
                <img src={Image1} alt="/"></img>
                <h4>Jai Agarwal</h4>
                <h5>Managing Director, JaiG </h5>
                <h5>(166-Jai-G-Revamp)</h5>
                <p>
                  "I am proud to be a part of a zealous team who always
                  astonishes me with great results. I received exactly what we
                  had planned together."
                </p>
              </div>
              <div className="card2">
                <img src={Image2} alt="/"></img>
                <h4>Bradley B.</h4>
                <h5>(0087-Powershell)</h5>
                <p>
                  "Excellent work - good communication - Understanding -
                  Professional - Highly recommended!"
                </p>
              </div>
              <div className="card3">
                <img src={Image3} alt="/"></img>
                <h4>DiegoTod</h4>
                <h5>(170-0089-Support)</h5>
                <p>"Always available to find a solution, thank you guys! ❤ "</p>
              </div>
              <div className="card4">
                <img src={Image4} alt="/"></img>
                <h4>Enz</h4>
                <h5>(168-Machina-UI)</h5>
                <p>
                  "Speed and price and cleaness of code exceeded expectations"
                </p>
              </div>
            </Carousel>
          </div>
        </div>
      </Fade>
    </div>
  );
}

export default Testimonials;
