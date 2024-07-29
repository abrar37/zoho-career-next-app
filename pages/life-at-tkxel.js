import React from "react";
import JobsOccupation from "../components/JobsOccupation/JobsOccupation";
import Head from "next/head";
import LifeVideo from "../components/LifeTkxelVideo/LifeVideo";
import ProDevelopment from "../components/ProDevelopment/ProDevelopment";
import { SectionHeading } from "../components/SectionHeading/SectionHeading";
import EventSlider from "../components/EventSlider/EventSlider";
import JobsCTA from "../components/JobsCTA/JobsCTA";



export default function EventsAndCulture() {
  return (
    <>
      <Head>
        <title>Life at tkxel - Careers at tkxel</title>

        {/* Primary Meta Tags */}
        <title>Life at tkxel - Careers at tkxel</title>
        <meta name="title" content="Life at tkxel - Careers at tkxel" />
        <meta name="description" content="Picture your life at tkxel where you make meaningful contributions, work with passionate tech professionals, and discover how you can make a lasting impact" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website"/>
        <meta property="og:url" content="https://careers.tkxel.com/life-at-tkxel"/>
        <meta property="og:title" content="Life at tkxel - Careers at tkxel"/>
        <meta property="og:description" content="Picture your life at tkxel where you make meaningful contributions, work with passionate tech professionals, and discover how you can make a lasting impact"/>
        <meta property="og:image" content="../public/images/lifeattkxel.png"/>

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image"/>
        <meta property="twitter:url" content="https://careers.tkxel.com/life-at-tkxel"/>
        <meta property="twitter:title" content="Life at tkxel - Careers at tkxel"/>
        <meta property="twitter:description" content="Picture your life at tkxel where you make meaningful contributions, work with passionate tech professionals, and discover how you can make a lasting impact"/>
        <meta property="twitter:image" content="../public/images/lifeattkxel.png"/>
      </Head>
      <h1 className="tk-container heading-gen">Life at tkxel</h1>
      <SectionHeading
        SecHeading='sec-heading'
        headwrapper='tk-container event-top'
        btnhide={false}
        desc="Discovering new dimensions to expand the work-life balance, uplift lifestyle and people."
      />
      <LifeVideo />
      <ProDevelopment />
      <EventSlider />
      <JobsCTA />

    </>
  );
}
