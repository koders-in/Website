import AOS from "aos";
import Image from "next/image";
import dynamic from "next/dynamic";
import React, { useEffect, Suspense } from "react";

import "aos/dist/aos.css";
import { aloktomar, bgQuote, lnk } from "../assets";

const Divider = dynamic(() => import("../components/Divider"), {
  suspense: true,
});

const GradientText = dynamic(() => import("../components/GradientText"), {
  suspense: true,
});

const Mentor = () => {
  useEffect(() => {
    AOS.init({
      easing: "ease-out",
      once: true,
      duration: 1000,
    });
  }, []);

  return (
    <div className="py-16 xxl:py-[10rem] relative">
      <Suspense fallback={<div className="text-main-teal">Loading...</div>}>
        <Divider className="mt-5 xl:my-10" />
        <GradientText
          aos="slide-right"
          className="w-[90%]  leading-none mb-3 md:mb-0 md:leading-normal mx-auto sm:w-fit text-[2.2rem] sm:text-[3rem] text-center bg-gradient-to-r from-white to-main-teal font-miligrambold"
          text="Appreciation for Our Mentor"
        />
      </Suspense>
      <p
        data-aos="slide-left"
        className="text-[0.8rem] leading-none m-1 sm:text-[1.3rem] w-[80%] sm:w-1/2   mx-auto text-center text-main-light_white font-miligramText400"
      >
        Our Mentor has fostered a culture of continuous learning and shaped the
        future of Koders.
      </p>
      <Suspense fallback={<div className="text-main-teal">Loading...</div>}>
        <Divider className="mt-14" />
      </Suspense>
      <div className="md:w-[90%] lg:w-[80%] xl:w-[60%] mx-auto flex justify-center md:justify-start flex-wrap md:flex-nowrap gap-5 lg:gap-10">
        <div className="w-[70%] md:w-[20%]">
          <Image className="block mx-auto" alt="mentor" src={aloktomar} />
        </div>
        <div className="w-[90%] md:w-[80%]">
          <div className="flex gap-4 items-center justify-center md:justify-start">
            <div className="text-white font-miligramTextMedium sm:text-[1.5rem]">
              Alok Tomar
            </div>
            <button
              className="cursor-pointer "
              onClick={() =>
                window?.open(
                  "https://www.linkedin.com/in/aloktomar1/",
                  "_blank"
                )
              }
            >
              <Image alt="lnk" className="w-6 md:w-auto" src={lnk} />
            </button>
          </div>
          <div className="mt-2 text-center md:text-left text-[0.8rem] sm:text-[1.1rem] text-main-light_white font-miligramText400">
            Head SeMT, Ministry of Electronics and Information Technology
            (MeitY)
          </div>
          <div className="mt-10 md:mt-16 text-center md:text-left text-white font-miligramLight leading-6 text-[1rem] sm:text-[1.2rem] xl:w-[90%] relative">
            In appreciation of Alok Tomar, our mentor, a seasoned professional
            with 15+ years of expertise in IT projects, e-Governance, and drone
            technology. His leadership and personal connection greatly
            contribute to Koders' journey.
            <Image
              className="absolute top-[-40%] left-[-3%] w-28"
              alt="bgQuote"
              src={bgQuote}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mentor;
