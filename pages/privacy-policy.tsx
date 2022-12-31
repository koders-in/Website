import AOS from "aos";
import React from "react";
import Head from "next/head";

import "aos/dist/aos.css";

import { Divider, Footer, GradientText, Navbar } from "../components";
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
          At Koders,, we prioritize the privacy of our customers and take steps
          to protect their personal information. We are committed to data
          protection and respecting the privacy of our customers or anyone who
          might associate with us while delivering our products and services.
          This policy explains how we collect, use, and share data that we may
          obtain through our website and our software development services.
          <ul className="list-decimal ml-5 sm:ml-0">
            {privacyPolicyPoints.map((item, i) => (
              <li
                className="font-miligramLight my-6 text-[1.05rem] text-main-white-700 w-[96%] mx-auto text-justify"
                key={i}
              >
                {item}
              </li>
            ))}
            <li className="font-miligramLight my-6 text-[1.05rem] text-main-white-700 w-[96%] mx-auto text-justify">
              Your rights: You have the right to access, rectify, erase,
              restrict, or object to the processing of your personal
              information. You also have the right to withdraw your consent or
              to exercise your right to data portability. If you have any
              concerns about how we handle your personal information, you can
              contact us at
              <span
                onClick={() =>
                  window.open(`mailto:support@koders.in"?`, "_bank")
                }
                className="cursor-pointer hover:text-white"
              >
                &nbsp;support@koders.in
              </span>
            </li>
          </ul>
        </div>
        <div
          data-aos="fade-up"
          className="font-miligramLight text-[1.05rem] mt-8 text-main-white-700 w-[96%] mx-auto text-justify"
        >
          This privacy policy is subject to change at any time. We will make
          reasonable efforts to notify customers of any changes in a timely
          manner. By using our software development services, you consent to the
          collection, use, and sharing of your personal information as described
          in this privacy policy.
        </div>
        <Divider className="mt-12" />
      </div>
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
