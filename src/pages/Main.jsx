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
import Project2 from './Projects/Project2';
import Project3 from './Projects/Project3';
import Project4 from './Projects/Project4';
import Project5 from './Projects/Project5';
import Project6 from './Projects/Project6';
import Project7 from './Projects/Project7';
import Project8 from './Projects/Project8';
import Project9 from './Projects/Project9';
import Project10 from './Projects/Project10';
import Project11 from './Projects/Project11';
import Description from '../components/Landing/Description';
import ScrollTop from './ScrollTop';

function Main() {
    return (
        <div>
            <HashRouter basename="/">
                <ScrollTop/>
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
                    <Route path="/desc" exact component={() => 
                        <Description /> } 
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
                    <Route path="/projects/Notes Application" exact component={() => 
                        <Project1 /> } 
                    />
                    <Route path="/projects/Food Delivery Application" exact component={() => 
                        <Project2 /> } 
                    />
                    <Route path="/projects/Twitter Monitor" exact component={() => 
                        <Project3 /> } 
                    />
                    <Route path="/projects/Virtual Hover Pen" exact component={() => 
                        <Project4 /> } 
                    />
                    <Route path="/projects/Cloud Kitchen" exact component={() => 
                        <Project5 /> } 
                    />
                    <Route path="/projects/Kourage" exact component={() => 
                        <Project6 /> } 
                    />
                    <Route path="/projects/Hawa UI" exact component={() => 
                        <Project7 /> } 
                    />
                    <Route path="/projects/Machina" exact component={() => 
                        <Project8 /> } 
                    />
                    <Route path="/projects/UC-Toolbot" exact component={() => 
                        <Project9 /> } 
                    />
                    <Route path="/projects/Squared IO" exact component={() => 
                        <Project10 /> } 
                    />
                    <Route path="/projects/AIO World" exact component={() => 
                        <Project11 /> } 
                    />
                </Switch>
            </HashRouter>
        </div>
    )
}

export default Main
