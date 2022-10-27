import React from "react";
import "./ServicesPage.scss";
import { HashRouter, Link } from "react-router-dom";
import Fade from "react-reveal/Fade";
import Image1 from "../../assets/images/services.webp";
import Image2 from "../../assets/images/arrow_left.svg";
import Image3 from "../../assets/images/ServicesTable.svg";
import Footer from "../Footer/Footer";

function ServicesPage() {
  return (
    <div className="servicespage" id="servicespage">
      <Fade top>
        <div className="heading">
          <img src={Image1} alt="Fingers of a person trying to zoom in the content of tablet" />
          <div className="wrapper">
            <Fade left>
              <h3>Our Services</h3>
            </Fade>
            <HashRouter>
              <div className="backbutton">
                <Link to="/" tag={Link} aria-label="back">
                  <Fade right>
                    <img src={Image2} alt="" />
                    <p>Back</p>
                  </Fade>
                </Link>
              </div>
            </HashRouter>
          </div>
        </div>
      </Fade>

      <div className="table">
        <Fade bottom>
          <img src={Image3} alt="Web applications, APIs, Blockchain, Internet of things, Cloud computing, Process automation,
          Artificial Intelligence, Network security, Devops, Information security, Business Analytics and Mobile applications" />
        </Fade>
      </div>

      <div className="footer">
        <Footer />
      </div>
    </div>
  );
}

export default ServicesPage;
