import React from 'react'
import './Testimonials.scss'
import Fade from 'react-reveal/Fade';
import Image1 from '../../Images/Avatar_1.svg'
import Image2 from '../../Images/Avatar_2.svg'
import Image3 from '../../Images/Avatar_3.svg'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

function Testimonials() {

    const responsive = {
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3,
          slidesToSlide: 3 // optional, default to 1.
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2,
          slidesToSlide: 2 // optional, default to 1.
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1,
          slidesToSlide: 1 // optional, default to 1.
        }
      };

    return (
        <div className="testimonials" id="testimonials">
            <Fade left>
            <h3>TESTIMONIALS</h3></Fade>
            <Fade bottom>
            <div className="wrapper">   
                <div className="cards">
                <Carousel swipeable={true}
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
                itemClass="carousel-item-padding-40-px">
                    <div className="card1">
                        <img src={Image1} alt="/"></img>
                        <h4>Elizabeth Martin</h4>
                        <h5>SaveSpace Inc.</h5>
                        <p>“Chamer is the most valuable business resource we have ever purchased. I would be lost without chamer.” </p>
                    </div>
                    <div className="card2">
                        <img src={Image2} alt="/"></img>
                        <h4>Alberto Donko</h4>
                        <h5>ScreepApp</h5>
                        <p>“Chamer is the most valuable business resource we have ever purchased. I would be lost without chamer.” </p>
                    </div>
                    <div className="card3">
                        <img src={Image3} alt="/"></img>
                        <h4>Alexander Parkinson</h4>
                        <h5>MyTravel.com</h5>
                        <p>“Chamer is the most valuable business resource we have ever purchased. I would be lost without chamer.” </p>
                    </div>
                    <div className="card2">
                        <img src={Image2} alt="/"></img>
                        <h4>Alberto Donko</h4>
                        <h5>ScreepApp</h5>
                        <p>“Chamer is the most valuable business resource we have ever purchased. I would be lost without chamer.” </p>
                    </div>
                </Carousel>
                </div>
            </div>
            </Fade>
        </div>
    )
}

export default Testimonials
