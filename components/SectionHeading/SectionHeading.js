import React from "react";
import styles from "./SectionHeading.module.scss";
import { Button } from "react-bootstrap";
export const SectionHeading = ({
  heading,
  desc,
  btnhide = false,
  style_p,
  OpeningCls,
  headwrapper,
  SecHeading
}) => {
  return (
    <div className={headwrapper}>
      <div className={SecHeading}>
        <h2 className={OpeningCls}>{heading}</h2>
        <p className={style_p}>{desc}</p>
        <div className={`${btnhide ? styles.Btn : styles.BtnHide} `}>
          <Button variant="outline-primary">See all open roles</Button>
        </div>
      </div>
    </div>

  );
};
