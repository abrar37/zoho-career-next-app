import React from "react";
import styles from "./ThingsValue.module.scss";
import { SectionCard } from "../SectionCard/SectionCard";

const ThingsValue = ({ arraysObject, cardsclass }) => {
  return (
    <>
      <div className={styles.PerksWrapper}>
        <div className="tk-container">
          <div className={`${styles.TopThings}`}>
            <div className={styles.titleSec}>
              <h1>We have plenty of perks waiting for you</h1>
              <p>
                Tkxel believes that employee development initiatives transform
                people into capable individuals that do not only become a
                potential resource for the company but a valuable human capital
                for the industries and the country.
              </p>
            </div>
            <div className={` row mx-0 ${styles.ThingsValues}`}>
              {arraysObject?.map((value, index) => (
                <SectionCard
                  styleclass={cardsclass}
                  hide_margin={false}
                  border_show={false}
                  img={value.img}
                  heading={value.heading}
                  desc={value.desc}
                  key={index}
                  para={styles.headside}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ThingsValue;
