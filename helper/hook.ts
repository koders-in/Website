import { useRouter } from "next/router";
import { useState } from "react";
import { handleSlider } from ".";
import { JobClient } from "./api";

export const useUpdateSlide = () => {
  const [translatePosition, setTranslatePosition] = useState([
    -233, 0, 233, 466,
  ]);
  const [activeIndex, setActiveIndex] = useState(1);

  function getIndexOfActiveSlide(newArr: Array<number>) {
    for (let i = 0; i < newArr.length; i++) {
      if (newArr[i] === 0) {
        setActiveIndex(i);
      }
    }
  }

  function handleRightSlide() {
    if (!(translatePosition[3] === 699)) {
      const newArr = translatePosition.map((item, i) => {
        switch (i) {
          case 0:
            return item < 0 ? item + 233 : item;
          case 1:
            return item < 233 ? item + 233 : item;
          case 2:
            return item < 466 ? item + 233 : item;
          default:
            return item < 699 ? item + 233 : item;
        }
      });
      setTranslatePosition(newArr);
      getIndexOfActiveSlide(newArr);
    }
  }

  function handleLeftSlide() {
    if (!(translatePosition[3] === 0)) {
      const newArr = translatePosition.map((item, i) => {
        switch (i) {
          case 0:
            return item > -699 ? item - 233 : item;
          case 1:
            return item > -466 ? item - 233 : item;
          case 2:
            return item > -233 ? item - 233 : item;
          default:
            return item > 0 ? item - 233 : item;
        }
      });
      setTranslatePosition(newArr);
      getIndexOfActiveSlide(newArr);
    }
  }

  function onSwipe(id: string) {
    handleSlider(id, handleLeftSlide, handleRightSlide);
  }

  return {
    onSwipe,
    handleLeftSlide,
    handleRightSlide,
    getIndexOfActiveSlide,
    activeIndex,
    translatePosition,
  };
};

export const useRedirectToPricing = () => {
  const router = useRouter();
  const redirectOnPricingSection = () => {
    const pricingBtn = document.getElementById("Pricing");
    router.push("/");
    const pricingSec = document.getElementById("pricingSec");
    if (pricingSec) {
      const fromTop = pricingSec.offsetTop;
      window.scrollTo({
        top: fromTop,
        behavior: "smooth",
      });
    }
  };
  return redirectOnPricingSection;
};

// ------------------send data to server--------------------------
export const usePostRequestToServer = () => {
  const setData = async (endpoint: string, payload: Object) => {
    try {
      return await JobClient.post(endpoint, { ...payload });
    } catch (error) {
      return null;
    }
  };
  return setData;
};
