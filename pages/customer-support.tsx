import AOS from "aos";
import React from "react";
import Head from "next/head";

import "aos/dist/aos.css";
import { Divider, Footer, GradientText, Navbar } from "../components";
import { useRouter } from "next/router";

const MAIL_TO = `mailto:info@koders.in?subject=Query&body=${""}`;

const PrivacyPolicy = () => {
  const router = useRouter();
  const handleNavigate = (href: string) => {
    router.push(href);
  };

  const handleMail = (mail) => {
    window.open(`mailto:${mail}?`, "_bank");
  };

  return (
    <div className="bg-main-primary overflow-hidden relative">
      <Head>
        <title>Customer Support</title>
      </Head>
      <Navbar />
      <div className="pb-10 pt-28 w-[95%] sm:w-[90%] mx-auto">
        <GradientText
          aos="fade-up"
          className="w-[100%] mx-auto sm:w-fit text-[2.2rem] leading-none mb-3 md:mb-0 md:leading-normal  sm:text-[2.8rem] text-center bg-gradient-to-r from-white to-main-teal font-miligrambold mt-9"
          text="Customer Support"
        />
        <br />
        <p
          data-aos="fade-up"
          className="font-miligramLight text-[1.05rem] mt-12 text-main-white-700 w-[96%] mx-auto text-justify"
        >
          Welcome to the Koders customer support page! We are committed to
          providing the best possible support to our customers and we have a
          range of resources available to help you get the most out of our
          software development services.
        </p>
        <Divider className="mt-8" />
        <h4
          data-aos="fade-up"
          className="font-miligramLight text-[1.2rem] sm:text-[1.5rem] mt-12 text-white w-[96%] mx-auto text-justify"
        >
          Contact Us:
        </h4>
        <ul data-aos="fade-up" className="list-decimal ml-7 sm:ml-6">
          <li className="font-miligramLight my-4 text-[1.05rem] text-main-white-700 w-[96%] mx-auto text-justify">
            Phone: +91 7008493497 (available during business hours)
          </li>
          <li className="cursor-pointer font-miligramLight my-4 text-[1.05rem] text-main-white-700 w-[96%] mx-auto text-justify">
            Email:
            <span
              onClick={() => handleMail("support@koders.in")}
              className="cursor-pointer hover:text-white"
            >
              &nbsp;support@koders.in&nbsp;
            </span>
            (available 24/7)
          </li>
          <li className=" font-miligramLight my-4 text-[1.05rem] text-main-white-700 w-[96%] mx-auto text-justify">
            Contact Form:
            <span
              onClick={() => handleNavigate("/contact")}
              className="cursor-pointer hover:text-white"
            >
              https://koders.in/contact
            </span>
          </li>
        </ul>
        <Divider className="mt-8" />
        <h4
          data-aos="fade-up"
          className="font-miligramLight text-[1.2rem] sm:text-[1.5rem] mt-12 text-white w-[96%] mx-auto text-justify"
        >
          Support Hours:
        </h4>
        <p
          data-aos="fade-up"
          className="font-miligramLight text-[1.05rem] mt-6 text-main-white-700 w-[96%] mx-auto text-justify"
        >
          Our customer support team is available to assist you Monday through
          Friday, 10 am to 7 pm IST.
        </p>
        <Divider className="mt-8" />
        <h4
          data-aos="fade-up"
          className="font-miligramLight text-[1.2rem] sm:text-[1.5rem] mt-12 text-white w-[96%] mx-auto text-justify"
        >
          FAQ Section:
        </h4>
        <p
          data-aos="fade-up"
          className="font-miligramLight text-[1.05rem] mt-6 text-main-white-700 w-[96%] mx-auto text-justify"
        >
          For your convenience, we have compiled a list of frequently asked
          questions (FAQs) on our website. Please visit{" "}
          <span
            className="hover:text-white cursor-pointer"
            onClick={() => handleNavigate("start-project/#faq")}
          >
            https://koders.in/start-project#faq
          </span>
          &nbsp;to browse through these FAQs for answers to your common queries.
        </p>
        <Divider className="mt-8" />
        <h4
          data-aos="fade-up"
          className="font-miligramLight text-[1.2rem] sm:text-[1.5rem] mt-12 text-white w-[96%] mx-auto text-justify"
        >
          Ticketing System:
        </h4>
        <p
          data-aos="fade-up"
          className="font-miligramLight text-[1.05rem] mt-6 text-main-white-700 w-[96%] mx-auto text-justify"
        >
          We provide you with a ticketing system on our discord server, wherein
          customers can submit support requests, track the progress of their
          issues and directly get in touch with our staff members.
        </p>
        <Divider className="mt-8" />
        <h4
          data-aos="fade-up"
          className="font-miligramLight text-[1.2rem] sm:text-[1.5rem] mt-12 text-white w-[96%] mx-auto text-justify"
        >
          Client Server:
        </h4>
        <p
          data-aos="fade-up"
          className="font-miligramLight text-[1.05rem] mt-6 text-main-white-700 w-[96%] mx-auto text-justify"
        >
          Join our client server to connect with other users of our services and
          get help from our team and other experts. You can also share tips and
          tricks and participate in discussions about software development.
          <br /> <br className="hidden sm:block" />
          We strive to respond to all customer support requests within 24 hours
          and to resolve issues as quickly as possible. If a problem cannot be
          resolved within that time frame, we will provide regular updates to
          the customer until the issue is resolved.
        </p>
      </div>
      <Divider className="mt-8" />
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
