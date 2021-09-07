import React, { useState } from "react";
import Link from "next/link";
import { signOut, useSession } from "next-auth/client";

const logout = () => {
  const [session] = useSession();
  const [language] = useState(
    typeof window !== "undefined" && localStorage.getItem("language") === null
      ? "DE"
      : typeof window !== "undefined" && localStorage.getItem("language")
  );

  return (
    <div className="!h-screen">
      {language &&
      typeof window !== "undefined" &&
      localStorage.getItem("language") === null
        ? localStorage.setItem("language", language)
        : ""}
      {session ? signOut() : ""}
      <div className="flex-auto ct-docs-frame">
        <div className="relative flex flex-wrap justify-center ">
          <div className="w-full">
            <div className="h-screen overflow-hidden">
              <div
                className="absolute w-full h-full bg-cover bg-50"
                style={{
                  backgroundImage:
                    "url(/backgrounds/bg-fitness-locker-room.jpeg)",
                }}
              ></div>
              <div className="container h-full px-4 mx-auto" data-aos="fade-in">
                <div className="flex flex-wrap items-center h-full -mx-4">
                  <div className="relative w-full px-4 text-center">
                    <h1 className="mb-16 font-bold text-green-500 iphone:text-2xl text-8xl">
                      {language === "DE" ? "Auf Wiedersehen!" : "Goodbye!"}
                    </h1>
                    <p className="text-2xl font-normal leading-normal text-white">
                      {language === "DE"
                        ? "Du wurdest ausgeloggt."
                        : "You have been logged out"}
                    </p>
                    <Link href="/">
                      <a className="inline-block p-4 mt-5 font-semibold text-white bg-green-500 border border-green-500 rounded cursor-pointer select-none hover:bg-green-400">
                        {language === "DE"
                          ? "Zurück zu Fitness Time!"
                          : "Back to Fitness Time"}
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

export default logout;
