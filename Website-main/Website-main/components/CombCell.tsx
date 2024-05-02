import React from "react";
import Image from "next/image";

import { hex, hexBg } from "../helper/style";

interface Props {
  logo?: string;
  x?: string;
  y?: string;
  className?: string;
  id?: string;
}

const CombCell = ({ logo, className, x, y, id }: Props) => {
  const [iconStyle, setIconStyle] = React.useState("");
  return (
    <div
      className={`absolute ${className}`}
      style={{ top: `${x}px`, left: `${y}px` }}
    >
      <div
        className="combOuter block my-0 mx-auto relative w-[90px] h-[80px] bg-main-teal box-border rotate-90"
        style={{ ...hex }}
      >
        <div
          className="combInner absolute bg-main-secondary top-[4px] left-[4px] w-[82px] h-[72px] flex justify-center items-center transition-all duration-700"
          style={{ ...hexBg }}
          id={id}
        >
          <Image
            alt=""
            src={logo}
            className={"-rotate-90 h-8" + " " + iconStyle}
          />
        </div>
      </div>
    </div>
  );
};

export default CombCell;
