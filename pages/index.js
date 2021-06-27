import React, { useState, useEffect } from "react";
import { NextSeo } from "next-seo";
import CookieConsent from "react-cookie-consent";

import NavBar from "./components/navbar/NavBar";
import HeroSection from "./components/landing/HeroSection";
import AboutSection from "./components/landing/AboutSection";
import PreviewSection from "./components/landing/PreviewSection";
import ContactHeader from "./components/landing/ContactHeader";
import ContactForm from "./components/landing/ContactForm";
import Footer from "./components/footer/Footer";

const landing = () => {
  const [language, setLanguage] = useState(
    typeof window !== "undefined" && localStorage.getItem("language") === null
      ? "DE"
      : typeof window !== "undefined" && localStorage.getItem("language")
  );

  return (
    <>
      <NextSeo
        title={`Fitness Time - ${
          language === "DE"
            ? "Dein Workout Planer um deine Fitness zu verbessern"
            : "Your Workout Planner to monitor your fitness"
        }`}
        description="Nutze die Fitness Time Plattform um den Überblick über dein Training und deine Workouts zu erhalten. Erstelle individuelle Übungen und eigene Pläne, damit du stets einen Zeitplan für deinen Sport hast."
        openGraph={{
          type: "website",
          url: "https://fitness-time.vercel.app",
          title: `Fitness Time - ${
            language === "DE"
              ? "Dein Workout Planer um deine Fitness zu verbessern und zu überwachen"
              : "Your Workout Planner to improve and monitor your fitness"
          }`,
          description:
            "Nutze die Fitness Time Plattform um den Überblick über dein Training und deine Workouts zu erhalten. Erstelle individuelle Übungen und eigene Pläne, damit du stets einen Zeitplan für deinen Sport hast.",
          images: [
            {
              url: "https://fitness-time.vercel.app/screenshot-landingpage.png",
              width: 800,
              height: 600,
              alt: "Gehe Jetzt Auf die Landingpage Von Fitness Time Und Beginne Dein Training Zu Optimieren",
            },
            {
              url: "https://fitness-time.vercel.app/screenshot-dashboard.png",
              width: 800,
              height: 600,
              alt: "Das Dashboard Von Fitness Time Bietet Einfachen Überblick Über Workouts & Trainingspläne",
            },
          ],
        }}
        additionalLinkTags={[
          {
            rel: "icon",
            href: "https://fitness-time.vercel.app/favicons/favicon.ico",
          },
          {
            rel: "apple-touch-icon",
            href: "https://fitness-time.vercel.app/favicons/apple-icon-76x76.png",
            sizes: "76x76",
          },
        ]}
      />
      {language &&
      typeof window !== "undefined" &&
      localStorage.getItem("language") === null
        ? localStorage.setItem("language", language)
        : ""}

      <NavBar language={language} setLanguageCallback={setLanguage} />
      <div>
        <CookieConsent
          debug={true}
          style={{ color: "#10b981", background: "#1f2937" }}
          cookieName="next-auth.session-token"
          enableDeclineButton
          buttonStyle={{
            background: "#10b981",
            color: "white",
            fontWeight: "600",
          }}
          buttonText="Ich stimme der Verwendung von Cookies zu!"
          declineButtonText="Ich lehne ab."
          onAccept={() => {
            // TODO: BACKEND CALL
            console.log("GDPR COMPLIANT");
          }}
          onDecline={() => (location.href = "http://leuphana.de")}
        >
          Diese Seite nutzt Cookies zur Nutzer-Authentifizierung und
          Verarbeitung persönlicher Daten.
        </CookieConsent>
        <HeroSection language={language} />
        <AboutSection language={language} />
        <PreviewSection language={language} />
        <ContactHeader language={language} />
        <ContactForm language={language} />
      </div>
      <Footer language={language} />
    </>
  );
};

export default landing;
