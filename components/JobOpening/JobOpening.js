import React, { Component } from "react";
import { SectionHeading } from "../SectionHeading/SectionHeading";
import { SearchBar } from "../Search/Search";
import style from "../JobsOccupation/JobsOccupation.module.scss";
import Loader from "../Loader/Loader";
import axios from "axios";
import { JobCard } from "../JobCard/JobCard";
import PaginationNumbers from "./Pagination/PaginationNumbers";
import { NextBtn, PreviousBTn } from "../../public/Svg/Svg";
import { useRouter, withRouter } from "next/router";
class JobOpening extends Component {
  Jobs = [];

  constructor(props) {
    super(props);
    const searchParams = new URLSearchParams(
      this.props.router.asPath.split(/\?/)[1]
    );
    const urlParams = {};
    for (const [key, value] of searchParams) {
      urlParams[key] = value;
    }
    this.state = {
      job: this.Jobs,
      query: urlParams.query || "",
      category: urlParams.category || "",
      location: urlParams.location || "",
      loading: false,
      filter_jobs: [],
      currentPage: 1,
      jobsPerPage: 9,
      JobsLength: false,
    };
    this.onNumberClick = this.onNumberClick.bind(this);
    this.onNextClick = this.onNextClick.bind(this);
    this.onPreviousClick = this.onPreviousClick.bind(this);
    console.log(this.state.query, "url query");
  }

  onNumberClick(event) {
    this.setState({
      currentPage: Number(event.target.id),
    });
  }

  onNextClick() {
    this.setState({
      currentPage: this.state.currentPage + 1,
    });
  }

  onPreviousClick() {
    this.setState({
      currentPage: this.state.currentPage - 1,
    });
  }

  async fetchData() {
    this.setState({ loading: true });
    try {
      let targetUrl = "https://api-careers.tkxel.com/api/zoho-job-openings";
      let response = await axios(targetUrl, {
        method: "GET",
      });
      let ParseData = response.data.data;

      const resultData = ParseData.data.filter((value) => {
        if (
          this.state.query === "" &&
          this.state.category === "" &&
          this.state.location === ""
        ) {
          return true;
        } else if (
          value.Job_Opening_Name?.toLowerCase().includes(
            this.state.query.toLowerCase()
          ) &&
          value.Department_Name.name
            ?.toLowerCase()
            .includes(this.state.category.toLowerCase()) &&
          value.City?.toLowerCase().includes(this.state.location.toLowerCase())
        ) {
          return true;
        }
        return false;
      });

      this.setState({
        job: resultData,
        loading: false,
        filter_jobs: resultData,
      });
    } catch (error) {
      console.log({ error });
    }
    const query = this.props.query;
    console.log(query, "query Data");
  }

  componentDidMount() {
    this.fetchData();
  }

  render() {
    const { filter_jobs, currentPage, jobsPerPage } = this.state;
    const indexOfLastJob = currentPage * jobsPerPage;
    const indexOfFirstJob = indexOfLastJob - jobsPerPage;
    const currentJobs = filter_jobs.slice(indexOfFirstJob, indexOfLastJob);
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(filter_jobs.length / jobsPerPage); i++) {
      pageNumbers.push(i);
    }
    return (
      <div className="tk-container">
        <SectionHeading
          OpeningCls={`${style.JobCls}`}
          heading="Job Openings"
        // desc="Check out some exciting job offers and join the ranks of 600+ talented experts"
        />
        <div className="d-flex gap-2 justify-content-between">
          <SearchBar
            SearchClass={style.SearchBar}
            preSearchValue={this.state.query}
            preCategoryValue={this.state.category}
            preLocationValue={this.state.location}
          />
        </div>
        {this.state.loading && <Loader />}
        <div className="row career-mt-24 career-pb-70 career-mt-50">
          {!this.state.loading && this.state.filter_jobs.length > 0 ? (
            <h4 className={style.ResultText}>
              Result: <span>{this.state.filter_jobs.length} vacancies </span>
            </h4>
          ) : (
            ""
          )}
          {!this.state.loading && currentJobs.length > 0
            ? currentJobs.map((value, index) => {
              let string = value.Job_Opening_Name;
              let replaced = string
                .replaceAll(" ", "-")
                .replaceAll("/", "-")
                .replaceAll(".", "")
                .replaceAll("&", "-")
                .replaceAll("(", "")
                .replaceAll(")", "");
              return (
                <div
                  className="col-lg-4 col-sm-6 col-xs-12 career-mb-24"
                  key={index}
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
            })
            : !this.state.loading && (
              <h2 className={style.Vacancytext}> No Vacancies Available</h2>
            )}
        </div>
        <div className="d-flex justify-content-end career-mb-90">
          <button
            className={`border-0 career-mr-34 bg-transparent  `}
            disabled={this.state.currentPage <= 1}
            onClick={this.onPreviousClick}
          >
            {" "}
            <PreviousBTn />
          </button>
          {pageNumbers.map((number, index) => {
            return (
              <PaginationNumbers
                number={number}
                onNumberClick={this.onNumberClick}
                currentPage={currentPage}
                key={index}
              />
            );
          })}
          <button
            className="border-0 career-mr-2 bg-transparent"
            onClick={this.onNextClick}
            disabled={this.state.currentPage > currentJobs}
          >
            {" "}
            <NextBtn />
          </button>
        </div>
      </div>
    );
  }
}

export default withRouter(JobOpening);
