import React, { useEffect, useState } from "react";
import "./App.scss";
import ReactGA from "react-ga";
import Main from "./pages/Main";
import Header from "./components/Header/Header";
import AnimatedCursor from "react-animated-cursor";
import CookieConsent, { getCookieConsentValue } from "react-cookie-consent";

function App() {
  const [userClick, setUserClick] = useState(false);
  const isAccept = getCookieConsentValue("koders-website");
  useEffect(() => {
    if (Boolean(isAccept)) {
      const trackingID = process.env.REACT_APP_TRACKING_ID;
      if (trackingID) {
        ReactGA.initialize();
      }
    }
  }, [isAccept, userClick]);

  const handleAccept = () => {
    setUserClick(true);
  };

  return (
    <div className="app">
      <AnimatedCursor
        innerSize={8}
        outerSize={30}
        color="51, 223, 211"
        outerAlpha={0.2}
        innerScale={0.7}
        outerScale={2}
      />
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
