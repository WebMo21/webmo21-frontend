import React, { Fragment } from "react";

import {
  ArchiveIcon as ArchiveIconSolid,
  ChevronDownIcon,
  SearchIcon,
} from "@heroicons/react/solid";
import {
  ArchiveIcon as ArchiveIconOutline,
  BellIcon,
} from "@heroicons/react/outline";
import { Menu, Transition } from "@headlessui/react";

const DashboardDesktopNavigation = ({ navigation, user }) => {
  return (
    <div className="hidden lg:min-w-0 lg:flex-1 lg:flex lg:items-center lg:justify-between">
      <div className="flex-1 min-w-0">
        <div className="relative max-w-2xl text-gray-400">
          <label htmlFor="search" className="sr-only">
            Search all inboxes
          </label>
          <input
            id="search"
            type="search"
            placeholder="Search all inboxes"
            className="block w-full pl-12 placeholder-gray-500 bg-gray-800 outline-none sm:text-sm"
          />
          <div className="absolute inset-y-0 left-0 flex items-center justify-center pl-4 pointer-events-none">
            <SearchIcon className="w-5 h-5" aria-hidden="true" />
          </div>
        </div>
      </div>
      <div className="flex items-center flex-shrink-0 pr-4 ml-10 space-x-10">
        <nav aria-label="Global" className="flex space-x-10">
          {navigation.map((item) =>
            item.children.length ? (
              <Menu key={item.name} as="div" className="relative text-left">
                {({ open }) => (
                  <>
                    <Menu.Button className="flex items-center text-sm font-medium text-white rounded-md">
                      <span>{item.name}</span>
                      <ChevronDownIcon
                        className="w-5 h-5 ml-1 text-white"
                        aria-hidden="true"
                      />
                    </Menu.Button>

                    <Transition
                      show={open}
                      as={Fragment}
                      enter="transition ease-out duration-100"
                      enterFrom="transform opacity-0 scale-95"
                      enterTo="transform opacity-100 scale-100"
                      leave="transition ease-in duration-75"
                      leaveFrom="transform opacity-100 scale-100"
                      leaveTo="transform opacity-0 scale-95"
                    >
                      <Menu.Items
                        static
                        className="absolute right-0 z-30 w-40 mt-2 origin-top-right bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                      >
                        <div className="py-1">
                          {item.children.map((child) => (
                            <Menu.Item key={child.name}>
                              {({ active }) => (
                                <a
                                  href={child.href}
                                  className={classNames(
                                    active ? "bg-gray-100" : "",
                                    "block px-4 py-2 text-sm text-white"
                                  )}
                                >
                                  {child.name}
                                </a>
                              )}
                            </Menu.Item>
                          ))}
                        </div>
                      </Menu.Items>
                    </Transition>
                  </>
                )}
              </Menu>
            ) : (
              <a
                key={item.name}
                href={item.href}
                className="text-sm font-medium text-gray-900"
              >
                {item.name}
              </a>
            )
          )}
        </nav>
        <div className="flex items-center space-x-8">
          <span className="inline-flex">
            <a href="#" className="p-1 -mx-1 text-white bg-white rounded-ful">
              <span className="sr-only">View notifications</span>
              <BellIcon className="w-6 h-6" aria-hidden="true" />
            </a>
          </span>

          <Menu as="div" className="relative inline-block text-left">
            {({ open }) => (
              <>
                <Menu.Button className="flex text-sm bg-white rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-600">
                  <span className="sr-only">Open user menu</span>
                  <img
                    className="w-8 h-8 rounded-full"
                    src={user.imageUrl}
                    alt=""
                  />
                </Menu.Button>

                <Transition
                  show={open}
                  as={Fragment}
                  enter="transition ease-out duration-100"
                  enterFrom="transform opacity-0 scale-95"
                  enterTo="transform opacity-100 scale-100"
                  leave="transition ease-in duration-75"
                  leaveFrom="transform opacity-100 scale-100"
                  leaveTo="transform opacity-0 scale-95"
                >
                  <Menu.Items
                    static
                    className="absolute right-0 z-30 w-56 mt-2 origin-top-right bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                  >
                    <div className="py-1">
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(
                              active ? "bg-gray-100" : "",
                              "block px-4 py-2 text-sm text-white"
                            )}
                          >
                            Your Profile
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(
                              active ? "bg-gray-100" : "",
                              "block px-4 py-2 text-sm text-white"
                            )}
                          >
                            Sign Out
                          </a>
                        )}
                      </Menu.Item>
                    </div>
                  </Menu.Items>
                </Transition>
              </>
            )}
          </Menu>
        </div>
      </div>
    </div>
  );
};

export default DashboardDesktopNavigation;
