import React, { useContext, useState, useRef } from "react";
import styles from "./Search.module.scss";
import { Form, Button } from "react-bootstrap";
import { useRouter } from "next/router";
import { Grid, Location, Search } from "../../public/Svg/Svg";
import { APIContext } from "../../context/job-api";

export const SearchBar = ({
  SearchClass,
  preSearchValue,
  preCategoryValue,
  preLocationValue,
}) => {
  const router = useRouter();
  const jobs = useContext(APIContext);
  const [filterJobs, setFilterJobs] = useState([jobs]);
  const [locationValue, setLocationValue] = useState(preLocationValue);
  const [categoryValue, setcategoryValue] = useState(preCategoryValue);
  const [searchValue, setSearchValue] = useState(preSearchValue);
  const getSearchValue = useRef();
  const getCategoryValue = useRef();
  const getLocationValue = useRef();

  const handleFilter = (e) => {
    if (e && e.preventDefault) {
      e.preventDefault();
    }
    let debounceTime = 700;
    let timeoutId = setTimeout(() => {
      let filter_jobs = jobs.filter((value) => {
        if (query === "") {
          return value;
        } else if (
          value.Job_Opening_Name?.toLowerCase().includes(query.toLowerCase())
        ) {
          return value;
        }
      });
      filter_jobs = filterJobs.filter((value) => {
        if (category === "") {
          return value;
        } else if (
          value.Department_Name?.name
            ?.toLowerCase()
            .includes(category.toLowerCase())
        ) {
          return value;
        }
      });
      filter_jobs = filterJobs.filter((value) => {
        if (location === "") {
          return value;
        } else if (value.City?.toLowerCase().includes(location.toLowerCase())) {
          return value;
        }
      });
      clearTimeout(timeoutId);
      setFilterJobs(filter_jobs);
    }, debounceTime);
  };

  const handleSubmit = (e) => {
    e.preventDefault()
    const query = getSearchValue.current.value;
    const location = getLocationValue.current.value;
    const category = getCategoryValue.current.value;
    router
      .push({
        pathname: "/jobs",
        query: { location, query, category },
      })
      .then(() => {
        router.reload();
      });
    handleFilter();
  };

  const handleKeywordSearch = (e) => {
    if (e.key === "Enter") {
      handleSubmit();
    }
  };

  return (
    <form onSubmit={handleSubmit} className={SearchClass}>
      <div className={`${styles.SearchField} `}>
        <Search />
        <input
          type="text"
          className="searchTerm border-0"
          placeholder="Search for a job title"
          // onKeyPress={handleKeywordSearch}
          ref={getSearchValue}
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
        />
      </div>
      <div className={`${styles.dropdownWarpper}`}>
        <div className={`${styles.DropCat} `}>
          <Grid />
          <Form.Select
            aria-label="Default select example"
            className="border-0"
            ref={getCategoryValue}
            value={categoryValue}
            onChange={(e) => setcategoryValue(e.target.value)}
          >
            <option value="">All Categories</option>
            <option value="UX">Design</option>
            <option value="QA">Quality Assurance</option>
            <option value="Eng" data-value="Engineering">
            Software Engineering
            </option>
            <option value="Human Resources" data-value="HR">
              Human Resources
            </option>
            <option value="Marketing">Marketing</option>
            <option value="NOC">IT Support</option>
            <option value="Finance">Accounts and Finance</option>
            <option value="Pre Sales" data-value="Presales">
              Sales
            </option>
            <option value="Admin" data-value="Management">
              Admin
            </option>
            <option value="Sales - SDR">Lead Generation</option>
          </Form.Select>
        </div>
        <div className={`${styles.DropLoc} `}>
          <Location />
          <Form.Select
            aria-label="Default select example"
            className="border-0"
            ref={getLocationValue}
            value={locationValue}
            onChange={(e) => setLocationValue(e.target.value)}
          >
            <option value="">All Locations</option>
            <option value="Dubai">Dubai, UAE</option>
            <option value="London">London, UK</option>
            <option value="Lahore">Lahore, PK</option>
            <option value="Seattle">Seattle, USA</option>
            <option value="Reston">Reston, USA</option>
            <option value="Boston">Boston, USA</option>
          </Form.Select>
        </div>
      </div>
      <div className={`${styles.SearchBtnWrapper} `}>
        <Button
          variant="primary"
          className={`${styles.SearchBtn}  border-0`}
          type='submit'
        >
          Search Jobs
        </Button>
      </div>
    </form>
  );
};

