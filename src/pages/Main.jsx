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
                </Switch>
            </HashRouter>
        </div>
    )
}

export default Main
