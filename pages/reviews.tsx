import Head from "next/head";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

import {
  Button,
  Divider,
  Footer,
  GradientText,
  Navbar,
  TestmonialCard,
} from "../components";
import axios from "axios";
import { discordReviews, listOfBestReviewsUsers } from "../helper/constant";
import { shortReviewArray } from "../helper";
import { FadeLoader } from "react-spinners";

const Testmonials = () => {
  const [loading, setLoading] = useState<boolean>(false);

  const [allReviews, setAllReviews] = useState<Array<any>>([[], [], []]);

  const router = useRouter();
  const handleNavigate = (href: string) => {
    router.push(href);
  };

  const fetchReview = async () => {
    try {
      setLoading(true);
      const res = await axios.get("http://localhost:3000/api", {
        headers: {
          testmonial: true,
        },
      });
      const data = await JSON.parse(JSON.stringify(res?.data));
      if (data) {
        const sortedReview = shortReviewArray(
          [...data?.reviews, ...discordReviews],
          listOfBestReviewsUsers
        );
        setAllReviews(sortedReview);
        setLoading(false);
      } else {
        const sortedReview = shortReviewArray(
          [...discordReviews],
          listOfBestReviewsUsers
        );
        setAllReviews(sortedReview);
        setLoading(false);
      }
    } catch (error) {
      const sortedReview = shortReviewArray(
        [...discordReviews],
        listOfBestReviewsUsers
      );
      setAllReviews(sortedReview);
      setLoading(false);
      console.log(error);
    }
  };

  useEffect(() => {
    setTimeout(() => {
      window.scroll({
        top: 0,
        left: 0,
        behavior: "smooth",
      });
    });
  }, []);

  useEffect(() => {
    if (
      !allReviews[0].length ||
      !allReviews[1].length ||
      !allReviews[2].length
    ) {
      fetchReview();
    }
  }, []);

  useEffect(() => {
    const tryAgain = document.getElementById("tryAgain");
    tryAgain?.addEventListener("click", () => {
      fetchReview();
    });
  });

  return (
    <div className="bg-main-primary overflow-hidden relative">
      <Head>
        <title>Reviews</title>
      </Head>
      <Navbar />
      <div className="pb-10 pt-28">
        <GradientText
          className="text-[2.2rem] leading-none mb-3 md:mb-0 font-miligrambold  sm:text-[2.5rem] md:text-[2.8rem] mt-10 w-[90%] mx-auto text-center bg-gradient-to-r from-white to-main-teal"
          text="Don't just take our word for it."
        />

        <p className="mt-2 text-[0.8rem] sm:text-[1.3rem] w-[80%] sm:w-1/2 mx-auto text-center text-main-light_white pb-2 font-miligramText400 leading-none">
          Take a look at what some of our customers have to say about Koders.
        </p>
        <Divider className="mt-4 md:mt-14" />
        {loading ? (
          <div className="">
            <FadeLoader
              className="w-fit block mx-auto"
              loading={loading}
              color="#00a99d"
            />
          </div>
        ) : (
          <div className="flex gap-3 w-[85%] mx-auto flex-wrap">
            <div className="w-full md:w-[45%] xl:w-[32%]">
              {allReviews[0]?.map((item, i) => {
                return (
                  <TestmonialCard
                    key={i}
                    {...{
                      description: item.snippet,
                      logo: item.user.thumbnail,
                      title: item.user.name,
                      rating: item.rating,
                      link: item.user.link,
                    }}
                  />
                );
              })}
            </div>
            <div className="w-full md:w-[45%] xl:w-[32%]">
              {allReviews[1]?.map((item, i) => {
                return (
                  <TestmonialCard
                    key={i}
                    {...{
                      description: item.snippet,
                      logo: item.user.thumbnail,
                      title: item.user.name,
                      rating: item.rating,
                      link: item.user.link,
                    }}
                  />
                );
              })}
            </div>
            <div className="w-full md:w-[45%] xl:w-[32%]">
              {allReviews[2]?.map((item, i) => {
                return (
                  <TestmonialCard
                    key={i}
                    {...{
                      description: item.snippet,
                      logo: item.user.thumbnail,
                      title: item.user.name,
                      rating: item.rating,
                      link: item.user.link,
                    }}
                  />
                );
              })}
            </div>
          </div>
        )}
        <Button
          OnClick={() => handleNavigate("start-project")}
          text="Get Started"
          className="text-[0.8rem] xxl:text-[1rem] mx-auto block mt-8 sm:mt-12 bg-main-greenOpt-200 font-miligramMedium text-main-lightTeal py-[8px] sm:py-[10px] px-6 sm:px-9 rounded-lg border-[1px] border-main-lightTeal hover:bg-main-lightTeal hover:text-white"
        />
        <Divider className="mt-16 py-2" />
      </div>
      <Footer />
    </div>
  );
};

export default Testmonials;
