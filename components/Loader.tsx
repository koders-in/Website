import React from "react";
import { FadeLoader } from "react-spinners";

const Loader = () => {
  return (
    <div className="absolute w-full h-full backdrop-blur-md z-50 flex justify-center items-center">
      <FadeLoader
        color="#00A99D"
        loading={true}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  );
};

export default Loader;
