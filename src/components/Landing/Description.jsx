import React from "react";
import "./Description.scss";
import Fade from "react-reveal/Fade";
import Image1 from "../../Images/Creative.svg";
import Image2 from "../../Images/Efficient.svg";
import Image3 from "../../Images/Proffiecient.svg";
import Motto2 from "../../Images/motto2.png";

function Description() {
  return (
    <div className="container section-margin" id="desc">
      <div className="description-wrapper">
        <Fade left>
          <h3 className="title-margin">ABOUT KODERS</h3>

          <img src={Motto2} className="motto-logo d-block mx-auto " alt="/" />
        </Fade>
        <Fade bottom>
          <p className="my-4">
            Koders isn't your normal software development firm. Koders provide a
            platform where people can engage themselves in various tech-related
            activities, be it keeping themselves updated with the latest
            technology trends, learning a new topic, or maybe teaching one. This
            is a family of driven enthusiasts where people from various fields
            come along to contribute their part and help build up the family. We
            aren't making just customer relations here, we're building a family
            of technological cognizance.
          </p>
        </Fade>
        <div className="row justify-content-between px-3">
          <DescriptionCard>
            <Fade left>
              <img src={Image1} alt="" />
              <h4 className="text-center">Creative</h4>
              <p>
                Forget about weeks and weeks of persuasion and reminders. We
                give our clients a fixed timeline and serve well before it. Our
                aim is to serve you the finished project with all your desired
                changes in an efficient & agile manner.
              </p>
            </Fade>
          </DescriptionCard>
          <DescriptionCard>
            <Fade bottom>
              <img src={Image3} alt="" />
              <h4 className="text-center">Proficient</h4>
              <p>
                Our team is a family of developers who code to embellish
                programs and make it aesthetic. Creativity is primordial for our
                team. Get in touch and you may find some talented musicians,
                sketch artists too ;)
              </p>
            </Fade>
          </DescriptionCard>
          <DescriptionCard isLast={true}>
            <Fade right>
              <img src={Image2} alt="" />
              <h4 className="text-center">Efficient</h4>
              <p>
                With leading and cutting edge knowledge of all the contemporary
                changes in the world of technology, we are always a step ahead
                in our game. Constant improvement and adaptation is our key
                feature.
              </p>
            </Fade>
          </DescriptionCard>
        </div>
      </div>
    </div>
  );
}

export default Description;

const DescriptionCard = ({ children, isLast = false }) => (
  <div className={`col-lg-3 description-card p-3 mb-3`}>{children}</div>
);
