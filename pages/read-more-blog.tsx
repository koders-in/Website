import Head from "next/head";
import Image from "next/image";
import React, { useState } from "react";

import { blogProfile, wideBlog } from "../assets";
import { Button, Divider, Tag } from "../components";

const ReadMoreBlog = () => {
  const [showMore, setShowMore] = useState(false);
  React.useEffect(() => {
    window.scrollTo({
      top: 0,
    });
  }, []);
  return (
    <div className="py-16 mt-10 w-[91%] mx-auto">
      <Head>
        <title>Blogs</title>
      </Head>
      <Divider className="mt-16" />
      <Divider className="mt-6" />
      <div className="flex justify-between items-center">
        <span className="text-[1rem] text-main-light_white font-miligramTextMedium">
          SEP 22, 2022
        </span>
      </div>
      <h1 className="text-white mt-4 text-[1.9rem] font-miligrambold">
        Hacking Humans is easier than hacking Computers
      </h1>
      <div className="flex items-center justify-start gap-3 mt-5">
        <Tag className="" text="Ethical Hacking" />
        <Tag className="" text="Cyber Security" />
      </div>
      <Divider className="mt-6" />
      <div className="flex items-center">
        <Image src={blogProfile} alt="profile" className="mr-3 h-9" />
        <span className="text-white font-miligramMedium">John Doe</span>
      </div>
      <Divider className="mt-11" />
      <Image src={wideBlog} alt="blog img" className="w-full md:h-96" />
      <Divider className="mt-6" />
      <p
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
        <span className="text-[1.6rem]">Lorem</span> ipsum dolor sit amet,
        consectetur adipiscing elit. Pellentesque a tristique sem vitae.
        Phasellus in nunc, suspendisse viverra sapien. Eget donec suspendisse
        mauris non. Lobortis turpis eu amet facilisis. <br />
        <br />
        Vel cras ipsum commodo, nunc sed posuere mattis tristique massa. Ut
        neque, nascetur ipsum sed nisl. Tincidunt in penatibus mauris enim
        lacus, viverra senectus arcu bibendum. Posuere neque in id tellus
        elementum. Rutrum posuere amet ut orci. Bibendum tellus, enim gravida
        imperdiet cras nisl. Venenatis tincidunt tortor varius nunc sed
        pellentesque egestas diam quis. Semper commodo eros, ac arcu. Hendrerit
        pharetra, dui, volutpat mi aliquam at erat condimentum. A quis malesuada
        nibh et felis, massa in magna auctor. <br /> <br /> Vel cras ipsum
        commodo, nunc sed posuere mattis tristique massa. Ut neque, nascetur
        ipsum sed nisl. Tincidunt in penatibus mauris enim lacus, viverra
        senectus arcu bibendum. Posuere neque in id tellus elementum. Rutrum
        posuere amet ut orci. Bibendum tellus, enim gravida imperdiet cras nisl.
        Venenatis tincidunt tortor varius nunc sed pellentesque egestas diam
        quis. Semper commodo eros, ac arcu. Hendrerit pharetra, dui, volutpat mi
        aliquam at erat condimentum. A quis malesuada nibh et felis, massa in
        magna auctor.
      </p>
      {!showMore && (
        <Button
          OnClick={() => {
            setShowMore(true);
          }}
          text="Read More"
          className="border-2 mt-3 border-main-lightTeal text-main-lightTeal bg-main-greenOpt-200 block mx-auto px-6 py-2 rounded-lg hover:bg-main-lightTeal hover:text-white font-miligramMedium"
        />
      )}
      <div
        className={`text-main-light_white font-miligramTextBook overflow-hidden mt-3 max-h-0 transition-all duration-500 ${
          showMore ? "max-h-[250px] md:max-h-[230px]" : ""
        }`}
      >
        Vel cras ipsum commodo, nunc sed posuere mattis tristique massa. Ut
        neque, nascetur ipsum sed nisl. Tincidunt in penatibus mauris enim
        lacus, viverra senectus arcu bibendum. Posuere neque in id tellus
        elementum. Rutrum posuere amet ut orci. Bibendum tellus, enim ̰ gravida
        imperdiet cras nisl. Venenatis tincidunt tortor varius nunc sed
        pellentesque egestas diam quis. Semper commodo eros, ac arcu. Hendrerit
        pharetra, dui, volutpat mi aliquam at erat condimentum. A quis malesuada
        nibh et felis, massa in magna auctor. <br /> <br />
        Vel cras ipsum commodo, nunc sed posuere mattis tristique massa. Ut
        neque, nascetur ipsum sed nisl. Tincidunt in penatibus mauris enim
        lacus, viverra senectus arcu bibendum. Posuere neque in id tellus
        elementum. Rutrum posuere amet ut orci. Bibendum tellus, enim gravida
        imperdiet cras nisl. Venenatis tincidunt tortor varius nunc sed
        pellentesque egestas diam quis. Semper commodo eros, ac arcu. Hendrerit
        pharetra, dui, volutpat mi aliquam at erat condimentum. A quis malesuada
        nibh et felis, massa in magna auctor.
      </div>
      <Divider className="mt-16 py-6" />
    </div>
  );
};

export default ReadMoreBlog;
