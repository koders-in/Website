import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import './ProjectCorousal.scss'

function ProjectCorousal() {
    return (
        <div className="projectcorousal">
            <Carousel autoPlay infiniteLoop>
                <div>
                    <img alt="" src="http://lorempixel.com/output/cats-q-c-640-480-1.jpg" />
                    <p className="legend">Landing Page</p>
                </div>
                <div>
                    <img alt="" src="http://lorempixel.com/output/cats-q-c-640-480-2.jpg" />
                    <p className="legend">IP Proxy</p>
                </div>
                <div>
                    <img alt="" src="http://lorempixel.com/output/cats-q-c-640-480-3.jpg" />
                    <p className="legend">Gmail Harvester</p>
                </div>
                <div>
                    <img alt="" src="http://lorempixel.com/output/cats-q-c-640-480-4.jpg" />
                    <p className="legend">User Account</p>
                </div>
                <div>
                    <img alt="" src="http://lorempixel.com/output/cats-q-c-640-480-5.jpg" />
                    <p className="legend">Twitter</p>
                </div>
            </Carousel>
        </div>
    )
}

export default ProjectCorousal
