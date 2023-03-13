import React from "react";
import Image from "next/image";

import Toogler from "../../Toogler";
import Divider from "../../Divider";
import GradientText from "../../GradientText";
import { jobTypes } from "../../../helper/constant";
import { crossTeal, search, work } from "../../../assets";
import { useCareerHook, useLandingComp } from "../../../helper/careerHooks";
import ButtonsGroup from "../project-page-components/ButtonsGroup";

interface Props {
  setPinJobs: (data: any) => void;
  pinJobs: any;
  tempData: any;
  setNoMatch: (data: boolean) => void;
  department: Array<string>;
  setDepartment: (data: any) => void;
  filter: any;
  setFilter: (data: any) => void;
}
const LandingSection = () => {
  const {
    handleChange,
    handleToogle,
    handleClick,
    handleClickOnSearch,
    searchValue,
    filter,
  } = useCareerHook();

  return (
    <div className="">
      <GradientText
        aos="slide-left"
        text="Work at Koders"
        className="w-[100%] mx-auto sm:w-fit text-[2.2rem] leading-none mb-3 md:mb-0 md:leading-normal  sm:text-[2.8rem] text-center bg-gradient-to-r from-white to-main-teal font-miligrambold"
      />
      <p
        data-aos="slide-right"
        className="mx-auto text-[0.8rem] leading-none m-1 xl:w-[70%] sm:text-[1.3rem] text-center text-main-light_white font-miligramText400"
      >
        At Koders, we are dedicated to providing our employees with a supportive
        and positive work environment that fosters productivity, collaboration,
        and personal growth.
      </p>
      <Divider className="mt-14" />

      <div className="flex-wrap sm:flex-nowrap justify-center w-[100%] md:w-[75%] lg:w-[65%] xl:w-[60%] mt-6 xxl:mt-14 flex mx-auto gap-5 sm:gap-8 items-center sm:justify-between">
        <div className="w-full lg:w-[80%] border-[1.5px] border-main-teal mx-auto rounded-lg overflow-hidden flex">
          <div className="flex items-center w-full border-r-[1.5px] border-main-teal">
            <Image src={work} alt="aero" className="ml-5" />
            <input
              type="text"
              className="w-full px-4 py-1 outline-none border-none text-main-light_white placeholder:tracking-[2px] bg-transparent placeholder:text-main-light_white lett font-miligramTextBook"
              placeholder="Job Title"
              name="jobTitle"
              onChange={handleChange}
              value={filter.title}
            />
          </div>
          <div
            onClick={handleClickOnSearch}
            className="w-14 h-10 bg-main-greenOpt-200 flex justify-center items-center p-4 cursor-pointer"
          >
            <Image
              src={searchValue ? crossTeal : search}
              alt="aero"
              className=""
            />
          </div>
        </div>
        <div className="w-[100%] sm:w-48 flex sm:items-center gap-2">
          <span className="text-white font-miligramText400">Remote</span>
          <Toogler handleToogle={handleToogle} />
        </div>
      </div>
      <Divider className="h-6 sm:h-8" />
      <ButtonsGroup
        containerStyle="w-fit mx-auto"
        buttonsArray={jobTypes}
        handleClick={handleClick}
        technologies={filter?.departments}
      />
      <Divider className="h-12" />
      <div className=" border-b-2 border-main-teal"></div>
    </div>
  );
};

export default LandingSection;
