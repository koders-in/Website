import Head from "next/head";
import Image from "next/image";
import React, { useState } from "react";
import AOS from "aos";

import "aos/dist/aos.css";

import { backAero, blogMain, blogProfile, wideBlog } from "../../assets";
import { Button, Divider, Footer, Navbar, Tag } from "../../components";
import { useRouter } from "next/router";
import { blogs } from "../../helper/constant";
import WithList from "../../components/pages-components/blog-page-components/WithList";
import WithPara from "../../components/pages-components/blog-page-components/WithPara";
import ListWithHeading from "../../components/pages-components/blog-page-components/ListWithHeading";

const id = () => {
  const route = useRouter();
  const id: any = route.query.id;
  let blogNumber;
  if (id) blogNumber = parseInt(id) - 1;
  const [showMore, setShowMore] = useState(false);

  React.useEffect(() => {
    window.scrollTo({
      top: 0,
    });
  }, []);

  React.useEffect(() => {
    AOS.init({
      easing: "ease-out",
      once: true,
      duration: 600,
    });
  }, []);
  if (blogNumber === undefined || blogNumber === null || blogNumber === "NaN")
    return <></>;
  else
    return (
      <div className="bg-main-primary overflow-hidden relative">
        <Head>
          <title>Blogs</title>
        </Head>
        <Navbar />
        <div className="py-16 mt-10 w-[91%] mx-auto">
          <Divider className="mt-16" />
          <Divider className="mt-6" />
          <div data-aos="fade-up" className="flex justify-between items-center">
            <span className="text-[1rem] text-main-light_white font-miligramTextMedium">
              {blogs[blogNumber].date}
            </span>
          </div>
          <h1
            data-aos="fade-up"
            className="text-white mt-4 text-[1.9rem] font-miligrambold"
          >
            {blogs[blogNumber]?.title}
          </h1>
          <div
            data-aos="fade-up"
            className="flex flex-wrap items-center justify-start gap-3 my-2 sm:my-5"
          >
            {blogs[blogNumber]?.chips.map((item, i) => (
              <Tag key={i} text={item} />
            ))}
          </div>
          <Divider className="mt-6" />
          <div data-aos="fade-up" className="flex items-center">
            <div className="overflow-hidden border-[1px] border-main-teal rounded-full mr-3 w-12 h-12 p-2">
              <Image
                src={blogs[blogNumber].profile}
                alt="profile"
                className="h-full w-full"
              />
            </div>
            <span className="text-white font-miligramMedium">
              {blogs[blogNumber].author}
            </span>
          </div>
          <Divider className="mt-11" />
          <div className="md:h-[60vh] overflow-hidden">
            <Image
              data-aos="fade-up"
              src={blogs[blogNumber].img}
              alt="blog img"
              className="h-full w-full"
            />
          </div>
          <Divider className="mt-6" />
          <div
            data-aos="fade-up"
            className="text-main-light_white mt-11 font-miligramTextBook"
            style={
              showMore
                ? {}
                : {
                    WebkitMaskImage:
                      "linear-gradient(180deg, #000 60%, transparent)",
                  }
            }
          >
            {blogs[blogNumber]?.all.type === "list" ? (
              <WithList showMore={showMore} id={blogNumber} />
            ) : blogs[blogNumber]?.all.type === "para" ? (
              <WithPara showMore={showMore} id={blogNumber} />
            ) : (
              <ListWithHeading showMore={showMore} id={blogNumber} />
            )}
          </div>
          {!showMore && (
            <Button
              OnClick={() => {
                setShowMore(true);
              }}
              text="Read More"
              className="border-[1px] mt-3 border-main-lightTeal text-main-lightTeal bg-main-greenOpt-200 block mx-auto px-6 py-[8px] sm:py-2 text-[0.8rem] xxl:text-[1rem] rounded-lg hover:bg-main-lightTeal hover:text-white font-miligramMedium"
            />
          )}
          <Divider className="mt-16 py-6" />
        </div>
        <Footer />
      </div>
    );
};

export default id;
