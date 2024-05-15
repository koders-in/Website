import AOS from "aos";
import Image from "next/image";
import dynamic from "next/dynamic";
import React, { Suspense } from "react";

import "aos/dist/aos.css";

import { rightAero } from "../assets";
import { whyWe } from "../helper/constant";
import { useUpdateSlide } from "../helper/hook";

const Divider = dynamic(() => import("../components/Divider"), {
  suspense: true,
});

const Info = dynamic(
  () => import("../components/section-comonents/why-koders/Info"),
  {
    suspense: true,
  }
);

const WhyKoders = () => {
  const handleSliding = useUpdateSlide();
  React.useEffect(() => {
    handleSliding.onSwipe("whyKoders");
  });

  React.useEffect(() => {
    AOS.init({
      easing: "ease-out-cubic",
      once: true,
      duration: 1500,
    });
  }, []);

  return (
    <div className="py-16 bg-main-secondary sm:h-auto lg:h-auto xxl:py-[10rem]">
      <Suspense fallback={<div className="text-main-teal">Loading...</div>}>
        <Divider className="mt-5 xl:my-10" />
      </Suspense>
      <h1
        data-aos="fade-up"
        className="leading-none font-bold w-[90%] mx-auto sm:w-full text-[2.2rem] sm:text-[3rem] text-center text-white font-miligrambold"
      >
        Why trust&nbsp;
        <span className="bg-gradient-to-r from-white to-main-teal bg-clip-text text-transparent">
          Koders
        </span>
        &nbsp;to
        <br />
        <span className="bg-gradient-to-r from-white to-main-teal bg-clip-text text-transparent">
          Supercharge&nbsp;
        </span>
        your business?
      </h1>

      <div className="hidden lg:flex gap-2 mt-16 w-[93%] xxl:w-[90%] mx-auto">
        <Suspense fallback={<div className="text-main-teal">Loading...</div>}>
          {whyWe.map((item, i) => {
            const css = i < 3 ? " border-r-2" : "";
            const aos =
              i === 0 ? "fade-right" : i < 3 ? "fade-up" : "fade-left";
            return (
              <Info
                key={i}
                className={item.class + css}
                stat={item.state}
                title={item.title}
                html={item.html}
                aos={aos}
              />
            );
          })}
        </Suspense>
      </div>
      <div
        className="flex bg-main-white-500 py-4 md:px-3 rounded-xl w-[90%] lg:hidden relative mt-10 justify-center items-center mx-auto overflow-x-clip h-[340px]"
        id="whyKoders"
      >
        {!(handleSliding.activeIndex <= 0) && (
          <div
            onClick={handleSliding.handleRightSlide}
            className="z-10 p-1 w-10 h-10 flex justify-center items-center bg-white cursor-pointer rounded-full font-miligramMedium  absolute left-2"
          >
            <Image src={rightAero} alt="" className="h-2 rotate-180" />
            &nbsp;
            {handleSliding.activeIndex <= 0
              ? ""
              : whyWe[handleSliding.activeIndex - 1]?.state}
          </div>
        )}
        {!(handleSliding.activeIndex >= 3) && (
          <div
            onClick={handleSliding.handleLeftSlide}
            className="z-10 p-1 w-10 h-10 flex justify-center items-center bg-white cursor-pointer rounded-full font-miligramMedium absolute right-2"
          >
            {handleSliding.activeIndex >= 3
              ? ""
              : whyWe[handleSliding.activeIndex + 1]?.state}
            &nbsp;
            <Image src={rightAero} alt="" className="h-2" />
          </div>
        )}
        {whyWe.map((item, i) => (
          <Suspense
            fallback={<div className="text-main-teal">Loading...</div>}
            key={i}
          >
            <Info
              className={
                "text-center absolute w-[230px] md:w-[80%] transition-all duration-500"
              }
              stat={item.state}
              title={item.title}
              html={item.html}
              key={i}
              translateX={handleSliding.translatePosition[i]}
              isMobile={true}
            />
          </Suspense>
        ))}
      </div>
      <div className="flex md:hidden justify-center items-center gap-2 mt-9 md:mt-5">
        {handleSliding.translatePosition.map((item, i) => {
          return (
            <div
              key={i}
              className={`rounded-full w-2 h-2 ${
                item === 0 ? "bg-white" : "bg-main-light_white"
              }`}
            ></div>
          );
        })}
      </div>
      <Suspense fallback={<div className="text-main-teal">Loading...</div>}>
        <Divider className="xl:my-10" />
      </Suspense>
    </div>
  );
};

export default WhyKoders;
