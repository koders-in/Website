import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import './Carousal5.scss'
import Image1 from '../../assets/images/projects/Machina/SignIn.webp'
import Image2 from '../../assets/images/projects/Machina/Dashboard_SignIn.webp'
import Image3 from '../../assets/images/projects/Machina/Proxies.webp'
import Image4 from '../../assets/images/projects/Machina/Settings.webp'
import Image5 from '../../assets/images/projects/Machina/Task Groups.webp'

function Carousal5() {

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

        <div className="projectcorousal_machina">
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
                    <img alt="Sign in screen of Machina UI" src={Image1} />
                    <p>Sign In</p>
                </div>
                <div>
                    <img alt="Side by side view of Machina UI dashboard and sign in screen" src={Image2} />
                    <p>Dashboard + SignIn</p>
                </div>
                <div>
                    <img alt="Proxies tab of Machina UI displaying details about footlocker proxies" src={Image3} />
                    <p>Proxies</p>
                </div>
                <div>
                    <img alt="Settings section that provides option to configure discord or slack webhooks" src={Image4} />
                    <p>Settings</p>
                </div>
                <div>
                    <img alt="Task groups section displaying details of footlocker proxies" src={Image5} />
                    <p>Task Groups</p>
                </div>
            </Carousel>
        </div>
    )
}

export default Carousal5
