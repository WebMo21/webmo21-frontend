import React, { useState, Fragment } from "react";
import Link from "next/link";
import { Dialog, Transition } from "@headlessui/react";
import {
  ArchiveIcon as ArchiveIconOutline,
  XIcon,
  MenuIcon,
} from "@heroicons/react/outline";

const MobileMenu = ({ navigation, setActiveSideBarSection, language }) => {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <div className="absolute inset-y-0 right-0 flex items-center pr-4 outline-none sm:pr-6 lg:hidden focus:outline-none">
        {/* Mobile menu button */}
        <button
          type="button"
          className="inline-flex items-center justify-center p-2 -mr-2 text-white rounded-md outline-none hover:text-white hover:bg-gray-600 focus:outline-none"
          onClick={() => setOpen(true)}
        >
          <span className="sr-only">Open main menu</span>
          <MenuIcon
            className="block w-6 h-6 text-white focus:outline-none"
            aria-hidden="true"
          />
        </button>
      </div>
      <Transition.Root show={open} as={Fragment}>
        <Dialog
          as="div"
          static
          className="fixed inset-0 z-40 lg:hidden"
          open={open}
          onClose={setOpen}
        >
          <Transition.Child
            as={Fragment}
            enter="transition-opacity ease-linear duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="hidden sm:block sm:fixed sm:inset-0 sm:bg-gray-600 sm:bg-opacity-75" />
          </Transition.Child>

          <Transition.Child
            as={Fragment}
            enter="transition ease-out duration-150 sm:ease-in-out sm:duration-300"
            enterFrom="transform opacity-0 scale-110 sm:translate-x-full sm:scale-100 sm:opacity-100"
            enterTo="transform opacity-100 scale-100 sm:translate-x-0 sm:scale-100 sm:opacity-100"
            leave="transition ease-in duration-150 sm:ease-in-out sm:duration-300"
            leaveFrom="transform opacity-100 scale-100 sm:translate-x-0 sm:scale-100 sm:opacity-100"
            leaveTo="transform opacity-0 scale-110 sm:translate-x-full sm:scale-100 sm:opacity-100"
          >
            <nav
              className="fixed inset-0 z-40 w-full h-full bg-gray-800 sm:inset-y-0 sm:left-auto sm:right-0 sm:max-w-sm sm:w-full sm:shadow-lg"
              aria-label="Global"
            >
              <div className="flex items-center justify-between h-16 px-4 sm:px-6">
                <div className="flex items-center justify-center focus:outline-none">
                  <Link href="/">
                    <a>
                      <img
                        className="block w-auto h-12 focus:outline-none"
                        src="/logos/logo_small_icon_only_inverted-fitness-time.png"
                        alt="Fitness Time Logo"
                      />
                    </a>
                  </Link>
                  <div className="inline-block py-2 ml-3 text-lg font-bold leading-relaxed text-white uppercase whitespace-no-wrap cursor-pointer select-none">
                    Fitness Time
                  </div>
                </div>

                <button
                  type="button"
                  className="inline-flex items-center justify-center p-2 -mr-2 text-gray-400 rounded-md hover:text-gray-500 hover:bg-gray-100 focus:outline-none"
                  onClick={() => setOpen(false)}
                >
                  <span className="sr-only">Close main menu</span>
                  <XIcon className="block w-6 h-6" aria-hidden="true" />
                </button>
              </div>
              <div className="px-2 py-3 mx-auto max-w-8xl sm:px-4">
                {navigation &&
                  navigation.map((item) => (
                    <Fragment key={item.name}>
                      <a className="block px-3 py-2 text-base font-medium text-green-500 rounded-md cursor-default select-none">
                        {item.name}
                      </a>
                      {item.children.map((child) => (
                        <a
                          onClick={() => {
                            setTimeout(function () {
                              setActiveSideBarSection(child.name);
                              setOpen(false);
                            }, 300);
                          }}
                          key={child.name}
                          className="block py-2 pl-5 pr-3 text-base font-medium text-gray-500 rounded-md hover:bg-green-200 group hover:text-black"
                        >
                          <div className="flex">
                            <child.icon
                              className="w-6 h-6 mr-2 text-green-500 group-hover:text-black"
                              aria-hidden="true"
                            />
                            {language === "DE"
                              ? child.title
                              : child.englishTitle}
                          </div>
                        </a>
                      ))}
                    </Fragment>
                  ))}
              </div>
            </nav>
          </Transition.Child>
        </Dialog>
      </Transition.Root>{" "}
    </div>
  );
};

export default MobileMenu;
