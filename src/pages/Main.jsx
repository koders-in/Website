import React from 'react'
import { Route, Switch, HashRouter } from "react-router-dom";
import Home from './Home/Home';
import AboutUs from './AboutUs/AboutUs';
import Team from './OurTeam/Team';
import Portfolio from './Portfolio/Portfolio';
import Community from './Community/Community';
import Career from './Career/Career';
import Project1 from './Projects/Project1';
import ServicesPage from '../components/OurServices/ServicesPage';
import Technologies from '../components/OurServices/Technologies';
import Industry from '../components/OurServices/Industry';
import Blog from './Blog/Blog';
import Blog1 from './BlogPages/Blog1';
import Blog2 from './BlogPages/Blog_2';
import Blog3 from './BlogPages/Blog_3';
import Blog4 from './BlogPages/Blog_4';
import Blog5 from './BlogPages/Blog_5';
import Blog6 from './BlogPages/Blog_6';
import Blog7 from './BlogPages/Blog_7';

function Main() {
    return (
        <div>
            <HashRouter basename="/">
                <Switch>
                    <Route path="/" exact component={() => 
                        <Home /> } 
                    />
                    <Route path="/aboutus" exact component={() => 
                        <AboutUs /> } 
                    />
                    <Route path="/ourteam" exact component={() => 
                        <Team /> } 
                    />
                    <Route path="/portfolio" exact component={() => 
                        <Portfolio /> } 
                    />
                    <Route path="/kommunity" exact component={() => 
                        <Community /> } 
                    />
                    <Route path="/Kareer" exact component={() => 
                        <Career /> } 
                    />
                    <Route path="/projects/AIO-World" exact component={() => 
                        <Project1 /> } 
                    />
                    <Route path="/services" exact component={() => 
                        <ServicesPage /> } 
                    />
                    <Route path="/technologies" exact component={() => 
                        <Technologies /> } 
                    />
                    <Route path="/industries" exact component={() => 
                        <Industry /> } 
                    />
                    <Route path="/blog" exact component={() => 
                        <Blog /> } 
                    />
                    <Route path="/Hacking-Humans-is-easier-than-Hacking-Computers" exact component={() => 
                        <Blog1 /> } 
                    />
                    <Route path="/Website-or-Mobile-App" exact component={() => 
                        <Blog2 /> } 
                    />
                    <Route path="/Automation-the-present-and-future" exact component={() => 
                        <Blog3 /> } 
                    />
                    <Route path="/UI-vs-UX" exact component={() => 
                        <Blog4 /> } 
                    />
                    <Route path="/What you need to know about SEO before starting a website" exact component={() => 
                        <Blog5 /> } 
                    />
                    <Route path="/The Dark Web is notorious" exact component={() => 
                        <Blog6 /> } 
                    />
                    <Route path="/4 Reasons why Software Quality Assurance is Important" exact component={() => 
                        <Blog7 /> } 
                    />
                </Switch>
            </HashRouter>
        </div>
    )
}

export default Main
