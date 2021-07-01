import React, { useState } from "react";
import { Switch } from "@headlessui/react";

const SettingsSection = ({ language }) => {
  const [active, setActive] = useState(false);
  let color = "green";

  return (
    <div
      className="relative z-0 flex-1 pb-8 overflow-y-auto"
      data-aos="fade-up"
    >
      <div className="bg-gray-900">
        <div className="px-4 sm:px-6 lg:max-w-6xl lg:mx-auto lg:px-8">
          <h2 className="max-w-6xl pl-1 mx-auto mt-8 text-2xl font-medium leading-6 text-white select-none">
            {language === "DE" ? "Deine Einstellungen" : "Your Settings"}
          </h2>
          <div className="p-8 py-6 mt-5 bg-gray-700 rounded-lg md:flex md:items-center md:justify-between">
            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-center h-12 cursor-pointer group">
                <Switch
                  checked={active}
                  onChange={setActive}
                  className={`${
                    active ? "bg-green-500" : "bg-white"
                  } relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 !outline-none`}
                >
                  <span className="sr-only">Use setting</span>
                  <span
                    className={`${
                      active ? "translate-x-5 " : "translate-x-0 "
                    } pointer-events-none relative inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200`}
                  >
                    <span
                      className={`${
                        active
                          ? "opacity-0 ease-out duration-100 "
                          : "opacity-100 ease-in duration-200 "
                      } absolute inset-0 h-full w-full flex items-center justify-center transition-opacity`}
                      aria-hidden="true"
                    >
                      <svg
                        className="w-3 h-3 text-gray-400"
                        fill="none"
                        viewBox="0 0 12 12"
                      >
                        <path
                          d="M4 8l2-2m0 0l2-2M6 6L4 4m2 2l2 2"
                          stroke="currentColor"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                    <span
                      className={`${
                        active
                          ? "opacity-100 ease-in duration-200 "
                          : "opacity-0 ease-out duration-100 "
                      } absolute inset-0 h-full w-full flex items-center justify-center transition-opacity `}
                      aria-hidden="true"
                    >
                      <svg
                        className={`h-3 w-3 ${
                          color ? `text-${color}-500` : "text-white"
                        }`}
                        fill="currentColor"
                        viewBox="0 0 12 12"
                      >
                        <path d="M3.707 5.293a1 1 0 00-1.414 1.414l1.414-1.414zM5 8l-.707.707a1 1 0 001.414 0L5 8zm4.707-3.293a1 1 0 00-1.414-1.414l1.414 1.414zm-7.414 2l2 2 1.414-1.414-2-2-1.414 1.414zm3.414 2l4-4-1.414-1.414-4 4 1.414 1.414z" />
                      </svg>
                    </span>
                  </span>
                </Switch>
                )
              </div>
            </div>
            <div>DEIN NAME</div> <div>GESCHLECHT</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingsSection;
