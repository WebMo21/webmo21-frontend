import React from "react";
import Link from "next/link";

const HeroSection = () => {
  return (
    <div
      className="relative pt-16 pb-32 flex content-center items-center justify-center"
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
          className="w-full h-full absolute opacity-75 bg-black"
        />
      </div>
      <div className="container relative mx-auto" data-aos="fade-in">
        <div className="items-center flex flex-wrap">
          <div className="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
            <div>
              <h1 className="text-white font-semibold text-5xl">
                Fitness <span className="text-green-500">Time</span>
              </h1>
              <p className="mt-4 text-lg text-gray-300">
                Willkommen zu Fitness Time, deinem digitalen Planer für dein
                Training und deine Fitness. Lass uns die Übersicht deiner
                Workouts organisieren und fokussiere dich auf dein Training.
              </p>
              <div className="flex justify-center mt-4">
                <img
                  className="h-12 w-30 object-cover mr-4 cursor-pointer"
                  src="./ios-app-store-badge.png"
                  alt=""
                />
                <img
                  className="h-12 w-30 object-cover cursor-pointer"
                  src="./google-play-badge.png"
                  alt=""
                />
              </div>
              <Link href="https://webmo21-frontend.vercel.app/login">
                <a className="bg-transparent hover:bg-green-500 text-green-500 font-semibold hover:text-white p-4 border border-green-500 hover:border-transparent rounded inline-block mt-5 cursor-pointer">
                  Jetzt im Browser loslegen!
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div
        className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden"
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
