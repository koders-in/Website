import React, { useContext, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";

import { location, logo, phone } from "../assets";
import AnimatedBorder from "./AnimatedBorder";
import {
  footerButtons,
  socialMediaHandles,
  socialMediaTealIcons,
} from "../helper/constant";
import AppContext from "./AppContext";

const Footer = () => {
  const [onHover, setOnHover] = useState(false);
  const [hoverOnMob, setHoverOnMob] = useState(false);
  const [hoverOnSocialMedia, setHoverOnSocialMedia] = useState<any>(false);
  const { jobs }: any = useContext(AppContext);

  const router = useRouter();
  const handleNavigate = (href: string) => {
    router.push(href);
  };

  const handleNavigteTo = (item: any) => {
    if (item.title === "Pricing") {
      if (router.pathname !== "/" && router.pathname !== "pricing")
        router.push("/#pricing");
      return;
    }
    if (item.target) window.open(item?.route, "_blank");
    else {
      handleNavigate(item.route);
    }
  };

  return (
    <>
      <div
        id="footer"
        className="flex gap-4 md:gap-10 lg:gap-20 xl:gap-24 flex-col lg:flex-row justify-center pl-4 xsm:px-6 sm:pl-8 lg:pl-20 py-10 bg-main-secondary"
      >
        <div className="w-full lg:w-1/4  font-miligramText400">
          <Image
            src={logo}
            alt="logo"
            className="w-[12.2rem] cursor-pointer ml-2"
            onClick={() => handleNavigate("/")}
          />
          <div className="flex items-center my-3 gap-2">
            {socialMediaHandles.map((item, i) => (
              <Image
                src={
                  hoverOnSocialMedia === i ? socialMediaTealIcons[i] : item.src
                }
                alt={item.src}
                key={i}
                className="h-7 cursor-pointer brightness-50 hover:brightness-100"
                onClick={() => {
                  window.open(item.url, "_blank");
                }}
                onMouseEnter={() => setHoverOnSocialMedia(i)}
                onMouseLeave={() => setHoverOnSocialMedia(false)}
              />
            ))}
          </div>
          <div className="flex justify-start items-start  mt-4 text-[0.9rem] sm:text-[1rem] ml-2">
            <Image
              src={location}
              alt="location"
              className={
                onHover
                  ? "lg:mt-[11px] h-4 scale-125 mr-6 brightness-200"
                  : "lg:mt-[11px] h-4 scale-125 mr-6 brightness-50"
              }
            />
            <div
              className="text-main-light_white m-0 cursor-pointer transition-all duration-300 group"
              onMouseEnter={() => setOnHover(true)}
              onMouseLeave={() => setOnHover(false)}
              onClick={() =>
                window.open("https://goo.gl/maps/H91YctE1VjYX7p9J9", "_blank")
              }
            >
              <p className="mt-1 w-fit group-hover:text-white relative inline lg:block">
                111, New Mohanpur Colony,
                <AnimatedBorder />
              </p>
              <p className="mt-1 w-fit group-hover:text-white relative inline lg:block">
                Prem Nagar, Dehradun,
                <AnimatedBorder />
              </p>
              <p className="mt-1 w-fit group-hover:text-white relative inline lg:block">
                Uttarakhand - 248007
                <AnimatedBorder />
              </p>
            </div>
          </div>
          <div className="flex justify-start  mt-3 ml-2">
            <Image
              src={phone}
              alt="phone"
              className={`mt-[5px] mr-4 ${
                hoverOnMob ? "brightness-200" : "brightness-50 "
              }`}
            />
            <a
              onMouseEnter={() => setHoverOnMob(true)}
              onMouseLeave={() => setHoverOnMob(false)}
              href="tel:01353504103"
              className={`group relative text-main-light_white m-0 ml-1 text-[0.9rem] sm:text-[1rem] mt-[4px] hover:text-white`}
            >
              0135-3504103
              <AnimatedBorder />
            </a>
          </div>
        </div>
        <div className="flex justify-center flex-wrap w-full lg:w-3/4">
          {footerButtons.map((item, i) => {
            return (
              <div className="w-1/2 sm:w-1/4 mt-6 sm:mt-0" key={i}>
                <p className="text-white text-[1.1rem] sm:text-[1.4rem] font-miligrambold">
                  {item.title}
                </p>
                {item.buttons.map((item, i) => (
                  <p
                    id={item.title}
                    key={i}
                    className="relative group text-[0.9rem] md:text-[1.2rem] text-main-light_white mt-3 cursor-pointer font-miligramTextBook font-light  hover:text-white w-fit"
                    onClick={() => {
                      handleNavigteTo(item);
                    }}
                  >
                    {item.title === "Pricing" ? (
                      router.pathname === "/" ||
                      router.pathname === "pricing" ? (
                        <Link href="#pricing">Pricing</Link>
                      ) : (
                        "Pricing"
                      )
                    ) : (
                      item.title
                    )}
                    {item?.chip && jobs?.jobs_listing?.length && (
                      <span className="absolute w-auto right-[-340%] md:right-[-281%] xl:right-[-240%] bottom-[8%] font-miligramMedium text-[0.7rem] xxl:text-[1rem] bg-main-teal border-[0px] border-main-lightTeal text-black px-2 py-[3px] rounded-md pointer-events-none">
                        {item.chip}!
                      </span>
                    )}
                    <AnimatedBorder />
                  </p>
                ))}
              </div>
            );
          })}
        </div>
      </div>
      <p className="py-5 px-2 text-main-light_white text-[0.85rem] sm:text-[1.2rem] text-center font-miligramText400">
        Copyright ©2022 | Koders. All rights reserved.
      </p>
    </>
  );
};

export default Footer;
