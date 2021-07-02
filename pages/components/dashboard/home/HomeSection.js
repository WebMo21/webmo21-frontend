import React from "react";
import Link from "next/link";
import { useSession } from "next-auth/client";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "moment/locale/de";
import "react-big-calendar/lib/addons/dragAndDrop/styles.css";
import "react-big-calendar/lib/css/react-big-calendar.css";
import withDragAndDrop from "react-big-calendar/lib/addons/dragAndDrop";

import {
  ClockIcon,
  CheckCircleIcon,
  CalendarIcon,
  ChartBarIcon,
} from "@heroicons/react/solid";

const HomeSection = ({ signUpDate, language }) => {
  const [session, loading] = useSession();

  if (language && language === "DE") {
    moment.locale("de");
  } else if (language && language === "EN") {
    moment.locale("en");
  }

  const localizer = momentLocalizer(moment);

  const myEventsList = [
    {
      start: moment().toDate(),
      end: moment().add(1, "hours").toDate(),
      title: "Testing",
    },
  ];

  const DnDCalendar = withDragAndDrop(Calendar);

  const onEventResize = (data) => {
    const { start, end } = data;
    myEventsList[0].start = start;
    myEventsList[0].end = end;
    return [...myEventsList];
  };

  const onEventDrop = (data) => console.log(data);

  const cards = [
    {
      name: `${
        language === "DE"
          ? "Absolvierte Trainingswochen"
          : "Training Weeks Completed"
      }`, // Fetch users weekly workout plans and count each where there is a workout and is minimum last week+
      icon: CalendarIcon,
      amount: "2" + ` ${language === "DE" ? "Wochen" : "Weeks"}`,
    },
    {
      name: `${language === "DE" ? "Trainingszeit" : "Training Time"}`,
      icon: ClockIcon,
      amount: "3" + ` ${language === "DE" ? "Stunden" : "Hours"}`,
    },
    {
      name: `${language === "DE" ? "Bewegtes Gewicht" : "Moved Weight"}`,
      icon: ChartBarIcon,
      amount: "2,5" + ` ${language === "DE" ? "Tonnen" : "Tons"}`,
    },
  ];

  return (
    <div
      className="relative z-0 flex-1 pb-8 overflow-y-auto"
      data-aos="fade-up"
    >
      <div className="bg-gray-900">
        <div className="px-4 sm:px-6 lg:max-w-6xl lg:mx-auto lg:px-8">
          <div className="p-8 py-6 mt-8 bg-gray-700 rounded-lg md:flex md:items-center md:justify-between">
            <div className="flex-1 min-w-0">
              <div className="flex items-center ">
                <img
                  className="w-20 h-20 rounded-full select-none iphone:hidden"
                  src={
                    session && session.user && session.user.image
                      ? session.user.image
                      : "https://i.pravatar.cc/300"
                  }
                  alt="Fitness Time User Avatar"
                />
                <div>
                  <div className="flex items-center">
                    <img
                      className="w-20 h-20 rounded-full select-none sm:hidden"
                      src={
                        session && session.user && session.user.image
                          ? session.user.image
                          : "https://i.pravatar.cc/300"
                      }
                      alt="Fitness Time User Avatar"
                    />
                    <h1 className="ml-3 text-3xl font-bold leading-7 text-white select-none sm:leading-9 sm:truncate">
                      {language && language === "DE" ? "Willkommen" : "Welcome"}
                      ,{" "}
                      {session
                        ? session.user
                          ? session.user.name
                            ? session.user.name
                            : session.user.email
                          : "NoUserOnSession"
                        : "NoSessionTestName"}
                    </h1>
                  </div>
                  <dl className="flex flex-col mt-6 sm:ml-3 sm:mt-1 sm:flex-row sm:flex-wrap">
                    <dt className="sr-only">Membership</dt>
                    <dd className="flex items-center font-medium text-gray-400 select-none text-md sm:mr-6">
                      <ClockIcon
                        className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400"
                        aria-hidden="true"
                      />
                      {language && language === "DE"
                        ? "Dabei seit "
                        : "Joined at "}
                      {session && moment(session.user.createdAt).format("L")}
                    </dd>
                    <dt className="sr-only">Account status</dt>
                    <dd className="flex items-center mt-3 font-medium text-gray-400 capitalize select-none ttext-md sm:mr-6 sm:mt-0">
                      <CheckCircleIcon
                        className="flex-shrink-0 mr-1.5 h-5 w-5 text-green-400"
                        aria-hidden="true"
                      />
                      {language && language === "DE"
                        ? "Verifizierter Nutzer"
                        : "Verified User"}
                    </dd>
                  </dl>
                </div>
              </div>
            </div>
            <div className="flex mt-6 space-x-3 md:mt-0 md:ml-4 iphone:justify-center">
              <div>
                <Link href="/logout">
                  <a className="inline-block p-2 ml-5 font-semibold text-white bg-red-400 border border-transparent border-green-500 rounded cursor-pointer select-none hover:bg-red-300 iphone:!w-40 iphone:text-center">
                    {language && language === "DE" ? "Ausloggen" : "SignOut"}
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-8">
        <div className="max-w-6xl px-4 mx-auto sm:px-6 lg:px-8">
          <h2 className="pb-2 text-2xl font-medium leading-6 text-white select-none">
            {language && language === "DE"
              ? "Deine Trainingsfakten"
              : "Your Fitness Facts"}
          </h2>
          <div className="grid grid-cols-1 gap-5 mt-2 sm:grid-cols-2 lg:grid-cols-3">
            {/* Card */}
            {cards.map((card) => (
              <div
                key={card.name}
                className="overflow-hidden transition duration-300 ease-in transform bg-gray-700 border-green-500 rounded-lg shadow hover:scale-105"
              >
                <div className="p-5">
                  <div className="flex items-center">
                    <div className="flex-shrink-0">
                      <card.icon
                        className="w-6 h-6 text-gray-400"
                        aria-hidden="true"
                      />
                    </div>
                    <div className="flex-1 w-0 ml-5">
                      <dl>
                        <dt className="text-lg font-medium text-gray-400 truncate select-none">
                          {card.name}
                        </dt>
                        <dd>
                          <div className="text-xl font-medium text-green-500 select-none">
                            {card.amount}
                          </div>
                        </dd>
                      </dl>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Calendar Section */}
        <div>
          <h2 className="max-w-6xl px-4 pb-4 mx-auto mt-8 text-2xl font-medium leading-6 text-white select-none sm:px-6 lg:px-8">
            {language && language === "DE"
              ? "Dein Trainingskalender"
              : "Your Training Calendar"}
          </h2>

          {/* Activity list (smallest breakpoint only) */}

          <div className="max-w-6xl p-4 mx-auto text-gray-300 rounded-lg bg-gray-700/25 sm:px-6 lg:max-w-6xl lg:mx-auto lg:px-8">
            <DnDCalendar
              defaultDate={moment().toDate()}
              defaultView="month"
              events={myEventsList}
              localizer={localizer}
              onEventDrop={onEventDrop}
              onEventResize={onEventResize}
              resizable
              style={{ height: "100vh" }}
              messages={{
                next: `${language && language === "DE" ? "Weiter" : "Next"}`,
                allDay: `${
                  language && language === "DE" ? "Ganzer Tag" : "All Day"
                }`,
                previous: `${
                  language && language === "DE" ? "Zurück" : "Previous"
                }`,
                today: `${language && language === "DE" ? "Heute" : "Today"}`,
                month: `${language && language === "DE" ? "Monat" : "Month"}`,
                week: `${language && language === "DE" ? "Woche" : "Week"}`,
                day: `${language && language === "DE" ? "Tag" : "Day"}`,
                agenda: `${
                  language && language === "DE" ? "Übersicht" : "Agenda"
                }`,
                date: `${language && language === "DE" ? "Datum" : "Date"}`,
                time: `${language && language === "DE" ? "Zeit" : "Time"}`,
                event: `${language && language === "DE" ? "Event" : "Event"}`,
              }}
            />
          </div>
        </div>

        {/* History Section */}
        <div>
          <h2 className="max-w-6xl px-4 pb-2 mx-auto mt-8 text-2xl font-medium leading-6 text-white select-none sm:px-6 lg:px-8">
            {language && language === "DE"
              ? "Deine Trainingshistorie"
              : "Your Training History"}
          </h2>

          {/* Activity list (smallest breakpoint only) */}
          <div className="flex-col p-8 py-6 mt-3 mb-12 text-gray-300 bg-gray-700 rounded-md select-none sm:px-6 lg:max-w-6xl lg:mx-auto lg:px-10 md:flex md:items-center md:justify-between">
            {/* <div className="flex-row justify-between mx-auto md:flex items-between">
              <div className="p-8">Test1.1</div>
              <div className="p-8">Test1.2</div>
              <div className="p-8">Test1.3</div>
            </div>
            <div>Test2</div>
            <div>Test3</div> */}
            Test
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeSection;
