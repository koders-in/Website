import React from "react";
import Fade from "react-reveal/Fade";
import "./Team.scss";
import Image1 from "../../Images/team.webp";
import TeamCards from "../../components/TeamCards/TeamCards";
import TeamCardsKnights from "../../components/TeamCards/TeamCardsKnights";
import Footer from "../../components/Footer/Footer";
import PageContainer from "../../components/PageContainer/PageContainer";

function Team() {
  return (
    <PageContainer showScrollOnDelay={true}>
      <div className="team" id="team">
        <div className="heading section-margin">
          <Fade top>
            <img src={Image1} alt="Two hands trying to match pieces of jigsaw puzzle" />
          </Fade>
          <div className="container">
            <Fade left>
              <h3>OUR TEAM</h3>
            </Fade>
          </div>
        </div>
        <div className="content container">
          <Fade left>
            <p>
              Behind every success story is a team, a group of people who come
              together and bring a collective vision to life. Presenting you the
              team of Koders.
            </p>
          </Fade>
        </div>
        <div className="teammembers">
          <div className="container">
            <Fade bottom>
              <h1>Executive Board (Kore)</h1>
            </Fade>
          </div>
          <Fade bottom>
            <div className="cards container">
              <TeamCards />
            </div>
          </Fade>
        </div>
        <div className="teammembers">
          <Fade bottom>
            <div className="container">
              <h1 className="knights">Internal Board (Knights)</h1>
            </div>
          </Fade>
          <Fade bottom>
            <div className="cards container">
              <TeamCardsKnights />
            </div>
          </Fade>
        </div>

        <div className="footer">
          <Footer />
        </div>
      </div>
    </PageContainer>
  );
}

export default Team;
