import axios from "axios";
import Fuse from "fuse.js";
import { useState } from "react";

const BASE_URL = "https://hasura.koders.in/api/rest/";

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
// ------career page hooks---------
export const useFetchDataFromServer = () => {
  const fetchData = async (endpoint: any, setJobs) => {
    try {
      const res = await axios.get(`api/${endpoint}`);
      if (endpoint === "open-job-listings") {
        if (res?.data?.jobs_listing?.length) {
          const sortedData = res?.data?.jobs_listing?.sort(
            (a, b) =>
              new Date(b.job.listings[0].updated_at).getTime() -
              new Date(a.job.listings[0].updated_at).getTime()
          );
          setJobs({ jobs_listing: sortedData });
        }
        return res;
      } else {
        setJobs(res?.data);
        return res;
      }
    } catch (error) {
      setJobs(null);
      console.log("error in getting data-->", error?.message);
      return null;
    }
  };
  return fetchData;
};

export const useSetDataOnServer = () => {
  const setData = async (endpoint: string, payload: Object) => {
    try {
      return await axios.post(`api/${endpoint}`, {
        data: payload,
      });
    } catch (error) {
      console.log("error in posting data-->", error?.message);
      return null;
    }
  };
  return setData;
};

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
