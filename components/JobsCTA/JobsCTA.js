import React from "react";
import ctaJobStyles from "./JobsCTA.module.scss";
import { useRouter } from "next/router";
import { Container, Button } from "react-bootstrap";
const JobsCTA = () => {
  const router = useRouter();
  return (
    <Container className={`${ctaJobStyles.ctaJobsWrapper} tk-container`}>
      <div className={`${ctaJobStyles.ctaBG}`}>
        <div className={ctaJobStyles.ctaText}>
          <h2>Ready to Shift Your Career into High Gear?</h2>
          <Button
            variant="primary"
            className={ctaJobStyles.applyBtn}
            onClick={() => router.push("/jobs")}
          >
            Apply Now
          </Button>
        </div>
      </div>
    </Container>
  );
};

export default JobsCTA;
