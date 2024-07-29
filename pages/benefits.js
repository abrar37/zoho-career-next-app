import React from "react";
import Head from "next/head";
import Image from "next/image";
import trip from "../public/images/imageone.png";
import leadership from "../public/images/imagetwo.png";
import leverage from "../public/images/imagethree.png";
import thrill from "../public/images/imagefour.png";
import communities from "../public/images/imagefive.png";
import wellness from "../public/images/imagesix.png";
// import BenefitsHeader from "../components/BenefitsHeader/BenefitsHeader";
import { SectionHeading } from "../components/SectionHeading/SectionHeading";
import SkilDevelopment from "../components/SkilDevelopment/SkilDevelopment";
import MonetaryBenefits from "../components/MonetaryBenefits/MonetaryBenefits";
import WellnessProgram from "../components/WellnessProgram/WellnessProgram";
import CompanySponsors from "../components/CompanySponsors/CompanySponsors";
import JobsCTA from "../components/JobsCTA/JobsCTA";
const MainBenefits = () => {
  return (
    <>
      <Head>
        {/* Primary Meta Tags */}
        <title>Benefits that Matter - Careers at tkxel</title>
        <meta name="title" content="Benefits that Matter - Careers at tkxel" />
        <meta name="description" content="From monetary incentives to professional development, we provide our employees with a wide set of benefits that matter most" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website"/>
        <meta property="og:url" content="https://careers.tkxel.com/benefits"/>
        <meta property="og:title" content="Benefits that Matter - Careers at tkxel"/>
        <meta property="og:description" content="From monetary incentives to professional development, we provide our employees with a wide set of benefits that matter most"/>
        <meta property="og:image" content=".../public/images/Benefits.png"/>

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image"/>
        <meta property="twitter:url" content="https://careers.tkxel.com/benefits"/>
        <meta property="twitter:title" content="Benefits that Matter - Careers at tkxel"/>
        <meta property="twitter:description" content="From monetary incentives to professional development, we provide our employees with a wide set of benefits that matter most"/>
        <meta property="twitter:image" content=".../public/images/Benefits.png"/>
      </Head>
      {/* <BenefitsHeader /> */}
      <h1 className="heading-gen tk-container">Benefits that Matter</h1>
      <SectionHeading
        SecHeading="sec-heading"
        headwrapper="tk-container event-top"
        btnhide={false}
        desc="Uplifting our culture and encouraging employees to excel with valuable benefits."
      />
      <div className="parent tk-container">
        <div className="imageone com-height">
          {" "}
          <Image src={trip} alt={trip} width={""} height={""} />{" "}
        </div>
        <div className="imagetwo com-height">
          {" "}
          <Image
            src={leadership}
            alt={leadership}
            width={""}
            height={""}
          />{" "}
        </div>
        <div className="imagethree com-height">
          {" "}
          <Image src={leverage} alt={leverage} width={""} height={""} />{" "}
        </div>
        <div className="imagefour com-height">
          {" "}
          <Image src={thrill} alt={thrill} width={""} height={""} />{" "}
        </div>
        <div className="imagefive com-height">
          {" "}
          <Image src={communities} alt={communities} width={""} height={256} />
        </div>
        <div className="imagesix com-height">
          {" "}
          <Image src={wellness} alt={wellness} width={""} height={""} />
        </div>
      </div>
      <MonetaryBenefits />
      <WellnessProgram />
      <CompanySponsors />
      <SkilDevelopment />
      <JobsCTA />
    </>
  );
};

export default MainBenefits;
