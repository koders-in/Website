import React from "react";
import "./ContactUs.scss";
import Fade from "react-reveal/Fade";
import Image1 from "../../Images/Location.svg";
import Image2 from "../../Images/Mail.svg";
import Image3 from "../../Images/Phone.svg";

function ContactUs() {
  return (
    <div className="container section-margin" id="contactus">
      <Fade left>
        <h3 className="title-margin">CONTACT US</h3>
      </Fade>
      <div className="contact-wrapper row">
        <div className="col-md-6 col-sm-12">
          <h4>Contact Details</h4>
          <div className="details">
            <div className="location">
              <img src={Image1} alt="" />
              <p>
                House No 111, New Mohanpur Colony, Prem Nagar, Dehradun,
                Uttarakhand - 248007
              </p>
            </div>
            <div className="mail">
              <img src={Image2} alt="" />
              <p>support@koders.in</p>
            </div>
            <div className="phone">
              <img src={Image3} alt="" />
              <p>
                +91-7017799756,<br></br> +91-7008493497
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-sm-12">
          <form id="contact_form">
            <div className="requirements">
              <h4>Name:</h4>
              <input
                type="text"
                id="your_name"
                className="inputfieldname"
                placeholder="Name"
                required="true"
              />
              <h4>Email:</h4>
              <input
                type="mail"
                id="your_mail"
                className="inputfieldmail"
                placeholder="Email"
                required="true"
              />
              <h4>Subject:</h4>
              <input
                type="text"
                id="your_subject"
                className="inputfieldsubject"
                placeholder="Subject"
                required="true"
              />

              <div className="message">
                <h4>Message:</h4>
                <textarea
                  id="your_message"
                  className="inputfieldmessage"
                  placeholder="Your Message"
                  required="true"
                />
              </div>

              <div className="submitbutton">
                <button type="submit" className="formbutton">
                  Send Message
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
