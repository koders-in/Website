import Head from "next/head";
import Image from "next/image";
import dynamic from "next/dynamic";
import React, { useEffect, Suspense } from "react";

import { aboutStats, dataOfMapAnimation } from "../helper/constant";
import { aim, mission, quoteDown, quoteUp } from "../assets";

const Footer = dynamic(() => import("../components/Footer"), {
  suspense: true,
});
const Divider = dynamic(() => import("../components/Divider"), {
  suspense: true,
});
const GradientText = dynamic(() => import("../components/GradientText"), {
  suspense: true,
});
const Navbar = dynamic(() => import("../components/Navbar"), {
  suspense: true,
});
const WorldMap = dynamic(
  () => import("../components/pages-components/about/WorldMap"),
  {
    suspense: true,
  }
);

const about = () => {
  useEffect(() => {
    window.onscroll = () => {
      const element = document?.getElementById("map");
      if (element !== undefined && element !== null) {
        if (element?.offsetTop && window.pageYOffset) {
          if (element?.offsetTop - window.pageYOffset < 100) {
            const lines: any = document.getElementsByClassName("line");
            const locations: any =
              document.getElementsByClassName("location-icon");
            const bases: any = document.getElementsByClassName("base");
            for (let i = 0; i < lines.length; i++) {
              lines[i].id = dataOfMapAnimation[i].line;
              locations[i].id = dataOfMapAnimation[i].location;
              bases[i].id = dataOfMapAnimation[i].base;
            }
          }
        }
      }
    };
  });

  return (
    <div className="font-miligrambold bg-main-primary pt-28 relative overflow-hidden">
      <Head>
        <title>About</title>
      </Head>
      <Suspense fallback={<div className="text-main-teal">Loading...</div>}>
        <Navbar />
      </Suspense>
      <div className="w-[90%] mx-auto">
        <div className="md:h-[80vh] xxl:h-auto">
          <Suspense fallback={<div className="text-main-teal">Loading...</div>}>
            <Divider className=" h-[15vh] md:h-[14vh]" />
          </Suspense>
          <div className="z-10 text-center text-[1.8em] md:text-[2.15em] xxl:text-[2.8em] text-white w-[100%]   mx-auto leading-none relative">
            <p className="relative z-20 px-3 xl:w-fit mx-auto font-miligramTextBold">
              <Image
                src={quoteUp}
                alt={quoteUp}
                className="mb-3 top-[-40px] left-[-10px] md:top-[-68%] md:left-[-6%] w-[13%] md:w-[10%] xxl:h-[10%] z-0"
              />
              To build the best and invent a better
              <br className="hidden lg:block" /> tomorrow with the help of
              Technology.
              <Image
                src={quoteDown}
                alt={quoteDown}
                className="block mt-3 ml-auto bottom-[-20px] right-[-20px] md:bottom-[-65%] md:right-[-5%] w-[13%] md:w-[10%] xxl:h-[10%] z-0"
              />
            </p>
          </div>
          <Suspense fallback={<div className="text-main-teal">Loading...</div>}>
            <Divider className="h-14 sm:h-[10vh]" />
          </Suspense>
          <div className="text-center text-[1.25em] text-main-light_white  w-[100%] sm:w-[75%] md:w-[60%] lg:w-[70%] mx-auto leading-none font-miligramTextMedium font-medium">
            We are committed to building software solutions that are innovative
            and unparalleled in quality. We believe that by leveraging the full
            potential of our team, we can create software products that truly
            stand out in the market. At Koders, we are always striving to build
            software with new dimensions that truly make a difference for our
            customers.
          </div>
        </div>
        <Suspense fallback={<div className="text-main-teal">Loading...</div>}>
          <Divider className="h-20 sm:h-12 xxl:h-32" />
        </Suspense>
        <Suspense fallback={<div className="text-main-teal">Loading...</div>}>
          <GradientText
            aos="slide-right"
            className="w-[90%] sm:w-fit mx-auto leading-none mb-3 md:mb-0 md:leading-normal text-[2rem] sm:text-[2.8rem] text-center bg-gradient-to-r from-white to-main-teal font-miligrambold"
            text="MEET KODERS"
          />
        </Suspense>
        <p
          data-aos="slide-left"
          className="mt-2 text-[0.8rem] sm:text-[1.3rem] w-[100%] sm:w-[70%] mx-auto text-center text-main-light_white pb-2 font-miligramText400 leading-none"
        >
          We believe in fostering a positive and collaborative work environment
          where our team members can grow and develop their skills. We offer
          opportunities for learning and professional development, as well as a
          supportive and inclusive culture where everyone's contributions are
          valued.
        </p>
        {/* <Suspense fallback={<div className="text-main-teal">Loading...</div>}>
          <Divider className="h-10 sm:h-20" />
        </Suspense>
        <Image
          src={founder}
          alt={founder}
          width={700}
          height={700}
          className="mx-auto"
        />
        <p className="text-center font-miligramTextBookItalic font-light text-main-light_white text-[0.8em] sm:text-[1.2rem] py-2">
          Our founders Kartikey and Shaloni
        </p> */}
        {/* <OurFamily /> */}
        <Suspense fallback={<div className="text-main-teal">Loading...</div>}>
          <Divider className="h-10" />
        </Suspense>
        <Suspense fallback={<div className="text-main-teal">Loading...</div>}>
          <GradientText
            className="text-[2rem] font-miligrambold leading-none mb-3 md:mb-0 md:leading-normal sm:text-[2.8rem] mt-10 w-fit mx-auto text-center bg-gradient-to-r from-white to-main-teal"
            text="Our Mission"
          />
        </Suspense>
        <Suspense fallback={<div className="text-main-teal">Loading...</div>}>
          <Divider className="h-12" />
        </Suspense>
        <div className="flex w-fit mx-auto flex-col gap-10 md:gap-0 md:flex-row">
          <div className="md:w-[50%] md:px-8 lg:px-20">
            <Image
              className="block mx-auto"
              src={mission}
              alt={mission}
              width={100}
              height={100}
            />
            <Suspense
              fallback={<div className="text-main-teal">Loading...</div>}
            >
              <Divider className="h-5" />
            </Suspense>
            <p className="text-main-light_white_eight text-center w-[80%] mx-auto text-[1.25em] md:text-[1.3rem] leading-none font-miligramTextBold">
              Our mission is to help brands, particularly in the sneaker and
              E-commerce industries, fly to the moon.
            </p>
          </div>
          <div className="border-b-2 w-[60%] mx-auto md:w-auto md:border-b-0 md:border-r-2 border-main-teal"></div>
          <div className="md:w-[50%] md:px-8 lg:px-20">
            <Image
              className="block mx-auto"
              src={aim}
              alt={aim}
              width={100}
              height={100}
            />
            <Suspense
              fallback={<div className="text-main-teal">Loading...</div>}
            >
              <Divider className="h-5" />
            </Suspense>
            <p className="text-main-light_white_eight text-center w-[80%] mx-auto text-[1.25em] md:text-[1.3rem] leading-none font-miligramTextBold">
              Our vision at Koders is to be the go-to software development
              company for businesses seeking reliable, high quality solutions.
            </p>
          </div>
        </div>
        <Suspense fallback={<div className="text-main-teal">Loading...</div>}>
          <Divider className="h-32" />
        </Suspense>
        <Suspense fallback={<div className="text-main-teal">Loading...</div>}>
          <GradientText
            aos="slide-right"
            className="w-[90%] sm:w-fit mx-auto leading-none mb-3 md:mb-0 md:leading-normal text-[2rem] sm:text-[2.8rem] text-center bg-gradient-to-r from-white to-main-teal font-miligrambold"
            text="Work and Grow with us"
          />
        </Suspense>
        <p
          id="map"
          data-aos="slide-left"
          className="mt-2 text-[0.8rem] sm:text-[1.3rem] w-[80%] sm:w-[45%] mx-auto text-center text-main-light_white pb-2 font-miligramText400 leading-none"
        >
          Since our launch in 2018, Koders has had the pleasure of working with
          clients across 10+ countries.
        </p>
        <Suspense fallback={<div className="text-main-teal">Loading...</div>}>
          <Divider className="h-12 sm:h-0" />
        </Suspense>
        <Suspense fallback={<div className="text-main-teal">Loading...</div>}>
          <WorldMap />
        </Suspense>
        <Suspense fallback={<div className="text-main-teal">Loading...</div>}>
          <Divider className="h-12 sm:h-0" />
        </Suspense>
        <div className="w-[90%] justify-center mx-auto flex flex-wrap">
          {aboutStats.map((item, i) => {
            return (
              <div
                key={i}
                className={`flex w-[50%] sm:w-[49%] md:w-[32%] flex-col justify-center items-center px-4 py-3 md:px-3 md:py-5 lg:px-8 xl:px-16 lg:py-10 text-white ${item.classes}`}
              >
                <div className="flex text-[2rem] sm:text-[3rem] justify-center items-center font-miligramLight">
                  {item.stat}
                  <span className="text-[2rem] text-white">+</span>
                </div>
                <p className="text-white w-[9rem] text-center text-[1rem] sm:text-[1.6rem] font-miligramLight font-extralight">
                  {item.title}
                </p>
              </div>
            );
          })}
        </div>
        <Suspense fallback={<div className="text-main-teal">Loading...</div>}>
          <Divider className="h-32" />
        </Suspense>
      </div>
        <Suspense fallback={<div className="text-main-teal">Loading...</div>}>
          <Footer />
        </Suspense>
    </div>
  );
};

export default about;
