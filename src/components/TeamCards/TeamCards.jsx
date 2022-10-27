import React from "react";
import "./TeamCards.scss";
import Fade from "react-reveal/Fade";
import Image1 from "../../assets/images/Kartikey_Kushwah.webp";
import Image6 from "../../assets/images/Shaloni_Modi.webp";
import { TeamCardWrapper } from "./TeamCardsKnights";

function TeamCards() {
  return (
    <div className="teamcards">
      <Fade bottom>
        <div className="row">
          <TeamCardWrapper>
            <TeamCard
              memberDesignation="Co-founder & CEO"
              memberPoster={Image1}
              memberName="Kartikey Kushwah"
              memberDescription={` XHunter is a zealous and conscientious achiever with an
                impeccable vision to lead the technological industry. He has a
                plan and that is - To technically embellish the lives of people
                all around the globe. KODERS is a KORE of galvanized enthusiasts
                working for a vision beyond reality. In the words of his
                favorite role model "He's here to leave a dent into this
                Universe".`}
            />
          </TeamCardWrapper>
          <TeamCardWrapper>
            <TeamCard
              memberDesignation="Co-founder & CTO"
              memberPoster={Image6}
              memberName="Shaloni Modi"
              memberDescription={`“If you want it, you go and get it” describes Panther, our Rock
            of Gibraltar. Her desire to learn the nooks and crannies of the
            cyber world keeps us on our toes. She's adept & well versed with
            technology and would help you develop your next robust project.
            She's the TedX speaker of Koders who invigorates positivity and
            new perspective in the team.`}
            />
          </TeamCardWrapper>
        </div>
      </Fade>
    </div>
  );
}

export default TeamCards;

export const TeamCard = ({
  memberPoster,
  memberDesignation,
  memberName,
  memberDescription,
}) => (
  <div className="team-card-wrapper">
    <img src={memberPoster} alt={memberName} />
    <div className="box">
      <h3>{memberName}</h3>
      <h5>{memberDesignation}</h5>
      <p>{memberDescription}</p>
    </div>
  </div>
);
