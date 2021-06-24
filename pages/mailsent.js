import React, { useState } from "react";
import Link from "next/link";

const emailsent = () => {
  const [language] = useState(
    typeof window !== "undefined" && localStorage.getItem("language")
  );

  return (
    <div className="!h-screen">
      <div className="flex-auto ct-docs-frame">
        <div className="relative flex flex-wrap justify-center ">
          <div className="w-full">
            <div className="h-screen overflow-hidden">
              <div
                className="absolute w-full h-full bg-cover bg-50"
                style={{ backgroundImage: "url(./backgrounds/mailsent.svg)" }}
              ></div>
              <div className="container h-full px-4 mx-auto" data-aos="fade-in">
                <div className="flex flex-wrap items-center h-full -mx-4">
                  <div className="relative w-full px-4 text-center">
                    <h1 className="mb-16 text-6xl font-bold text-green-500">
                      {language === "DE"
                        ? "Gleich gehts los!"
                        : "Almost ready to go!"}
                    </h1>
                    <h4 className="mt-0 mb-2 text-2xl font-bold">
                      {language === "DE"
                        ? "Überprüfe deine E-Mails"
                        : "Check your emails"}
                    </h4>
                    <p className="text-xl font-normal leading-normal text-blueGray-500">
                      {language === "DE"
                        ? "Wir haben dir einen Link zum Einloggen gesendet."
                        : "We have sent you a link to log in."}
                    </p>
                    <Link href="/dashboard">
                      <a className="inline-block p-4 mt-5 font-semibold text-white bg-green-500 border border-green-500 rounded cursor-pointer select-none hover:bg-green-400">
                        {language === "DE"
                          ? "Zurück zum Dashboard!"
                          : "Back to the Dashboard"}
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

export default emailsent;
