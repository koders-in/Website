import React from 'react'
import Fade from 'react-reveal/Fade';
import './Team.scss';
import Image1 from '../../Images/team.jpg'
import TeamCards from '../../components/TeamCards/TeamCards';
import TeamCardsKnights from '../../components/TeamCards/TeamCardsKnights';
import Footer from '../../components/Footer/Footer';

function Team() {
    return (
        <div className="team" id="team">
             <div className="heading">
                <Fade top>
                <img src={Image1} alt="" /></Fade>
                <Fade left>
                <h3>OUR TEAM</h3></Fade>
            </div>
            <div className="content">
                <Fade left>
                <p>Behind every success story is a team, a group of people who come together and bring a collective vision to life. 
                Presenting you the team of Koders.</p></Fade>
            </div>
            <div className="teammembers">
                <Fade bottom>
                <h1>Executive Board (Kore)</h1>
                </Fade>
                <Fade bottom>
                <div className="cards">
                    <TeamCards/>
                </div>
                </Fade>
            </div>
            <div className="teammembers">
                <Fade bottom>
                <h1 className="knights">Internal Board (Knights)</h1>
                </Fade>
                <Fade bottom>
                <div className="cards">
                    <TeamCardsKnights/>
                </div>
                </Fade>
            </div>

            <div className="footer">
                <Footer/>
            </div>
        </div>
    )
}

export default Team
