import React from "react";
import Image from "next/image";

import { add } from "../assets";

interface Props {
  question: string;
  answer: string;
  show: boolean;
  onClick?: (data: string) => void;
}

const Faq = ({ answer, question, onClick, show }: Props) => {
  return (
    <div data-aos="fade-up" id="faq">
      <div
        onClick={() => onClick(question)}
        className="cursor-pointer border-b-[1px] pt-2 pb-1 sm:pb-4 mt-3 w-[97%] mx-auto border-b-main-light_white flex justify-between items-center"
      >
        <p className="w-[90%] text-main-white-700 font-miligramLight sm:font-miligramMedium text-[0.8rem] sm:text-[1.4rem]">
          {question}
        </p>
        <Image
          src={add}
          alt=""
          className={`h-4 sm:h-6 hover:brightness-75 transition-all duration-300 ${
            show ? " rotate-45" : ""
          }`}
        />
      </div>
      <div
        className={`w-[97%] mx-auto text-main-light_white transition-all duration-500 overflow-hidden text-[0.8rem] sm:text-[1.3rem] my-4 ${
          show ? "max-h-[250px]" : "max-h-0"
        }`}
      >
        {answer}
      </div>
    </div>
  );
};

export default Faq;
