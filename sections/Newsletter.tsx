import AOS from "aos";
import Image from "next/image";
import dynamic from "next/dynamic";
import React, { Suspense, useState } from "react";

import "aos/dist/aos.css";

import { aeroUp } from "../assets";
import { isEmailValid } from "../helper";
import { usePostRequestToServer } from "../helper/hook";

const Divider = dynamic(() => import("../components/Divider"), {
  suspense: true,
});

const GradientText = dynamic(() => import("../components/GradientText"), {
  suspense: true,
});

const Newsletter = () => {
  const [email, setEmail] = useState("");

  React.useEffect(() => {
    AOS.init({
      easing: "ease-out",
      once: true,
      duration: 600,
    });
  }, []);

  const sendData = usePostRequestToServer();

  const handleClick = async () => {
    try {
      if (email) {
        const isValid = await isEmailValid(email);
        if (isValid) {
          const res: any = await sendData("newsletter", {
            email,
          });
          if (res?.status === 200) {
            window.alert("Your response has been recorded.");
            setEmail("");
          } else {
            window.alert("Unable to record your response. Try again later.");
          }
        } else {
          window.alert("Provided email address is invalid.");
        }
      }
    } catch (error) {
      if (error?.response?.data?.code === "constraint-violation") {
        window.alert("You are already registered to our Newsletter.");
      } else {
        window.alert("Unable to record your response. Try again later.");
      }
    }
  };

  return (
    <div className="py-16 mb-2 xxl:py-[6rem]">
      <Suspense fallback={<div className="text-main-teal">Loading...</div>}>
        <Divider className="mt-5" />
        <GradientText
          aos="slide-right"
          className="w-[90%] sm:w-fit mx-auto leading-none mb-3 md:mb-0 md:leading-normal text-[2rem] sm:text-[3rem] text-center bg-gradient-to-r from-white to-main-teal font-miligrambold"
          text="Subscribe to our Newsletter!"
        />
      </Suspense>
      <p
        data-aos="slide-left"
        className="mt-2 text-[0.8rem] sm:text-[1.3rem] w-[80%] sm:w-1/2 mx-auto text-center text-main-light_white pb-2 font-miligramText400 leading-none"
      >
        Stay updated about the latest offers, insights, blogs, “technical” stuff
        and much more.
      </p>
      <div
        data-aos="fade-up"
        className="w-[80%] sm:w-1/2 lg:w-1/3 border-2 border-main-teal mx-auto rounded-lg overflow-hidden flex mt-6 shadow-sm shadow-main-teal xxl:mt-14"
      >
        <input
          type="text"
          className="w-full px-4 py-1 outline-none border-none text-main-light_white placeholder:tracking-[2px] bg-transparent placeholder:text-main-light_white lett font-miligramTextBook"
          placeholder="Your Email Address"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
        <div
          onClick={handleClick}
          className="w-14 h-10 bg-main-teal flex justify-center items-center p-4 cursor-pointer"
        >
          <Image src={aeroUp} alt="aero" />
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
