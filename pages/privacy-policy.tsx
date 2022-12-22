import Head from "next/head";
import React from "react";
import AOS from "aos";

import "aos/dist/aos.css";

import { Footer, GradientText, Navbar } from "../components";

const PrivacyPolicy = () => {
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
  return (
    <div className="bg-main-primary overflow-hidden relative">
      <Head>
        <title>Privacy Policy</title>
      </Head>
      <Navbar />
      <div className="pb-10 pt-28 w-[95%] sm:w-[90%] mx-auto">
        <GradientText
          aos="fade-up"
          className="w-[100%] mx-auto sm:w-fit text-[2.2rem] leading-none mb-3 md:mb-0 md:leading-normal  sm:text-[2.8rem] text-center bg-gradient-to-r from-white to-main-teal font-miligrambold mt-9"
          text="Privacy Policy"
        />
        <br />
        <p
          data-aos="fade-up"
          className="font-miligramLight text-[1.05rem] text-main-white-700 w-[96%] mx-auto text-justify"
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
          a tristique sem vitae. Phasellus in nunc, suspendisse viverra sapien.
          Eget donec suspendisse mauris non. Lobortis turpis eu amet facilisis.
          <br /> <br />
          Vel cras ipsum commodo, nunc sed posuere mattis tristique massa. Ut
          neque, nascetur ipsum sed nisl. Tincidunt in penatibus mauris enim
          lacus, viverra senectus arcu bibendum. Posuere neque in id tellus
          elementum. Rutrum posuere amet ut orci. Bibendum tellus, enim gravida
          imperdiet cras nisl. Venenatis tincidunt tortor varius nunc sed
          pellentesque egestas diam quis. Semper commodo eros, ac arcu.
          Hendrerit pharetra, dui, volutpat mi aliquam at erat condimentum. A
          quis malesuada nibh et felis, massa in magna auctor. <br /> <br />
          Vel cras ipsum commodo, nunc sed posuere mattis tristique massa. Ut
          neque, nascetur ipsum sed nisl. Tincidunt in penatibus mauris enim
          lacus, viverra senectus arcu bibendum. Posuere neque in id tellus
          elementum. Rutrum posuere amet ut orci. Bibendum tellus, enim gravida
          imperdiet cras nisl. Venenatis tincidunt tortor varius nunc sed
          pellentesque egestas diam quis. Semper commodo eros, ac arcu.
          Hendrerit pharetra, dui, volutpat mi aliquam at erat condimentum. A
          quis malesuada nibh et felis, massa in magna auctor. <br /> <br />
          Vel cras ipsum commodo, nunc sed posuere mattis tristique massa. Ut
          neque, nascetur ipsum sed nisl. Tincidunt in penatibus mauris enim
          lacus, viverra senectus arcu bibendum. Posuere neque in id tellus
          elementum. Rutrum posuere amet ut orci. Bibendum tellus, enim gravida
          imperdiet cras nisl. Venenatis tincidunt tortor varius nunc sed
          pellentesque egestas diam quis. Semper commodo eros, ac arcu.
          Hendrerit pharetra, dui, volutpat mi aliquam at erat condimentum. A
          quis malesuada nibh et felis, massa in magna auctor. <br /> <br />
          Vel cras ipsum commodo, nunc sed posuere mattis tristique massa. Ut
          neque, nascetur ipsum sed nisl. Tincidunt in penatibus mauris enim
          lacus, viverra senectus arcu bibendum. Posuere neque in id tellus
          elementum. Rutrum posuere amet ut orci. Bibendum tellus, enim gravida
          imperdiet cras nisl. Venenatis tincidunt tortor varius nunc sed
          pellentesque egestas diam quis. Semper commodo eros, ac arcu.
          Hendrerit pharetra, dui, volutpat mi aliquam at erat condimentum. A
          quis malesuada nibh et felis, massa in magna auctor. <br /> <br />
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
          a tristique sem vitae. Phasellus in nunc, suspendisse viverra sapien.
          Eget donec suspendisse mauris non. Lobortis turpis eu amet facilisis.{" "}
          <br /> <br />
          Vel cras ipsum commodo, nunc sed posuere mattis tristique massa. Ut
          neque, nascetur ipsum sed nisl. Tincidunt in penatibus mauris enim
          lacus, viverra senectus arcu bibendum. Posuere neque in id tellus
          elementum. Rutrum posuere amet ut orci. Bibendum tellus, enim gravida
          imperdiet cras nisl. Venenatis tincidunt tortor varius nunc sed
          pellentesque egestas diam quis. Semper commodo eros, ac arcu.
          Hendrerit pharetra, dui, volutpat mi aliquam at erat condimentum. A
          quis malesuada nibh et felis, massa in magna auctor. <br /> <br />
          Vel cras ipsum commodo, nunc sed posuere mattis tristique massa. Ut
          neque, nascetur ipsum sed nisl. Tincidunt in penatibus mauris enim
          lacus, viverra senectus arcu bibendum. Posuere neque in id tellus
          elementum. Rutrum posuere amet ut orci. Bibendum tellus, enim gravida
          imperdiet cras nisl. Venenatis tincidunt tortor varius nunc sed
          pellentesque egestas diam quis. Semper commodo eros, ac arcu.
          Hendrerit pharetra, dui, volutpat mi aliquam at erat condimentum. A
          quis malesuada nibh et felis, massa in magna auctor. <br /> <br />
          Vel cras ipsum commodo, nunc sed posuere mattis tristique massa. Ut
          neque, nascetur ipsum sed nisl. Tincidunt in penatibus mauris enim
          lacus, viverra senectus arcu bibendum. Posuere neque in id tellus
          elementum. Rutrum posuere amet ut orci. Bibendum tellus, enim gravida
          imperdiet cras nisl. Venenatis tincidunt tortor varius nunc sed
          pellentesque egestas diam quis. Semper commodo eros, ac arcu.
          Hendrerit pharetra, dui, volutpat mi aliquam at erat condimentum. A
          quis malesuada nibh et felis, massa in magna auctor. <br /> <br />
          Vel cras ipsum commodo, nunc sed posuere mattis tristique massa. Ut
          neque, nascetur ipsum sed nisl. Tincidunt in penatibus mauris enim
          lacus, viverra senectus arcu bibendum. Posuere neque in id tellus
          elementum. Rutrum posuere amet ut orci. Bibendum tellus, enim gravida
          imperdiet cras nisl. Venenatis tincidunt tortor varius nunc sed
          pellentesque egestas diam quis. Semper commodo eros, ac arcu.
          Hendrerit pharetra, dui, volutpat mi aliquam at erat condimentum. A
          quis malesuada nibh et felis, massa in magna auctor. <br /> <br />
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
          a tristique sem vitae. Phasellus in nunc, suspendisse viverra sapien.
          Eget donec suspendisse mauris non. Lobortis turpis eu amet facilisis.{" "}
          <br /> <br />
          Vel cras ipsum commodo, nunc sed posuere mattis tristique massa. Ut
          neque, nascetur ipsum sed nisl. Tincidunt in penatibus mauris enim
          lacus, viverra senectus arcu bibendum. Posuere neque in id tellus
          elementum. Rutrum posuere amet ut orci. Bibendum tellus, enim gravida
          imperdiet cras nisl. Venenatis tincidunt tortor varius nunc sed
          pellentesque egestas diam quis. Semper commodo eros, ac arcu.
          Hendrerit pharetra, dui, volutpat mi aliquam at erat condimentum. A
          quis malesuada nibh et felis, massa in magna auctor. <br /> <br />
          Vel cras ipsum commodo, nunc sed posuere mattis tristique massa. Ut
          neque, nascetur ipsum sed nisl. Tincidunt in penatibus mauris enim
          lacus, viverra senectus arcu bibendum. Posuere neque in id tellus
          elementum. Rutrum posuere amet ut orci. Bibendum tellus, enim gravida
          imperdiet cras nisl. Venenatis tincidunt tortor varius nunc sed
          pellentesque egestas diam quis. Semper commodo eros, ac arcu.
          Hendrerit pharetra, dui, volutpat mi aliquam at erat condimentum. A
          quis malesuada nibh et felis, massa in magna auctor. <br /> <br />
        </p>
      </div>
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
