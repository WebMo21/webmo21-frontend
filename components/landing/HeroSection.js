import React from "react";
import Link from "next/link";
import { useSession } from "next-auth/client";

const HeroSection = ({ language }) => {
  const [session] = useSession();
  return (
    <div
      className="relative flex items-center content-center justify-center pt-16 pb-32"
      style={{ minHeight: "95vh" }}
    >
      <div
        className="absolute top-0 w-full h-full bg-top bg-cover"
        style={{
          backgroundImage: 'url("/backgrounds/bg-fitness-woman.jpeg")',
        }}
      >
        <span
          id="blackOverlay"
          className="absolute w-full h-full bg-black opacity-75"
        />
      </div>
      <div className="container relative mx-auto" data-aos="fade-in">
        <div className="flex flex-wrap items-center">
          <div className="w-full px-4 ml-auto mr-auto text-center lg:w-6/12">
            <div>
              <h2
                className={`${
                  session ? "mt-16" : ""
                } text-5xl font-semibold text-white selection:bg-yellow-300 selection:text-yellow-900`}
              >
                Fitness{" "}
                <span className="text-green-500 selection:bg-yellow-300 selection:text-yellow-900">
                  Time
                </span>
              </h2>
              <p className="mt-4 text-lg text-gray-300 selection:bg-yellow-300 selection:text-yellow-900">
                {language === "DE"
                  ? "Willkommen zu Fitness Time, deinem digitalen Planer für dein Training und deine Fitness. Lass uns die Übersicht deiner Workouts organisieren und fokussiere dich auf dein Workout."
                  : "Welcome to Fitness Time, your digital planner for your workouts and fitness. Let us organize the overview of your training and focus on your body instead of time."}
              </p>
              <div className="flex justify-center mt-4 select-none">
                <img
                  className="object-cover h-12 mr-4 cursor-pointer w-30"
                  alt="Fitness Time On The iOS Store"
                  src={
                    language === "DE"
                      ? "/ios-app-store-badge.png"
                      : "/ios-app-store-badge-english.png"
                  }
                />
                <img
                  className="object-cover h-12 cursor-pointer w-30"
                  alt="Fitness Time On The Android Play Store"
                  src={
                    language === "DE"
                      ? "/google-play-badge.png"
                      : "/google-play-badge-english.png"
                  }
                />
              </div>
              {!session && (
                <>
                  <Link href="/auth/login">
                    <a className="inline-block p-4 mt-5 font-semibold text-green-500 bg-transparent border border-green-500 rounded cursor-pointer select-none hover:bg-green-500 hover:text-white hover:border-transparent">
                      {language === "DE"
                        ? "Jetzt im Browser loslegen!"
                        : "Start now on the web!"}
                    </a>
                  </Link>
                </>
              )}
              {session && (
                <>
                  <Link href="/dashboard">
                    <a className="inline-block p-4 mt-5 font-semibold text-green-500 bg-transparent border border-green-500 rounded cursor-pointer select-none hover:bg-green-500 hover:text-white hover:border-transparent iphone:text-center">
                      {language === "DE" ? "Hallo" : "Welcome"}{" "}
                      {session.user.name
                        ? session.user.name
                        : session.user.email}
                      ,
                      <br
                        className={`${
                          session.user.email
                            ? "xm:hidden md:hidden lg:hidden xl:hidden iphone:block"
                            : ""
                        }`}
                      ></br>{" "}
                      {language === "DE"
                        ? "zum Dashboard!"
                        : "go to dashboard!"}
                    </a>
                  </Link>
                  <Link href="/auth/logout">
                    <a className="p-2 mx-2 mt-4 font-semibold text-white bg-red-400 border border-transparent border-green-500 rounded cursor-pointer select-none sm:hidden md:hidden lg:hidden xl:hidden iphone:block hover:bg-red-300 iphone:!mx-16">
                      {language === "DE" ? "Ausloggen" : "Sign Out"}
                    </a>
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
      <div
        className="absolute bottom-0 left-0 right-0 top-auto w-full overflow-hidden pointer-events-none"
        style={{ height: 70, transform: "translateZ(0px)" }}
      >
        <svg
          className="absolute bottom-0 overflow-hidden"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          version="1.1"
          viewBox="0 0 2560 100"
          x={0}
          y={0}
        >
          <polygon points="2560 0 2560 100 0 100" />
        </svg>
      </div>
    </div>
  );
};

export default HeroSection;
