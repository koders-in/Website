import axios from "axios";
import Fuse from "fuse.js";
import { useState } from "react";
import { datddd } from "./constant";

const BASE_URL = "https://hasura.koders.in/api/rest/";

export const useFetchDataFromServer = () => {
  const fetchData = async (endpoint: any, setJobs) => {
    if (endpoint === "open-job-listings") {
      try {
        const res = await axios.get("api/hasura/", {
          headers: {
            url: BASE_URL + endpoint,
            method: "get",
            // "Accept-Encoding": "*",
          },
        });
        if (res?.data?.jobs_listing?.length) {
          const sortedData = res?.data?.jobs_listing?.sort(
            (a, b) =>
              new Date(b.job.listings[0].updated_at).getTime() -
              new Date(a.job.listings[0].updated_at).getTime()
          );
          setJobs({ jobs_listing: sortedData });
        }
        return res;
      } catch (error) {
        setJobs(null);
      }
    } else {
      try {
        const res = await axios.get("api/hasura/", {
          headers: {
            url: BASE_URL + endpoint,
            method: "get",
            // "Accept-Encoding": "*",
          },
        });
        setJobs(res?.data);
        return res;
      } catch (error) {
        setJobs(null);
      }
    }
  };
  return fetchData;
};

export const useSetDataOnServer = () => {
  const setData = async (endpoint: string, payload: Object) => {
    try {
      return await axios.get("api/hasura", {
        headers: {
          url: BASE_URL + endpoint,
          method: "post",
          payload: JSON.stringify(payload),
        },
      });
    } catch (error) {
      return null;
    }
  };
  return setData;
};

// -------------------helpers-------------------------
const getFilteredData = (list: Array<any>, options: any, pattern: string) => {
  try {
    const fuse = new Fuse(list, options);
    const res: any = fuse.search(pattern);
    if (res.length) {
      return res?.map(({ item }) => {
        return item;
      });
    } else return [];
  } catch (error) {
    return [];
  }
};
// -----------------------------------------------------

export const useLandingComp = (
  tempData,
  setPinJobs,
  filter,
  setFilter,
  setNoMatch,
  jobs,
  handleViewMore,
  viewMore
) => {
  const [searchValue, setSearchValue] = useState("");
  const filterAndUpdate = (filterObj) => {
    if (viewMore) handleViewMore();
    let tempList: Array<any> = jobs?.jobs_listing;

    if (filterObj.isRemote && tempList?.length) {
      tempList = getFilteredData(
        tempList,
        {
          useExtendedSearch: true,
          keys: ["location"],
        },
        "Remote"
      );
    }
    if (filterObj?.departments?.length && tempList?.length) {
      let filteredJobs = [];
      filterObj?.departments?.forEach((item) => {
        let shouldPush = true;
        if (item === "All") {
          shouldPush = false;
          filteredJobs = tempList;
          return;
        }
        const tempJobs = getFilteredData(
          tempList,
          {
            threshold: 0.0,
            keys: ["job.department"],
          },
          item
        );
        if (shouldPush) filteredJobs = [...filteredJobs, ...tempJobs];
      });
      tempList = filteredJobs;
    }
    if (tempList?.length) {
      if (filterObj?.title) {
        const temp = getFilteredData(
          tempList,
          {
            minMatchCharLength: filterObj?.title?.length || 1,
            keys: ["job.title"],
          },
          filterObj?.title
        );
        tempList = temp;
      }
    }
    if (tempList.length === 0) setNoMatch(true);
    else setNoMatch(false);
    setPinJobs(tempList);
  };

  const handleChange = async (e: any) => {
    const { value } = e.target;
    filterAndUpdate({ ...filter, title: value });
    setFilter((prev) => {
      return {
        ...prev,
        title: value,
      };
    });
  };

  const handleToogle = (data: any) => {
    filterAndUpdate({ ...filter, isRemote: !data });
    setFilter((prev) => {
      return {
        ...prev,
        isRemote: !data,
      };
    });
  };

  const handleClick = (item: string) => {
    if (filter?.departments.includes(item)) {
      if (item === "All") {
        setFilter((prev) => {
          return {
            ...prev,
            departments: ["All"],
          };
        });
        filterAndUpdate({ ...filter, departments: ["All"] });
        return;
      }
      const updateedDep = filter?.departments.filter((temp) => temp !== item);
      if (updateedDep.length === 0) {
        setFilter((prev) => {
          return {
            ...prev,
            departments: ["All"],
          };
        });
        filterAndUpdate({ ...filter, departments: ["All"] });
      } else {
        setFilter((prev) => {
          return {
            ...prev,
            departments: updateedDep,
          };
        });
        filterAndUpdate({ ...filter, departments: updateedDep });
      }
    } else {
      if (filter?.departments.length >= 4 || item === "All") {
        setFilter((prev) => {
          return {
            ...prev,
            departments: ["All"],
          };
        });
        filterAndUpdate({ ...filter, departments: ["All"] });
        return;
      }
      const updateedDep = [
        item,
        ...filter?.departments.filter((temp) => temp !== "All"),
      ];
      setFilter((prev) => {
        return {
          ...prev,
          departments: updateedDep,
        };
      });
      filterAndUpdate({ ...filter, departments: updateedDep });
    }
  };

  const handleClickOnSearch = () => {
    if (searchValue) {
      setSearchValue("");
      setNoMatch(false);
      setPinJobs(tempData);
    } else return;
  };

  return {
    filterAndUpdate,
    handleChange,
    handleToogle,
    handleClick,
    handleClickOnSearch,
    searchValue,
  };
};

export const useFilter = () => {
  const filterData = (filterObj, tempData, setPinJobs) => {
    let tempList: Array<any> = tempData;

    if (filterObj.isRemote && tempList?.length) {
      tempList = getFilteredData(
        tempList,
        {
          useExtendedSearch: true,
          keys: ["location"],
        },
        "Remote"
      );
    }
    if (filterObj?.departments?.length && tempList?.length) {
      let filteredJobs = [];
      filterObj?.departments?.forEach((item) => {
        let shouldPush = true;
        if (item === "All") {
          shouldPush = false;
          filteredJobs = tempList;
          return;
        }
        const tempJobs = getFilteredData(
          tempList,
          {
            threshold: 0.0,
            keys: ["job.department"],
          },
          item
        );
        if (shouldPush) filteredJobs = [...filteredJobs, ...tempJobs];
      });
      tempList = filteredJobs;
    }
    if (tempList?.length) {
      if (filterObj?.title) {
        const temp = getFilteredData(
          tempList,
          {
            minMatchCharLength: filterObj?.title?.length || 1,
            keys: ["job.title"],
          },
          filterObj?.title
        );
        tempList = temp;
      }
    }
    setPinJobs(tempList);
  };
  return filterData;
};

// -------------Test--------------
// export const useCareerHook = () => {
//   const [filter, setFilter] = useState({
//     title: "",
//     isRemote: false,
//     departments: ["All"],
//   });
//   const [jobs, setJobs] = useState<any>(null);
//   const [viewMore, setViewMore] = useState<boolean>(true);
//   const [pinJobs, setPinJobs] = useState<any>();
//   const [tempData, setTempData] = useState<any>(null);
//   const [noMatch, setNoMatch] = useState<boolean>(false);
//   const [department, setDepartment] = useState<Array<string>>(["All"]);
//   const fetchData = useFetchDataFromServer();
//   const filterData = useFilter();

//   useEffect(() => {
//     AOS.init({
//       easing: "ease-out",
//       once: true,
//       duration: 600,
//     });
//   }, []);

//   useEffect(() => {
//     if (jobs === null || jobs === undefined)
//       fetchData("open-job-listings", setJobs);

//     if (jobs && tempData === null) {
//       if (jobs?.jobs_listing?.length / 3 > 0) {
//         setPinJobs(jobs?.jobs_listing?.slice(0, 2));
//         setTempData(jobs?.jobs_listing?.slice(0, 2));
//       } else {
//         setPinJobs(jobs?.jobs_listing);
//         setTempData(jobs?.jobs_listing);
//       }
//     }
//   }, [jobs, pinJobs]);

//   const handleTryAgain = async () => {
//     setPinJobs(false);
//     let res: any = await fetchData("open-job-listings", setJobs);
//     if (res?.jobs_listing?.length > 3) {
//       setPinJobs(res?.jobs_listing?.slice(0, 3));
//     } else {
//       setPinJobs(res?.jobs_listing);
//     }
//   };

//   const handleViewMore = () => {
//     if (!jobs?.jobs_listing?.length) return;
//     const tempArr = [...jobs?.jobs_listing];
//     setPinJobs(tempArr);
//     setTempData(tempArr);
//     setViewMore(false);
//     filterData(filter, tempArr, setPinJobs);
//   };
//   // --------Landing section helpers-------------
//   const [searchValue, setSearchValue] = useState("");
//   const filterAndUpdate = (filterObj) => {
//     // handleViewMore();
//     let tempList: Array<any> = tempData;

//     if (filterObj.isRemote && tempList?.length) {
//       tempList = getFilteredData(
//         tempList,
//         {
//           useExtendedSearch: true,
//           keys: ["location"],
//         },
//         "Remote"
//       );
//     }
//     if (filterObj?.departments?.length && tempList?.length) {
//       let filteredJobs = [];
//       filterObj?.departments?.forEach((item) => {
//         let shouldPush = true;
//         if (item === "All") {
//           shouldPush = false;
//           filteredJobs = tempList;
//           return;
//         }
//         const tempJobs = getFilteredData(
//           tempList,
//           {
//             threshold: 0.0,
//             keys: ["job.department"],
//           },
//           item
//         );
//         if (shouldPush) filteredJobs = [...filteredJobs, ...tempJobs];
//       });
//       tempList = filteredJobs;
//     }
//     if (tempList?.length) {
//       if (filterObj?.title) {
//         const temp = getFilteredData(
//           tempList,
//           {
//             minMatchCharLength: filterObj?.title?.length || 1,
//             keys: ["job.title"],
//           },
//           filterObj?.title
//         );
//         tempList = temp;
//       }
//     }
//     if (tempList.length === 0) setNoMatch(true);
//     else setNoMatch(false);
//     setPinJobs(tempList);
//   };

//   const handleChange = async (e: any) => {
//     const { value } = e.target;
//     filterAndUpdate({ ...filter, title: value });
//     setFilter((prev) => {
//       return {
//         ...prev,
//         title: value,
//       };
//     });
//   };

//   const handleToogle = (data: any) => {
//     filterAndUpdate({ ...filter, isRemote: !data });
//     setFilter((prev) => {
//       return {
//         ...prev,
//         isRemote: !data,
//       };
//     });
//   };

//   const handleClick = (item: string) => {
//     if (filter?.departments.includes(item)) {
//       if (item === "All") {
//         setFilter((prev) => {
//           return {
//             ...prev,
//             departments: ["All"],
//           };
//         });
//         filterAndUpdate({ ...filter, departments: ["All"] });
//         return;
//       }
//       const updateedDep = filter?.departments.filter((temp) => temp !== item);
//       if (updateedDep.length === 0) {
//         setFilter((prev) => {
//           return {
//             ...prev,
//             departments: ["All"],
//           };
//         });
//         filterAndUpdate({ ...filter, departments: ["All"] });
//       } else {
//         setFilter((prev) => {
//           return {
//             ...prev,
//             departments: updateedDep,
//           };
//         });
//         filterAndUpdate({ ...filter, departments: updateedDep });
//       }
//     } else {
//       if (filter?.departments.length >= 4 || item === "All") {
//         setFilter((prev) => {
//           return {
//             ...prev,
//             departments: ["All"],
//           };
//         });
//         filterAndUpdate({ ...filter, departments: ["All"] });
//         return;
//       }
//       const updateedDep = [
//         item,
//         ...filter?.departments.filter((temp) => temp !== "All"),
//       ];
//       setFilter((prev) => {
//         return {
//           ...prev,
//           departments: updateedDep,
//         };
//       });
//       filterAndUpdate({ ...filter, departments: updateedDep });
//     }
//   };

//   const handleClickOnSearch = () => {
//     if (searchValue) {
//       setSearchValue("");
//       setNoMatch(false);
//       setPinJobs(tempData);
//     } else return;
//   };
//   // handleTryAgain, handleViewMore, jobs, pinJobs, noMatch, viewMore
//   return {
//     jobs,
//     viewMore,
//     filter,
//     pinJobs,
//     noMatch,
//     handleTryAgain,
//     handleViewMore,
//     // --------Landing section helpers-------------
//     handleChange,
//     handleToogle,
//     handleClick,
//     handleClickOnSearch,
//     searchValue,
//   };
// };
