import React, { useState } from "react";

import leftBg from "../../assets/Images/bg-left.svg";
import rightBg from "../../assets/Images/bg-right.svg";
import leftArr from "../../assets/Images/left-arrow.svg";
import rightArr from "../../assets/Images/right-arrow.svg";

import { Card } from "../../components/card/Card";
import { basicList } from "../../helper/constant";
import { ButtonGroup } from "../../components/button-group/ButtonGroup";

import "./pricing.css";

export const Pricing = () => {
  const [translatePosition, setTranslatePosition] = useState([
    -280, 0, 280, 560,
  ]);

  const [initialXY, setInitialXY] = useState({
    initialX: null,
    initialY: null,
  });

  function handleStartTouch(e) {
    setInitialXY(() => {
      return {
        initialX: e.touches[0].clientX,
        initialY: e.touches[0].clientY,
      };
    });
  }

  function handleMoveTouch(e) {
    if (initialXY.initialX === null) {
      return;
    }

    if (initialXY.initialY === null) {
      return;
    }

    let currentX = e.touches[0].clientX;

    let diffX = initialXY.initialX - currentX;

    if (diffX > 0) {
      console.log("swiped left");
    } else {
      console.log("swiped right");
    }

    setInitialXY(() => {
      return {
        initialX: null,
        initialY: null,
      };
    });

    e.preventDefault();
  }

  function handleRightSlide() {
    if (!(translatePosition[3] === 840)) {
      const newArr = translatePosition.map((item, i) => {
        switch (i) {
          case 0:
            return item < 0 ? item + 280 : item;
          case 1:
            return item < 280 ? item + 280 : item;
          case 2:
            return item < 560 ? item + 280 : item;
          default:
            return item < 840 ? item + 280 : item;
        }
      });
      setTranslatePosition(newArr);
    }
  }

  function handleLeftSlide() {
    if (!(translatePosition[3] === 0)) {
      const newArr = translatePosition.map((item, i) => {
        switch (i) {
          case 0:
            return item > -840 ? item - 280 : item;
          case 1:
            return item > -560 ? item - 280 : item;
          case 2:
            return item > -280 ? item - 280 : item;
          default:
            return item > 0 ? item - 280 : item;
        }
      });
      setTranslatePosition(newArr);
    }
  }

  return (
    <div className="pricing">
      <img src={leftBg} className="left-bg" alt="" />
      <img src={rightBg} className="right-bg" alt="" />
      <h1>IT’S EASY TO GET STARTED</h1>
      <p>choose a plan tailored to your needs</p>
      <ButtonGroup />
      <div className="custom-slide">
        <div className="inner-ab"></div>
      </div>

      <div className="card-container">
        <Card title="Basic" price="$7.9" list={basicList} isMobile={false} />
        <Card
          title="Basic Plus"
          price="$11.2"
          list={basicList}
          isMobile={false}
        />
        <Card title="Premium" price="$12.6" list={basicList} isMobile={false} />
        <Card
          title="Enterprise"
          price="$13.2"
          list={basicList}
          isMobile={false}
        />
      </div>

      {/* ==============For mobile View====================== */}
      <div
        className="mob-container"
        onTouchStart={handleStartTouch}
        onTouchMove={handleMoveTouch}
      >
        <Card
          title="Basic"
          price="$7.9"
          list={basicList}
          translateX={translatePosition[0]}
          isMobile={true}
        />
        <Card
          title="Basic Plus"
          price="$11.2"
          list={basicList}
          translateX={translatePosition[1]}
          isMobile={true}
        />
        <Card
          title="Premium"
          price="$12.6"
          list={basicList}
          translateX={translatePosition[2]}
          isMobile={true}
        />
        <Card
          title="Enterprise"
          price="$13.2"
          list={basicList}
          translateX={translatePosition[3]}
          isMobile={true}
        />
      </div>

      <div className="mob-swiper-control">
        <img src={leftArr} alt="" onClick={handleLeftSlide} />
        &nbsp;&nbsp;&nbsp;Swipe&nbsp;&nbsp;&nbsp;
        <img src={rightArr} alt="" onClick={handleRightSlide} />
      </div>
    </div>
  );
};
