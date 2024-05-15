import Image from "next/image";
import React from "react";

import Label from "./Label";
import { abhishek, basu, ceo, cto, groupImg, saksham } from "../../../assets";

const OurFamily = () => {
  return (
    <div className="flex gap-5">
      <div className="w-[26.5%] pt-8 flex flex-col gap-5">
        <div className="w-[65%] ml-auto overflow-hidden relative">
          <Label name="Kartikey Kushwah" position="Co-Founder & CEO" />
          <Image src={ceo} alt="ceo" className="w-full h-full" />
        </div>
        <div className="w-[80%] mx-auto relative">
          <Label name="Shaloni Modi" position="Co-Founder & CTO" />
          <Image src={cto} alt="cto" className="w-full h-full" />
        </div>
      </div>
      <div className="w-[38.5%] pb-10">
        <Image src={groupImg} alt="groupImg" className="w-full h-full" />
      </div>
      <div className="w-[35%] flex flex-col gap-5 pt-5">
        <div className="w-[75%] mr-auto relative">
          <Label name="Abhishek Yadav" position="Senior Developer" />
          <Image src={abhishek} alt="" className="w-full h-full" />
        </div>
        <div className="flex pt-2 w-full gap-5 items-center">
          <div className="w-[45%] relative">
            <Label name="Saksham Chauhan" position="Junior Developer" />
            <Image src={saksham} alt="" className="w-full h-full" />
          </div>
          <div className="w-[55%] overflow-hidden  h-fit relative">
            <Label
              name="Basudev Tyagi"
              position="Operations Manager & Developer"
            />
            <Image src={basu} alt="" className="w-full" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurFamily;
