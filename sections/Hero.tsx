import Image from "next/image";
import dynamic from "next/dynamic";
import React, { Suspense } from "react";

import { homeBg, homeBgBottom } from "../assets/index";

const Divider = dynamic(() => import("../components/Divider"), {
  suspense: true,
});

const GradientText = dynamic(() => import("../components/GradientText"), {
  suspense: true,
});

const Hero = () => {
  return (
    <div className="bg-main-primary pt-28 relative overflow-hidden h-[100vh]">
      <Suspense fallback={<div className="text-main-teal">Loading...</div>}>
        <Divider className="mt-[28vh]" />
      </Suspense>
      <div className=" absolute top-0 left-0 w-[50%] md:w-[30%]">
        <Image
          src={homeBg}
          alt=""
          // className=""
          priority ={true}
        />
      </div>
      <div className="absolute -bottom-10 right-0 w-[50%] md:w-[28%]">
        <Image
            src={homeBgBottom}
            alt=""
            
            priority ={true}
          />
          
      </div>
      
      <h1 className="leading-[38px] sm:leading-[60px] text-[1.5rem] xsm:text-[2.5rem] sm:text-[4rem] text-white text-center m-0 p-0 font-medium font-miligrambold">
        Infrastructure for
      </h1>
      <Suspense fallback={<div className="text-main-teal">Loading...</div>}>
        <GradientText
          className="leading-[28px] w-fit xsm:leading-[38px] sm:leading-[70px] sm:mt-3 mx-auto text-[1.5rem] xsm:text-[2.5rem] sm:text-[4rem] text-center bg-gradient-to-r from-white via-main-lightTeal to-main-teal font-miligrambold"
          text="High Quality Applications"
        />
      </Suspense>

      <p className="w-[90%] sm:w-fit mx-auto text-center text-[0.9rem] sm:text-[1.8rem] text-main-light_white_eight pt-6 md:pt-10 pb-28 font-miligramLight font-light">
        WEBSITES | MOBILE APPS | TOOLBOTS | <br className="visible sm:hidden" />
        MONITORS | UI/UX
      </p>
    </div>
  );
};

export default Hero;
