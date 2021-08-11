import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import './ProjectCorousal.scss'

function ProjectCorousal() {

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
        <div className="projectcorousal">
            <Carousel swipeable={true}
                draggable={true}
                responsive={responsive}
                ssr={true} // means to render carousel on server-side.
                infinite={true}
                autoPlaySpeed={5000}
                autoPlay={true}
                keyBoardControl={true}
                customTransition="all .5"
                transitionDuration={500}
                containerClass="carousel-container"
                removeArrowOnDeviceType={["tablet", "mobile"]}
                dotListClass="custom-dot-list-style"
                itemClass="carousel-item-padding-40-px">
                <div>
                    <img alt="" src="http://lorempixel.com/output/cats-q-c-640-480-1.jpg" />
                </div>
                <div>
                    <img alt="" src="http://lorempixel.com/output/cats-q-c-640-480-2.jpg" />
                </div>
                <div>
                    <img alt="" src="http://lorempixel.com/output/cats-q-c-640-480-3.jpg" />
                </div>
                <div>
                    <img alt="" src="http://lorempixel.com/output/cats-q-c-640-480-4.jpg" />
                </div>
                <div>
                    <img alt="" src="http://lorempixel.com/output/cats-q-c-640-480-5.jpg" />
                </div>
            </Carousel>
        </div>
    )
}

export default ProjectCorousal
