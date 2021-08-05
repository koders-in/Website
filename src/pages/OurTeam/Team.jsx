import React from 'react'
import Fade from 'react-reveal/Fade';
import './Team.scss';
import Image1 from '../../Images/team.jpg'
import TeamCards from '../../components/TeamCards/TeamCards';

function Team() {
    return (
        <div className="team" id="team">
             <div className="heading">
                <img src={Image1} alt="" />
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
        </div>
    )
}

export default Team
