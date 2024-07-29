import React from "react";
import Styles from "./SectionCard.module.scss";

export const SectionCard = ({
  type = "IconCard",
  img,
  heading,
  desc,
  styleclass,
  hide_margin = false,
  border_show = false,
}) => {
  return (
    <div className={`${type === "IconCard" ? "" : ""} ${styleclass}`}>
      <span className={hide_margin ? Styles.CardImgMb : Styles.CardImg}>
        {img}
      </span>
      <h6 className={border_show ? Styles.CardHeadMb : Styles.CardHead}>
        {heading}
      </h6>
      <p className={Styles.CardPara}>{desc}</p>
    </div>
  );
};
