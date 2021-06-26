import { Fragment, useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { useSession } from "next-auth/client";

import { Dialog, Menu, Transition } from "@headlessui/react";
import {
  ArchiveIcon as ArchiveIconSolid,
  ChevronDownIcon,
  HomeIcon,
  ClipboardIcon,
  LightningBoltIcon,
  CogIcon,
  KeyIcon,
} from "@heroicons/react/solid";
import {
  ArchiveIcon as ArchiveIconOutline,
  MenuIcon,
} from "@heroicons/react/outline";

import DashboardNoSession from "./components/dashboard/DashboardNoSession";
import DashboardLogo from "./components/dashboard/DashboardLogo";
import DashboardDesktopNavigation from "./components/dashboard/DashboardDesktopNavigation";
import DashboardMobileMenu from "./components/dashboard/DashboardMobileMenu";
import DashboardHomeMainContent from "./components/dashboard/DashboardHomeMainContent";
import DashboardSideBar from "./components/dashboard/DashboardSideBar";

const user = {
  name: "Whitney Francis",
  email: "whitneyfrancis@example.com",
  imageUrl:
    "https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
};
const navigation = [
  {
    name: "Inboxes",
    href: "#",
    children: [
      { name: "Technical Support", href: "#" },
      { name: "Sales", href: "#" },
      { name: "General", href: "#" },
    ],
  },
  { name: "Reporting", href: "#", children: [] },
  { name: "Settings", href: "#", children: [] },
];

const sidebarNavigation = [
  { name: "Home", icon: HomeIcon, current: true },
  { name: "Weekly Plans", icon: ClipboardIcon, current: false },
  { name: "Workouts", icon: LightningBoltIcon, current: false },
  { name: "Settings", icon: CogIcon, current: false },
  { name: "Admin Settings", icon: KeyIcon, current: false },
];
const userNavigation = [
  { name: "Your Profile", href: "#" },
  { name: "Sign out", href: "#" },
];

export default function Dashboard() {
  const [session, loading] = useSession();
  const [content, setContent] = useState();
  const router = useRouter();
  const [language] = useState(
    typeof window !== "undefined" && localStorage.getItem("language") === null
      ? "DE"
      : typeof window !== "undefined" && localStorage.getItem("language")
  );
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("/api/dashboard");
      const json = await res.json();

      if (json.content) {
        setContent(json.content);
      }
    };
    fetchData();
  }, [session]);

  useEffect(() => {
    /* if (!session) {
      router.push("/");
    } */
  }, []);

  if (typeof window !== "undefined" && loading) return null;

  if (!session) {
    return (
      <main>
        <DashboardNoSession />
      </main>
    );
  }
  return (
    <main>
      <div>
        {language &&
        typeof window !== "undefined" &&
        localStorage.getItem("language") === null
          ? localStorage.setItem("language", language)
          : ""}
        {/* <h1>DASHBOARD HIER</h1>
        <p>{content}</p> */}
        <div className="flex flex-col h-screen overflow-hidden bg-gray-900">
          {/* Top nav*/}
          <header className="relative flex items-center flex-shrink-0 h-16 bg-gray-800">
            {/* Logo area */}
            <DashboardLogo />
            {/* Picker area */}
            <div className="mx-auto lg:hidden">
              <div className="relative">
                <label htmlFor="inbox-select" className="sr-only">
                  Choose inbox
                </label>
                <select
                  id="inbox-select"
                  className="pl-3 pr-8 text-base font-medium text-white border-0 rounded-md bg-none focus:ring-2 focus:ring-blue-600"
                >
                  <option value="/open">Open</option>
                  <option value="/archived">Archived</option>
                  <option value="/assigned">Assigned</option>
                  <option value="/flagged">Flagged</option>
                  <option value="/spam">Spam</option>
                  <option value="/drafts">Drafts</option>
                </select>
                <div className="absolute inset-y-0 right-0 flex items-center justify-center pr-2 pointer-events-none">
                  <ChevronDownIcon
                    className="w-5 h-5 text-gray-500"
                    aria-hidden="true"
                  />
                </div>
              </div>
            </div>

            {/* Menu button area */}
            <div className="absolute inset-y-0 right-0 flex items-center pr-4 sm:pr-6 lg:hidden">
              {/* Mobile menu button */}
              <button
                type="button"
                className="inline-flex items-center justify-center p-2 -mr-2 text-whiterounded-md hover:text-white hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-600"
                onClick={() => setOpen(true)}
              >
                <span className="sr-only">Open main menu</span>
                <MenuIcon className="block w-6 h-6" aria-hidden="true" />
              </button>
            </div>

            {/* Desktop nav area */}
            <DashboardDesktopNavigation navigation={navigation} user={user} />

            {/* Mobile menu, show/hide this `div` based on menu open/closed state */}
            <DashboardMobileMenu
              open={open}
              setOpen={setOpen}
              navigation={navigation}
              user={user}
              userNavigation={userNavigation}
            />
          </header>

          {/* Bottom section */}
          <div className="flex flex-1 min-h-0 overflow-hidden">
            {/* Narrow sidebar*/}
            <DashboardSideBar sidebarNavigation={sidebarNavigation} />

            {/* Main area */}
            <main className="flex-1 min-w-0 xl:flex">
              <section
                aria-labelledby="message-heading"
                className="flex flex-col flex-1 h-full min-w-0 overflow-hidden xl:order-last"
              >
                {/* Top section */}
                {/* <div className="flex-shrink-0 bg-white border-b border-gray-200">
                  <div className="flex flex-col justify-center h-16">
                    <div className="px-4 sm:px-6 lg:px-8">
                      <div className="flex justify-between py-3">
                        <div>
                          <span className="relative z-0 inline-flex rounded-md shadow-sm sm:shadow-none sm:space-x-3">
                            <span className="inline-flex sm:shadow-sm">
                              <button
                                type="button"
                                className="relative inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-300 rounded-l-md hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-1 focus:ring-blue-600 focus:border-blue-600"
                              >
                                <ReplyIcon
                                  className="mr-2.5 h-5 w-5 text-gray-400"
                                  aria-hidden="true"
                                />
                                <span>Reply</span>
                              </button>
                              <button
                                type="button"
                                className="relative items-center hidden px-4 py-2 -ml-px text-sm font-medium text-gray-900 bg-white border border-gray-300 sm:inline-flex hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-1 focus:ring-blue-600 focus:border-blue-600"
                              >
                                <PencilIcon
                                  className="mr-2.5 h-5 w-5 text-gray-400"
                                  aria-hidden="true"
                                />
                                <span>Note</span>
                              </button>
                              <button
                                type="button"
                                className="relative items-center hidden px-4 py-2 -ml-px text-sm font-medium text-gray-900 bg-white border border-gray-300 sm:inline-flex rounded-r-md hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-1 focus:ring-blue-600 focus:border-blue-600"
                              >
                                <UserAddIcon
                                  className="mr-2.5 h-5 w-5 text-gray-400"
                                  aria-hidden="true"
                                />
                                <span>Assign</span>
                              </button>
                            </span>

                            <span className="hidden space-x-3 lg:flex">
                              <button
                                type="button"
                                className="relative items-center hidden px-4 py-2 -ml-px text-sm font-medium text-gray-900 bg-white border border-gray-300 rounded-md sm:inline-flex hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-1 focus:ring-blue-600 focus:border-blue-600"
                              >
                                <ArchiveIconSolid
                                  className="mr-2.5 h-5 w-5 text-green-500"
                                  aria-hidden="true"
                                />
                                <span>Archive</span>
                              </button>
                              <button
                                type="button"
                                className="relative items-center hidden px-4 py-2 -ml-px text-sm font-medium text-gray-900 bg-white border border-gray-300 rounded-md sm:inline-flex hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-1 focus:ring-blue-600 focus:border-blue-600"
                              >
                                <FolderDownloadIcon
                                  className="mr-2.5 h-5 w-5 text-green-500"
                                  aria-hidden="true"
                                />
                                <span>Move</span>
                              </button>
                            </span>

                            <Menu
                              as="span"
                              className="relative block -ml-px sm:shadow-sm lg:hidden"
                            >
                              {({ open }) => (
                                <>
                                  <div>
                                    <Menu.Button className="relative inline-flex items-center px-2 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-300 rounded-r-md hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-1 focus:ring-blue-600 focus:border-blue-600 sm:rounded-md sm:px-3">
                                      <span className="sr-only sm:hidden">
                                        More
                                      </span>
                                      <span className="hidden sm:inline">
                                        More
                                      </span>
                                      <ChevronDownIcon
                                        className="w-5 h-5 text-gray-400 sm:ml-2 sm:-mr-1"
                                        aria-hidden="true"
                                      />
                                    </Menu.Button>
                                  </div>

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
                                      className="absolute right-0 mt-2 origin-top-right bg-white rounded-md shadow-lg w-36 ring-1 ring-black ring-opacity-5 focus:outline-none"
                                    >
                                      <div className="py-1">
                                        <Menu.Item>
                                          {({ active }) => (
                                            <a
                                              href="#"
                                              className={classNames(
                                                active
                                                  ? "bg-gray-100 text-gray-900"
                                                  : "text-gray-700",
                                                "block sm:hidden px-4 py-2 text-sm"
                                              )}
                                            >
                                              Note
                                            </a>
                                          )}
                                        </Menu.Item>
                                        <Menu.Item>
                                          {({ active }) => (
                                            <a
                                              href="#"
                                              className={classNames(
                                                active
                                                  ? "bg-gray-100 text-gray-900"
                                                  : "text-gray-700",
                                                "block sm:hidden px-4 py-2 text-sm"
                                              )}
                                            >
                                              Assign
                                            </a>
                                          )}
                                        </Menu.Item>
                                        <Menu.Item>
                                          {({ active }) => (
                                            <a
                                              href="#"
                                              className={classNames(
                                                active
                                                  ? "bg-gray-100 text-gray-900"
                                                  : "text-gray-700",
                                                "block px-4 py-2 text-sm"
                                              )}
                                            >
                                              Archive
                                            </a>
                                          )}
                                        </Menu.Item>
                                        <Menu.Item>
                                          {({ active }) => (
                                            <a
                                              href="#"
                                              className={classNames(
                                                active
                                                  ? "bg-gray-100 text-gray-900"
                                                  : "text-gray-700",
                                                "block px-4 py-2 text-sm"
                                              )}
                                            >
                                              Move
                                            </a>
                                          )}
                                        </Menu.Item>
                                      </div>
                                    </Menu.Items>
                                  </Transition>
                                </>
                              )}
                            </Menu>
                          </span>
                        </div>

                        <nav aria-label="Pagination">
                          <span className="relative z-0 inline-flex rounded-md shadow-sm">
                            <a
                              href="#"
                              className="relative inline-flex items-center px-4 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-l-md hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-1 focus:ring-blue-600 focus:border-blue-600"
                            >
                              <span className="sr-only">Next</span>
                              <ChevronUpIcon
                                className="w-5 h-5"
                                aria-hidden="true"
                              />
                            </a>
                            <a
                              href="#"
                              className="relative inline-flex items-center px-4 py-2 -ml-px text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-r-md hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-1 focus:ring-blue-600 focus:border-blue-600"
                            >
                              <span className="sr-only">Previous</span>
                              <ChevronDownIcon
                                className="w-5 h-5"
                                aria-hidden="true"
                              />
                            </a>
                          </span>
                        </nav>
                      </div>
                    </div>
                  </div>
                </div> */}

                <DashboardHomeMainContent
                  username="Sascha Majewsky"
                  signUpDate={"26.06.2021"}
                />
              </section>

              {/* <DashboardLeftSideBar messages={messages} /> */}
            </main>
          </div>
        </div>
      </div>
    </main>
  );
}
