import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import './Carousal6.scss'
import Image1 from '../../Images/Projects/UCToolbot/Account_generator.webp'
import Image2 from '../../Images/Projects/UCToolbot/AutoLinkOpener.webp'
import Image3 from '../../Images/Projects/UCToolbot/Cookie_Generator.webp'
import Image4 from '../../Images/Projects/UCToolbot/One-click.webp'
import Image5 from '../../Images/Projects/UCToolbot/Profile_Converter.webp'
import Image6 from '../../Images/Projects/UCToolbot/Proxy_Generator.webp'

function Carousal6() {

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
        <div className="projectcorousal_UC">
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
                    <img alt="Account generator page of UC Toolbot displaying options to configure the account details" src={Image1} />
                    <p>Account Generator</p>
                </div>
                <div>
                    <img alt="Auto link opener tab displaying monitor section and tasks section" src={Image2} />
                    <p>Auto Link Opener</p>
                </div>
                <div>
                    <img alt="Cookie generator tab displaying section to add new task and cookie lists" src={Image3} />
                    <p>Cookie Generator</p>
                </div>
                <div>
                    <img alt="One click tab displaying section to add account and usage details" src={Image4} />
                    <p>One Click</p>
                </div>
                <div>
                    <img alt="Profile convertor tab displaying options to import or export profiles and profile lists" src={Image5} />
                    <p>Profile Converter</p>
                </div>
                <div>
                    <img alt="Cookie generator tab displaying section to add new task and proxy lists" src={Image6} />
                    <p>Proxy Generator</p>
                </div>
            </Carousel>
        </div>
    )
}

export default Carousal6
