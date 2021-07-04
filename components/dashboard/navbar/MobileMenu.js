import React, { useState, Fragment } from "react";
import Link from "next/link";
import { Dialog, Transition } from "@headlessui/react";
import {
  ArchiveIcon as ArchiveIconOutline,
  BellIcon,
  XIcon,
  MenuIcon,
} from "@heroicons/react/outline";
import {
  ArchiveIcon as ArchiveIconSolid,
  SearchIcon,
} from "@heroicons/react/solid";

const MobileMenu = ({ navigation, user, userNavigation }) => {
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
              <div className="px-4 mx-auto mt-2 max-w-8xl sm:px-6">
                <div className="relative text-gray-400 focus-within:text-gray-500">
                  <label htmlFor="search" className="sr-only">
                    Search all inboxes
                  </label>
                  <input
                    id="search"
                    type="search"
                    placeholder="Search all inboxes"
                    className="block w-full pl-10 placeholder-gray-500 border-gray-300 rounded-md focus:border-blue-600 focus:ring-blue-600"
                  />
                  <div className="absolute inset-y-0 left-0 flex items-center justify-center pl-3">
                    <SearchIcon className="w-5 h-5" aria-hidden="true" />
                  </div>
                </div>
              </div>
              <div className="px-2 py-3 mx-auto max-w-8xl sm:px-4">
                {navigation &&
                  navigation.map((item) => (
                    <Fragment key={item.name}>
                      <a
                        href={item.href}
                        className="block px-3 py-2 text-base font-medium text-gray-900 rounded-md hover:bg-gray-100"
                      >
                        {item.name}
                      </a>
                      {item.children.map((child) => (
                        <a
                          key={child.name}
                          href={child.href}
                          className="block py-2 pl-5 pr-3 text-base font-medium text-gray-500 rounded-md hover:bg-gray-100"
                        >
                          {child.name}
                        </a>
                      ))}
                    </Fragment>
                  ))}
              </div>
              <div className="pt-4 pb-3 border-t border-gray-200">
                <div className="flex items-center px-4 mx-auto max-w-8xl sm:px-6">
                  <div className="flex-shrink-0">
                    <img
                      className="w-10 h-10 rounded-full"
                      src={user && user.imageUrl}
                      alt="Fitness Time User Avatar"
                    />
                  </div>
                  <div className="flex-1 min-w-0 ml-3">
                    <div className="text-base font-medium text-gray-800 truncate">
                      {user && user.name}
                    </div>
                    <div className="text-sm font-medium text-gray-500 truncate">
                      {user && user.email}
                    </div>
                  </div>
                  <a
                    href="#"
                    className="flex-shrink-0 p-2 ml-auto text-gray-400 bg-white hover:text-gray-500"
                  >
                    <span className="sr-only">View notifications</span>
                    <BellIcon className="w-6 h-6" aria-hidden="true" />
                  </a>
                </div>
                <div className="px-2 mx-auto mt-3 space-y-1 max-w-8xl sm:px-4">
                  {userNavigation &&
                    userNavigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className="block px-3 py-2 text-base font-medium text-gray-900 rounded-md hover:bg-gray-50"
                      >
                        {item.name}
                      </a>
                    ))}
                </div>
              </div>
            </nav>
          </Transition.Child>
        </Dialog>
      </Transition.Root>{" "}
    </div>
  );
};

export default MobileMenu;
