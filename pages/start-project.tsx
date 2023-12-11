import Head from "next/head";
import { FormikHelpers } from "formik";
import React, { useContext, useState } from "react";

import "aos/dist/aos.css";

import {
  AppContext,
  ButtonsGroup,
  Divider,
  Faq,
  Footer,
  Form,
  GradientText,
  Navbar,
} from "../components";
import { sendClientDetails } from "../helper/webhook";
import { faq, typeOfProjects } from "../helper/constant";
// import { useSetDataOnServer } from "../helper/careerHooks";

export interface FormState {
  technologies: Array<string>;
}

interface initialState {
  aboutProject: string;
  budget: string;
  timeline: string;
  email: string;
  mobile: string;
  fName: string;
  lName: string;
  company: string;
  role: string;
  hearAboutUs: string;
  pricingPlan: string;
}
const StartProject = () => {
  const [showLoader, setShowLoader] = useState(false);
  const [technologies, setTechnologies] = useState<Array<string>>([
    "Web Development",
    "UI/UX",
  ]);
  const [isExpand, setIsExpand] = useState("");
  // const sendData = useSetDataOnServer();
  const { appContext, setAppContext }: any = useContext(AppContext);
  const handleExpand = (question: string) => {
    if (isExpand === question) setIsExpand("");
    else setIsExpand(question);
  };

  const handleSubmitForm = async (
    value: initialState,
    helper: FormikHelpers<initialState>
  ) => {
    try {
      setShowLoader(true);
      const res = await sendClientDetails({ ...value, technologies });
      if (res) {
        helper.resetForm();
        window.alert("Your response has been recorded.");
      } else {
        window.alert("Unable to record your response. Try again later.");
      }
      setShowLoader(false);
      // TODO=> need to update code here
      // const res = await sendData("project-request", {
      //   client_company_name: value.company,
      //   client_email: value.email,
      //   project_estimated_budget: value.budget,
      //   project_estimated_timeline: value.timeline,
      //   client_firstname: value.fName,
      //   client_lastname: value.lName,
      //   client_reference: value.hearAboutUs,
      //   client_company_jobrole: value.role,
      //   client_phone_number: value.mobile,
      //   project_description: value.aboutProject,
      //   project_tags: technologies,
      //   pricing_plan: value.pricingPlan,
      // });
      // setShowLoader(false);
      // if (res.status === 200) {
      //   window.alert("Your response has been recorded.");
      //   helper.resetForm();
      // } else {
      //   window.alert("Unable to record your response. Try again later.");
      // }
    } catch (error) {
      setShowLoader(false);
    }
  };

  const handleClick = (item: string) => {
    let temp: Array<any> = [];
    if (technologies?.find((elm) => elm === item)) {
      temp = technologies.filter((elm) => elm !== item);
    } else {
      temp = [...technologies, item];
    }
    setTechnologies(temp);
    if (temp.length === 0) {
      setTechnologies(["Other"]);
    }
  };

  return (
    <div className="bg-main-primary overflow-hidden relative">
      <Head>
        <title>Start Project</title>
      </Head>
      <Navbar />
      <div
        data-aos="fade-up"
        className="py-20 sm:py-28 w-[90%] md:w-[85%] mx-auto"
      >
        <GradientText
          className="text-[2.2rem] leading-none mb-3 md:mb-0 md:leading-normal  sm:text-[2.8rem] w-fit mx-auto text-center mt-9 bg-gradient-to-r from-white to-main-teal font-miligrambold"
          text="Start your project"
        />
        <Divider className="mt-16 md:py-2" />
        <ButtonsGroup
          {...{
            technologies,
            handleClick,
            buttonsArray: [...typeOfProjects],
          }}
        />
        <Divider className="mt-16" />
        <Form
          {...{
            handleSubmitForm,
            showLoader,
            setShowLoader,
            appContext,
            setAppContext,
          }}
        />
        <Divider className="mt-20" />
        <GradientText
          aos="fade-up"
          className="text-[2.2rem] leading-none mb-3 md:mb-0 md:leading-normal  sm:text-[2.8rem]  w-fit mx-auto text-center bg-gradient-to-r from-white to-main-teal font-miligrambold pt-"
          text="Frequently Asked Questions"
        />
        <Divider className="mt-8 xxl:mt-16 xxl:pt-3" />
        {faq.map((item, i) => (
          <Faq
            answer={item.answer}
            question={item.question}
            onClick={handleExpand}
            show={item.question === isExpand}
            key={i}
          />
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default StartProject;
