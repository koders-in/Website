import "../styles/globals.css";

import { AppContext } from "../components";
import { useState } from "react";

function MyApp({ Component, pageProps }) {
  const [appContext, setAppContext] = useState("");
  return (
    <AppContext.Provider value={{ appContext, setAppContext }}>
      <Component {...pageProps} />;
    </AppContext.Provider>
  );
}

export default MyApp;
