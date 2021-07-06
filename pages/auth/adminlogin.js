import React, { Fragment, useEffect, useState } from "react";
import { signIn, useSession } from "next-auth/client";
import { useRouter } from "next/router";
import { NextSeo } from "next-seo";

import NavBar from "../../components/navbar/NavBar";
import Footer from "../../components/footer/Footer";

const adminlogin = () => {
  const router = useRouter();
  const [session, loading] = useSession();
  const [language, setLanguage] = useState(
    typeof window !== "undefined" && localStorage.getItem("language") === null
      ? "DE"
      : typeof window !== "undefined" && localStorage.getItem("language")
  );
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showInvalidCredentials, setShowInvalidCredentials] = useState(false);

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

  const adminSignIn = (username, password) =>
    signIn("credentials", {
      redirect: false,
      username: username,
      password: password,
    })
      .then((error, status, ok, url) => {
        if (error) {
          setShowInvalidCredentials(true);
        }
      })
      .catch((error) => {
        console.log("ERROR FROM CALLBACK", error);
      });

  return (
    <>
      <NextSeo
        title={`Fitness Time - ${
          language === "DE"
            ? "Logge dich ein um deine Fitness zu überwachen"
            : "Log in to improve and monitor your fitness and stamina"
        }`}
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
        {console.log("SESSION", session)}
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
                  <div className="px-6 py-6 pb-0 mb-0">
                    <div className="mb-3 text-center">
                      <h1
                        className={`mx-auto text-lg text-yellow-500 mb-6 font-bold w-full bg-yellow-100 rounded-md p-4 select-none`}
                      >
                        {language === "DE"
                          ? "Jetzt als Administrator einloggen"
                          : "Login now as administrator"}
                      </h1>
                    </div>
                  </div>
                  <div className="flex-auto px-4 py-10 pt-0 lg:px-10">
                    <div className="mb-3 text-lg font-bold text-center select-none text-blueGray-500">
                      <small>
                        {language === "DE"
                          ? "Mit Username und Passwort fortfahren"
                          : "Continue with username and Password"}
                      </small>
                    </div>
                    <div className="relative w-full">
                      <label className="block mb-2 ml-1 text-xs font-bold uppercase select-none text-blueGray-500">
                        Username
                      </label>
                      <div className="pt-0 mb-3">
                        <input
                          type="text"
                          required
                          placeholder="maxmustermann"
                          value={username}
                          onChange={(event) => setUsername(event.target.value)}
                          className="relative w-full px-3 py-2 text-sm transition duration-200 bg-white border border-solid rounded-md outline-none border-blueGray-300 placeholder-blueGray-200 text-blueGray-700 focus:ring-green-500 focus:ring-1 focus:border-green-500"
                          autoComplete="off"
                          onKeyPress={(event) => {
                            if (event.key === "Enter")
                              adminSignIn(username, password);
                          }}
                        />
                      </div>
                    </div>
                    <div className="relative w-full">
                      <label className="block mb-2 ml-1 text-xs font-bold uppercase select-none text-blueGray-500">
                        {language === "DE" ? "Passwort" : "Password"}
                      </label>
                      <div className="pt-0 mb-3">
                        <input
                          type="password"
                          required
                          placeholder="******"
                          value={password}
                          onChange={(event) => setPassword(event.target.value)}
                          className="relative w-full px-3 py-2 text-sm transition duration-200 bg-white border border-solid rounded-md outline-none border-blueGray-300 placeholder-blueGray-200 text-blueGray-700 focus:ring-green-500 focus:ring-1 focus:border-green-500"
                          autoComplete="off"
                          onKeyPress={(event) => {
                            if (event.key === "Enter")
                              adminSignIn(username, password);
                          }}
                        />
                        {showInvalidCredentials ? (
                          <span className="rounded bg-red-50 px-2.5 py-1 text-xs font-semibold text-red-500 tracking-wide">
                            {language === "DE"
                              ? "Die Kombination aus Username und Passwort ist ungültig!"
                              : "The username and password combination is invalid!"}
                          </span>
                        ) : (
                          ""
                        )}
                      </div>
                    </div>
                    <div className="mt-5 text-center">
                      <button
                        onClick={() => {
                          adminSignIn(username, password);
                        }}
                        className="inline-block w-full px-6 py-2 mr-2 text-sm font-bold text-center text-white uppercase align-middle transition-all duration-150 ease-in-out border border-solid rounded-md shadow outline-none select-none focus:outline-none last:mr-0 bg-blueGray-800 border-blueGray-800 active:bg-blueGray-900 active:border-blueGray-900 hover:shadow-lg"
                      >
                        {language === "DE" ? "Jetzt einloggen" : "Login now"}
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

export default adminlogin;
