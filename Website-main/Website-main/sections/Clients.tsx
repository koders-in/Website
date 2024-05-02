import AOS from "aos";
import Image from "next/image";
import dynamic from "next/dynamic";
import React, { Suspense } from "react";

import "aos/dist/aos.css";

import { sleep } from "../helper";
import { img3, indianArmy, instaride, theBest } from "../assets";

const Divider = dynamic(() => import("../components/Divider"), {
  suspense: true,
});

const GradientText = dynamic(() => import("../components/GradientText"), {
  suspense: true,
});

let TEMP_COUNT = 0;

const Clients = () => {
  const isRunning = React.useRef(false);
  const [count, setCount] = React.useState(TEMP_COUNT);
  const [leftOutStyle, setLeftOutStyle] = React.useState("");
  const [rightOutStyle, setRightOutStyle] = React.useState("rightOut-animate");

  React.useEffect(() => {
    const updateAnimation = async () => {
      setLeftOutStyle("");
      setRightOutStyle("");
      if (TEMP_COUNT < 2) {
        TEMP_COUNT = TEMP_COUNT + 1;
      } else TEMP_COUNT = 0;
      setCount(TEMP_COUNT);
      await sleep(1000 * 4);
      setLeftOutStyle("animate-leftOut");
      setRightOutStyle("animate-rightOut");
      await sleep(1000);
      updateAnimation();
    };
    if (!isRunning.current) {
      isRunning.current = true;
      updateAnimation();
    }
  }, []);

  React.useEffect(() => {
    AOS.init({
      easing: "ease-out",
      once: true,
      duration: 600,
    });
  }, []);

  return (
    <div className="py-16 overflow-hidden xxl:py-[10rem]">
      <Suspense fallback={<div className="text-main-teal">Loading...</div>}>
        <Divider className="mt-5 xl:my-10" />
        <GradientText
          text="Trusted by"
          className="text-[2.2rem]  leading-none mb-2 md:mb-0 md:leading-normal sm:text-[3rem] w-fit mx-auto text-center bg-gradient-to-r from-white to-main-teal font-miligrambold"
        />
      </Suspense>
      {count === 0 && (
        <h2
          className={`text-center text-[2.2rem]  leading-none mb-2 md:mb-0 md:leading-normal sm:text-[3rem]  font-miligrambold text-white font-medium animate-leftIn ${leftOutStyle}`}
        >
          The Best
        </h2>
      )}
      {count === 1 && (
        <h2
          className={`text-center text-[2.2rem]  leading-none mb-2 md:mb-0 md:leading-normal sm:text-[3rem]  font-miligrambold text-white font-medium animate-rightIn ${rightOutStyle}`}
        >
          The German Govt.
        </h2>
      )}
      {count === 2 && (
        <h2
          className={`text-center text-[2.2rem]  leading-none mb-2 md:mb-0 md:leading-normal sm:text-[3rem]  font-miligrambold text-white font-medium animate-leftIn ${leftOutStyle}`}
        >
          The Indian Army
        </h2>
      )}
      {count === 3 && (
        <h2
          className={`text-center text-[2.2rem]  leading-none mb-2 md:mb-0 md:leading-normal sm:text-[3rem]  font-miligrambold text-white font-medium animate-rightIn ${rightOutStyle}`}
        >
          Amazon
        </h2>
      )}
      <div
        data-aos="fade-up"
        className="w-[85%] h-[30vh]  md:h-[43vh] xl:h-[60vh] overflow-hidden sm:w-[55%] mt-10 mx-auto shadow-client shadow-main-teal border-2 border-main-light_white"
      >
        {count === 0 && (
          <Image src={theBest} alt="project" className="w-full h-full" />
        )}
        {count === 1 && (
          <Image src={instaride} alt="project" className="w-full h-full" />
        )}
        {count === 2 && (
          <Image src={indianArmy} alt="project" className="w-full h-full" />
        )}
        {count === 3 && (
          <Image src={img3} alt="project" className="w-full h-full" />
        )}
      </div>
      <Suspense fallback={<div className="text-main-teal">Loading...</div>}>
        <Divider className="xl:my-10" />
      </Suspense>
    </div>
  );
};

export default Clients;
