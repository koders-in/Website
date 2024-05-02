const puppeteer = require("puppeteer");

const sleep = (time: number) => {
  return new Promise((resolve) => {
    setTimeout(resolve, time);
  });
};

const placeUrl =
  "https://www.google.com/maps/place/Koders/@30.3307776,77.9591553,17z/data=!3m1!4b1!4m5!3m4!1s0x39092b338ee9e6f1:0x5964dd90fecf95d2!8m2!3d30.3307776!4d77.961344";

async function scrollPage(page, scrollContainer) {
  let lastHeight = await page.evaluate(
    `document.querySelector("${scrollContainer}").scrollHeight`
  );
  while (true) {
    await page.evaluate(
      `document.querySelector("${scrollContainer}").scrollTo(0, document.querySelector("${scrollContainer}").scrollHeight)`
    );
    await page.waitForTimeout(3000);
    let newHeight = await page.evaluate(
      `document.querySelector("${scrollContainer}").scrollHeight`
    );
    if (newHeight === lastHeight) {
      break;
    }
    lastHeight = newHeight;
  }
}

async function getReviewsFromPage(page) {
  try {
    const reviews = await page.evaluate(() => {
      return Array.from(document.querySelectorAll(".jftiEf")).map((el: any) => {
        return {
          user: {
            name: el.querySelector(".d4r55")?.textContent.trim(),
            link: el.querySelector(".WNxzHc a")?.getAttribute("href"),
            thumbnail: el.querySelector(".NBa7we")?.getAttribute("src"),
            localGuide:
              el.querySelector(".RfnDt span:first-child")?.style.display ===
              "none"
                ? undefined
                : true,
            reviews: parseInt(
              el
                .querySelector(".RfnDt span:last-child")
                ?.textContent.replace("·", "")
            ),
          },
          rating: parseFloat(
            el.querySelector(".kvMYJc")?.getAttribute("aria-label")
          ),
          date: el.querySelector(".rsqaWe")?.textContent.trim(),
          snippet: el.querySelector(".MyEned")?.textContent.trim(),
          likes: parseFloat(
            el.querySelector(".GBkF3d:nth-child(2)")?.getAttribute("aria-label")
          ),
          images: Array.from(el.querySelectorAll(".KtCyie button")).length
            ? Array.from(el.querySelectorAll(".KtCyie button")).map(
                (el: any) => {
                  return {
                    thumbnail: getComputedStyle(el).backgroundImage.slice(
                      5,
                      -2
                    ),
                  };
                }
              )
            : undefined,
        };
      });
    });
    return reviews;
  } catch (error) {
    console.log("error", error);
    return null;
  }
}

async function fillPlaceInfo(page) {
  const placeInfo = await page.evaluate(() => {
    return {
      title: document.querySelector(".DUwDvf")?.textContent.trim(),
      address: document
        .querySelector("button[data-item-id='address']")
        ?.textContent.trim(), // data-item-id attribute may be different if the language is not English
      rating: (() => {
        const str = document.querySelector("div.F7nice")?.textContent.trim();
        return str.substring(0, 3);
      })(),
      reviews: (() => {
        const str = document.querySelector("div.F7nice")?.textContent.trim();
        return str.substring(3, str.length);
      })(),
    };
  });
  return placeInfo;
}

async function getPageUrl(page) {
  try {
    return await page.evaluate(async () => {
      const urls = [];
      const tempArr: any = document.querySelectorAll(".GBkF3d");
      for (let i = 0; i < tempArr.length; i++) {
        if (i % 2 !== 0) {
          tempArr[i].click();
          await new Promise((resolve) => {
            setTimeout(resolve, 2000);
          });
          const tempVar: any = document.querySelectorAll(".vrsrZe")[0];
          urls.push(tempVar.value);
          const tempVar1: any = document.querySelectorAll(".AmPKde")[0];
          tempVar1.click();
        }
      }
      return urls;
    });
  } catch (error) {
    console.log(error);
  }
}

async function getLocalPlaceReviews() {
  const commonProps = {
    headless: true,
    args: ["--no-sandbox", "--disable-setuid-sandbox"],
  };

  try {
    const isDev = process.env.NODE_ENV === "development";
    let browser: any;
    if (isDev) {
      if (process.platform === "darwin") {
        browser = await puppeteer.launch({
          ...commonProps,
          // executablePath:
          //   "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
        });
      } else {
        browser = await puppeteer.launch({
          ...commonProps,
          // executablePath:
          //   "node_modules/chromium/lib/chromium/chrome-win/chrome.exe",
        });
      }
    } else {
      browser = await puppeteer.launch({
        ...commonProps,
        // executablePath:
        //   "node_modules/chromium/lib/chromium/chrome-win/chrome.exe",
      });
    }

    const page = await browser.newPage();

    await page.setDefaultNavigationTimeout(60000);
    await page.goto(placeUrl);
    await page.waitForSelector(".w6VYqd");

    // const placeInfo = await fillPlaceInfo(page);
    await page.click(".HHrUdb.fontTitleSmall.rqjGif");
    await page.waitForTimeout(2000);
    await page.waitForSelector(".m6QErb.DxyBCb.kA9KIf.dS8AEf ");
    await scrollPage(
      page,
      ".w6VYqd > .tTVLSc > .k7jAl > .e07Vkf > .aIFcqe > .m6QErb > .m6QErb"
    );
    let reviews = await getReviewsFromPage(page);
    const url = await getPageUrl(page);
    await browser.close();
    if (reviews?.length) {
      reviews = reviews?.map((item, i) => {
        if (i < url?.length)
          return {
            ...item,
            user: {
              ...item.user,
              redirectTo: url[i],
            },
          };
        else
          return {
            ...item,
            user: {
              ...item.user,
              redirectTo: item?.user?.link,
            },
          };
      });
    }else reviews = [];
    return { placeInfo: {}, reviews };
  } catch (error) {
    console.warn(error);
    return { placeInfo: {}, reviews:[] };
  }
}

let reviewData = null;

export const getReview = async () => {
  if (reviewData === null) {
    reviewData = await getLocalPlaceReviews();
    return reviewData;
  } else return reviewData;
};
