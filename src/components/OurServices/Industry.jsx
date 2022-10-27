import React from "react";
import "./Industry.scss";
import { HashRouter, Link } from "react-router-dom";
import Fade from "react-reveal/Fade";
import Image1 from "../../assets/images/services.webp";
import Image2 from "../../assets/images/arrow_left.svg";
import Image3 from "../../assets/images/Industry.svg";
import Footer from "../Footer/Footer";

function Industry() {
  return (
    <div className="industry" id="industry">
      <Fade top>
        <div className="heading">
          <img src={Image1} alt="Fingers of a person trying to zoom in the content of tablet" />
          <div className="wrapper">
            <Fade left>
              <h3>Industries</h3>
            </Fade>
            <HashRouter>
              <div className="backbutton">
                <Link to="/" tag={Link}  aria-label="back">
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
          <img src={Image3} alt="Software services, Hardware, Design, Cloud services, IT services, Consulting, Internet of things,
          Media, Entertainment, Education, E-commerce, Science and Fintech" />
        </Fade>
      </div>

      <div className="footer">
        <Footer />
      </div>
    </div>
  );
}

export default Industry;
