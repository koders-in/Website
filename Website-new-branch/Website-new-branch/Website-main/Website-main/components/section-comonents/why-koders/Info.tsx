import React from "react";

import Divider from "../../Divider";
import GradientText from "../../GradientText";

interface Props {
  stat: string;
  title: string;
  html?: string;
  className: string;
  isMobile?: boolean;
  translateX?: number;
  aos?: string;
}

const Info = ({
  stat,
  html,
  title,
  className,
  isMobile,
  translateX,
  aos,
}: Props) => {
  return (
    <div
      data-aos={aos}
      data-aos-anchor-placement="top-center"
      className={`${className} w-full md:w-1/2`}
      style={
        isMobile
          ? {
              transform: `translateX(${translateX}px) ${
                translateX === 0 ? "scale(1.1)" : "scale(0)"
              }`,
            }
          : {}
      }
    >
      <GradientText
        className="text-[10rem] leading-none xl:text-[12.5rem] text-center xl:leading-[12.5rem] bg-gradient-to-r from-white via-main-lightTeal to-main-teal font-battambangMedium font-normal"
        text={stat}
      />
      <p className="text-center text-white text-[1.5rem] leading-none xl:text-[1.7rem] my-1 lg:mt-5  font-miligrambold font-bold">
        {title}
      </p>
      <Divider className="mt-3 md:hidden" />
      <div
        className="mt-2 xl:mt-5 font-miligramText400 font-medium text-[1.03rem] md:text-[1.15rem] text-main-light_white"
        dangerouslySetInnerHTML={{ __html: html }}
      ></div>
    </div>
  );
};

export default Info;
