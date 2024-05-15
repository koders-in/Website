import React from "react";
import Image from "next/image";

interface Props {
  title: string;
  logo: string;
  description: string;
  rating: number;
  link: string;
}
const TestmonialCard = ({ title, logo, description, rating, link }: Props) => {
  return (
    <div
      onClick={() => {
        if (link) window.open(link, "_blank");
      }}
      className={`border-2 border-main-teal rounded-md p-5 bg-main-secondary mt-5 ${
        link ? "cursor-pointer" : ""
      }`}
    >
      <div className="flex items-center mb-4">
        <Image
          src={logo}
          alt="logo"
          width="50"
          height="50"
          className="rounded-full mr-4"
        />
        <div className="text-white text-[20px]">
          <span>{title}</span>
          <div className="w-fit">{"⭐ ".repeat(rating)}</div>
        </div>
      </div>
      <p className="text-main-light_white text-justify">{description}</p>
    </div>
  );
};

export default TestmonialCard;
