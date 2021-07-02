import React from "react";
import { Disclosure } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/outline";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const AdminSection = ({ language }) => {
  return (
    <div
      className="relative z-0 flex-1 pb-8 overflow-y-auto"
      data-aos="fade-up"
    >
      <div className="bg-gray-900">
        <div className="px-4 sm:px-6 lg:max-w-6xl lg:mx-auto lg:px-8">
          <h2 className="max-w-6xl pl-1 mx-auto mt-8 text-2xl font-medium leading-6 text-white select-none">
            {language === "DE" ? "Admin Übersicht" : "Admin Overview"}
          </h2>
          <div className="h-screen p-8 py-6 mt-5 bg-gray-700 rounded-lg md:flex md:items-start md:justify-between">
            <div className="flex-col min-w-0">
              <div className="flex items-start justify-start h-12 cursor-pointer group">
                {[
                  {
                    question: "What's the best thing about Switzerland?",
                    answer:
                      "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
                  },
                ].map((faq) => (
                  <Disclosure as="div" key={faq.question} className="pt-6">
                    {({ open }) => (
                      <>
                        <dt className="text-lg">
                          <Disclosure.Button
                            className="flex items-start justify-between w-full text-left text-gray-400"
                            style={{ outline: "0px solid transparent" }}
                          >
                            <span className="mb-2 text-xl text-center text-white">
                              {language === "DE"
                                ? "Benutzerverwaltung"
                                : "User Management"}
                            </span>
                            <span className="flex items-center ml-6 h-7">
                              <ChevronDownIcon
                                className={classNames(
                                  open ? "-rotate-180" : "rotate-0",
                                  "h-6 w-6 transform"
                                )}
                                aria-hidden="true"
                              />
                            </span>
                          </Disclosure.Button>
                        </dt>
                        <Disclosure.Panel
                          as="dd"
                          className="pr-12 mt-2"
                          data-aos="fade-in"
                        >
                          <p className="text-base text-gray-500">
                            {faq.answer}
                          </p>
                        </Disclosure.Panel>
                      </>
                    )}
                  </Disclosure>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminSection;
