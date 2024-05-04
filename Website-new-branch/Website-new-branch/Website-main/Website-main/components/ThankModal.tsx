import Modal from "react-modal";
import React, { useEffect } from "react";
import { useRouter } from "next/router";
import { disableBodyScroll, enableBodyScroll } from "body-scroll-lock";

import Button from "./Button";
import GradientText from "./GradientText";

const customStyles = {
  content: {
    top: "10%",
    background: "#20222A",
    width: "fit-content",
    marginRight: "auto",
    marginLeft: "auto",
    zIndex: "10",
    border: "2px solid #00A99D",
    borderRadius: "2rem",
    padding: "4% 10%",
  },
};

interface Props {
  isShow: boolean;
  toogleThankModal: () => void;
}
const ThankModal = ({ isShow, toogleThankModal }: Props) => {
  const router = useRouter();
  const onAfterOpen = () => {
    disableBodyScroll(document);
  };
  useEffect(() => {
    Modal.setAppElement("body");
  });
  const closeModal = () => {
    enableBodyScroll(document);
    toogleThankModal();
  };
  return (
    <Modal
      isOpen={isShow}
      onAfterOpen={onAfterOpen}
      onRequestClose={closeModal}
      style={customStyles}
      contentLabel="Example Modal"
    >
      <div className="flex flex-col items-center justify-center gap-4 h-full">
        <svg
          width="70"
          height="70"
          viewBox="0 0 127 127"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            id="circleID"
            cx="63.5"
            cy="63.5"
            r="61"
            stroke="transparent"
            strokeWidth="5"
          />
          <path
            id="check"
            strokeWidth="4"
            d="M95.2263 39.7923C96.7592 41.329 96.7592 43.8164 95.2263 45.3531L53.5175 87.1614C51.9546 88.728 49.4168 88.728 47.8539 87.1614L31.7748 71.0439C30.2412 69.5067 30.2412 67.0183 31.7748 65.4811V65.4811C33.3122 63.94 35.8082 63.9385 37.3475 65.4777L47.8552 75.9848C49.4182 77.5476 51.9523 77.5466 53.5141 75.9826L89.6536 39.791C91.1919 38.2504 93.6886 38.251 95.2263 39.7923V39.7923Z"
            fill="transparent"
          />
        </svg>

        <GradientText
          className="w-[90%] sm:w-fit mx-auto text-[1.6rem] sm:text-[2.6rem] text-center bg-gradient-to-r from-white to-main-teal font-miligrambold"
          text="Thank You!"
        />
        <div>
          <p className="text-white font-miligramLight text-center m-0 p-0">
            Your submission has been recieved.
          </p>
          <p className="text-white font-miligramLight text-center m-0 p-0">
            We will be in touch and contact you soon.
          </p>
        </div>
        <div className="flex items-center justify-center gap-3">
          <Button
            OnClick={closeModal}
            text="Back to Jobs"
            className="font-miligramMedium text-[0.8rem] xxl:text-[1rem] bg-main-greenOpt-200 border-[1px] border-main-lightTeal text-main-lightTeal px-4 py-[0.4rem] sm:py-[0.55rem] sm:px-8 rounded-lg hover:bg-main-lightTeal hover:text-white"
          />
          <Button
            OnClick={() => {
              closeModal();
              router.push("/");
            }}
            text="Back to Home"
            className="font-miligramMedium text-[0.8rem] xxl:text-[1rem] bg-main-greenOpt-200 border-[1px] border-main-lightTeal text-main-lightTeal px-4 py-[0.4rem] sm:py-[0.55rem] sm:px-8 rounded-lg hover:bg-main-lightTeal hover:text-white"
          />
        </div>
      </div>
    </Modal>
  );
};

export default ThankModal;
