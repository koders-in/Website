import React from "react";
import "./TeamCards.scss";
import Fade from "react-reveal/Fade";
import Image7 from "../../Images/Sourav_Jena.jpg";
import Image8 from "../../Images/SaakshiPilliwar.jpg";
import Image9 from "../../Images/Pranav_Kaushik.jpg";
import { TeamCard } from "./TeamCards";

function TeamCardsKnights() {
  return (
    <div className="teamcards">
      <Fade bottom>
        <div className="row">
          <TeamCardWrapper>
            <TeamCard
              memberDescription="Sakshi is our brains behind the design, her amazing skills to
            manage the whole team of designers has what kept the team going
            strong. To design posts on a weekly basis and keep them coming
            while managing the team, is something Saakshi can pull off
            easily. How chill is Saakshi? Like a block of ice. Her readiness
            to help others and brilliant designing skills makes her a
            valuable part of the family."
              memberDesignation="Design Head"
              memberName="Saakshi Pilliwar"
              memberPoster={Image8}
            />
          </TeamCardWrapper>
          <TeamCardWrapper>
            <TeamCard
              memberDescription="P for Passionate and P for Pranav. Need something designed?
            Pranav is our man, our muscle behind our design. No matter what
            the time is, he will get the work done and that speaks volume
            about his dedication. Though we work with bots, it doesn't mean
            we are one. We take our jokes seriously like our work and Pranav
            also looks after the jokes department."
              memberDesignation="Creative Executive"
              memberName="Pranav Kaushik"
              memberPoster={Image9}
            />
          </TeamCardWrapper>
        </div>
      </Fade>

      <Fade bottom>
        <div className="row">
          <TeamCardWrapper>
            <TeamCard
              memberDescription="Our epitome of calm, Sourav Jena, is not only hard working but
            also equally consistent. He is no less than a PT teacher, he is
            gonna make sure you work. Other than leading the entire team, he
            is also a great team-player, he never takes no for an answer nor
            he has ever turned down work. “No” is not part of his dictionary
            that makes him a wish-granting factory, so wish carefully!"
              memberDesignation="Operations Executive"
              memberName="Sourav Jena"
              memberPoster={Image7}
            />
          </TeamCardWrapper>
        </div>
      </Fade>
    </div>
  );
}

export default TeamCardsKnights;

export const TeamCardWrapper = ({ children }) => (
  <div className="col-lg-6 col-md-12">{children}</div>
);
