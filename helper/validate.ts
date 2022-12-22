import * as yup from "yup";

export const jobValidationSchema = yup.object().shape({
  fName: yup.string().required("First Name is a mandatory field."),
  lName: yup.string().required("Last Name is a mandatory field."),
  email: yup
    .string()
    .email("Provided email address is invalid")
    .required("Email Address is a mandatory field.")
    .typeError("Provided email address is invalid."),
  mobile: yup
    .number()
    .required("Phone Number is a mandatory field.")
    .typeError("Provided phone number is invalid."),
  joiningIn: yup.string().required("This is a mandatory field."),
  linkedIn: yup.string().optional(),
  portfolioURL: yup.string().optional(),
  hiringReason: yup.string().required("This is a mandatory field."),
  // joiningReason: yup.string().required("This is a mandatory field."),
  hearAboutUs: yup.string().required("This is a mandatory field."),
});

export const projectDataSchema = yup.object().shape({
  aboutProject: yup.string().required("This is a mandatory field."),
  budget: yup.string().required("Estimated Budget is a mandatory field."),
  timeline: yup.string().required("Estimated Timeline is a mandatory field."),
  email: yup
    .string()
    .email("Provided email address is invalid")
    .required("Email Address is a mandatory field.")
    .typeError("Provided email address is invalid."),
  mobile: yup
    .number()
    .required("Phone Number is a mandatory field.")
    .typeError("Provided phone number is invalid."),
  fName: yup.string().required("First Name is a mandatory field."),
  lName: yup.string().required("Last Name is a mandatory field."),
  company: yup.string().notRequired(),
  role: yup.string().notRequired(),
  hearAboutUs: yup.string().required("This is a mandatory field."),
  pricingPlan:yup.string().required("This is a mandatory field."),
});

export const collabrationPageSchima = yup.object().shape({
  name: yup.string().min(2).required("First Name is a mandatory field."),
  email: yup
    .string()
    .email("Provided email address is invalid")
    .required("Email Address is a mandatory field.")
    .typeError("Provided email address is invalid."),
  mobile: yup
    .number()
    .required("Phone Number is a mandatory field.")
    .typeError("Provided phone number is invalid."),
  company: yup.string().required("Company Name is a mandatory field."),
  companySize: yup.string().required("Company Size is a mandatory field."),
  location: yup.string().required("Company Location is a mandatory field."),
  websiteURL: yup
    .string()
    .required("Website/LinkedIn URL is a mandatory field."),
  jobTitle: yup.string().required("Job Title is a mandatory field."),
  questionOne: yup.string().required("This is a mandatory field."),
  questionTwo: yup.string().required("This is a mandatory field."),
  hearAboutUS: yup.string().required("This is a mandatory field."),
});

export const contactValidationSchima = yup.object().shape({
  name: yup.string().min(2).required("Name is a mandatory field."),
  email: yup.string().email().required("Email Address is a mandatory field."),
  message: yup.string().required("Message is a mandatory field."),
});

export const emailValidation = yup.object().shape({
  email: yup.string().email().required("Provided email address is invalid."),
});
