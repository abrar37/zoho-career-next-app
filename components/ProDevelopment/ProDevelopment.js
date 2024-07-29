import React from "react";
import { PRODEVELOPMENT } from "../Arrays/Cards";
import { SectionCard } from "../SectionCard/SectionCard";
import { SectionHeading } from "../SectionHeading/SectionHeading";
import styles from "./ProDevelopment.module.scss";
import { Button } from "react-bootstrap";
import { useRouter } from "next/router";
const ProDevelopment = () => {
  const router = useRouter();
  return (
    <div className="tk-container">
      <div className={`${styles.ProDevWrapper} `}>
        <SectionHeading
          headwrapper={styles.ProHead}
          SecHeading={styles.ProContainer}
          btnhide={false}
          style_p={`${styles.ProDevPara} `}
          heading="Professional Development"
          desc="We stand in support of our employees to grow professionally by providing them with the learning essentials and help them decide what they want to be and how to get there."
        />
        <div className={`  row gx-0  ${styles.ProDevSec}`}>
          {PRODEVELOPMENT.map((value, index) => (
            <SectionCard
              styleclass={`${styles.ProDevCard}  col-lg-4 col-sm-6 col-xs-12`}
              img={value.img}
              heading={value.heading}
              desc={value.desc}
              key={index}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProDevelopment;
