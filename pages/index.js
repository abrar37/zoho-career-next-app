import HeroSection from "../components/HeroSection/HeroSection";
import JobsOccupation from "../components/JobsOccupation/JobsOccupation";
import styles from "../components/HeroSection/HeroSection.module.scss";
import Head from "next/head";
import { useState } from "react";


export default function Home() {
  const [jobsCount, setJobsCount] = useState();
  return (
    <>
      <Head>
        {/* Primary Meta Tags */}
        <title>Careers at Tkxel -  Choose the Right Career Path</title>
        <meta name="title" content="Careers at Tkxel -  Choose the Right Career Path" />
        <meta name="description" content="At Tkxel, we provide our employees with unlimited growth potential. Check out our careers page to find the right job for you!" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website"/>
        <meta property="og:url" content="https://careers.tkxel.com/"/>
        <meta property="og:title" content="Careers at Tkxel -  Choose the Right Career Path"/>
        <meta property="og:description" content="At Tkxel, we provide our employees with unlimited growth potential. Check out our careers page to find the right job for you!"/>
        <meta property="og:image" content="../public/images/Home.png"/>

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image"/>
        <meta property="twitter:url" content="https://careers.tkxel.com/"/>
        <meta property="twitter:title" content="Careers at Tkxel -  Choose the Right Career Path"/>
        <meta property="twitter:description" content="At Tkxel, we provide our employees with unlimited growth potential. Check out our careers page to find the right job for you!"/>
        <meta property="twitter:image" content="../public/images/Home.png"/>
      </Head>
      <HeroSection
        heroclass={`${styles.HeroBanner}`}
        heroheading="Invest in your career,"
        herospan={" Grow"}
        herolast="with tech’s top talent."
        jobsCount={jobsCount}
      />
      <JobsOccupation setJobsCount={setJobsCount} />

    </>
  );
}
