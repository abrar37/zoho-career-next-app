import React from 'react'
import AboutProgram from '../components/AboutProgram/AboutProgram'
import AmbassadorCard from '../components/AmbassadorCard/AmbassadorCard'
import CoverCommunity from '../components/CoverCommunity/CoverCommunity'
import Interested from '../components/Interested/Interested'
import SectionCover from '../components/SectionCover/SectionCover'
import Head from 'next/head'

export default function studentAmbassador() {
  return (
    <>
      <Head>
        <title>tkxel Student Ambassador Program - Careers at tkxel</title>

        {/* Primary Meta Tags */}
        <title>tkxel Student Ambassador Program - Careers at tkxel</title>
        <meta name="title" content="tkxel Student Ambassador Program - Careers at tkxel" />
        <meta name="description" content="Looking for learning & fun experience as a student? This is your chance. Sign up now for tkxel student ambassador program and unlock exciting opportunities." />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website"/>
        <meta property="og:url" content="https://careers.tkxel.com/student-ambassador"/>
        <meta property="og:title" content="tkxel Student Ambassador Program - Careers at tkxel"/>
        <meta property="og:description" content="Looking for learning & fun experience as a student? This is your chance. Sign up now for tkxel student ambassador program and unlock exciting opportunities."/>
        <meta property="og:image" content="../public/images/Home.png"/>

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image"/>
        <meta property="twitter:url" content="https://careers.tkxel.com/student-ambassador"/>
        <meta property="twitter:title" content="tkxel Student Ambassador Program - Careers at tkxel"/>
        <meta property="twitter:description" content="Looking for learning & fun experience as a student? This is your chance. Sign up now for tkxel student ambassador program and unlock exciting opportunities."/>
        <meta property="twitter:image" content="../public/images/student-ambassador-program.png"/>
      </Head>
      <SectionCover/>
      <AboutProgram/>
      <CoverCommunity/>
      <AmbassadorCard/>
      <Interested/>
    </>
  )
}
