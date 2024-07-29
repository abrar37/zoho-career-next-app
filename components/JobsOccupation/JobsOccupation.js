import React, { useContext, useEffect, useState } from "react";
import { SectionHeading } from "../SectionHeading/SectionHeading";
import styles from "./JobsOccupation.module.scss";
import { JobCard } from "../JobCard/JobCard";
import { Button } from "react-bootstrap";
import { useRouter } from "next/router";
import style from "../JobCard/JobCard.module.scss";
import axios from "axios";
import { APIContext } from "../../context/job-api";
const JobsOccupation = ({ setJobsCount }) => {
  const Jobs = useContext(APIContext);
  const router = useRouter();

  return (
    <div className={`${styles.Occupation} tk-container`}>
      <div className="row">
        {Jobs?.slice(0, 6).map((value, index) => {
          let string = value.Job_Opening_Name;
          let replaced = string
            .replaceAll(" ", "-")
            .replaceAll("/", "-")
            .replaceAll(".", "")
            .replaceAll("&", "-");
          return (
            <div
              key={index}
              className="col-lg-4 col-sm-6 col-xs-12 career-mb-24"
            >
              <a
                href={`https://jobs.tkxel.com/jobs/Careers/${value.id}/${replaced}?source=CareerSite`}
                target="_blank"
                rel="noreferrer"
              >
                <JobCard
                  styleclass={`${style.JobCard} `}
                  heading={value.Job_Opening_Name}
                  city={value.City}
                  country={value.Country}
                  JobDepartmentName={value.Department_Name.name}
                  tile={value.Number_of_Positions}
                />
              </a>
            </div>
          );
        })}
      </div>
      <div className={`${styles.Btn}`}>
        <Button variant="primary" onClick={() => router.push("/jobs")}>
          See all {Jobs?.length} Open Roles
        </Button>
      </div>
    </div>
  );
};

export default JobsOccupation;
