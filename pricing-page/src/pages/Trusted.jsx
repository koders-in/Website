import React, { useRef } from "react";
import { useEffect } from "react";
import { useState } from "react";

import imgOne from "../assets/trust/one.webp";
import { sleep } from "../helper/constant";
import { Animate } from "./Animate";
// import imgTwo from "../assets/trust/th.webp";
// import imgThree from "../assets/trust/th1.webp";

import "./style.css";

let tempCount = 0;
export const Trusted = () => {
  const isRunning = useRef(false);
  const [count, setCount] = useState(tempCount);
  const [leftOutStyle, setLeftOutStyle] = useState("");
  const [rightOutStyle, setRightOutStyle] = useState("rightOut-animate");

  useEffect(() => {
    const updateAnimation = async () => {
      setLeftOutStyle("");
      setRightOutStyle("");
      if (tempCount < 3) {
        tempCount = tempCount + 1;
      } else tempCount = 0;
      setCount(tempCount);
      await sleep(2000);
      setLeftOutStyle("leftOut-animate");
      setRightOutStyle("rightOut-animate");
      await sleep(2000);
      updateAnimation();
    };
    if (!isRunning.current) {
      isRunning.current = true;
      updateAnimation();
    }
  }, []);

  return (
    <div className="trusted">
      <h1 className="main-heading">Trusted by the best</h1>
      {count === 0 && (
        <h1 className={`animate-heading leftIn-animate ${leftOutStyle}`}>
          Google
        </h1>
      )}
      {count === 1 && (
        <h1 className={`animate-heading rightIn-animate ${rightOutStyle}`}>
          Microsoft
        </h1>
      )}
      {count === 2 && (
        <h1 className={`animate-heading leftIn-animate ${leftOutStyle}`}>
          Facebook
        </h1>
      )}
      {count === 3 && (
        <h1 className={`animate-heading rightIn-animate ${rightOutStyle}`}>
          Amazone
        </h1>
      )}
      <div className="image-box">
        <img src={imgOne} alt="" />
      </div>
    </div>
  );
};
