import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import './Carousal3.scss'
import Image1 from '../../Images/Projects/Kourage/User Profile.jpg'
import Image2 from '../../Images/Projects/Kourage/Suggestions Guidelines.jpg'
import Image3 from '../../Images/Projects/Kourage/Suggestion Portal.jpg'
import Image4 from '../../Images/Projects/Kourage/Sentiment Analysis .jpg'
import Image5 from '../../Images/Projects/Kourage/Attendance Portal .jpg'

function Carousal3() {

    const responsive = {
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3,
          slidesToSlide: 1 // optional, default to 1.
        },
        tablet: {
          breakpoint: { max: 1024, min: 425 },
          items: 2,
          slidesToSlide: 1 // optional, default to 1.
        },
        mobile: {
          breakpoint: { max: 425, min: 0 },
          items: 1,
          slidesToSlide: 1 // optional, default to 1.
        }
      };

    return (
        <div className="projectcorousal_kourage">
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
                    <p>User Profile</p>
                </div>
                <div>
                    <img alt="" src={Image2} />
                    <p>Suggestions Guidelines</p>
                </div>
                <div>
                    <img alt="" src={Image3} />
                    <p>Suggestion Portal</p>
                </div>
                <div>
                    <img alt="" src={Image4} />
                    <p>Sentiment Analysis</p>
                </div>
                <div>
                    <img alt="" src={Image5} />
                    <p>Attendance Portal</p>
                </div>
            </Carousel>
        </div>
    )
}

export default Carousal3
