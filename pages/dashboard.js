import { Fragment, useState, useEffect } from "react";
import Link from "next/link";
import Head from "next/head";

import { useRouter } from "next/router";
import { useSession } from "next-auth/client";

import {
  ArchiveIcon as ArchiveIconSolid,
  HomeIcon,
  ClipboardIcon,
  LightningBoltIcon,
  CogIcon,
  KeyIcon,
} from "@heroicons/react/solid";

import NavbarLogo from "./components/dashboard/navbar/NavbarLogo";
import Navigation from "./components/dashboard/navbar/Navigation";
import MobileMenu from "./components/dashboard/navbar/MobileMenu";
import DashboardSideBar from "./components/dashboard/DashboardSideBar";
import HomeSection from "./components/dashboard/home/HomeSection";
import PlansSection from "./components/dashboard/plans/PlansSection";
import WorkoutsSection from "./components/dashboard/workouts/WorkoutsSection";
import SettingsSection from "./components/dashboard/settings/SettingsSection";
import AdminSection from "./components/dashboard/admin/AdminSection";

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

const sidebarNavigation = [
  {
    name: "home",
    title: "Übersicht",
    englishTitle: "Overview",
    icon: HomeIcon,
    current: true,
  },
  {
    name: "plans",
    title: "Trainingspläne",
    englishTitle: "Workout Plans",
    icon: ClipboardIcon,
    current: false,
  },
  {
    name: "workouts",
    title: "Übungen",
    englishTitle: "Workouts",
    icon: LightningBoltIcon,
    current: false,
  },
  {
    name: "settings",
    title: "Einstellungen",
    englishTitle: "Settings",
    icon: CogIcon,
    current: false,
  },
];

export default function Dashboard() {
  const [session, loading] = useSession();
  const [language, setLanguage] = useState(
    typeof window !== "undefined" && localStorage.getItem("language") === null
      ? "DE"
      : typeof window !== "undefined" && localStorage.getItem("language")
  );

  const [activeSideBarSection, setActiveSideBarSection] = useState("home");

  if (
    session &&
    session.user.role === "admin" &&
    !sidebarNavigation.find((x) => x.name === "admin")
  )
    sidebarNavigation.push({
      name: "admin",
      title: "Admin Übersicht",
      englishTitle: "Admin Overview",
      icon: KeyIcon,
      current: false,
    });

  if (typeof window !== "undefined" && loading) return null;

  if (!session) {
    return (
      <div>
        <h1>Bitte logge dich zunächst ein!</h1>
        <Link href="/">
          <a className="inline-block p-4 mt-5 font-semibold text-white bg-green-500 border border-green-500 rounded cursor-pointer select-none hover:bg-green-400">
            {language === "DE"
              ? "Zurück zu Fitness Time!"
              : "Back to Fitness Time"}
          </a>
        </Link>
      </div>
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
      <div>
        {language &&
        typeof window !== "undefined" &&
        localStorage.getItem("language") === null
          ? localStorage.setItem("language", language)
          : ""}
        {console.log("SESSION", session)}
        <div className="flex flex-col h-screen overflow-hidden bg-gray-900">
          <header className="relative flex items-center flex-shrink-0 h-16 bg-gray-800">
            <NavbarLogo />

            {/* Desktop nav area */}
            <Navigation
              navigation={navigation}
              user={user}
              title={`Fitness Time - ${
                activeSideBarSection === "home"
                  ? language === "DE"
                    ? "Übersicht"
                    : "Overview"
                  : activeSideBarSection === "plans"
                  ? language === "DE"
                    ? "Trainingspläne"
                    : "Workout Plans"
                  : activeSideBarSection === "workouts"
                  ? language === "DE"
                    ? "Übungen"
                    : "Workouts"
                  : activeSideBarSection === "settings"
                  ? language === "DE"
                    ? "Einstellungen"
                    : "Settings"
                  : language === "DE"
                  ? "Admin Einstellungen"
                  : "Admin Settings"
              }`}
            />
            <div className="relative z-30 inline-block pt-1 mb-3 ml-1 mr-20 select-none lg:mr-8 group tablet:mt-2">
              <button className="inline-flex items-center px-3 py-2 font-semibold text-green-600 bg-transparent border border-green-500 rounded iphone:text-xs iphone:mt-1 iphone:hidden">
                <span className="mr-1">{language}</span>
                <svg
                  className="w-4 h-4 fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                </svg>
              </button>

              <ul className="absolute hidden pt-1 text-gray-700 group-hover:block iphone:w-20">
                {language === "DE" ? (
                  <li className="">
                    <a
                      onClick={() => {
                        setLanguage("EN");
                        localStorage.setItem("language", "EN");
                      }}
                      className="block w-16 px-4 py-2 whitespace-no-wrap bg-green-500 rounded hover:bg-green-400 iphone:text-xs iphone:w-10"
                      href="#"
                    >
                      EN
                    </a>
                  </li>
                ) : (
                  <li className="">
                    <a
                      onClick={() => {
                        setLanguage("DE");
                        localStorage.setItem("language", "DE");
                      }}
                      className="block w-16 px-4 py-2 whitespace-no-wrap bg-green-500 rounded hover:bg-green-400 iphone:text-xs iphone:w-10"
                      href="#"
                    >
                      DE
                    </a>
                  </li>
                )}
              </ul>
            </div>

            <MobileMenu
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
              language={language}
            />

            {/* Main Page Content */}
            <div className="flex-1 min-w-0 xl:flex" data-aos="fade-in">
              <section
                aria-labelledby="message-heading"
                className="flex flex-col flex-1 h-full min-w-0 overflow-hidden xl:order-last"
              >
                {activeSideBarSection === "home" && (
                  <HomeSection signUpDate={"26.06.2021"} language={language} />
                )}
                {activeSideBarSection === "plans" && (
                  <PlansSection language={language} />
                )}
                {activeSideBarSection === "workouts" && (
                  <WorkoutsSection language={language} />
                )}
                {activeSideBarSection === "settings" && (
                  <SettingsSection language={language} />
                )}
                {activeSideBarSection === "admin" && (
                  <AdminSection language={language} />
                )}
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
