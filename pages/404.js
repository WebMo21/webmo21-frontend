import React from "react";
import Link from "next/link";

const Custom404 = () => {
  return (
    <div className="!h-screen">
      <div className="flex-auto ct-docs-frame">
        <div className="relative flex flex-wrap justify-center ">
          <div className="w-full">
            <div className="h-screen overflow-hidden">
              <div
                className="absolute w-full h-full bg-cover bg-50"
                style={{
                  backgroundImage:
                    "url(./backgrounds/bg-fitness-man-dark.jpeg)",
                }}
              ></div>
              <div className="container h-full px-4 mx-auto">
                <div className="flex flex-wrap items-center h-full -mx-4">
                  <div className="relative w-full px-4 text-center">
                    <h1 className="font-bold text-green-500 text-10 sm:text-12 tracking-875">
                      404
                    </h1>
                    <h4 className="mt-0 mb-2 text-3xl font-bold text-white">
                      Fehler :(
                    </h4>
                    <p className="text-2xl font-normal leading-normal text-white">
                      Dieses Training ist uns neu...
                    </p>
                    <Link href="/dashboard">
                      <a className="inline-block p-4 mt-5 font-semibold text-white bg-green-500 border border-green-500 rounded cursor-pointer select-none hover:bg-green-400">
                        Zurück zum Dashboard!
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Custom404;
