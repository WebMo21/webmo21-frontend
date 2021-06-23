import React from "react";
import Link from "next/link";

const emailsent = () => {
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
              <div className="container h-full px-4 mx-auto">
                <div className="flex flex-wrap items-center h-full -mx-4">
                  <div className="relative w-full px-4 text-center">
                    <h1 className="mb-16 text-6xl font-bold text-green-500">
                      Gleich gehts los!
                    </h1>
                    <h4 className="mt-0 mb-2 text-2xl font-bold">
                      Überprüfe deine E-Mails!
                    </h4>
                    <p className="text-xl font-normal leading-normal text-blueGray-500">
                      Wir haben dir einen Link zum Einloggen gesendet.
                    </p>
                    <a
                      onClick={() => {
                        window.opener = null;
                        window.open("", "_self", "");
                        window.close();
                      }}
                    >
                      <a className="inline-block p-4 mt-5 font-semibold text-white bg-red-500 border border-green-500 rounded cursor-pointer select-none hover:bg-red-400">
                        Seite schließen
                      </a>
                    </a>
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
