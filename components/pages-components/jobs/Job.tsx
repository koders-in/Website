import React, { useState } from "react";
import Image from "next/image";

import Button from "../../Button";
import ApplyModal from "./ApplyModal";
import ThankModal from "../../ThankModal";
import DetailsModal from "./DetailsModal";
import { ObjectOfJob } from "../../../helper/constant";
// import { useFetchDataFromServer } from "../../../helper/careerHooks";
import { experienceIcon, locationTeal, work } from "../../../assets";

const Job = ({ experience, location, title, type, id }: ObjectOfJob) => {
  const [showModal, setShowModal] = useState({
    viewDetails: false,
    apply: false,
    thank: false,
  });
  const [viewDetails, setViewDetails] = useState<any>(null);
  // const fetchData = useFetchDataFromServer();

  const toogleDetailModal = async () => {
    try {
      if (viewDetails === null || viewDetails === undefined) {
        // TODO=> need to update code here
        // const res = await fetchData(`open-job-listings/${id}`, setViewDetails);
        // if (res?.status === 200) {
        //   setShowModal((p) => {
        //     return {
        //       ...p,
        //       viewDetails: !p.viewDetails,
        //     };
        //   });
        // } else {
        //   window.alert("Unable to fetch the job details. Try again later.");
        // }
      } else {
        setShowModal((p) => {
          return {
            ...p,
            viewDetails: !p.viewDetails,
          };
        });
      }
    } catch (error) {
      window.alert("Unable to fetch the job details. Try again later.");
    }
  };

  const toogleApplyModal = async () => {
    try {
      if (viewDetails === null || viewDetails === undefined) {
        // TODO=> need to update code here
        // const res = await fetchData(`open-job-listings/${id}`, setViewDetails);
        // if (res?.status === 200) {
        //   setShowModal((p) => {
        //     return {
        //       ...p,
        //       apply: !p.apply,
        //     };
        //   });
        // } else {
        //   window.alert("Something went wrong. Try again later.");
        // }
      } else {
        setShowModal((p) => {
          return {
            ...p,
            apply: !p.apply,
          };
        });
      }
    } catch (error) {
      window.alert("Something went wrong. Try again later.");
    }
  };

  const toogleThankModal = () => {
    setShowModal((p) => {
      return {
        ...p,
        thank: !p.thank,
      };
    });
  };

  return (
    <div
      id="jobBox"
      className="z-40 px-7 xxl:w-[90%] py-4 mx-auto border-2 rounded-lg mt-8 border-main-teal bg-main-secondary flex flex-col md:flex-row gap-4 xl:gap-0 justify-between items-center"
    >
      <div className="text-main-light_white w-[100%] md:w-[65%] lg:w-[60%]">
        <h1 className="text-white ml-1 sm:ml-0 text-[1.2rem] text-left sm:text-center md:text-left font-miligrambold">
          {title}
        </h1>
        <div className="flex mt-1 sm:mt-0 flex-wrap sm:flex-nowrap gap-[0.2rem] lg:gap-4 text-white sm:mx-auto w-fit md:w-full font-miligramText400">
          <div className="flex items-center justify-start sm:justify-between text-[0.85rem]">
            <Image src={locationTeal} alt="" className="mr-1 h-3" />
            {location}
          </div>
          <div className="flex items-center justify-start sm:justify-between text-[0.85rem]">
            <Image src={work} alt="" className="mr-1 h-3" />
            {type}
          </div>
          <div className="flex items-center justify-start sm:justify-between text-[0.85rem]">
            <Image src={experienceIcon} alt="" className="mr-1 h-3" />
            Exp {experience}
          </div>
        </div>
      </div>
      <div className="flex justify-center md:justify-end w-[100%] md:w-[35%] lg:w-[40%] gap-4">
        <Button
          OnClick={toogleDetailModal}
          text="View Details"
          className=" bg-main-greenOpt-200 font-miligramMedium w-auto text-[0.8rem] text-main-lightTeal py-[4px] md:py-[0.55rem] px-2 xxl:px-3 lg:px-7 rounded-lg border-[1px] border-main-lightTeal hover:bg-main-lightTeal hover:text-white"
        />
        <Button
          OnClick={toogleApplyModal}
          text="Apply"
          className=" bg-main-greenOpt-200  font-miligramMedium w-fit text-[0.8rem] text-main-lightTeal py-[4px] md:py-[0.55rem] px-6 xxl:px-8 lg:px-14 rounded-lg border-[1px] border-main-lightTeal hover:bg-main-lightTeal hover:text-white"
        />
      </div>
      <DetailsModal
        {...{
          setShowModal,
          showModal,
          viewDetails,
          title,
          location,
          type,
          experience,
          toogleDetailModal,
          toogleApplyModal,
        }}
      />
      <ApplyModal
        {...{
          setShowModal,
          experience,
          showModal,
          toogleDetailModal,
          toogleApplyModal,
          toogleThankModal,
          viewDetails,
          title,
          location,
          type,
          id,
        }}
      />
      <ThankModal {...{ isShow: showModal.thank, toogleThankModal }} />
    </div>
  );
};

export default Job;
