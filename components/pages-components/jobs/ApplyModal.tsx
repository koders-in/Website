import Image from "next/image";
import Modal from "react-modal";
import { Formik, FormikHelpers } from "formik";
import React, { useEffect, useState } from "react";
import { disableBodyScroll, enableBodyScroll } from "body-scroll-lock";

import {
  add,
  duration,
  error,
  experienceIcon,
  locationTeal,
  work,
} from "../../../assets";
import TextArea from "./TextArea";
import Button from "../../Button";
import Divider from "../../Divider";
import InputBox from "../../InputBox";
import SelectBox from "../../SelectBox";
import GradientText from "../../GradientText";
import { PropagateLoader } from "react-spinners";
import { sendCandidateDetails } from "../../../helper/webhook";
import { jobValidationSchema } from "../../../helper/validate";
import { useSetDataOnServer } from "../../../helper/careerHooks";

interface initialState {
  email: string;
  mobile: string;
  fName: string;
  lName: string;
  joiningIn: string;
  linkedIn?: string;
  portfolioURL?: string;
  hiringReason?: string;
  hearAboutUs: string;
}

const initialValue: initialState = {
  email: "",
  fName: "",
  lName: "",
  mobile: "",
  joiningIn: "",
  linkedIn: "",
  portfolioURL: "",
  hiringReason: "",
  hearAboutUs: "",
};

const customStyles = {
  content: {
    top: "10%",
    background: "#20222A",
    width: "70%",
    marginRight: "auto",
    marginLeft: "auto",
    zIndex: "10",
    border: "2px solid #00A99D",
    padding: "2rem 3rem",
  },
};

interface Props {
  showModal: {
    viewDetails: boolean;
    apply: boolean;
  };
  setShowModal: (prop: any) => void;
  toogleDetailModal: () => void;
  toogleApplyModal: () => void;
  toogleThankModal: () => void;
  experience: string;
  viewDetails: any;
  title: string;
  location: string;
  type: string;
  id: number;
}

const ApplyModal = ({
  showModal,
  setShowModal,
  toogleDetailModal,
  toogleApplyModal,
  toogleThankModal,
  experience,
  viewDetails,
  title,
  location,
  type,
  id,
}: Props) => {
  const [resume, setResume] = useState<any>(null);
  const [resumeError, setResumeError] = useState<boolean>(false);
  const [isShowLoader, setIsShowLoader] = useState(false);
  const sendData = useSetDataOnServer();

  useEffect(() => {
    return () => {
      enableBodyScroll(document);
    };
  });

  const handleSubmitForm = async (
    value: initialState,
    helper: FormikHelpers<initialState>
  ) => {
    if (resume === null) {
      setResumeError(true);
      setIsShowLoader(false);
      return;
    } else setResumeError(false);

    setIsShowLoader(true);
    const formdata = new FormData();
    formdata.append("file", resume);

    const requestOptions: any = {
      method: "POST",
      body: formdata,
      redirect: "follow",
    };
    try {
      const response = await fetch("/api/", requestOptions);
      if (response.status !== 200) {
        window.alert("Unable to upload resume. Try again later.");
        setIsShowLoader(false);
        return;
      }
      const data = await response.text();
      const { result } = JSON.parse(data);
      const res = await sendData("apply", {
        first_name: value?.fName,
        last_name: value?.lName,
        email: value?.email,
        phone_number: value?.mobile,
        resume: result,
        job_applied: id,
        hiring_reason: value?.hiringReason,
        joining_preference: value?.joiningIn,
        joining_reason: "",
        linkedin_url: value?.linkedIn,
        portfolio_url: value?.portfolioURL,
      });
      if (res.status === 200) {
        closeModal();
        enableBodyScroll(document);
        toogleThankModal();
      } else {
        window.alert("Something went wrong. Try again later.");
      }
      await sendCandidateDetails({
        ...value,
        title,
        downloadLink: result,
      });
      setResume(null);
      setIsShowLoader(false);
      helper.resetForm();
    } catch (error: any) {
      setIsShowLoader(false);
      window.alert("Something went wrong. Try again later.");
      console.warn(error.message);
    }
  };

  const handleResumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {
      target: { files },
    } = e;
    const size = files[0]?.size / 1024;
    if (size > 2048) {
      window.alert("File size should be less than 2MB.");
    } else {
      setResumeError(false);
      setResume(files[0]);
    }
  };

  const closeModal = () => {
    setResumeError(false);
    enableBodyScroll(document);
    setResume(null);
    setShowModal((p: any) => {
      return {
        ...p,
        apply: !p.apply,
      };
    });
  };

  const onAfterOpen = () => {
    disableBodyScroll(document);
  };

  const handleViewDetails = () => {
    toogleDetailModal();
    toogleApplyModal();
  };

  useEffect(() => {
    Modal.setAppElement("body");
  });

  return (
    <Modal
      isOpen={showModal.apply}
      onAfterOpen={onAfterOpen}
      onRequestClose={closeModal}
      style={customStyles}
      contentLabel="Example Modal"
    >
      <Formik
        validationSchema={jobValidationSchema}
        onSubmit={handleSubmitForm}
        initialValues={initialValue}
        validateOnBlur={false}
        validateOnChange={false}
      >
        {({ handleChange, handleSubmit, handleBlur, errors, values }) => (
          <React.Fragment>
            <div className="lg:flex justify-between items-center">
              <div className="w-full lg:w-[80%]">
                <GradientText
                  className="w-fit text-[2rem] bg-gradient-to-r from-white to-main-teal font-miligrambold"
                  text={title}
                />
                <div className="flex text-white flex-wrap gap-2">
                  <div className="flex items-center justify-between text-[0.8rem]">
                    <Image src={locationTeal} alt="" className="mr-2 h-3" />
                    {location}
                  </div>
                  <div className="flex items-center justify-between text-[0.8rem]">
                    <Image src={work} alt="" className="mr-2 h-3" />
                    {type}
                  </div>
                  <div className="flex items-center justify-between text-[0.8rem]">
                    <Image src={experienceIcon} alt="" className="mr-2 h-3" />
                    Exp {experience}
                  </div>
                  {viewDetails?.jobs_listing[0]?.job?.duration && (
                    <div className="flex items-center justify-between text-[0.8rem]">
                      <Image src={duration} alt="" className="mr-2 h-3" />
                      Duration- {viewDetails?.jobs_listing[0]?.job?.duration}
                    </div>
                  )}
                </div>
              </div>
              <div className="w-full  lg:w-[21%] mt-3 lg:mt-0">
                <Button
                  OnClick={handleViewDetails}
                  text="View Details"
                  className=" bg-main-greenOpt-200  font-miligramMedium w-auto text-main-lightTeal text-[0.8rem] py-[8px] sm:py-[0.55rem] px-6 rounded-lg border-[1px] border-main-lightTeal hover:bg-main-lightTeal hover:text-white"
                />
              </div>
              <Image
                src={add}
                alt=""
                className="lg:hidden rotate-45 absolute right-2 top-2 h-6 brightness-75"
                onClick={closeModal}
              />
            </div>
            <div className="h-[2px] bg-white w-ful my-4"></div>
            <div className="p-8 border-dashed  border-2 border-main-teal rounded-xl relative ">
              <input
                type="file"
                accept=".pdf"
                name="resume"
                onChange={handleResumeChange}
                className="absolute left-0 top-0 w-full h-full opacity-0 cursor-pointer"
              />
              <p className="text-main-teal text-[1rem] text-center">
                {resume?.name ? resume?.name : "Upload Resume"}
              </p>
              <p className="hidden sm:block text-main-whiteVar1 text-[0.8rem] text-center">
                Drop resume here or Click to upload
              </p>
              <p className="text-main-whiteVar1 text-[0.8rem] text-center sm:hidden">
                Click to upload
              </p>
              {resumeError && (
                <span
                  className={`absolute text-red-600 text-xs bottom-[-22px] left-0 flex justify-center items-center font-miligramTextMedium`}
                >
                  <Image
                    src={error}
                    alt={error}
                    width={17}
                    height={17}
                    className="mr-1"
                  />
                  Resume is mandatory.
                </span>
              )}
            </div>
            <Divider className="mt-10" />
            <div className="flex flex-wrap md:flex-nowrap gap-10 md:gap-5 mt-2">
              <div className="w-full md:w-[50%]">
                <InputBox
                  labelID="fNameCandid"
                  type="text"
                  fontSize="text-[0.9rem] md:text-[1rem]"
                  placeholder="First Name *"
                  name="fName"
                  onBlur={handleBlur}
                  value={values.fName}
                  handleChange={handleChange}
                  errorText={errors.fName}
                />
              </div>
              <div className="w-full md:w-[50%]">
                <InputBox
                  labelID="lNameCandid"
                  fontSize="text-[0.9rem] md:text-[1rem]"
                  type="text"
                  placeholder="Last Name *"
                  name="lName"
                  onBlur={handleBlur}
                  value={values.lName}
                  handleChange={handleChange}
                  errorText={errors.lName}
                />
              </div>
            </div>
            <Divider className="mt-9 lg:mt-9" />
            <div className="flex flex-wrap md:flex-nowrap gap-10 md:gap-5 mt-2">
              <div className="w-full md:w-[50%]">
                <InputBox
                  labelID="emailCandid"
                  fontSize="text-[0.9rem] md:text-[1rem]"
                  type="text"
                  placeholder="Email Address *"
                  name="email"
                  onBlur={handleBlur}
                  value={values.email}
                  handleChange={handleChange}
                  errorText={errors.email}
                />
              </div>
              <div className="w-full md:w-[50%]">
                <InputBox
                  labelID="phoneCandid"
                  fontSize="text-[0.9rem] md:text-[1rem]"
                  type="text"
                  placeholder="Phone Number *"
                  name="mobile"
                  onBlur={handleBlur}
                  value={values.mobile}
                  handleChange={handleChange}
                  errorText={errors.mobile}
                />
              </div>
            </div>
            <Divider className="mt-9 lg:mt-9" />
            <div className="flex flex-wrap md:flex-nowrap gap-10 md:gap-5 mt-2">
              <div className="w-full md:w-[50%]">
                <InputBox
                  labelID="urlCandid"
                  fontSize="text-[0.9rem] md:text-[1rem]"
                  type="text"
                  placeholder="Website URL/Portfolio URL"
                  name="portfolioURL"
                  onBlur={handleBlur}
                  value={values.portfolioURL}
                  handleChange={handleChange}
                  errorText={errors.portfolioURL}
                />
              </div>
              <div className="w-full md:w-[50%]">
                <InputBox
                  labelID="inledCandid"
                  fontSize="text-[0.9rem] md:text-[1rem]"
                  type="text"
                  placeholder="LinkedIn URL"
                  name="linkedIn"
                  onBlur={handleBlur}
                  value={values.linkedIn}
                  handleChange={handleChange}
                  errorText={errors.linkedIn}
                />
              </div>
            </div>
            <Divider className="mt-9 lg:mt-9" />
            <div></div>
            <Divider className="mt-9 lg:mt-9" />
            <TextArea
              fontSize="text-[0.9rem] md:text-[1rem]"
              placeholder="Why should you be hired for this role? *"
              name="hiringReason"
              onBlur={handleBlur}
              value={values.hiringReason}
              handleChange={handleChange}
              errorText={errors.hiringReason}
            />
            <Divider className="mt-9 lg:mt-9" />
            <div className="flex flex-wrap md:flex-nowrap gap-10 md:gap-5 mt-2">
              <div className="w-full md:w-[50%]">
                <SelectBox
                  labelID="selectJoinApp"
                  onBlur={handleBlur}
                  fontSize="text-[0.9rem] md:text-[1rem]"
                  value={values.joiningIn || ""}
                  placeholder="When can you start working? *"
                  list={[
                    "I can join immediately (within 15 days)",
                    "I can join within a month",
                    "I can join after a month",
                  ]}
                  name="joiningIn"
                  handleSelect={(obj: any) => {
                    const { name, value } = obj;
                    handleChange("joiningIn")(value);
                  }}
                  errorText={errors.joiningIn}
                />
              </div>
              <div className="w-full md:w-[50%]">
                <SelectBox
                  labelID="selecthearApp"
                  onBlur={handleBlur}
                  fontSize="text-[0.9rem] md:text-[1rem]"
                  value={values.hearAboutUs || ""}
                  placeholder="How did you hear about us? *"
                  list={[
                    "Social Media",
                    "Friends/Family",
                    "Hiring Portal",
                    "Google",
                    "Other",
                  ]}
                  name="hearAboutUS"
                  handleSelect={(obj: any) => {
                    const { name, value } = obj;
                    handleChange("hearAboutUs")(value);
                  }}
                  errorText={errors.hearAboutUs}
                  inputID="applyHear"
                />
              </div>
            </div>
            <Divider className="mt-5" />
            <div className="text-center">
              <PropagateLoader
                color="#00A99D"
                loading={isShowLoader}
                size={20}
              />
              {isShowLoader && <Divider className="mt-10 h-16" />}
            </div>
            <Divider className="mt-5" />
            {!isShowLoader && (
              <button
                onClick={() => {
                  handleSubmit();
                }}
                type="submit"
                className=" bg-main-greenOpt-200 mt-12 font-miligramMedium w-fit text-main-lightTeal text-[0.8rem] py-[8px] sm:py-[0.55rem]  px-12 rounded-lg border-[1px] border-main-lightTeal hover:bg-main-lightTeal hover:text-white block mx-auto"
              >
                Apply
              </button>
            )}
          </React.Fragment>
        )}
      </Formik>
    </Modal>
  );
};

export default ApplyModal;
