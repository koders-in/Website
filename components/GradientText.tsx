import React from "react";

interface Props {
  className?: string;
  text: string;
  aos?: string;
  dataEasing?: string;
}
const GradientText = ({ className, text, aos, dataEasing }: Props) => {
  return (
    <h1
      data-aos={aos}
      data-aos-easing={dataEasing}
      className={`${className} font-medium bg-clip-text text-transparent`}
    >
      {text}
    </h1>
  );
};

export default GradientText;
