import { Fragment, useState, useEffect } from "react";
import Link from "next/link";
import Head from "next/head";

import { useRouter } from "next/router";
import { useSession } from "next-auth/client";

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

let sidebarNavigation = [
  { name: "home", title: "Übersicht", icon: HomeIcon, current: true },
  {
    name: "plans",
    title: "Trainingspläne",
    icon: ClipboardIcon,
    current: false,
  },
  {
    name: "workouts",
    title: "Übungen",
    icon: LightningBoltIcon,
    current: false,
  },
  { name: "settings", title: "Einstellungen", icon: CogIcon, current: false },
  {
    name: "admin",
    title: "Admin Einstellungen",
    icon: KeyIcon,
    current: false,
  },
];
const userNavigation = [
  { name: "Your Profile", href: "#" },
  { name: "Sign out", href: "#" },
];

const setSideBarNavigationActive = (name) =>
  sidebarNavigation.map((navigation) => {
    navigation.name === name
      ? (navigation.current = true)
      : (navigation.current = false);
  });

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
  const [activeSideBarSection, setActiveSideBarSection] = useState("home");

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
    <div>
      <Head>
        <title>
          Fitness Time -{" "}
          {language === "DE" ? "Dein Workout Planer" : "Your Workout Planer"}
        </title>
        <link rel="icon" href="./favicons/favicon.ico" />
      </Head>
      <main>
        <div>
          {language &&
          typeof window !== "undefined" &&
          localStorage.getItem("language") === null
            ? localStorage.setItem("language", language)
            : ""}
          <div className="flex flex-col h-screen overflow-hidden bg-gray-900">
            <header className="relative flex items-center flex-shrink-0 h-16 bg-gray-800">
              <DashboardLogo />
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

              {/* Desktop nav area */}
              <DashboardDesktopNavigation
                navigation={navigation}
                user={user}
                title={`Fitness Time - ${
                  activeSideBarSection === "home"
                    ? "Übersicht"
                    : activeSideBarSection === "plans"
                    ? "Trainingspläne"
                    : activeSideBarSection === "workouts"
                    ? "Übungen"
                    : activeSideBarSection === "settings"
                    ? "Einstellungen"
                    : "Admin Einstellungen"
                }`}
              />

              {/* Mobile menu, show/hide this `div` based on menu open/closed state */}
              <DashboardMobileMenu
                open={open}
                setOpen={setOpen}
                navigation={navigation}
                user={user}
                userNavigation={userNavigation}
              />
            </header>

            {/* Page Content */}
            <div className="flex flex-1 min-h-0 overflow-hidden">
              {/* Narrow sidebar*/}
              <DashboardSideBar
                sidebarNavigation={sidebarNavigation}
                setActiveSideBarSection={setActiveSideBarSection}
                activeSideBarSection={activeSideBarSection}
                setSideBarNavigationActive={setSideBarNavigationActive}
              />

              {/* Main Page Content */}
              <main className="flex-1 min-w-0 xl:flex" data-aos="fade-in">
                <section
                  aria-labelledby="message-heading"
                  className="flex flex-col flex-1 h-full min-w-0 overflow-hidden xl:order-last"
                >
                  {activeSideBarSection === "home" && (
                    <DashboardHomeMainContent
                      username="Sascha Majewsky"
                      signUpDate={"26.06.2021"}
                    />
                  )}
                </section>
              </main>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
