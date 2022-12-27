import Head from "next/head";
import React from "react";
import AOS from "aos";

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
        <title>Customer Support</title>
      </Head>
      <Navbar />
      <div className="pb-10 pt-28 w-[95%] sm:w-[90%] mx-auto">
        <GradientText
          aos="fade-up"
          className="w-[100%] mx-auto sm:w-fit text-[2.2rem] leading-none mb-3 md:mb-0 md:leading-normal  sm:text-[2.8rem] text-center bg-gradient-to-r from-white to-main-teal font-miligrambold mt-9"
          text="Customer Support"
        />
        <br />
        <p
          data-aos="fade-up"
          className="font-miligramLight text-[1.05rem] mt-12 text-main-white-700 w-[96%] mx-auto text-justify"
        >
          The Koders Customer Support page contains several types of problems
          that you may have faced so that they can be resolved quickly and you
          can be free of stress. For example, you can obtain further project
          details, adjust delivery dates, assistance with refunds, and much
          more. The Koders Customer Support also provides further information on
          payments, project deliveries, and other related topics.
          <br /> <br />
          The website includes a number of criteria to help you get your
          questions answered quickly, efficiently, and without difficulty. If
          you require expert assistance on a variety of topics, you can call the
          Koders Helpline or access Koders Customer Support. The Support
          Executive will respond quickly to ensure that your experience is
          positive and pleasurable. Please feel free to contact the Koders
          Customer Support if you ever experience any bugs, problems with
          software updates, or issues with system compatibility.
          <br /> <br />
          You can even notify your loved ones about the help page so that they
          can properly address their issues as well.
        </p>
      </div>
      <Divider className="mt-8" />
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
