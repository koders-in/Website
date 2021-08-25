import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import './Carousal4.scss'
import Image1 from '../../Images/Projects/HawaUI/HomePage.jpg'
import Image2 from '../../Images/Projects/HawaUI/Profiles.jpg'
import Image3 from '../../Images/Projects/HawaUI/Proxies.jpg'
import Image4 from '../../Images/Projects/HawaUI/Sessions.jpg'
import Image5 from '../../Images/Projects/HawaUI/Settings.jpg'

function Carousal4() {

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
        <div className="projectcorousal_hawa">
            <Carousel swipeable={true}
                draggable={true}
                responsive={responsive}
                ssr={true} // means to render carousel on server-side.
                infinite={true}
                autoPlaySpeed={5000}
                autoPlay={false}
                keyBoardControl={true}
                customTransition="all 0.7"
                transitionDuration={500}
                containerClass="carousel-container"
                removeArrowOnDeviceType={["tablet", "mobile"]}
                dotListClass="custom-dot-list-style"
                itemClass="carousel-item-padding-50-px">
                <div>
                    <img alt="" src={Image1} />
                    <p>Home Page</p>
                </div>
                <div>
                    <img alt="" src={Image2} />
                    <p>Profiles</p>
                </div>
                <div>
                    <img alt="" src={Image3} />
                    <p>Proxies</p>
                </div>
                <div>
                    <img alt="" src={Image4} />
                    <p>Sessions</p>
                </div>
                <div>
                    <img alt="" src={Image5} />
                    <p>Settings</p>
                </div>
            </Carousel>
        </div>
    )
}

export default Carousal4
