import React, { useEffect, useRef, useState, Suspense } from "react";
import dynamic from "next/dynamic";
const { v4 } = require("uuid");
import AOS from "aos";

import "aos/dist/aos.css";

import { toolsAndtechLogo } from "../assets";
import { getRandomInt } from "../helper";

const CombCell = dynamic(() => import("../components/CombCell"), {
  suspense: true,
});

const GradientText = dynamic(() => import("../components/GradientText"), {
  suspense: true,
});

let arrOfIds: any = [];
const Technologies = () => {
  const isAnimationStart = useRef(false);
  const [combStats, setCombStats] = useState([]);
  let tempArr: Array<any> = [];
  useEffect(() => {
    if (typeof window !== "undefined" && window?.screen) {
      const combInLine = Math.floor(window?.screen?.width / 70) + 2;
      const rowsOfComb = Math.floor(window?.screen?.height / 80) + 2;
      for (let i = 0; i < rowsOfComb; i++) {
        for (let j = 0; j <= combInLine; j++) {
          if (tempArr[i]?.length) {
            tempArr[i] = [toolsAndtechLogo[getRandomInt(0, 40)]].concat(
              tempArr[i]
            );
            setCombStats(tempArr);
          } else {
            tempArr[i] = [toolsAndtechLogo[getRandomInt(0, 40)]];
            setCombStats(tempArr);
          }
        }
      }
    }
  }, []);

  // useEffect(() => {
  //   const startAnimation = async () => {
  //     const parallelAnimatedComb = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  //     let tempArrOne: Array<any> = [];
  //     parallelAnimatedComb.forEach(() => {
  //       tempArrOne.push(getRandomInt(0, arrOfIds?.length));
  //     });

  //     for (let i = 0; i < tempArrOne.length; i++) {
  //       const comb = document.getElementById(arrOfIds[tempArrOne[i]]);
  //       if (comb) {
  //         comb.style.animation = `fading 3s ease-in-out`;
  //       }
  //       await sleep(getRandomInt(100, 200));
  //     }
  //     for (let i = 0; i < tempArrOne.length; i++) {
  //       const comb = document.getElementById(arrOfIds[tempArrOne[i]]);
  //       if (comb) {
  //         comb.style.animation = `none`;
  //         await sleep(getRandomInt(100, 200));
  //       }
  //     }

  //     let tempArrTwo: Array<any> = [];
  //     parallelAnimatedComb.forEach(() => {
  //       tempArrTwo.push(getRandomInt(0, arrOfIds?.length));
  //     });
  //     await sleep(getRandomInt(500, 800));
  //     startAnimation();
  //   };
  //   if (!isAnimationStart.current) {
  //     isAnimationStart.current = true;
  //     for (let i = 0; i < 50; i++) {
  //       startAnimation();
  //     }
  //   }
  // });

  useEffect(() => {
    AOS.init({
      easing: "ease-out",
      once: true,
      duration: 600,
    });
  }, []);

  return (
    <div className="bg-main-secondary overflow-hidden h-[90vh] md:h-[60vh] lg:h-[90vh] xl:h-[90vh] xxl:h-[90vh]  relative flex justify-center items-center">
      <div className="absolute w-full h-full flex justify-center items-center">
        <div className="px-[0.5rem] py-10 md:px-10 z-10 bg-main-secondary w-full mt-4">
          <Suspense fallback={<div className="text-main-teal">Loading...</div>}>
            <GradientText
              aos="slide-left"
              className="w-[90%] leading-none mb-3 md:mb-0 md:leading-normal mx-auto sm:w-fit text-[2.2rem] sm:text-[3rem] text-center bg-gradient-to-r from-white to-main-teal font-miligrambold"
              text="Technologies that make sense"
            />
          </Suspense>
          <p
            data-aos="slide-right"
            className="leading-none text-[0.8rem] sm:text-[1.3rem] mx-auto text-center text-main-light_white font-miligramText400 sm:w-[80%]"
          >
            The world around us is evolving every single day and we ensure to
            keep ourselves updated with the latest technologies to deliver the
            best software solutions to our customers.
          </p>
        </div>
      </div>
      <Suspense fallback={<div className="text-main-teal">Loading...</div>}>
        {combStats?.map((item, i) => {
          const top = 65 * i - 43;
          return item.map((item2: any, j: any) => {
            let left = 0;
            if (i % 2 === 0) left = 76 * j - 30;
            else left = 76 * j - 68;
            const ii = v4();
            arrOfIds.push(ii);
            return (
              <CombCell
                key={i + j}
                logo={item2.src}
                x={top.toString()}
                y={left.toString()}
                id={ii}
              />
            );
          });
        })}
      </Suspense>
    </div>
  );
};

export default Technologies;
