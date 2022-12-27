import Head from "next/head";
import React from "react";
import AOS from "aos";

import "aos/dist/aos.css";

import { Footer, GradientText, Navbar } from "../components";
import { privacyPolicyPoints } from "../helper/constant";

const PrivacyPolicy = () => {
  React.useEffect(() => {
    window.scrollTo({
      top: 0,
    });
  }, []);
  React.useEffect(() => {
    AOS.init({
      easing: "ease-out",
      once: true,
      duration: 600,
    });
  }, []);
  return (
    <div className="bg-main-primary overflow-hidden relative">
      <Head>
        <title>Privacy Policy</title>
      </Head>
      <Navbar />
      <div className="pb-10 pt-28 w-[95%] sm:w-[90%] mx-auto">
        <GradientText
          aos="fade-up"
          className="w-[100%] mx-auto sm:w-fit text-[2.2rem] leading-none mb-3 md:mb-0 md:leading-normal  sm:text-[2.8rem] text-center bg-gradient-to-r from-white to-main-teal font-miligrambold mt-9"
          text="Privacy Policy"
        />
        <br />
        <div
          data-aos="fade-up"
          className="font-miligramLight text-[1.05rem] mt-12 text-main-white-700 w-[96%] mx-auto text-justify"
        >
          Before you use this website we encourage you to familiarize yourself
          with our Privacy Policy and its details.
          <ul className="list-disc ml-3 sm:ml-0">
            {privacyPolicyPoints.map((item, i) => (
              <li
                className="font-miligramLight my-6 text-[1.05rem] text-main-white-700 w-[96%] mx-auto text-justify"
                key={i}
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
