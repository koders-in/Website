import React from "react";
import Fade from "react-reveal/Fade";
import "./Community.scss";
import Image1 from "../../Images/community.webp";
import Footer from "../../components/Footer/Footer";
import PageContainer from "../../components/PageContainer/PageContainer";

function Community() {
  return (
    <PageContainer showScrollOnDelay={true}>
      <div className="community" id="community">
        <div className="heading">
          <Fade top>
            <img src={Image1} alt="A person holding bulb" />
          </Fade>
          <Fade left>
            <div className="container">
              <h3>
                JOIN OUR<br></br> DISCORD COMMUNITY
              </h3>
            </div>
          </Fade>
        </div>

        <div className="container d-flex justify-content-center my-5">
          <Fade bottom>
            <iframe
              title="discord"
              src="https://discord.com/widget?id=534406455709663233&theme=dark"
              width="350"
              height="500"
              allowtransparency="true"
              frameBorder="0"
              sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"
            />
          </Fade>
        </div>

        <div className="footer">
          <Footer />
        </div>
      </div>
    </PageContainer>
  );
}

export default Community;
