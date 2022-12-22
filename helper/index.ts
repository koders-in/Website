import { listOfPrefferedUserReviewList } from "./constant";
import { getReviewList } from "./scrapper";
import { emailValidation } from "./validate";

/**
 * This function stop the flow of code for the given time.
 * @param time Take time as mili seconds, like:- 1000
 * @returns return promise after given time.
 */
export const sleep = (time: number) => {
  return new Promise((resolve) => {
    setTimeout(resolve, time);
  });
};

/**
 *
 * @param id Id of element like:- "main-div"
 * @param handleLeftSlide This function call when the left slide event occur on screen.
 * @param handleRightSlide This function call when the right slide event occur on screen.
 */
export const handleSlider = (
  id: any,
  handleLeftSlide: () => void,
  handleRightSlide: () => void
) => {
  const pricing = document.getElementById(id);

  pricing.addEventListener("touchstart", handleTouchStart, { passive: true });
  pricing.addEventListener("touchmove", handleTouchMove, { passive: true });

  let xDown: any = null;
  let yDown: any = null;

  function getTouches(evt: any) {
    return (
      evt.touches || // browser API
      evt.originalEvent.touches
    ); // jQuery
  }

  function handleTouchStart(evt: any) {
    const firstTouch = getTouches(evt)[0];
    xDown = firstTouch.clientX;
    yDown = firstTouch.clientY;
  }

  function handleTouchMove(evt: any) {
    if (!xDown || !yDown) {
      return;
    }

    var xUp = evt.touches[0].clientX;
    var yUp = evt.touches[0].clientY;

    var xDiff = xDown - xUp;
    var yDiff = yDown - yUp;

    if (Math.abs(xDiff) > Math.abs(yDiff)) {
      if (xDiff > 0) {
        handleLeftSlide();
      } else {
        handleRightSlide();
      }
    }
    xDown = null;
    yDown = null;
  }
};

/**
 * This function generate a random number on the bases of arguments.
 * @param min Lowest point of a random number.
 * @param max Highest point of a random number.
 * @returns Return a random number on the bases of above arguments.
 */
export function getRandomInt(min: number, max: number) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function handleRightSlide(
  translatePosition: Array<number>,
  setTranslatePosition: (args: Array<number>) => void,
  getIndexOfActiveSlide: (args: Array<number>) => void
) {
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

export const redirectOnPricingSection = () => {
  const pricingBtn = document.getElementById("Pricing");
  pricingBtn.addEventListener("click", () => {
    const pricingSec = document.getElementById("pricingSec");
    const fromTop = pricingSec.offsetTop;
    window.scrollTo({
      top: fromTop,
      behavior: "smooth",
    });
  });
};

// Disable Scrolling
export const disableScroll = () => {
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  const scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;
  // if any scroll is attempted, set this to the previous value
  window.onscroll = function () {
    window.scrollTo(scrollLeft, scrollTop);
  };
};

// Enable Scrolling
export const enableScroll = () => {
  window.onscroll = function () {};
};

let running = null;

export const testMain = async () => {
  if (!running) {
    running = true;
    // getReviewList();
    console.log("testMain");
    running = setInterval(() => {
      console.log("testMain", running);
      // getReviewList();
    }, 5000);
  }
};

// ------------------Validate email----------------------
export const isEmailValid = async (email: string) => {
  const res = await emailValidation.isValid({
    email,
  });
  return res;
};

// ------------------Short Array on the bases of list----------------------

export const shortReviewArray = (
  reviewList: Array<any>,
  userNameList: Array<string>
) => {
  let topArray = [];
  let bottomArray = [];
  let tempThumbnail = [];
  for (let i = 0; i < userNameList?.length; i++) {
    for (let j = 0; j < reviewList?.length; j++) {
      if (
        userNameList[i] === reviewList[j]?.user?.name &&
        !tempThumbnail?.includes(j)
      ) {
        topArray?.push(reviewList[j]);
        tempThumbnail?.push(j);
        break;
      }
    }
  }
  for (let j = 0; j < reviewList?.length; j++) {
    if (!tempThumbnail?.includes(j)) {
      bottomArray?.push(reviewList[j]);
    }
  }

  const topLen = topArray?.length;
  const topby3 = Math.round(topLen / 3);
  const bottomLen = bottomArray?.length;

  if (topLen && bottomLen) {
    const bottomby3 = Math.round(topLen / 3);
    const columnOne = [
      ...topArray?.slice(0, topby3),
      ...bottomArray?.slice(0, bottomby3 - 2),
    ];
    const columnTwo = [
      ...topArray?.slice(topby3, topby3 * 2),
      ...bottomArray?.slice(bottomby3 - 2, bottomby3 * 2 - 4),
    ];
    const columnThree = [
      ...topArray?.slice(topby3 * 2, topLen),
      ...bottomArray?.slice(bottomby3 * 2 - 4, bottomLen),
    ];
    return [columnOne, columnTwo, columnThree];
  } else {
    if (topLen) {
      const columnOne = [...topArray?.slice(0, topby3)];
      const columnTwo = [...topArray?.slice(topby3, topby3 * 2)];
      const columnThree = [...topArray?.slice(topby3 * 2, topLen)];
      return [columnOne, columnTwo, columnThree];
    }
  }
};
