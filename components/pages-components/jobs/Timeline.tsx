import React, { useEffect } from "react";

const Timeline = () => {
  useEffect(() => {
    window.onscroll = () => {
      const element = document?.getElementById("timeline");
      const line = document?.getElementById("line");
      if (
        element !== undefined &&
        element !== null &&
        line !== undefined &&
        line !== null
      ) {
        if (element?.offsetTop && window?.pageYOffset) {
          if (element?.offsetTop - window.pageYOffset < 550) {
            const line = document.getElementById("line");
            const animations = ["first", "second", "third", "fourth"];
            let lineAnimationList = [];
            [0, 1, 2, 3, 4].forEach((item, i) => {
              if (item > 0) {
                const temp = `${animations[i - 1]} ease 0.2s ${
                  i ? i / 2 + "s" : ""
                } forwards`;
                lineAnimationList.push(temp);
              }
              const textElm = document.getElementById("textContainer" + item);
              textElm.style.animation = `typing 0.5s steps(40, end) ${
                item ? item / 2 + "s" : ""
              } forwards`;
              if (item === 4) {
                const circleOne = document.getElementById("top44");
                circleOne.style.animation = `fillBg 0.2s 2s forwards`;
                return;
              }
              if (item % 2 !== 0) {
                const circleOne = document.getElementById("bottom4" + item);
                circleOne.style.animation = `fillBg 0.5s ${
                  item / 2 + "s"
                } forwards`;
              } else {
                const circleTwo = document.getElementById("top4" + item);
                circleTwo.style.animation = `fillBg 0.5s ${
                  item / 2 + "s"
                } forwards`;
              }
            });
            if (window.innerWidth > 768)
              line.style.animation = lineAnimationList.toString();
          }
        }
      }
    };
  });
  return (
    <div
      id="timeline"
      className="z-0 flex h-[600px] w-[250px] md:w-[85%] md:h-[100px] xxl:w-[70%] mx-auto  justify-between items-center relative flex-col md:flex-row"
    >
      <div
        id="line"
        className="border-b-0 md:border-b-2 border-r-2 md:border-r-0 w-[1px] h-[100%] top-0 left-[50%] md:left-0 md:h-auto border-main-teal absolute md:top-[49.5%] md:w-0"
      ></div>
      <div
        id="top40"
        className="w-5 h-5 rounded-full border-2 border-main-teal bg-main-primary z-10 relative"
      >
        <div
          id="textContainer0"
          className="text-white whitespace-pre-wrap font-miligramLight absolute text-[0.9em] opacity-0  md:text-center top-[-10px] left-[-100px] w-[85px] md:w-[137px]  text-right md:top-[-23px] md:left-[-70px]"
        >
          Resume Submission
        </div>
      </div>
      <div
        id="bottom41"
        className="w-5 h-5 rounded-full border-2 border-main-teal bg-main-primary z-10 relative"
      >
        <div
          id="textContainer1"
          className="text-white font-miligramLight absolute text-[0.9em] opacity-0 w-[90px] md:w-[117px] top-[-10px] left-[30px]  md:top-[20px] md:left-[-45px]"
        >
          Screening Round
        </div>
      </div>
      <div
        id="top42"
        className="w-5 h-5 rounded-full border-2 border-main-teal bg-main-primary z-10 relative"
      >
        <div
          id="textContainer2"
          className="text-white font-miligramLight absolute text-[0.9em] opacity-0 top-[-10px] left-[-100px] w-[85px] md:w-[130px]  text-right  md:top-[-23px] md:left-[-65px]"
        >
          Technical Interview
        </div>
      </div>
      <div
        id="bottom43"
        className="w-5 h-5 rounded-full border-2 border-main-teal bg-main-primary z-10 relative"
      >
        <div
          id="textContainer3"
          className="text-white  font-miligramLight absolute text-[0.9em] opacity-0 top-[-10px] left-[30px] w-[60px] md:w-[85px]  md:top-[23px] md:left-[-35px]"
        >
          HR Interview
        </div>
      </div>
      <div
        id="top44"
        className="w-5 h-5 rounded-full border-2 border-main-teal bg-main-primary z-10 relative"
      >
        <div
          id="textContainer4"
          className="text-white  font-miligrambold absolute text-[0.9em] opacity-0 top-[110%] left-[-30px]  md:top-[-2px] md:left-[30px]"
        >
          Onboarding
        </div>
      </div>
    </div>
  );
};

export default Timeline;
