import React from 'react'
import Fade from 'react-reveal/Fade';
import './Community.scss';
import Image1 from '../../Images/community.png'
import Footer from '../../components/Footer/Footer';

function Community() {
    return (
        <div className="community" id="community">
            <div className="heading">
                <img src={Image1} alt="" />
                <Fade left>
                <h3>JOIN OUR<br></br> DISCORD COMMUNITY</h3></Fade>
            </div>

            <div className="discord2">
                <Fade bottom>
            <iframe title="discord" src="https://discord.com/widget?id=534406455709663233&theme=dark" 
            width="350" height="500" allowtransparency="true" frameborder="0" 
            sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"></iframe>
            </Fade>
            </div>

            <div className="footer">
                <Footer/>
            </div>
        </div>
    )
}

export default Community
