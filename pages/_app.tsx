import "../styles/globals.css";

import { AppContext } from "../components";
import { useEffect, useState } from "react";
import axios from "axios";
// import { useFetchDataFromServer } from "../helper/careerHooks";

function MyApp({ Component, pageProps }) {
  // const isRender = useRef(false);
  const [jobs, setJobs] = useState<any>(null);
  const [appContext, setAppContext] = useState("");
  // const fetchData = useFetchDataFromServer();

  // useEffect(() => {
  //   if (!isRender.current) {
  //     isRender.current = true;
  //     if (jobs === null || jobs === undefined)
  // TODO=> need to update code here
  //       fetchData("open-job-listings", setJobs);

  //     axios
  //       .get("/api", {
  //         headers: {
  //           home: true,
  //         },
  //       })
  //       .then((data) => {})
  //       .catch((e) => {
  //         console.log(e);
  //       });
  //   }
  // }, []);

  useEffect(() => {
    axios
      .get("/api", { headers: { home: true } })
      .then((response) => {})
      .catch((e) => { 
        console.error("Error fetching data:", e);
      });

  }, []);

  return (
    <AppContext.Provider value={{ appContext, setAppContext, jobs, setJobs }}>
        <Component {...pageProps} />
    </AppContext.Provider>
  );
}

export default MyApp;
