import React from "react";
import { SectionHeading } from "../SectionHeading/SectionHeading";
import SkillAccordions from "../SkillsAccordions/SkillsAccordions";
import Image from "next/image";
import wellness from "../../public/images/wellnessProgram.png";
import styles from "./WellnessProgram.module.scss";

function WellnessProgram() {
  return (
    <div className="tk-container" id="wellness">
      <div className={`${styles.WellnessWrapper} row gx-0 `}>
        <div className={`${styles.devContent} col-lg-6 col-md-12`}>
          <SectionHeading
            headwrapper={styles.WellContent}
            heading="Employee Wellness Program"
            desc="Health, a key component of life, means a great deal for employees who wish to add value to tkxel and our wellness program nurtures people at tkxel mentally and physically."
          />
          <SkillAccordions />
        </div>
        <div className="col-lg-6 col-md-12">
          <Image src={wellness} alt={wellness} layout="responsive" />
        </div>
      </div>
    </div>
  );
}

export default WellnessProgram;
