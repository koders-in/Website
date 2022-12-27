import React from "react";
import Image from "next/image";
import { useRouter } from "next/router";

import Tag from "../../Tag";
import { blogMain, blogProfile } from "../../../assets";
import { blogs } from "../../../helper/constant";

const MainCard = () => {
  const router = useRouter();
  const handleNavigate = (href: string) => {
    router.push(href);
  };
  const currentPath = router?.pathname; // to get current route

  return (
    <div className="lg:flex mt-16 gap-9">
      <div data-aos="fade-right" className="w-full lg:w-[68%] py-2">
        <Image
          onClick={() => handleNavigate(`${currentPath}/${blogs[0].id}`)}
          src={blogs[0].img}
          alt="blogMain"
          className="w-full h-full cursor-pointer"
        />
      </div>
      <div
        data-aos="fade-left"
        className="w-full lg:w-[32%] mt-2 sm:mt-0 relative pb-14 lg:pb-0"
      >
        <h1
          onClick={() => handleNavigate(`${currentPath}/${blogs[0].id}`)}
          className="text-white text-[1.4rem] leading-[1.4rem] mt-2 font-miligrambold"
        >
          {blogs[0].title}
        </h1>
        <div className="flex items-center justify-start gap-3 mt-5">
          <Tag className="" text="Ethical Hacking" />
          <Tag className="" text="Cyber Security" />
        </div>
        <p className="text-main-light_white text-[1rem] mt-5 font-miligramTextBook">
          {blogs[0].mainPara}...
          <button
            onClick={() => handleNavigate(`${currentPath}/${blogs[0].id}`)}
            className="border-b-[1px] text-[1rem] border-transparent hover:border-main-lightTeal font-miligramTextBook hover:font-miligramTextMedium text-main-lightTeal cursor-pointer leading-[1rem]"
          >
            Read More
          </button>
        </p>

        <div className="flex justify-between items-center absolute bottom-0 w-full">
          <span className=" text-white block font-miligramMedium">
            {blogs[0].date}
          </span>
          <div className="overflow-hidden border-[1px] border-main-teal rounded-full mr-3 w-12 h-12 p-2">
            <Image
              src={blogs[0].profile}
              alt="profile"
              className="h-full w-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainCard;
