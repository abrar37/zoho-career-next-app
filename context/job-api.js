import React, { createContext, useEffect, useContext, useState } from "react";
import axios from "axios";

export const APIContext = createContext();

export const APIContextProvider = (props) => {
  const [jobs, setJobs] = useState([]);
  const fetchJobs = async () => {
    let targetUrl = "https://api-careers.tkxel.com/api/zoho-job-openings";
    const response = await axios(targetUrl, {
      method: "GET",
    });
    const ParseData = response?.data?.data;
    
    const resultData = ParseData?.data?.filter((item) => {
      return item.Publish === true;
    });
    setJobs(resultData || []);
  };

  useEffect(() => {
    fetchJobs();
  }, []);

  return (
    <APIContext.Provider value={jobs}>{props.children}</APIContext.Provider>
  );
};
