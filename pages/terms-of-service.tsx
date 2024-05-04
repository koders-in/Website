import React from "react";
import Head from "next/head";

import "aos/dist/aos.css";

import { Divider, Footer, GradientText, Navbar } from "../components";
import { termsOfServices } from "../helper/constant";

const TermsOfServic = () => {
  return (
    <div className="bg-main-primary overflow-hidden relative">
      <Head>
        <title>Terms of Services</title>
      </Head>
      <Navbar />
      <div className="py-28 w-[90%] mx-auto">
        <GradientText
          aos="fade-up"
          className="w-[100%] mx-auto sm:w-fit text-[2.2rem] leading-none mb-3 md:mb-0 md:leading-normal  sm:text-[2.8rem] text-center bg-gradient-to-r from-white to-main-teal font-miligrambold mt-9 aos-animate"
          text="Terms Of Services"
        />
        <Divider className="mt-8" />
        {termsOfServices.map((item, i) => (
          <React.Fragment key={i}>
            <Divider className="mt-8" />
            <h4
              data-aos="fade-up"
              className="font-miligramLight text-[1.2rem] sm:text-[1.5rem] mt-12 text-white w-[96%] mx-auto text-justify aos-animate"
            >
              {item.heading}
            </h4>
            <p
              data-aos="fade-up"
              className="font-miligramLight text-[1.05rem] mt-6 text-main-white-700 w-[96%] mx-auto text-justify aos-animate"
            >
              {item.description}
            </p>
          </React.Fragment>
        ))}
        <p
          data-aos="fade-up"
          className="font-miligramLight text-[1.05rem] mt-6 text-main-white-700 w-[96%] mx-auto text-justify aos-animate"
        >
          By accessing or using the Services, you acknowledge that you have
          read, understood, and agree to be bound by these Terms. If you do not
          agree to these Terms, you may not access or use the Services.
        </p>
      </div>
      <Footer />
    </div>
  );
};

export default TermsOfServic;
