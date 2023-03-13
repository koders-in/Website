import AOS from "aos";
import Head from "next/head";
import dynamic from "next/dynamic";
import React, { useState, useEffect, Suspense } from "react";

import "aos/dist/aos.css";
import { AnimatedBorder } from "../components";
import Image from "next/image";
import { greenArrow } from "../assets";
import { FadeLoader } from "react-spinners";
import { useFetchDataFromServer, useFilter } from "../helper/careerHooks";
import { AxiosResponse } from "axios";

const Divider = dynamic(() => import("../components/Divider"), {
  suspense: true,
});
const Footer = dynamic(() => import("../components/Footer"), {
  suspense: true,
});
const Hiring = dynamic(
  () => import("../components/pages-components/jobs/Hiring"),
  {
    suspense: true,
  }
);
const Job = dynamic(() => import("../components/pages-components/jobs/Job"), {
  suspense: true,
});
const JobAlert = dynamic(
  () => import("../components/pages-components/jobs/JobAlert"),
  {
    suspense: true,
  }
);
const LandingSection = dynamic(
  () => import("../components/pages-components/jobs/LandingSection"),
  {
    suspense: true,
  }
);
const Navbar = dynamic(() => import("../components/Navbar"), {
  suspense: true,
});

const Jobs = () => {
  const [filter, setFilter] = useState({
    title: "",
    isRemote: false,
    departments: ["All"],
  });
  const [jobs, setJobs] = useState<any>(null);
  const [viewMore, setViewMore] = useState<boolean>(true);
  const [pinJobs, setPinJobs] = useState<any>();
  const [tempData, setTempData] = useState<any>(null);
  const [noMatch, setNoMatch] = useState<boolean>(false);
  const [department, setDepartment] = useState<Array<string>>(["All"]);
  const fetchData = useFetchDataFromServer();
  const filterData = useFilter();

  useEffect(() => {
    AOS.init({
      easing: "ease-out",
      once: true,
      duration: 600,
    });
  }, []);

  useEffect(() => {
    if (jobs === null || jobs === undefined)
      fetchData("open-job-listings", setJobs);

    if (jobs && tempData === null) {
      if (jobs?.jobs_listing?.length / 3 > 0) {
        setPinJobs(jobs?.jobs_listing?.slice(0, 2));
        setTempData(jobs?.jobs_listing?.slice(0, 2));
      } else {
        setPinJobs(jobs?.jobs_listing);
        setTempData(jobs?.jobs_listing);
      }
    }
  }, [jobs, pinJobs]);

  const handleTryAgain = async () => {
    setPinJobs(false);
    let res: any = await fetchData("open-job-listings", setJobs);
    if (res?.jobs_listing?.length > 3) {
      setPinJobs(res?.jobs_listing?.slice(0, 3));
    } else {
      setPinJobs(res?.jobs_listing);
    }
  };

  const handleViewMore = () => {
    if (!jobs?.jobs_listing?.length) return;
    const tempArr = [...jobs?.jobs_listing];
    setPinJobs(tempArr);
    setTempData(tempArr);
    setViewMore(false);
    filterData(filter, tempArr, setPinJobs);
  };

  return (
    <div className="bg-main-primary overflow-hidden relative">
      <Head>
        <title>Jobs</title>
      </Head>
      <Suspense fallback={<div className="text-main-teal">Loading...</div>}>
        <Navbar />
      </Suspense>
      <div className="py-28 w-[90%] sm:w-[85%] mx-auto">
        <Suspense fallback={<div className="text-main-teal">Loading...</div>}>
          <Divider className="mt-9" />
        </Suspense>
        <Suspense fallback={<div className="text-main-teal">Loading...</div>}>
          <LandingSection
            {...{
              pinJobs,
              setPinJobs,
              setNoMatch,
              tempData,
              department,
              setDepartment,
              filter,
              setFilter,
            }}
          />
        </Suspense>
        <Suspense fallback={<div className="text-main-teal">Loading...</div>}>
          <Divider className="mt-12" />
        </Suspense>
        {jobs === null && (pinJobs === null || !pinJobs?.length) ? (
          <div className="text-main-teal w-fit mx-auto text-[1.5em]">
            There are no jobs open now.
          </div>
        ) : noMatch ? (
          <div className="text-main-teal w-fit mx-auto text-[1.5em]">
            Could'nt found jobs related to your search.
          </div>
        ) : pinJobs === null ? (
          <div className="w-fit mx-auto text-white font-miligramTextBook">
            Unable to fetch job listings.
            <button
              onClick={handleTryAgain}
              className="block w-fit mx-auto cursor-pointer text-main-teal group relative"
            >
              Try Again
              <AnimatedBorder />
            </button>
          </div>
        ) : pinJobs === false ? (
          <div className="w-12 h-12 mx-auto">
            <FadeLoader color="#00A99D" loading={true} />
          </div>
        ) : (
          <div className="z-30">
            <Suspense
              fallback={<div className="text-main-teal">Loading...</div>}
            >
              {pinJobs?.map((item: any, i: number) => {
                return (
                  <Job
                    location={item?.location}
                    experience={item?.job?.exp_level?.experience_yrs}
                    title={item?.job?.title}
                    type={
                      item?.job?.exp_level?.level === "Intern"
                        ? "Internship"
                        : "Full Time"
                    }
                    id={item?.id}
                    key={i}
                  />
                );
              })}
            </Suspense>
            <Suspense
              fallback={<div className="text-main-teal">Loading...</div>}
            >
              <Divider className="h-10" />
            </Suspense>
            {viewMore && (
              <button
                onClick={handleViewMore}
                className="flex text-main-teal mx-auto w-fit justify-center items-center cursor-pointer hover:scale-105"
              >
                View more &nbsp; <Image src={greenArrow} alt={greenArrow} />
              </button>
            )}
          </div>
        )}
        <Suspense fallback={<div className="text-main-teal">Loading...</div>}>
          <Divider className="mt-20" />
        </Suspense>
        <Suspense fallback={<div className="text-main-teal">Loading...</div>}>
          <Hiring />
        </Suspense>
        <Suspense fallback={<div className="text-main-teal">Loading...</div>}>
          <JobAlert />
        </Suspense>
      </div>
      <Suspense fallback={<div className="text-main-teal">Loading...</div>}>
        <Footer />
      </Suspense>
    </div>
  );
};

export default Jobs;
