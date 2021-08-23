import React from 'react'
import Fade from 'react-reveal/Fade';
import './Blog1.scss'
import {HashRouter, Link} from "react-router-dom";
import Image2 from '../../Images/arrow_left.svg'
import Image1 from '../../Images/Hacking_1.jpg'
import Image3 from '../../Images/Hacking_2.jpg'
import Footer from '../../components/Footer/Footer';

function Blog1() {
    return (
        <div className="blog1">
            <div className="headimage">
                <Fade top>
                <img src={Image1} alt="" /></Fade>
            </div>
            <Fade bottom>
            <div className="backbutton">
                <HashRouter>
                <Link to="/blog">
                    <img src={Image2} alt="" />
                    <p>Back</p>
                </Link>
                </HashRouter>
            </div>
            <div className="heading">
                <h1>Hacking <span>Humans</span> is easier than Hacking <span>Computers</span></h1>
            </div></Fade>
            <Fade bottom>
            <div className="section1">
                <div className="para1">
                    <p>
                    Being a hacker isn't as easy as it may sound. 
                    And you should beware of snake oil salesmen 
                    who guarantee you to make the next 'Kevin Mitnick' 
                    for a few bucks. Raiding area 51 would be a better 
                    plan, just in case. Hold tight as I cover two of 
                    the most controversial black hats the internet has 
                    witnessed in its age. We will also dig into the 
                    model they followed to hack into numerous systems. 
                    Predominantly, social engineering. Here they are:
                    </p>
                    <ul className="one">
                        <li><span>Kevin Mitnick</span></li>
                        <li><span>Gary Mckinnon</span></li>  
                    </ul>
                    <p>Their life is no less than a movie, however, 
                    don't let this imagery cloud your morality.</p>
                </div>

                <div className="para2">
                    <h4>Kevin Mitnick:</h4>
                    <p>This man is intriguing, for the wrong reasons. 
                    He had the FBI after him and is notorious for his 
                    high profile arrest in 1995 for cybercrimes. Now he 
                    runs a security firm known as Mitnick Security 
                    Consulting LLC.</p>
                </div>

                <div className="para3">
                    <h4>Background and his famous 12y/o hack:</h4>
                    <p>Can you dive into a dumpster to save yourself a 
                    few bucks when you travel through buses? Well, 
                    Mitnick can and he did. He used social engineering and 
                    bypassed the punch card system of the Los Angeles bus system. 
                    From the age of 12, he figured out that social engineering is 
                    one of the easiest ways to obtain information or better said, 
                    deceiving people into sharing their information without much 
                    effort. Expeditions, no matter how microscopic or macroscopic, 
                    they all sail with a small step. Mitnick took his first step at 
                    12 and this expedition was all set to make him one of the most 
                    wanted hackers of all time. </p>
                </div>

                <div className="para4">
                    <h4>Making it to the headlines:</h4>
                    <p>Mitnick started small but made it real big in the forthcoming 
                    years. He gained unauthorized access to dozens of systems 
                    including Pacific Bell, DEC, and many more. He started to 
                    clone cellular phones and even broke into the software of 
                    the USA’s largest cellular service providers.</p>
                    
                    <h4>The Arrest:</h4>
                    <p>After making it big in the scene of cybercrime, the FBI was 
                    after Mitnick. Being a fugitive, he was arrested after a good number 
                    of years on February 15th, 1995. The FBI found more than 100 cloned 
                    cellular phones, false passports, and ID. He was also arrested in 
                    1989 but fled away making him a fugitive.</p>

                    <h4>Free Kevin:</h4>
                    <p>This is the fun part. A normal human would want the guilty to be punished. 
                    However, a group of black hats started a campaign to have Mitnick free. 
                    They hacked into Yahoo’s Website and projected the text ‘catastrophe’ on the 
                    day of Christmas. As if hacking into Yahoo was not enough, Mitnick alleged that 
                    he could start a nuclear war by whistling into the payphone. This led to his release 
                    from the prison on January 21st, 2000, with restrictions of course. He was curtailed 
                    from using technology. However, he fought his way through legal channels and won his 
                    right to use technology.</p>
                </div>
            </div>
            </Fade>

            <Fade bottom>
            <div className="image2">
                <img src={Image3} alt="" />
            </div></Fade>

            <Fade bottom>
            <div className="section2">
                <div className="para1">
                    <h4>Rest is history:</h4>
                    <p>After living such a movie like life, 
                    it was time for Mitnick to fix his ways. 
                    He now runs his own security company, has 
                    written several books, and is regarded as 
                    one of the Godfathers in the community of hackers.</p>
                </div>

                <p>If Kevin’s story appears to be a movie, then Gary 
                McKinnon’s is a movie on steroids.</p>

                <div className="para2">
                    <h4>Gary Mckinnon:</h4>
                    <p>Gary is the real deal. Gary is the real plug. 
                    Gary is the real Binod but underrated in the best 
                    way possible. This man penetrated NASA’s and the USA’s 
                    military computers. He raided the area 51 virtually 
                    years before. He got traced and cited that he intended 
                    to find information on UFO sightings in the USA and free 
                    energy suppression. Another fun fact is, he did all the 
                    hacking at the house of his girlfriend’s aunt by the 
                    hacking name solo. However, USA authorities claimed that 
                    he stole files, deleted important information logs from the 
                    network of the navy and the army.</p>

                    <h4>Legal Proceedings:</h4>
                    <p>After jeopardizing NASA and the US Military, he was sentenced 
                    to prison for 70 years, if extradited. However, the penetration 
                    episode took place from Britain. Mckinnon was to be extradited to 
                    the USA, but the extradition was unsuccessful. Britain is very 
                    considerate about human rights and maybe Mckinnon used this 
                    consideration to his advantage. It was pleaded that he is not mentally 
                    fit for extradition and may take his life if sent to the USA. 
                    Even, celebrities came in his support. The black hat community 
                    rather inoculated the USA for such mediocre security and further 
                    stated that Mckinnon only exposed it.</p>

                    <h4>Mckinnon’s life is a movie on steroids:</h4>
                    <p>Even after infiltrating the USA to its core, this man did not 
                    face any repercussion and extradition had a major role to play in this roller coaster of a journey.</p>
                </div>

                <p className="end">
                Here you have it. Kevin Mitnick and Gary Mckinnon. 
                A movie like life and another one being a movie on steroids. 
                But hey, in the end, they both were caught. Mitnick was even 
                punished and so would have been Mckinnon. Your key takeaway 
                should always be to operate under legal restrictions and to 
                use your skill set for the betterment of society. Perhaps, 
                we are already headed towards a cyberwar between nations.</p>
            </div>
            </Fade>

            <div className="footer">
                <Footer/>
            </div>
        </div>
    )
}

export default Blog1
