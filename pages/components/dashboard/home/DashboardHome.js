import React from "react";
import Link from "next/link";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "moment/locale/de";
import "react-big-calendar/lib/addons/dragAndDrop/styles.css";
import "react-big-calendar/lib/css/react-big-calendar.css";
import withDragAndDrop from "react-big-calendar/lib/addons/dragAndDrop";

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

import {
  ClockIcon,
  CheckCircleIcon,
  CalendarIcon,
  ChartBarIcon,
} from "@heroicons/react/solid";

const cards = [
  {
    name: "Absolvierte Trainingswochen", // Fetch users weekly workout plans and count each where there is a workout and is minimum last week+
    icon: CalendarIcon,
    amount: "2" + " Wochen",
  },
  { name: "Trainingszeit", icon: ClockIcon, amount: "3" + " Stunden" },
  { name: "Bewegtes Gewicht", icon: ChartBarIcon, amount: "2,5" + " Tonnen" },
];

const DashboardHome = ({ username, email, signUpDate }) => {
  return (
    <main
      className="relative z-0 flex-1 pb-8 overflow-y-auto"
      data-aos="fade-up"
    >
      {/* Page header */}
      <div className="bg-gray-900">
        <div className="px-4 sm:px-6 lg:max-w-6xl lg:mx-auto lg:px-8">
          <div className="p-8 py-6 mt-8 bg-gray-700 rounded-lg md:flex md:items-center md:justify-between">
            <div className="flex-1 min-w-0">
              {/* Profile */}
              <div className="flex items-center ">
                <img
                  className="w-20 h-20 rounded-full iphone:hidden"
                  src="https://i.pravatar.cc/300"
                  alt=""
                />
                <div>
                  <div className="flex items-center">
                    <img
                      className="w-20 h-20 rounded-full sm:hidden"
                      src="https://i.pravatar.cc/300"
                      alt=""
                    />
                    <h1 className="ml-3 text-3xl font-bold leading-7 text-white sm:leading-9 sm:truncate">
                      Willkommen, {username ? username : email}
                    </h1>
                  </div>
                  <dl className="flex flex-col mt-6 sm:ml-3 sm:mt-1 sm:flex-row sm:flex-wrap">
                    <dt className="sr-only">Company</dt>
                    <dd className="flex items-center font-medium text-gray-400 text-md sm:mr-6">
                      <ClockIcon
                        className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400"
                        aria-hidden="true"
                      />
                      Dabei seit {signUpDate}
                    </dd>
                    <dt className="sr-only">Account status</dt>
                    <dd className="flex items-center mt-3 font-medium text-gray-400 capitalize ttext-md sm:mr-6 sm:mt-0">
                      <CheckCircleIcon
                        className="flex-shrink-0 mr-1.5 h-5 w-5 text-green-400"
                        aria-hidden="true"
                      />
                      Verifizierter Nutzer
                    </dd>
                  </dl>
                </div>
              </div>
            </div>
            <div className="flex mt-6 space-x-3 md:mt-0 md:ml-4">
              <Link href="/logout">
                <a
                  type="button"
                  className="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-red-500 border border-transparent rounded-md shadow-sm hover:bg-cyan-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500"
                >
                  Ausloggen
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-8">
        <div className="max-w-6xl px-4 mx-auto sm:px-6 lg:px-8">
          <h2 className="pb-2 text-2xl font-medium leading-6 text-white">
            Deine Übersicht
          </h2>
          <div className="grid grid-cols-1 gap-5 mt-2 sm:grid-cols-2 lg:grid-cols-3">
            {/* Card */}
            {cards.map((card) => (
              <div
                key={card.name}
                className="overflow-hidden bg-gray-700 border-green-500 rounded-lg shadow"
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
                        <dt className="text-lg font-medium text-gray-400 truncate">
                          {card.name}
                        </dt>
                        <dd>
                          <div className="text-xl font-medium text-green-500">
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
          <h2
            className="max-w-6xl px-4 pb-4 mx-auto mt-8 text-2xl font-medium leading-6 text-white sm:px-6 lg:px-8"
            data-aos="fade-up"
          >
            Dein Trainingskalender
          </h2>

          {/* Activity list (smallest breakpoint only) */}

          <div
            className="max-w-6xl p-4 mx-auto text-gray-300 rounded-lg bg-gray-700/25 sm:px-6 lg:max-w-6xl lg:mx-auto lg:px-8"
            data-aos="fade-up"
          >
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
                next: "Weiter",
                previous: "Zurück",
                today: "Heute",
                month: "Monat",
                week: "Woche",
                day: "Tag",
                agenda: "Übersicht",
              }}
            />
          </div>
        </div>

        {/* History Section */}
        <div>
          <h2 className="max-w-6xl px-4 pb-2 mx-auto mt-8 text-2xl font-medium leading-6 text-white sm:px-6 lg:px-8">
            Deine Historie
          </h2>

          {/* Activity list (smallest breakpoint only) */}
          <div className="flex-col p-8 py-6 mt-3 mb-12 text-gray-300 bg-gray-700 rounded-md sm:px-6 lg:max-w-6xl lg:mx-auto lg:px-10 md:flex md:items-center md:justify-between">
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
    </main>
  );
};

export default DashboardHome;
