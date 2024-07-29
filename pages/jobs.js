import Head from "next/head";
import React from "react";
import JobOpening from "../components/JobOpening/JobOpening";

export default function JobOpeningPage(query) {

  return (
    <>
      <Head>
        {/* Primary Meta Tags */}
        <title>Jobs at tkxel - Find the Right Job in Tech</title>
        <meta name="title" content="Jobs at tkxel - Find the Right Job in Tech" />
        <meta name="description" content="Check out our latest vacancies for full-time job opportunities in tech. Apply now!" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website"/>
        <meta property="og:url" content="https://careers.tkxel.com/jobs"/>
        <meta property="og:title" content="Jobs at tkxel - Find the Right Job in Tech"/>
        <meta property="og:description" content="Check out our latest vacancies for full-time job opportunities in tech. Apply now!"/>
        <meta property="og:image" content="../public/images/OpenPositions.jpg"/>

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image"/>
        <meta property="twitter:url" content="https://careers.tkxel.com/jobs"/>
        <meta property="twitter:title" content="Jobs at tkxel - Find the Right Job in Tech"/>
        <meta property="twitter:description" content="Check out our latest vacancies for full-time job opportunities in tech. Apply now!"/>
        <meta property="twitter:image" content="../public/images/OpenPositions.jpg"/>
      </Head>
      <JobOpening query={query} />
    </>
  );
}


export async function getServerSideProps({ query }) {
  console.log(query)
  return {
    props: {
      location: query.location || "",
      category: query.category || "",
      query: query.query || ""
    },
  }
}