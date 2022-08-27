import React from "react";
import "./Footer.scss";
import { HashRouter, Link } from "react-router-dom";
import Fade from "react-reveal/Fade";
import Image1 from "../../Images/instagram.svg";
import Image2 from "../../Images/facebook.svg";
import Image3 from "../../Images/twitter.svg";
import Image4 from "../../Images/github.svg";
import Image5 from "../../Images/linkedin-rect.svg";
import Image6 from "../../Images/discord.svg";

function Footer() {
  return (
    <Fade bottom>
      <div className="footer " id="footer">
        <HashRouter>
          <div className="footerwrapper container">
            <div className="row">
              <Fade left>
                <div className="left col-lg-6 mb-lg-0 mb-sm-3">
                  <h3>QUICK LINKS:</h3>
                  <Link to="/" tag={Link} className="ql">
                    <h4>Home</h4>
                  </Link>

                  <Link to="/aboutus" tag={Link} className="ql">
                    <h4>About Us</h4>
                  </Link>

                  <Link to="/ourteam" tag={Link} className="ql">
                    <h4>Team</h4>
                  </Link>

                  <Link to="/portfolio" tag={Link} className="ql">
                    <h4>Portfolio</h4>
                  </Link>

                  <Link to="/Kommunity" tag={Link} className="ql">
                    <h4>Kommunity</h4>
                  </Link>

                  <Link to="/Kareer" tag={Link} className="ql">
                    <h4>Kareer</h4>
                  </Link>
                </div>
              </Fade>
              <Fade right>
                <div className="right col-lg-6">
                  <h3>FOLLOW US:</h3>
                  <div className="links">
                    <div className="instagram">
                      <a
                        href="https://www.instagram.com/koders_in/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <img src={Image1} alt=""></img>
                      </a>
                    </div>
                    <div className="facebook">
                      <a
                        href="https://www.facebook.com/kodersin"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <img src={Image2} alt=""></img>
                      </a>
                    </div>
                    <div className="twitter">
                      <a
                        href="https://twitter.com/KodersHQ"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <img src={Image3} alt=""></img>
                      </a>
                    </div>
                    <div className="github">
                      <a
                        href="https://github.com/koders-in"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <img src={Image4} alt=""></img>
                      </a>
                    </div>
                    <div className="Linkdin">
                      <a
                        href="https://www.linkedin.com/company/koders-in/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <img src={Image5} alt=""></img>
                      </a>
                    </div>
                    <div className="discord">
                      <a
                        href="https://dsc.gg/koders"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <img src={Image6} alt=""></img>
                      </a>
                    </div>
                  </div>
                </div>
              </Fade>
            </div>
          </div>

          <div className="salutation">
            <p>Copyright ©2020 | Koders. All rights reserved.</p>
          </div>
        </HashRouter>
      </div>
    </Fade>
  );
}

export default Footer;
