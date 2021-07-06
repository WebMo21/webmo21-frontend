import React, { Fragment, useEffect, useState } from "react";
import { signIn, useSession } from "next-auth/client";
import { useRouter } from "next/router";
import { NextSeo } from "next-seo";

import NavBar from "../../components/navbar/NavBar";
import Footer from "../../components/footer/Footer";

const login = () => {
  const [session, loading] = useSession();
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [showEmailInvalid, setShowEmailInvalid] = useState(false);
  const [language, setLanguage] = useState(
    typeof window !== "undefined" && localStorage.getItem("language") === null
      ? "DE"
      : typeof window !== "undefined" && localStorage.getItem("language")
  );

  useEffect(() => {
    if (session) {
      router.push("/dashboard");
    }
  }, [session]);

  useEffect(() => {
    if (session) {
      router.push("/dashboard");
    }
  }, []);

  const validateEmail = (email) =>
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
      String(email).toLowerCase()
    );

  return (
    <>
      <NextSeo
        title={`Fitness Time - ${
          language === "DE"
            ? "Logge dich ein um deine Fitness zu überwachen"
            : "Log in to improve and monitor your fitness and stamina"
        }`}
        description="Nutze die Fitness Time Plattform um den Überblick über dein Training und deine Workouts zu erhalten. Erstelle individuelle Übungen und eigene Pläne, damit du stets einen Zeitplan für deinen Sport hast."
        openGraph={{
          type: "website",
          url: "https://www.fitness-time.app/login",
          title: `Fitness Time - ${
            language === "DE"
              ? "Logge dich ein um deine Fitness und Ausdauer zu verbessern und überwachen"
              : "Log in to improve and monitor your fitness and stamina"
          }`,
          description:
            "Nutze die Fitness Time Plattform um den Überblick über dein Training und deine Workouts zu erhalten. Erstelle individuelle Übungen und eigene Pläne, damit du stets einen Zeitplan für deinen Sport hast.",
          images: [
            {
              url: "https://www.fitness-time.app/screenshot-landingpage.png",
              width: 800,
              height: 600,
              alt: "Gehe Jetzt Auf die Landingpage Von Fitness Time Und Beginne Dein Training Zu Optimieren",
            },
            {
              url: "https://www.fitness-time.app/screenshot-dashboard.png",
              width: 800,
              height: 600,
              alt: "Das Dashboard Von Fitness Time Bietet Einfachen Überblick Über Workouts & Trainingspläne",
            },
          ],
        }}
        additionalLinkTags={[
          {
            rel: "icon",
            href: "https://www.fitness-time.app/favicons/favicon.ico",
          },
          {
            rel: "apple-touch-icon",
            href: "https://www.fitness-time.app/favicons/apple-icon-76x76.png",
            sizes: "76x76",
          },
        ]}
      />
      <NavBar language={language} setLanguageCallback={setLanguage} />
      {language &&
      typeof window !== "undefined" &&
      localStorage.getItem("language") === null
        ? localStorage.setItem("language", language)
        : ""}
      <div>
        <section className="relative w-full h-full min-h-screen py-40">
          <div
            className="absolute top-0 w-full h-full bg-top bg-cover"
            style={{
              backgroundImage:
                'url("/backgrounds/bg-fitness-cardio-dark.jpeg")',
            }}
          ></div>
          <div className="container h-full px-4 mx-auto">
            <div className="flex items-center content-center justify-center h-full mt-60 iphone:mt-20">
              <div className="w-full px-4 m-auto lg:w-4/12 tabletpro:!w-96">
                <div
                  className="relative flex flex-col w-full mb-6 bg-white rounded-lg shadow-lg"
                  data-aos="fade-in"
                >
                  <div className="px-6 py-6 mb-0">
                    <div className="mb-3 text-center">
                      <h1
                        className={`mx-auto text-lg text-green-500 mb-6 font-bold w-full bg-green-100 rounded-md p-4 select-none`}
                      >
                        {language === "DE"
                          ? "Jetzt mit Fitness Time deine Workouts planen"
                          : "Plan your workouts with Fitness Time now"}
                      </h1>
                      <h6 className="font-bold select-none text-md text-blueGray-500">
                        {language === "DE"
                          ? "Schnell einloggen mit"
                          : "Quick Login"}
                      </h6>
                    </div>
                    <div className="flex-col text-center cursor-pointer iphone:flex iphone:">
                      <a
                        onClick={() => signIn("github")}
                        className="inline-block px-3 py-2 mr-2 text-sm font-bold text-white uppercase align-middle transition-all duration-150 ease-in-out border border-solid rounded-md shadow outline-none select-none focus:outline-none last:mr-0 bg-github-regular border-github-regular active:bg-github-active active:border-github-active hover:shadow-md iphone:mt-2 hover:bg-[#4b5668]"
                      >
                        {/* */}github
                      </a>
                      <a
                        onClick={() => signIn("facebook")}
                        className="inline-block px-3 py-2 mr-2 text-sm font-bold text-white uppercase align-middle transition-all duration-150 ease-in-out border border-solid rounded-md shadow outline-none select-none focus:outline-none last:mr-0 bg-facebook-regular border-facebook-regular active:bg-facebook-active active:border-facebook-active hover:shadow-md iphone:mt-2 hover:bg-[#657baa]"
                      >
                        {/* */}facebook
                      </a>
                      <a
                        onClick={() => signIn("twitter")}
                        className="inline-block px-3 py-2 text-sm font-bold text-white uppercase align-middle transition-all duration-150 ease-in-out border border-solid rounded-md shadow outline-none focus:outline-none last:mr-0 bg-twitter-regular border-twitter-regular active:bg-twitter-active active:border-twitter-active hover:shadow-md iphone:!mr-2 iphone:mt-2 select-none hover:bg-[#63b2e4]"
                      >
                        {/* */}twitter
                      </a>
                    </div>
                    <hr className="mt-6 border-b-1 border-blueGray-200" />
                  </div>
                  <div className="flex-auto px-4 py-10 pt-0 lg:px-10">
                    <div className="mb-3 text-lg font-bold text-center select-none text-blueGray-500">
                      <small>
                        {language === "DE"
                          ? "Mit E-Mail fortfahren"
                          : "Continue with Email"}
                      </small>
                    </div>
                    <div className="relative w-full">
                      <label className="block mb-2 ml-1 text-xs font-bold uppercase select-none text-blueGray-500">
                        {language === "DE" ? "E-Mail-Adresse" : "Email"}
                      </label>
                      <div className="pt-0 mb-3">
                        <input
                          type="email"
                          required
                          placeholder="max.mustermann@pm.me"
                          value={email}
                          onChange={(event) => setEmail(event.target.value)}
                          className="relative w-full px-3 py-2 text-sm transition duration-200 bg-white border border-solid rounded-md outline-none border-blueGray-300 placeholder-blueGray-200 text-blueGray-700 focus:ring-green-500 focus:ring-1 focus:border-green-500"
                          autoComplete="off"
                          onKeyPress={(event) => {
                            if (event.key === "Enter" && validateEmail(email)) {
                              setShowEmailInvalid(false);
                              signIn("email", { email });
                            } else if (
                              event.key === "Enter" &&
                              !validateEmail(email)
                            ) {
                              setShowEmailInvalid(true);
                            }
                          }}
                        />
                        {showEmailInvalid ? (
                          <span className="rounded bg-red-50 px-2.5 py-1 text-xs font-semibold text-red-500 tracking-wide uppercase">
                            {language === "DE"
                              ? "Das ist keine gültige E-Mail-Adresse"
                              : "This is no valid email"}
                          </span>
                        ) : (
                          ""
                        )}
                      </div>
                    </div>
                    <div className="mt-5 text-center">
                      <button
                        onClick={() => {
                          if (validateEmail(email)) {
                            setShowEmailInvalid(false);
                            signIn("email", { email });
                          } else {
                            setShowEmailInvalid(true);
                          }
                        }}
                        className="inline-block w-full px-6 py-2 mr-2 text-sm font-bold text-center text-white uppercase align-middle transition-all duration-150 ease-in-out border border-solid rounded-md shadow outline-none select-none focus:outline-none last:mr-0 bg-blueGray-800 border-blueGray-800 active:bg-blueGray-900 active:border-blueGray-900 hover:shadow-lg hover:bg-[#374458]"
                      >
                        {language === "DE"
                          ? "Mit E-Mail Einloggen"
                          : "Login with Email"}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer language={language} />
    </>
  );
};

export default login;
