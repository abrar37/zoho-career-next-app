import React from 'react'
import style from './SectionCover.module.scss'
import { Button } from "react-bootstrap";

export default function SectionCover() {
  return (
    <div className={style.HeroSection}>
          <div className={`${style.ctaBG}`}>
        <div className={style.ctaText}>
          <h1>BE THE CHANGE.<br/>Make an impact!</h1>
          <p>
        Become a part of our student exposure program. 
        </p>
          <Button
            variant="primary"
            className={style.applyBtn}
            onClick={(e) => {
              e.preventDefault();
              window.open("https://jobs.tkxel.com/jobs/Careers/524295000011327008/Student-Ambassador-Program?source=CareerSite", "_blank");
              }}
          >
            Apply Now
          </Button>
        </div>
      </div>
    </div>
  )
}
