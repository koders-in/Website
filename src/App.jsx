import React from 'react'
import AnimatedCursor from "react-animated-cursor"
import './App.scss'
//import Portfolio from './pages/Portfolio/Portfolio'
//import Industry from './components/OurServices/Industry'
//import Technologies from './components/OurServices/Technologies'
//import ServicesPage from './components/OurServices/ServicesPage'
import Header from './components/Header/Header'
//import Career from './pages/Career/Career'
//import Community from './pages/Community/Community'
//import Project1 from './pages/Projects/Project1'
//import AboutUs from './pages/AboutUs/AboutUs'
//import Team from './pages/OurTeam/Team'
//import Home from './pages/Home/Home'
import Main from './pages/Main'



function App() {
  return (
    <div className="app">
      <AnimatedCursor
      innerSize={8}
      outerSize={30}
      color='51, 223, 211'
      outerAlpha={0.2}
      innerScale={0.7}
      outerScale={2}
    />
    <Header/>
    <Main/>
    </div>
  );
}

export default App;
