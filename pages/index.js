import React, { useState, useEffect } from "react";
import Head from "next/head";

import NavBar from "./components/navbar/NavBar";
import HeroSection from "./components/landing/HeroSection";
import AboutSection from "./components/landing/AboutSection";
import PreviewSection from "./components/landing/PreviewSection";
import ContactHeader from "./components/landing/ContactHeader";
import ContactForm from "./components/landing/ContactForm";
import Footer from "./components/footer/Footer";

const landing = () => {
  const [language, setLanguage] = useState(
    typeof window !== "undefined" && localStorage.getItem("language")
  );

  return (
    <>
      <Head>
        <title>
          Fitness Time -{" "}
          {language === "DE" ? "Dein Workout Planer" : "Your Workout Planer"}
        </title>
        <link rel="icon" href="./favicons/favicon.ico" />
      </Head>
      <NavBar language={language} setLanguageCallback={setLanguage} />
      <main>
        <HeroSection language={language} />
        <AboutSection language={language} />
        <PreviewSection language={language} />
        <ContactHeader language={language} />
        <ContactForm language={language} />
      </main>
      <Footer language={language} />
    </>
  );
};

export default landing;
