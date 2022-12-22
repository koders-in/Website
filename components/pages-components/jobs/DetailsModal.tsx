import Image from "next/image";
import React, { useEffect } from "react";
import Modal from "react-modal";
import { disableBodyScroll, enableBodyScroll } from "body-scroll-lock";

import {
  add,
  duration,
  experienceIcon,
  locationTeal,
  work,
} from "../../../assets";
import Button from "../../Button";
import GradientText from "../../GradientText";

const customStyles = {
  content: {
    top: "10%",
    background: "#20222A",
    width: "70%",
    marginRight: "auto",
    marginLeft: "auto",
    zIndex: "100",
    border: "2px solid #00A99D",
    padding: "2rem 3rem",
  },
};

interface Props {
  showModal: {
    viewDetails: boolean;
  };
  setShowModal: (prop: any) => void;
  viewDetails: any;
  title: string;
  location: string;
  type: string;
  experience: string;
  toogleDetailModal: () => void;
  toogleApplyModal: () => void;
}

const DetailsModal = ({
  showModal,
  setShowModal,
  viewDetails,
  title,
  location,
  type,
  experience,
  toogleDetailModal,
  toogleApplyModal,
}: Props) => {
  useEffect(() => {
    return () => {
      enableBodyScroll(document);
    };
  });

  const closeModal = () => {
    enableBodyScroll(document);
    setShowModal((p: any) => {
      return {
        ...p,
        viewDetails: !p.viewDetails,
      };
    });
  };

  const onAfterOpen = () => {
    disableBodyScroll(document);
  };

  const handleApply = () => {
    toogleDetailModal();
    toogleApplyModal();
  };

  useEffect(() => {
    Modal.setAppElement("body");
  });
  return (
    <Modal
      isOpen={showModal.viewDetails}
      onAfterOpen={onAfterOpen}
      onRequestClose={closeModal}
      style={customStyles}
      contentLabel="Example Modal"
    >
      <>
        <div className="lg:flex justify-between items-center">
          <div className="w-full lg:w-[80%]">
            <GradientText
              className="w-fit text-[2rem] bg-gradient-to-r from-white to-main-teal font-miligrambold"
              text={title}
            />
            <div className="flex text-white flex-wrap gap-2">
              <div className="flex items-center justify-between text-[0.8rem]">
                <Image src={locationTeal} alt="" className="mr-2 h-3" />
                {location}
              </div>
              <div className="flex items-center justify-between text-[0.8rem]">
                <Image src={work} alt="" className="mr-2 h-3" />
                {type}
              </div>
              <div className="flex items-center justify-between text-[0.8rem]">
                <Image src={experienceIcon} alt="" className="mr-2 h-3" />
                Exp {experience}
              </div>
              {viewDetails?.jobs_listing[0]?.job?.duration && (
                <div className="flex items-center justify-between text-[0.8rem]">
                  <Image src={duration} alt="" className="mr-2 h-3" />
                  Duration- {viewDetails?.jobs_listing[0]?.job?.duration}
                </div>
              )}
            </div>
          </div>
          <div className="w-full mt-3  lg:mt-0 lg:w-[20%]">
            <Button
              OnClick={handleApply}
              text="Apply"
              className=" bg-main-greenOpt-200  font-miligramMedium w-fit text-main-lightTeal text-[0.8rem] py-[8px] sm:py-[0.55rem]  px-12 rounded-lg border-[1px] border-main-lightTeal hover:bg-main-lightTeal hover:text-white"
            />
          </div>
          <Image
            src={add}
            alt=""
            className="lg:hidden rotate-45 absolute right-2 top-2 h-6 brightness-75"
            onClick={closeModal}
          />
        </div>
        <div className="h-[2px] bg-white w-ful my-4"></div>
      </>
      <h5 className="font-miligrambold text-white text-[1.1rem]">
        About the Company
      </h5>
      <p className="font-miligramLight text-white text-[0.85rem] mt-3">
        Koders isn't your normal software development firm. Koders provides a
        platform where people can engage themselves in various tech-related
        activities, be it keeping themselves updated with the latest technology
        trends, learning a new topic, or maybe teaching one. This is a family of
        driven enthusiasts where people from various fields come along to
        contribute their part and help build up the family. We aren't making
        just customer relations here, we're building a family of technological
        cognizance.
      </p>
      <h5 className="font-miligrambold text-white text-[1.1rem] mt-4 mb-3">
        Role and Responsibilities
      </h5>
      <p className="font-miligramLight text-white text-[0.85rem] mt-3">
        Selected intern's day-to-day responsibilities include:
      </p>
      <ul className="font-miligramLight list-decimal ml-4 text-white text-[0.85rem]">
        {viewDetails?.jobs_listing[0]?.job?.roles_responsibility?.map(
          (item, i) => (
            <li key={i}>{item}</li>
          )
        )}
      </ul>
      <h5 className="font-miligrambold text-white text-[1.1rem] mt-4 mb-3">
        Skills Required
      </h5>
      <div className="text-white text-[0.85rem] mt-3 flex gap-2 flex-wrap">
        {viewDetails?.jobs_listing[0]?.job?.skills.map((item, i) => {
          return (
            <div
              key={i}
              className="font-miligramText400 text-white py-[4px] sm:py-[6px] px-4  sm:px-6 border-2 border-main-teal rounded-lg"
            >
              {item}
            </div>
          );
        })}
      </div>
      <h5 className="font-miligrambold text-white text-[1.1rem] mt-4 mb-3">
        Perks and Benefits
      </h5>
      <ul className="font-miligramLight list-decimal ml-4 text-white text-[0.85rem]">
        {viewDetails?.jobs_listing[0]?.job?.perks_and_benefits?.map(
          (item, i) => (
            <li key={i}>{item}</li>
          )
        )}
      </ul>
      <h5 className="font-miligrambold text-white text-[1.1rem] mt-4 mb-3">
        No of Openings -&nbsp;
        <span className="text-main-whiteVar1">
          {viewDetails?.jobs_listing[0]?.no_of_openings}
        </span>
      </h5>
      <Button
        type="submit"
        OnClick={handleApply}
        text="Apply"
        className=" bg-main-greenOpt-200 mt-12 font-miligramMedium w-fit text-main-lightTeal text-[0.8rem] py-[8px] sm:py-[0.55rem]  px-12 rounded-lg border-[1px] border-main-lightTeal hover:bg-main-lightTeal hover:text-white block mx-auto"
      />
    </Modal>
  );
};

export default DetailsModal;
