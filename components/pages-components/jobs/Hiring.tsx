import React from "react";
import { offersData } from "../../../helper/constant";
import Divider from "../../Divider";
import GradientText from "../../GradientText";
import Timeline from "./Timeline";
import Tile from "./Tile";

const Hiring = () => {
  return (
    <div>
      <div className=" border-b-2 border-main-teal"></div>
      <Divider className="h-24" />
      <GradientText
        className="w-[100%] mx-auto sm:w-fit text-[2.2rem] leading-none mb-3 md:mb-0 md:leading-normal  sm:text-[2.8rem] text-center bg-gradient-to-r from-white to-main-teal font-miligrambold"
        text="Hiring Process"
      />
      <Divider className="h-16 sm:h-20" />
      <Timeline />
      <Divider className="h-36" />
      <GradientText
        className="w-[100%] mx-auto sm:w-fit text-[2.2rem] leading-none mb-3 md:mb-0 md:leading-normal  sm:text-[2.8rem] text-center bg-gradient-to-r from-white to-main-teal font-miligrambold"
        text="What we Offer"
      />
      <p
        data-aos="slide-right"
        className="mx-auto text-[0.8rem] leading-none m-1 w-[80%] lg:w-[50%] sm:text-[1.2rem] text-center text-main-light_white font-miligramText400"
      >
        We are committed to providing our employees with a fulfilling and rewarding work experience.
      </p>
      <div className="w-full sm:w-[70%] flex-wrap gap-5  mx-auto mt-8 sm:mt-16 flex justify-between ">
        {[...offersData[0], ...offersData[1]].map((item, i) => {
          return (
            <Tile
              classes="py-9 sm:py-12 "
              key={i}
              icon={item.icon}
              text={item.text}
              index={i}
            />
          );
        })}
      </div>
      <Divider className="h-16" />
    </div>
  );
};

export default Hiring;
