import "../styles/globals.css";

import { AppContext } from "../components";
import { useEffect, useState, useRef } from "react";
import axios from "axios";
import { useFetchDataFromServer } from "../helper/careerHooks";

function MyApp({ Component, pageProps }) {
  const isRender = useRef(false);
  const [jobs, setJobs] = useState<any>(null);
  const [appContext, setAppContext] = useState("");
  const fetchData = useFetchDataFromServer();

  useEffect(() => {
    if (!isRender.current) {
      isRender.current = true;
      if (jobs === null || jobs === undefined)
        fetchData("open-job-listings", setJobs);

      axios
        .get("/api", {
          headers: {
            home: true,
          },
        })
        .then((data) => {})
        .catch((e) => {
          console.log(e);
        });
    }
  }, []);
  return (
    <AppContext.Provider value={{ appContext, setAppContext, jobs, setJobs }}>
      <Component {...pageProps} />
    </AppContext.Provider>
  );
}

export default MyApp;
