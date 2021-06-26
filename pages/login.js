import React, { Fragment, useEffect, useState } from "react";
import { signIn, useSession } from "next-auth/client";
import Head from "next/head";
import { useRouter } from "next/router";

import NavBar from "./components/navbar/NavBar";
import Footer from "./components/footer/Footer";

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
      <Head>
        <title>Fitness Time - Login</title>
        <link rel="icon" href="./favicons/favicon.ico" />
      </Head>
      <NavBar language={language} setLanguageCallback={setLanguage} />
      {language &&
      typeof window !== "undefined" &&
      localStorage.getItem("language") === null
        ? localStorage.setItem("language", language)
        : ""}
      <main>
        <section className="relative w-full h-full min-h-screen py-40">
          <div
            className="absolute top-0 w-full h-full bg-top bg-cover"
            style={{
              backgroundImage:
                'url("./backgrounds/bg-fitness-cardio-dark.jpeg")',
            }}
          ></div>
          <div className="container h-full px-4 mx-auto">
            <div className="flex items-center content-center justify-center h-full mt-60 iphone:mt-20">
              <div className="w-full px-4 m-auto lg:w-4/12">
                <div
                  className="relative flex flex-col w-full mb-6 bg-white rounded-lg shadow-lg"
                  data-aos="fade-in"
                >
                  <div className="px-6 py-6 mb-0">
                    <div className="mb-3 text-center">
                      <h6 className="text-sm font-bold text-blueGray-500">
                        {language === "DE"
                          ? "Schnell einloggen mit"
                          : "Quick Login"}
                      </h6>
                    </div>
                    <div className="flex-col text-center cursor-pointer iphone:flex iphone:">
                      <a
                        onClick={() => signIn("github")}
                        className="inline-block px-3 py-2 mr-2 text-xs font-bold text-white uppercase align-middle transition-all duration-150 ease-in-out border border-solid rounded-md shadow outline-none focus:outline-none last:mr-0 bg-github-regular border-github-regular active:bg-github-active active:border-github-active hover:shadow-md iphone:mt-2"
                      >
                        {/* */}github
                      </a>
                      <a
                        onClick={() => signIn("facebook")}
                        className="inline-block px-3 py-2 mr-2 text-xs font-bold text-white uppercase align-middle transition-all duration-150 ease-in-out border border-solid rounded-md shadow outline-none focus:outline-none last:mr-0 bg-facebook-regular border-facebook-regular active:bg-facebook-active active:border-facebook-active hover:shadow-md iphone:mt-2"
                      >
                        {/* */}facebook
                      </a>
                      <a
                        onClick={() => signIn("twitter")}
                        className="inline-block px-3 py-2 text-xs font-bold text-white uppercase align-middle transition-all duration-150 ease-in-out border border-solid rounded-md shadow outline-none focus:outline-none last:mr-0 bg-twitter-regular border-twitter-regular active:bg-twitter-active active:border-twitter-active hover:shadow-md iphone:!mr-2 iphone:mt-2"
                      >
                        {/* */}twitter
                      </a>
                    </div>
                    <hr className="mt-6 border-b-1 border-blueGray-200" />
                  </div>
                  <div className="flex-auto px-4 py-10 pt-0 lg:px-10">
                    <div className="mb-3 font-bold text-center text-blueGray-500">
                      <small>
                        {language === "DE"
                          ? "Mit E-Mail fortfahren"
                          : "Continue with Email"}
                      </small>
                    </div>
                    <div className="relative w-full">
                      <label className="block mb-2 ml-1 text-xs font-bold uppercase text-blueGray-500">
                        {language === "DE" ? "E-Mail-Adresse" : "Email"}
                      </label>
                      <div className="pt-0 mb-3">
                        <input
                          type="email"
                          required
                          placeholder="max.mustermann@pm.me"
                          value={email}
                          onChange={(event) => setEmail(event.target.value)}
                          className="relative w-full px-3 py-2 text-sm transition duration-200 bg-white border border-solid rounded-md outline-none border-blueGray-300 placeholder-blueGray-200 text-blueGray-700 focus:ring focus:ring-lightBlue-500 focus:ring-1 focus:border-lightBlue-500 "
                          autoComplete="off"
                          onKeyPress={(event) => {
                            if (event.key === "Enter" && validateEmail(email)) {
                              setShowEmailInvalid(false);
                              signIn("email", { email });
                            }
                          }}
                          style={{
                            backgroundImage: 'url("data:image/png',
                            backgroundRepeat: "no-repeat",
                            backgroundAttachment: "scroll",
                            backgroundSize: "16px 18px",
                            backgroundPosition: "98% 50%",
                            cursor: "auto",
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
                        className="inline-block w-full px-6 py-2 mr-2 text-sm font-bold text-center text-white uppercase align-middle transition-all duration-150 ease-in-out border border-solid rounded-md shadow outline-none focus:outline-none last:mr-0 bg-blueGray-800 border-blueGray-800 active:bg-blueGray-900 active:border-blueGray-900 hover:shadow-lg"
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
      </main>
      <Footer language={language} />
    </>
  );
};

export default login;
