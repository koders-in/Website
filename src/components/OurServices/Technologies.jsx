import React from "react";
import "./Technologies.scss";
import { Link, HashRouter } from "react-router-dom";
import Fade from "react-reveal/Fade";
import Image1 from "../../assets/images/services.webp";
import Image2 from "../../assets/images/arrow_left.svg";
import Image3 from "../../assets/images/Technology.svg";
import Footer from "../Footer/Footer";

function Technologies() {
  return (
    <div className="technologies">
      <Fade top>
        <div className="heading">
          <img src={Image1} alt="Fingers of a person trying to zoom in the content of tablet" />
          <div className="wrapper">
            <Fade left>
              <h3>Technologies</h3>
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
          <img src={Image3} alt="HTML, PHP, MongoDB, C++, React, CSS, NodeJS, Java, C#, Vue, JavaScript, My SQL, C, .NET, Angular" />
        </Fade>
      </div>

      <div className="footer">
        <Footer />
      </div>
    </div>
  );
}

export default Technologies;
