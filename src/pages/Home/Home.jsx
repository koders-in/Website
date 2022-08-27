import React from "react";
import "./Home.scss";
import Greetings from "../../components/Landing/Greetings";
import Description from "../../components/Landing/Description";
import Services from "../../components/Landing/Services";
import Working from "../../components/Landing/Working";
import Testimonials from "../../components/Landing/Testimonials";
import ContactUs from "../../components/Landing/ContactUs";
import Footer from "../../components/Footer/Footer";

function Home() {
  return (
    <div className="home" id="home">
      <Greetings />
      <Description />
      <Services />
      <Working />
      <Testimonials />
      <ContactUs />
      <Footer />
    </div>
  );
}

export default Home;
