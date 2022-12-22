import React from "react";

import Button from "../../Button";
import { add, tick } from "../../../assets";
import { FormState } from "../../../pages/start-project";

interface Props {
  technologies: Array<string>;
  handleClick: (data: string) => void;
  buttonsArray: Array<string>;
  containerStyle?: string;
}

const ButtonsGroup = ({
  buttonsArray,
  technologies,
  handleClick,
  containerStyle,
}: Props) => {
  return (
    <div
      className={`flex flex-wrap gap-3 md:gap-6 items-center font-miligramTextMedium font-medium md:pl-4 ${containerStyle}`}
    >
      {buttonsArray.map((item, i) => (
        <Button
          key={i}
          OnClick={() => handleClick(item)}
          text={item}
          logo={add}
          hoverLogo={tick}
          hoveLogoStyle="h-[8px] md:w-[18px] md:h-[18px]"
          logoStyle="h-[8px] md:w-[18px] md:h-[18px]"
          isSelect={technologies?.find((elm) => elm === item)}
          className="border-[1px] sm:border-2 text-[0.8rem] sm:text-[1.1rem] text-white border-main-lightTeal rounded-lg px-2 py-1 sm:px-[0.5rem] sm:py-[0.6rem] md:hover:bg-main-lightTeal md:hover:text-black"
        />
      ))}
    </div>
  );
};

export default ButtonsGroup;
