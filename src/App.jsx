import React, { useEffect, useState } from "react";
import "./App.scss";
import ReactGA from "react-ga";
import Main from "./pages/Main";
import Header from "./components/Header/Header";
import CookieConsent, { getCookieConsentValue } from "react-cookie-consent";
import { useLocation } from "react-router-dom";

function App() {
  const location = useLocation();
  const [isAccept, setIsAccept] = useState(false);
  const isAcceptValue = getCookieConsentValue("koders-website");

  useEffect(() => {
    const trackingID = process.env.REACT_APP_TRACKING_ID;
    if (Boolean(isAcceptValue)) {
      if (!trackingID) return;
      ReactGA.initialize(trackingID);
    }
  }, [isAcceptValue, isAccept]);

  useEffect(() => {
    if (!window.ga) return;
    const { pathname: page } = location;
    window.ga("set", "page", page);
    window.ga("send", "pageview");
  }, [location]);

  const handleAccept = () => {
    setIsAccept(true);
  };

  return (
    <div className="app">
      <Header />
      <Main />
      <CookieConsent
        buttonText="Accept All"
        enableDeclineButton
        cookieName="koders-website"
        setDeclineCookie={false}
        declineButtonText="Decline"
        onAccept={handleAccept}
        style={{
          background: "#1d2c48",
          fontSize: "14px",
          textAlign: "left",
        }}
        buttonStyle={{
          padding: "10px 20px",
          border: "1px solid #ffffff",
          color: "#ffffff",
          background: "transparent",
        }}
        declineButtonStyle={{
          border: "1px solid gray",
          background: "transparent",
          padding: "10px 20px",
          color: "gray",
        }}
      >
        We use cookies to enhance your browsing experience, serve personalized
        ads or content, and analyze our traffic. By clicking 'Accept All', you
        consent to our use of cookies.
      </CookieConsent>
    </div>
  );
}

export default App;
