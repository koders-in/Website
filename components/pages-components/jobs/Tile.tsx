import Image from "next/image";
import React from "react";

interface Props {
  icon: string;
  text: string;
  classes?: string;
  index?: number;
}
const Tile = ({ icon, text, classes, index }: Props) => {
  return (
    <div
      className={` mt-2 sm:mt-0  w-[45%] xl:w-[31.5%] border-2 border-main-teal rounded-2xl bg-main-secondary flex flex-col gap-2 sm:gap-3 items-center justify-center ${
        index < 3 ? classes : "py-6 sm:py-8"
      }`}
    >
      <Image
        src={icon}
        alt={icon}
        className="h-[40px] w-[40px] md:h-[70px] md:w-[70px]"
      />
      <p
        className="text-white font-miligramLight text-[1em] sm:text-[1.4em] text-center m-0 p-0 leading-none"
        dangerouslySetInnerHTML={{ __html: text }}
      ></p>
    </div>
  );
};

export default Tile;
