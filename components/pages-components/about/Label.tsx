import React from "react";

interface Props {
  name: string;
  position: string;
}
const Label = ({ name, position }: Props) => {
  return (
    <div className="pt-5 flex flex-col w-full absolute left-0 bottom-0 bg-gradient-to-b from-main-black-extraLight via-main-black-400 to-main-black-dark">
      <span className="text-main-teal font-miligramTextBold text-[0.9rem] leading-none">
        {name}
      </span>
      <span className="text-white font-miligramText400 text-[0.8rem] leading-none">
        {position}
      </span>
    </div>
  );
};

export default Label;
