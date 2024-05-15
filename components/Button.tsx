import React, { useState } from "react";
import Image from "next/image";

import AnimatedBorder from "./AnimatedBorder";

interface Props {
  className?: string;
  text: string;
  logo?: string;
  hoverLogo?: string;
  OnClick: () => void;
  logoStyle?: string;
  hoveLogoStyle?: string;
  isSelect?: string;
  isBorder?: true;
  eleId?: string;
  type?: "button" | "submit";
  disabled?: boolean;
  styleObj?: {
    [key: string | number]: string;
  };
}
const Button = ({
  className,
  text,
  logo,
  OnClick,
  hoverLogo,
  logoStyle,
  hoveLogoStyle,
  isSelect,
  isBorder,
  eleId,
  type,
  disabled,
  styleObj,
}: Props) => {
  const [iconStyle, setIconStyle] = useState("");
  return (
    <button
      style={{ ...styleObj }}
      disabled={disabled ? disabled : false}
      type={type}
      id={eleId}
      onClick={OnClick}
      className={`group relative cursor-pointer flex items-center justify-center  ${className} ${
        isSelect ? "bg-main-lightTeal text-black scale-105 md:scale-110" : ""
      } `}
      onMouseEnter={() => {
        if (window.innerWidth > 1024) setIconStyle("brightness-50");
        else setIconStyle("");
      }}
      onMouseLeave={() => setIconStyle("")}
    >
      {logo ? (
        (iconStyle && hoverLogo) || isSelect ? (
          <Image
            src={hoverLogo}
            className={`w-fit h-5 mr-2  ${hoveLogoStyle}`}
            alt="icon"
          />
        ) : (
          <Image
            src={logo}
            alt="icon"
            className={`w-fit h-5 mr-2 hover:brightness-75 ${iconStyle} ${logoStyle}`}
          />
        )
      ) : null}
      {text}
      {isBorder && <AnimatedBorder />}
    </button>
  );
};
export default Button;
