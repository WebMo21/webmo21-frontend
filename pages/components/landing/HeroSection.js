import React from "react";
import Link from "next/link";
import { useSession } from "next-auth/client"

const HeroSection = () => {
  const [session] = useSession();
  return (
    <div
      className="relative flex items-center content-center justify-center pt-16 pb-32"
      style={{ minHeight: "95vh" }}
    >
      <div
        className="absolute top-0 w-full h-full bg-top bg-cover"
        style={{
          backgroundImage: 'url("./backgrounds/bg-fitness-woman.jpeg")',
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
              <h1 className="text-5xl font-semibold text-white selection:bg-yellow-300 selection:text-yellow-900">
                Fitness <span className="text-green-500 selection:bg-yellow-300 selection:text-yellow-900">Time</span>
              </h1>
              <p className="mt-4 text-lg text-gray-300 selection:bg-yellow-300 selection:text-yellow-900">
                Willkommen zu Fitness Time, deinem digitalen Planer für dein
                Training und deine Fitness. Lass uns die Übersicht deiner
                Workouts organisieren und fokussiere dich auf dein Training.
              </p>
              <div className="flex justify-center mt-4 select-none">
                <img
                  className="object-cover h-12 mr-4 cursor-pointer w-30"
                  src="./ios-app-store-badge.png"
                  alt=""
                />
                <img
                  className="object-cover h-12 cursor-pointer w-30"
                  src="./google-play-badge.png"
                  alt=""
                />
              </div>
              {!session && (
                <>
                  <Link href="/login">
                <a className="inline-block p-4 mt-5 font-semibold text-green-500 bg-transparent border border-green-500 rounded cursor-pointer select-none hover:bg-green-500 hover:text-white hover:border-transparent">
                  Jetzt im Browser loslegen!
                </a>
              </Link>
                </>
              )}
               {session && (
                <>
                  <Link href="/dashboard">
                <a className="inline-block p-4 mt-5 font-semibold text-green-500 bg-transparent border border-green-500 rounded cursor-pointer select-none hover:bg-green-500 hover:text-white hover:border-transparent">
                  Hallo {session.user.name}, zum Dashboard!
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
