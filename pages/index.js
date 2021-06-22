import React from "react";
import Head from "next/head";

import NavBar from "./components/navbar/NavBar";
import HeroSection from "./components/landing/HeroSection";
import AboutSection from "./components/landing/AboutSection";
import PreviewSection from "./components/landing/PreviewSection";
import ContactHeader from "./components/landing/ContactHeader";
import ContactForm from "./components/landing/ContactForm";
import Footer from "./components/footer/Footer";

const landing = () => {

  return (
    <>
      <Head>
        <title>Fitness Time - Dein Workout Planer</title>
        <link rel="icon" href="./favicons/favicon.ico" />
      </Head>
      <NavBar />
      <main>
        <HeroSection />
        <AboutSection />
        <PreviewSection />
        <ContactHeader />
        <ContactForm />
      </main>
      <Footer />
    </>
  )
};

export default landing;
