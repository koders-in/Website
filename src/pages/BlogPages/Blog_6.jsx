import React from 'react'
import Fade from 'react-reveal/Fade';
import './Blog_6.scss'
import {HashRouter, Link} from "react-router-dom";
import Image2 from '../../Images/arrow_left.svg'
import Image1 from '../../Images/dark_web_1.jpeg'
import Image3 from '../../Images/dark_web_2.jpg'
import Footer from '../../components/Footer/Footer';

function Blog6() {    

    return (
        <div className="blogDarkweb">
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
                <h1>The <span>Dark Web</span> is Notorious</h1>
            </div></Fade>
            <Fade bottom>
            <div className="section1">
                <div className="para1">
                    <p>The dark web is notorious. You can find fake credit cards, 
                    hitmen, dope sellers, and all sorts of other illicit substances. 
                    Hold up, hold up, hold up! The line written above by no means 
                    could be repudiated. But this is not the dark web. The dark web 
                    was never concomitant with felonious acts. The dark web had everything 
                    to do with privacy and this might surprise you that the USA funded/ 
                    still funds dark web. So, does that insinuate the USA funded a marketplace 
                    to promote illegitimate trade? Not exactly and therefore to unravel the 
                    ever-building conundrum about the dark web, we first have to understand 
                    the layers of the ‘web’.</p>
                </div>
                <div className="para2">
                    <h4>Internet and its Onion-like Layers</h4>
                    <p>The internet that you use is the surface web. 
                    Almost anything that you search for is shown to you by Google 
                    or any other search engine through their index. The information 
                    widely available to the public and accessible for all could 
                    broadly be termed as surface web. As said earlier, a local 
                    search engine is capable of showing you these things. But these 
                    listings only make a tiny bit of actual internet. One more 
                    insight, privacy while surfing on surface websites is nil. I 
                    say it because, in a way or another, all these websites record 
                    your behavior pattern, show you targeted ads, sell your data, 
                    etc. to big corporations.</p>
                    <br />
                    <h4>Flaws in Surface Web gave birth to the Dark Web</h4>
                    <p>Since the information on the surface web could easily be 
                    penetrated, there has to be a way to protect confidential 
                    information. Otherwise, who knows, Google may sell nuclear 
                    codes to North Korea. To intercept such major breaches and to 
                    ensure financial transactions are secure (most of the time), 
                    govt data is being kept safe (days have gone since Gary McKinnon 
                    raided area 51, read my previous article to get a clear reference), 
                    there exists another layer of the internet known as deep web. The 
                    deep web has restricted access and local search engines are not 
                    able to show you information present on the dark web.</p>
                </div>

                <div className="para3">
                    <h4>Dark Web turned out to be the Cain of this story</h4>
                    <p>To understand it scrupulously, I will run you through TOR, 
                    the onion routing project. In very simple terms TOR is just a 
                    collection of routing. Instead of availing services directly 
                    from a server where you could be tracked by your ISP, TOR uses 
                    a collection of VPN to defy the possibility of backtracking your 
                    address. Do you see how the purpose of anonymity is fulfilled 
                    here? With anonymity, confidentiality isn't a concern as well 
                    because any webpage listed on the onion browser opens through 
                    the special domain of '.onion'. Without the TOR browser, .onion 
                    websites are not accessible at all.</p>
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
                    <h4>Limitation of TOR as a browser</h4>
                    <p>TOR just gets your foot into the realm of the dark web. 
                    However there are plenty of other browsers as well that vouch 
                    for anonymity, one of them is duckduckgo. However, bringing our 
                    focus back on the dark web, Excavator is a host of all shady 
                    sites and does the job of ‘google for dark web real easy.</p> 
                    <br />
                    <p><strong>For the sole purpose of anonymity use DuckDuckgo. You will not 
                    risk yourself to land in a place where going back is not an option.</strong></p>
                    <br />
                    <p>So far so good? Then what is the dark web? The dark web is an acronym for all 
                    the outlawed activities taking place which are nowhere to be found on the surface 
                    web. Forgery of currency, credit cards is just an aspect of it. Due to the 
                    anonymous nature of the dark web, it becomes an impediment to track users implying 
                    no regulation of activity and whatsoever.</p>     
                    <br />
                    <p><i>'With power comes great responsibility. Anonymity is herculean, but power corrupts'</i></p>  
                    <br />
                    <p>The quote above sums up the dark web. Anonymity is power, but power without 
                    restrictions wreaks havoc on the sanity of mind. The part of the internet which 
                    is used to exercise the actual freedom of speech is the same part which is used 
                    by cannibals, traffickers, pedophiles, and other obnoxious elements of society. 
                    You are always a click away from the depravity when surfing the dark web. </p>            
                </div>

                <div className="para2">
                    <h4>Let's Burst the Bubble of Anonymity</h4>
                    <p>Do you think the dark web maintains anonymity then? 
                    You'd be glad to know how the FBI busted the silk route and 
                    can track you down even when surfing the dark web. It is often 
                    said that the dark web is rather a honey trap built by the USA 
                    to monitor such unlawful activities but watching Netflix on a 
                    Sunday is a better option than surfing the dark web. Perhaps, 
                    a few theories only look good on paper and should not be demonstrated live.</p>
                    <br />
                    <p>Privacy matters but the dark web is a honey trap to lure criminals in as I 
                    said earlier. You don't want to get tracked by Amazon, google and their trackers, 
                    I give it to you. DuckDuckGo works and a few other privacy surface browsers work 
                    just fine for that sole purpose. But with TOR, excavator you are a click away 
                    from doing something which will not have the Uno reverse card to revert to. 
                    Hackers can tap into your computer easily from the dark web than the surface web. 
                    On the surface web, you still have an option to shut down a website right then 
                    and there but on the dark web, you don't hold the power actually.</p>
                    <br />
                    <p>This analogy would help you make a better decision: At times of election, 
                    people are powerful, people are the supreme leaders but what happens once 
                    the election is done? Where does the power succumb to? It all boils down 
                    to intent in the end. A person with progressive intent manifests prosperity. 
                    A person with gluttonous intent invites bedlam.</p>
                </div>
                <div className="para3">
                    <h4>Depravity of your Sanity is One-Click away</h4>
                    <p>Money breaks all barriers. Curiosity about snakes is appreciable but 
                    you will not risk your life touching a snake unless you have got proper 
                    training, weighed all the ramifications or you are a maniac. 
                    The same holds true for the dark web. Just one click and now the FBI 
                    will keep all your logs, all your activities performed collected, and 
                    monitor your actions. Maybe you accessed the dark web out of curiosity, 
                    clicked a link just because it tempted you and now you can not undo your 
                    actions. The dark web is powerful, but power not monitored becomes tyrannical.</p>
                    <br />
                    <p>For every choice, there is a price to be paid. Just like Adam and Eve 
                    paid to achieve consciousness and you know the rest.</p>
                </div>
            </div>
            </Fade>

            <div className="footer">
                <Footer/>
            </div>
        </div>
    )
}

export default Blog6
