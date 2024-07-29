import React from "react";
import { ForwordArrow } from "../../public/Svg/Svg";
import Styles from "./JobCard.module.scss";


export const JobCard = ({ heading, city,  styleclass, country }) => {
  return (
    <div className={`${styleclass}`}>
      <div className={Styles.cardJob}>
        <div className={`${Styles.HeadIcon} d-flex align-items-start justify-content-between`}>
          <h6 className={Styles.CardHead}>{heading}</h6>
          <div>
            <ForwordArrow/>
          </div>
        </div>

        <p className={Styles.Cardloc}>
          {city !== null ? `${city},${country}` : "N/A"}
        </p>
      </div>
    </div>
  );
};
