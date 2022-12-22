import React, { useState } from "react";

interface Props {
  handleToogle?: (data: boolean) => void;
}

const Toogler = ({ handleToogle }: Props) => {
  const [toggle, setToggle] = useState(true);

  const toggleClass = "transition duration-300 ease transform translate-x-6";
  return (
    <div
      className={`w-12 m-0 h-6 flex items-center rounded-full cursor-pointer bg-main-greenOpt-200 border-[1.5px] border-main-teal overflow-hidden `}
      onClick={() => {
        setToggle(!toggle);
        handleToogle(!toggle);
      }}
    >
      <div
        className={
          "h-5 w-5 rounded-full transform shadow-xl" +
          (toggle
            ? "transition duration-300 ease bg-white ml-[1.5px]"
            : `${toggleClass} bg-main-teal`)
        }
      ></div>
    </div>
  );
};

export default Toogler;
