import React, { useEffect, useState } from "react";
import { FormikHelpers } from "formik";

import Divider from "../../Divider";
import InputBox from "../../InputBox";
import SelectBox from "../../SelectBox";
import { pricingList, timeLineList } from "../../../helper/constant";
import { Formik } from "formik";
import { projectDataSchema } from "../../../helper/validate";
import Button from "../../Button";
import { PropagateLoader } from "react-spinners";
import TextArea from "../jobs/TextArea";

interface Form {
  [key: string]: string;
}

interface Props {
  handleSubmitForm: (
    value: initialState,
    helper: FormikHelpers<initialState>
  ) => void;
  showLoader: boolean;
  setShowLoader: (data: boolean) => void;
  appContext: string;
  setAppContext: (data: string) => void;
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

const initialValues: initialState = {
  aboutProject: "",
  budget: "",
  timeline: "",
  email: "",
  mobile: "",
  fName: "",
  lName: "",
  company: "",
  role: "",
  hearAboutUs: "",
  pricingPlan: "",
};

const Form = ({
  handleSubmitForm,
  showLoader,
  setShowLoader,
  appContext,
  setAppContext,
}: Props) => {
  useEffect(() => {
    const elm = document.getElementById("abproject");
    elm.focus();
  }, []);
  return (
    <Formik
      className="w-[97%] mx-auto mt-10 font-miligramMedium"
      validationSchema={projectDataSchema}
      onSubmit={handleSubmitForm}
      initialValues={initialValues}
      validateOnChange={false}
      validateOnBlur={false}
    >
      {({
        handleChange,
        handleSubmit,
        handleBlur,
        errors,
        values,
        setFieldValue,
      }) => {
        useEffect(() => {
          if (appContext) {
            setFieldValue("pricingPlan", appContext);
          }
          return () => setAppContext("");
        });
        return (
          <div className="relative">
            <TextArea
              handleChange={handleChange}
              id="abproject"
              name="aboutProject"
              placeholder="Please tell us a bit about your project *"
              errorText={errors.aboutProject}
              value={values.aboutProject}
              textareaStyle="bg-main-primary"
            />
            <Divider className="mt-9 lg:mt-9" />
            <div className="flex flex-wrap md:flex-nowrap gap-10 md:gap-20 mt-2">
              <SelectBox
                labelID="selectbudgetApp"
                onBlur={handleBlur}
                value={values?.budget}
                placeholder="Estimated Budget *"
                list={pricingList}
                name="budget"
                handleSelect={(obj: any) => {
                  const { name, value } = obj;
                  handleChange("budget")(value);
                }}
                errorText={errors.budget}
              />
              <SelectBox
                labelID="selecttimelineApp"
                onBlur={handleBlur}
                value={values?.timeline}
                placeholder="Estimated Timeline *"
                list={timeLineList}
                name="timeline"
                handleSelect={(obj: any) => {
                  const { name, value } = obj;
                  handleChange("timeline")(value);
                }}
                errorText={errors.timeline}
              />
            </div>
            <Divider className="mt-9 lg:mt-9" />
            <div className="flex flex-wrap md:flex-nowrap gap-10 md:gap-20 mt-2">
              <InputBox
                labelID="fNameClient"
                type="text"
                value={values.fName}
                placeholder="First Name *"
                name="fName"
                handleChange={handleChange}
                onBlur={handleBlur}
                errorText={errors.fName}
              />
              <InputBox
                labelID="lNameClient"
                type="text"
                value={values.lName}
                placeholder="Last Name *"
                name="lName"
                handleChange={handleChange}
                onBlur={handleBlur}
                errorText={errors?.lName}
              />
            </div>
            <Divider className="mt-9 lg:mt-9" />
            <div className="flex flex-wrap md:flex-nowrap gap-10 md:gap-20 mt-2">
              <InputBox
                labelID="emailClient"
                type="text"
                value={values.email}
                placeholder="Email Address *"
                name="email"
                handleChange={handleChange}
                onBlur={handleBlur}
                errorText={errors?.email}
              />
              <InputBox
                labelID="phoneClient"
                type="text"
                value={values.mobile}
                placeholder="Phone Number *"
                name="mobile"
                handleChange={handleChange}
                onBlur={handleBlur}
                errorText={errors?.mobile}
              />
            </div>
            <Divider className="mt-9 lg:mt-9" />
            <div className="flex flex-wrap md:flex-nowrap gap-10 md:gap-20 mt-2">
              <InputBox
                labelID="companyClient"
                type="text"
                value={values.company}
                placeholder="Company Name"
                name="company"
                handleChange={handleChange}
                onBlur={handleBlur}
              />
              <InputBox
                labelID="titleClient"
                type="text"
                value={values.role}
                placeholder="Your Title/Role"
                name="role"
                handleChange={handleChange}
                onBlur={handleBlur}
              />
            </div>
            <Divider className="mt-9 lg:mt-9" />
            <div className="flex flex-wrap md:flex-nowrap gap-10 md:gap-20 mt-2">
              <SelectBox
                labelID="selectaboutApp"
                onBlur={handleBlur}
                value={values?.hearAboutUs}
                placeholder="How did you hear about us? *"
                list={[
                  "Social Media",
                  "Friends/Family",
                  // "Hiring Portal",
                  "Google",
                  "Other",
                ]}
                name="hearAboutUs"
                handleSelect={(obj: any) => {
                  const { name, value } = obj;
                  handleChange("hearAboutUs")(value);
                }}
                errorText={errors.hearAboutUs}
                inputID="startHear"
              />
              <SelectBox
                labelID="selectaboutApp"
                onBlur={handleBlur}
                value={values?.pricingPlan}
                placeholder="Select pricing plan *"
                list={[
                  "Basic plan ($12/hour)",
                  "Basic plus plan ($15/hour)",
                  "Premium plan ($20/hour)",
                  "Enterprise plan ($30/hour)",
                ]}
                name="pricingPlan"
                handleSelect={(obj: any) => {
                  const { name, value } = obj;
                  handleChange("pricingPlan")(value);
                }}
                errorText={errors.pricingPlan}
                inputID="pricingPlanSelect"
              />
            </div>
            <Divider className="mt-10" />
            <PropagateLoader
              color="#00A99D"
              loading={showLoader}
              className="w-fit block mx-auto"
              // cssOverride={override}
              // size={100}
              aria-label="Loading Spinner"
              data-testid="loader"
            />
            <Button
              disabled={showLoader}
              styleObj={showLoader ? { pointerEvents: "none" } : {}}
              type="submit"
              OnClick={handleSubmit}
              className="mx-auto text-[0.8rem] xxl:text-[1rem] py-[0.4rem] sm:py-[0.6rem] w-[7.3rem] sm:w-[9.5rem] block mt-16 bg-main-greenOpt-200 font-miligramMedium text-main-lightTeal  rounded-lg border-[1px] border-main-lightTeal hover:bg-main-lightTeal hover:text-white"
              text="Submit"
            />
          </div>
        );
      }}
    </Formik>
  );
};

export default Form;
