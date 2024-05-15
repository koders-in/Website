import React from "react";

const AnimatedBorder = () => {
  return (
    <>
      <span className="absolute -bottom-1 left-1/2 w-0 h-[2px] bg-main-teal group-hover:w-1/2 group-hover:transition-all group-hover:duration-300"></span>
      <span className="absolute -bottom-1 right-1/2 w-0 h-[2px] bg-main-teal group-hover:w-1/2 group-hover:transition-all group-hover:duration-300"></span>
    </>
  );
};

export default AnimatedBorder;
