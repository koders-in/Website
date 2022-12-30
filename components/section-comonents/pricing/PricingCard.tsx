import React from "react";
import Image from "next/image";

import Button from "../../Button";
import { useRouter } from "next/router";
import { check, mostPopular } from "../../../assets";
import { CardObject } from "../../../helper/constant";

const PricingCard = ({
  description,
  price,
  services,
  title,
  isMobile,
  translateX,
  className,
  aos,
  setAppContext,
  pricing,
  index,
  exactPrice,
}: CardObject) => {
  const router = useRouter();
  const handleNavigate = (href: string) => {
    router.push(href);
  };
  return (
    <div
      data-aos={aos}
      style={
        isMobile
          ? {
              transform: `translateX(${translateX}px) ${
                translateX === 0 ? "scale(1.1)" : ""
              }`,
            }
          : {}
      }
      className={`shadow-lg md:w-[25%] shadow-black py-5 px-3 xl:px-6 rounded-xl bg-main-lightBg hover:bg-black hover:shadow-main-teal ${className}`}
    >
      {/* ------Most popular tag------- */}
      {index === 1 && (
        <Image
          className="absolute top-[-25%] left-[1%] hidden lg:inline-block"
          src={mostPopular}
          alt={mostPopular}
        />
      )}
      <div className="w-[80%] text-center text-[13px] sm:text-[0.9rem] xl:text-[1rem] font-miligrambold mx-auto  py-[8px] text-black bg-main-teal rounded-lg -translate-y-8">
        {title}
      </div>
      {/* <p className="text-center text-[0.8rem] xl:text-[0.9rem] leading-none lg:mx-auto text-white font-miligramTextBook font-light">
        {description}
      </p> */}
      <div className="py-2 lg:py-3 text-main-light_white text-center font-miligramLight text-[0.8rem] xl:text-[0.9rem] border-b-[1px] border-main-teal">
        <span className="text-[1.2rem] xl:text-[1.5rem] text-white font-miligramMedium">
          {price}&nbsp;
        </span>
        / hour
      </div>
      <Button
        OnClick={() => {
          setAppContext(`${exactPrice}`);
          handleNavigate("start-project");
        }}
        text="Get Started"
        className="mx-auto text-[0.8rem] xl:text-[1rem] w-full block mt-3 sm:mt-5 bg-main-greenOpt-200 font-miligramLight text-main-lightTeal py-[6px] px-8 rounded-lg border-[1px] border-main-lightTeal hover:text-main-teal"
      />
      <ul className="mt-3 lg:mt-4 w-full xxl:w-[80%] mx-auto h-[150px] md:h-[170px] ">
        {services.map((item, i) => (
          <li
            key={i}
            className="text-white gap-2 flex text-[0.8rem] xl:text-[0.9rem] items-center mt-3 lg:mt-3 leading-none"
          >
            <Image src={check} alt="checked" className="h-3 w-3" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PricingCard;
