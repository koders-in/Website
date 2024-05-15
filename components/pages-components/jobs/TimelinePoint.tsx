import React, { useEffect } from "react";

interface Props {
  text: string;
  type: "top" | "bottom";
  position: string;
  index: number;
  textStyle: string;
  boxWidth: string;
}
const TimelinePoint = ({ text, type, position, index, boxWidth }: Props) => {
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
              if (item % 2 === 0) {
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
            line.style.animation = lineAnimationList.toString();
          }
        }
      }
    };
  });
  return (
    <div
      className={`absolute gap-4 sm:gap-2 items-center  md:block ${position} ${
        index === 4 ? " md:flex gap-2 w-fit" : "flex gap-2"
      }`}
    >
      {type === "top" && (
        <div
          id={"top" + 4 + index}
          className={`p-2 bg-main-primary rounded-full border-[0.5px] border-main-teal h-2 w-2 mx-auto ${
            index === 5 ? "bg-main-teal" : ""
          }`}
        ></div>
      )}
      <div className={boxWidth}>
        <span
          id={"textContainer" + index}
          // text-white font-miligramLight overflow-hidden whitespace-nowrap mr-auto w-0 md:text-center block leading-normal tracking-[2px]
          className={`text-white font-miligramLight whitespace-nowrap md:text-center block leading-normal tracking-[2px] opacity-0  ${
            type === "top" ? "text-left" : "text-right"
          }`}
        >
          {text}
        </span>
      </div>
      {type === "bottom" && (
        <div
          id={"bottom" + 4 + index}
          className={`p-2 bg-main-primary rounded-full border-[0.5px] border-main-teal w-2 h-2 mx-auto ${
            index === 4 ? "bg-main-teal" : ""
          }`}
        ></div>
      )}
    </div>
  );
};

export default TimelinePoint;
