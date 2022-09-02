import React from "react";
import "./PrivacyPolicy.scss";

const PrivacyPolicy = () => {
  return (
    <div className="privacy-policy">
      <h1>Privacy Policy</h1>
      <p>
        Before you use this website we encourage you to familiarize yourself
        with our Privacy Policy and its details.
        <ul>
          {points.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </p>
    </div>
  );
};

export default PrivacyPolicy;

const points = [
  "Your personal data may be collected which is necessary for technical and commercial purposes only",
  "We are committed to data protection and respecting the privacy of our customers or anyone who might associate with us while delivering our products and services.",
  "The Contact Us form in the website collects your email which is used to keep you updated about our services which fulfill your needs and requirements by sending you regular emails and newsletters. We keep you assured that this information is protected and you may unsubscribe to the mails which are not required by you anymore.",
  "We undertake necessary measures within our capacity to make sure your privacy is safeguarded with utmost care and dedication, including actions such as associating with any third party services offered by Koders.",
  "As you use our services, we may also collect information through the use of commonly-used information-gathering tools, such as Cookies, log files and Web tokens.",
  "We’ll keep you updated with our newsletters, marketing advertisements, promotional materials and other information that may act as an interest to you.",
  "If you run into any technical error while using our services, an automated report will be generated which is used to rectify the error and may contain your data. This is required in order to provide the solution for the caused error",
  "We use cookies for providing our customers with the best possible experience on our website with the tint of content personalization, relevant tools, optimized services and much more.",
  "We may use data related to your Usage and Analytics Information which will help us in determining your geographical location for keeping our database updated with all your details for our further usage.",
  "You have the right to access the data which holds all your personal information that we have generated in respect to you.",
  "We may employ third party companies and individuals to facilitate our services which helps us to provide our services with better analysis and features. These third party services may not be owned by Koders but we ensure to keep your data safe while using these services.",
];
