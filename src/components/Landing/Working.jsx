import React from "react";
import "./Working.scss";
import Fade from "react-reveal/Fade";
import Image1 from "../../Images/Working.svg";

function Working() {
  return (
    <div className="container section-margin" id="#working">
      <div className="working-wrapper">
        <Fade left>
          <h3 className="mb-3">HOW WE WORK</h3>
        </Fade>
        <Fade bottom>
          <p>
            We work in a coordinated and efficient manner which ensures agility
            and a large proportion of work to get done in a short span of time.
          </p>
        </Fade>
        <div className="timeline">
          <Fade bottom>
            <img src={Image1} alt="" />
          </Fade>
        </div>
      </div>
    </div>
  );
}

export default Working;
