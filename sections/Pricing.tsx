import AOS from "aos";
import dynamic from "next/dynamic";
import React, { Suspense, useContext } from "react";

import "aos/dist/aos.css";

import { AppContext } from "../components";
import { useUpdateSlide } from "../helper/hook";
import { pricingCardData } from "../helper/constant";

const Divider = dynamic(() => import("../components/Divider"), {
  suspense: true,
});

const GradientText = dynamic(() => import("../components/GradientText"), {
  suspense: true,
});

const PricingCard = dynamic(
  () => import("../components/section-components/pricing/PricingCard"),
  {
    suspense: true,
  }
);

const Pricing = () => {
  const handleSliding = useUpdateSlide();

  const { setAppContext }: any = useContext(AppContext);

  React.useEffect(() => {
    handleSliding.onSwipe("pricingSec");
  });

  React.useEffect(() => {
    AOS.init({
      easing: "ease-out",
      once: true,
      duration: 600,
    });
  }, []);

  return (
    <div
      id="pricing"
      className="py-16 bg-main-secondary xxl:py-[10rem] relative"
    >
      <Suspense fallback={<div className="text-main-teal">Loading...</div>}>
        <Divider className="mt-5 xl:my-10" />
        <GradientText
          aos="slide-left"
          className="w-[90%] leading-none mb-3 md:mb-0 md:leading-normal mx-auto sm:w-fit text-[2rem] sm:text-[3rem] text-center bg-gradient-to-r from-white to-main-teal font-miligrambold"
          text="Pricing that suits your needs."
        />
      </Suspense>
      <p
        data-aos="slide-right"
        className="text-[0.8rem] sm:text-[1.3rem] w-[80%] leading-none sm:w-1/2  lg:w-1/3 mx-auto text-center text-main-light_white pb-5 mt-2 font-miligramText400"
      >
        Choose the best pricing plan for your needs and budget to get the most
        value from our software.
      </p>
      {/* <div className="flex items-center gap-4 w-fit mx-auto text-main-light_white font-miligramLight">
        <span className={`text-[0.9rem] ${toggle ? "text-white" : ""}`}>
          Billed Monthly
        </span>
        <Suspense fallback={<div className="text-main-teal">Loading...</div>}>
          <Toogler handleToogle={handleToogle} />
        </Suspense>

        <span className={`text-[0.9rem] ${!toggle ? "text-white" : ""}`}>
          Billed Yearly
        </span>
      </div> */}
      <Suspense fallback={<div className="text-main-teal">Loading...</div>}>
        <Divider className="mt-10 md:h-16" />
      </Suspense>

      <Suspense fallback={<div className="text-main-teal">Loading...</div>}>
        <div className="hidden justify-between md:flex gap-7 xl:gap-12 w-[96%] lg:w-[90%] mx-auto relative">
          {pricingCardData.map((item, i) => (
            <PricingCard
              {...{
                setAppContext,
                pricing: item.price,
                index: i,
                exactPrice: item.exactPrice,
              }}
              key={i}
              aos="fade-up"
              {...item}
            />
          ))}
        </div>
      </Suspense>
      <div
        className="flex md:hidden gap-8 w-[100%] justify-center items-center overflow-hidden mx-auto relative h-[430px] overflow-x-clip"
        id="pricingSec"
      >
        <div
          className="absolute h-full hidden xsm:block w-[15%] msm:w-[27%] md:w-[30%] left-0 z-20"
          onClick={handleSliding.handleRightSlide}
        ></div>
        <div
          className="absolute h-full hidden xsm:block w-[15%] msm:w-[27%] md:w-[30%] right-0 z-20"
          onClick={handleSliding.handleLeftSlide}
        ></div>
        <Suspense fallback={<div className="text-main-teal">Loading...</div>}>
          {pricingCardData.map((item, i) => (
            <PricingCard
              {...{
                setAppContext,
                pricing: item.price,
                index: i,
                exactPrice: item.exactPrice,
              }}
              translateX={handleSliding.translatePosition[i]}
              className={`absolute top-10 w-[200px] transition-all duration-500 ${
                handleSliding.translatePosition[i] === 0 ? "z-10" : ""
              }`}
              key={i}
              isMobile={true}
              {...item}
            />
          ))}
        </Suspense>
      </div>
      <div className="absolute md:hidden bottom-6  xl:bottom-14 flex justify-center w-full">
        <div className="flex justify-center items-center gap-2 mt-10 sm:mt-0">
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
      </div>
      <Suspense fallback={<div className="text-main-teal">Loading...</div>}>
        <Divider className="xl:my-14" />
      </Suspense>
    </div>
  );
};

export default Pricing;
