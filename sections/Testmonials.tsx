import React, { useEffect, useState, useRef, Suspense } from "react";
import dynamic from "next/dynamic";
import Image from "next/image";
import { useRouter } from "next/router";
import AOS from "aos";

import "aos/dist/aos.css";

import { sleep } from "../helper";
import { TestmonialData, testmonialLogo } from "../helper/constant";

const Button = dynamic(() => import("../components/Button"), {
  suspense: true,
});

const Divider = dynamic(() => import("../components/Divider"), {
  suspense: true,
});

const GradientText = dynamic(() => import("../components/GradientText"), {
  suspense: true,
});

const ReviewBox = dynamic(() => import("../components/ReviewBox"), {
  suspense: true,
});

let timer = 0;
let index = 0;
const Testmonials = () => {
  const isRunning = useRef(false);
  const [currentItem, setCurrentItem] = useState<TestmonialData>(
    testmonialLogo[0]
  );
  const router = useRouter();
  const handleNavigate = (href: string) => {
    router.push(href);
  };

  useEffect(() => {
    const startAnimation = async () => {
      if (timer < 5) {
        timer += 1;
      } else {
        timer = 0;
        if (!(index < testmonialLogo.length)) {
          index = 0;
        }
        setCurrentItem(testmonialLogo[index]);
        index += 1;
      }
      await sleep(1000);
      startAnimation();
    };
    if (!isRunning.current) {
      isRunning.current = true;
      startAnimation();
    }
  });

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
          text="Don’t just take our word for it."
        />
      </Suspense>
      <p
        data-aos="slide-left"
        className="text-[0.8rem] leading-none m-1 sm:text-[1.3rem] w-[80%] sm:w-1/2   mx-auto text-center text-main-light_white font-miligramText400"
      >
        Take a look at what a few of our most successful customers have to say
        about Koders.
      </p>
      <Suspense fallback={<div className="text-main-teal">Loading...</div>}>
        <Divider className="mt-7 md:mt-0" />
        <ReviewBox
          {...{
            logo: currentItem?.logo,
            description: currentItem?.description,
            title: currentItem?.title,
            animationStyle: "animate-fadeOut",
            testmonialLogo: testmonialLogo,
          }}
        />
      </Suspense>

      <div className="w-[60%] sm:w-1/4 mx-auto flex items-center gap-4  sm:gap-7 xxl:gap-9 justify-center  mt-7 sm:mt-0">
        {testmonialLogo.map((item, i) => (
          <div
            onClick={() => {
              timer = 0;
              index = i;
              setCurrentItem(item);
            }}
            key={i}
            className="w-[45px] overflow-hidden mt-3 sm:w-12 rounded-full cursor-pointer"
            style={
              currentItem?.title === item.title
                ? { boxShadow: "0px 0px 11px 2px #38D8CC" }
                : { filter: "brightness(0.5)" }
            }
          >
            <Image
              src={item.logo}
              alt="logo"
              style={{
                opacity: item.title === currentItem?.title ? "0,.5" : 1,
              }}
              className={`w-full h-full rounded-full`}
            />
          </div>
        ))}
      </div>
      <Suspense fallback={<div className="text-main-teal">Loading...</div>}>
        <Button
          OnClick={() => handleNavigate("reviews/#footer")}
          text="Read More"
          className="text-[0.8rem] xxl:text-[1rem] mx-auto block mt-8 sm:mt-12 bg-main-greenOpt-200 font-miligramMedium text-main-lightTeal py-[8px] sm:py-[10px] px-6 sm:px-9 rounded-lg border-[1px] border-main-lightTeal hover:bg-main-lightTeal hover:text-white"
        />
        <Divider className="xl:my-10" />
      </Suspense>
    </div>
  );
};

export default Testmonials;
