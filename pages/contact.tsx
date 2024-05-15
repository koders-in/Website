import Head from "next/head";
import Image from "next/image";
import { Formik, FormikHelpers } from "formik";
import React, { useEffect, useState } from "react";

import {
  discordWhite,
  githubWhite,
  linkedinWhite,
  location,
  locationTealCont,
  mail,
  phone,
  tealLocation,
  tealMessage,
  tealMobile,
  tealMobileCont,
  twitterWhite,
} from "../assets";

import {
  Button,
  Divider,
  Footer,
  GradientText,
  InputBox,
  Navbar,
} from "../components";
import { contactValidationSchima } from "../helper/validate";
import TextArea from "../components/pages-components/jobs/TextArea";
import { socialMediaHandles, socialMediaTealIcons } from "../helper/constant";
import ErrorBoundary from "../components/ErrorBoundary";

interface initialValues {
  name: string;
  email: string;
  message: string;
}

const initialValues: initialValues = {
  name: "",
  email: "",
  message: "",
};

const MAIL_TO = `mailto:info@koders.in?subject=Query&body=${""}`;
const Contact = () => {
  const [hoverOnLocation, setHoverOnLocation] = useState<boolean>(false);
  const [hoverOnMob, setHoverOnMob] = useState<boolean>(false);
  const [hoverOnMail, setHoverOnMail] = useState<boolean>(false);
  const [hoverOnSocialMedia, setHoverOnSocialMedia] = useState<any>(false);

  const handleSubmitForm = async (
    value: initialValues,
    helper: FormikHelpers<initialValues>
  ) => {
    const body = `Hi there,\n\n${value.message}\n\nThank you,\n${value.name}`;
    const MAIL_TO = `mailto:info@koders.in?subject=Query via Website&body=${encodeURIComponent(
      body
    )}`;
    window.open(MAIL_TO, "_blank");
    helper.resetForm();
  };

  useEffect(() => {
    const elm = document.getElementById("namecont");
    elm.focus();
  });
  return (
    <div className="bg-main-primary overflow-hidden relative">
      <Head>
        <title>Contact Us</title>
      </Head>
      <ErrorBoundary>
         <Navbar />
      </ErrorBoundary>
      <ErrorBoundary>
        <div className="pb-10 pt-28 w-[95%] sm:w-[90%] mx-auto">
          <GradientText
            aos="fade-up"
            className="text-[2.2rem] leading-none mb-3 md:mb-0 md:leading-normal  sm:text-[2.5rem] md:text-[2.8rem] mx-auto w-fit bg-gradient-to-r from-white to-main-teal font-miligrambold mt-9"
            text="Contact Us"
          />
          <Divider className="h-10" />
          <div className="w-[90%] mx-auto md:w-[80%] lg:w-[70%] xl:w-[60%] flex flex-col sm:flex-row justify-center items-center">
            <div className="  w-[50%] hidden sm:flex flex-col gap-9">
              <div className="flex justify-start items-start gap-6 text-[0.9rem] sm:text-[1rem] w-fit">
                <Image
                  src={hoverOnLocation ? locationTealCont : location}
                  alt="location"
                  width={15}
                  height={15}
                  className="mt-[5px]"
                />
                <div
                  className={` m-0 cursor-pointer transition-all duration-300 group font-miligramText400 ${
                    hoverOnLocation ? "text-main-lightTeal" : "text-white"
                  }`}
                  onMouseEnter={() => setHoverOnLocation(true)}
                  onMouseLeave={() => setHoverOnLocation(false)}
                  onClick={() =>
                    window.open("https://goo.gl/maps/H91YctE1VjYX7p9J9", "_blank")
                  }
                >
                  <p className="inline sm:block"> IT-07, IT Park,</p>
                  <p className="inline sm:block"> Sahastradhara Rd, Dehradun, </p>
                  <p className="inline sm:block"> Uttarakhand - 248013 </p>
                </div>
              </div>
              <div
                className="flex justify-start gap-4 w-fit"
                onMouseEnter={() => setHoverOnMob(true)}
                onMouseLeave={() => setHoverOnMob(false)}
              >
                <Image
                  src={hoverOnMob ? tealMobileCont : phone}
                  alt="phone"
                  width={20}
                  height={20}
                />
                <a
                  href="tel:01353504103"
                  className={`group relative m-0 ml-1 text-[0.9rem] sm:text-[1rem] mt-[4px] ${
                    hoverOnMob ? "text-main-lightTeal" : "text-white"
                  }`}
                >
                  +91 7008493497
                </a>
              </div>
              <div
                onMouseEnter={() => setHoverOnMail(true)}
                onMouseLeave={() => setHoverOnMail(false)}
                className="flex  gap-5 cursor-pointer w-fit"
                onClick={() => window.open(MAIL_TO, "_blank")}
              >
                <Image
                  src={hoverOnMail ? tealMessage : mail}
                  alt={tealMessage}
                  width={20}
                  height={20}
                />
                <p
                  className={`font-miligramText400 ${
                    hoverOnMail ? "text-main-lightTeal" : "text-white"
                  }`}
                >
                  info@koders.in
                </p>
              </div>
              <div className="flex gap-9">
                {socialMediaHandles.map((item, i) => {
                  return (
                    <Image
                      className="cursor-pointer transition-all duration-100"
                      key={i}
                      src={
                        hoverOnSocialMedia === i
                          ? socialMediaTealIcons[i]
                          : item.src
                      }
                      alt={item.src}
                      width={30}
                      height={30}
                      onMouseEnter={() => setHoverOnSocialMedia(i)}
                      onMouseLeave={() => setHoverOnSocialMedia(false)}
                      onClick={() => window.open(item.url, "_blank")}
                    />
                  );
                })}
              </div>
            </div>
            <div className="w-full sm:w-[50%]">
              <Formik
                validateOnBlur={false}
                validateOnChange={false}
                initialValues={initialValues}
                validationSchema={contactValidationSchima}
                onSubmit={handleSubmitForm}
              >
                {({ handleBlur, handleChange, errors, values, handleSubmit }) => (
                  <>
                    <InputBox
                      labelID="nameContact"
                      id="namecont"
                      handleChange={handleChange}
                      name="name"
                      placeholder="Name *"
                      type="text"
                      errorText={errors.name}
                      onBlur={handleBlur}
                      value={values.name}
                    />
                    <Divider className="mt-9 lg:mt-9" />
                    <InputBox
                      labelID="emailContact"
                      handleChange={handleChange}
                      name="email"
                      placeholder="Email Address *"
                      type="text"
                      errorText={errors.email}
                      onBlur={handleBlur}
                      value={values.email}
                    />
                    <Divider className="mt-9 lg:mt-9" />
                    <TextArea
                      handleChange={handleChange}
                      name="message"
                      placeholder="Message *"
                      errorText={errors.message}
                      onBlur={handleBlur}
                      value={values.message}
                      textareaStyle="bg-transparent"
                    />
                    <Button
                      type="submit"
                      OnClick={handleSubmit}
                      className="mx-auto sm:mx-0 mt-8 text-[0.8rem] xxl:text-[1rem] py-[0.4rem] sm:py-[0.6rem] w-[7.3rem] sm:w-[9.5rem] block bg-main-greenOpt-200 font-miligramMedium text-main-lightTeal  rounded-lg border-[1px] border-main-lightTeal hover:bg-main-lightTeal hover:text-white"
                      text="Submit"
                    />
                  </>
                )}
              </Formik>
            </div>
            <Divider className="h-14 w-full sm:hidden" />
            <div className="w-full sm:hidden">
              <div className="flex gap-5">
                <Image
                  src={tealLocation}
                  alt={tealLocation}
                  width={15}
                  height={15}
                />
                <div className="text-white font-miligramText400">
                  <p className="inline sm:block">111, New Mohanpur Colony,</p>
                  <p className="inline sm:block"> Prem Nagar, Dehradun, </p>
                  <p className="inline sm:block"> Uttarakhand - 248007 </p>
                </div>
              </div>
              <div className="flex  gap-5 my-8">
                <Image src={tealMobile} alt={tealMobile} width={15} height={15} />
                <p className="text-white font-miligramText400">+91 7008493497</p>
              </div>
              <div className="flex  gap-5">
                <Image
                  src={tealMessage}
                  alt={tealMessage}
                  width={15}
                  height={15}
                />
                <p className="text-white font-miligramText400">info@koders.com</p>
              </div>
              <div className="flex gap-9 mt-8 w-fit mx-auto">
                {[linkedinWhite, githubWhite, twitterWhite, discordWhite].map(
                  (item, i) => {
                    return (
                      <Image
                        className="cursor-pointer transition-all duration-100 hover:scale-110"
                        key={i}
                        src={item}
                        alt={item}
                        width={30}
                        height={30}
                      />
                    );
                  }
                )}
              </div>
            </div>
          </div>
          <Divider className="h-10" />
        </div>
      </ErrorBoundary>
      <ErrorBoundary>
         <Footer />
      </ErrorBoundary>
     
    </div>
  );
};

export default Contact;
