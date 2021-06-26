import React from "react";
import Link from "next/link";

import {
  CashIcon,
  ScaleIcon,
  ChevronRightIcon,
  ClockIcon,
  CheckCircleIcon,
  CalendarIcon,
  ChartBarIcon,
} from "@heroicons/react/solid";

const transactions = [
  {
    id: 1,
    name: "Payment to Molly Sanders",
    href: "#",
    amount: "$20,000",
    currency: "USD",
    status: "success",
    date: "July 11, 2020",
    datetime: "2020-07-11",
  },
  // More transactions...
];

const statusStyles = {
  success: "bg-green-100 text-green-800",
  processing: "bg-yellow-100 text-yellow-800",
  failed: "bg-gray-100 text-gray-800",
};

const cards = [
  {
    name: "Absolvierte Trainingswochen",
    icon: CalendarIcon,
    amount: "2" + " Wochen",
  },
  { name: "Trainingszeit", icon: ClockIcon, amount: "3" + " Stunden" },
  { name: "Bewegtes Gewicht", icon: ChartBarIcon, amount: "2,5" + " Tonnen" },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const DashboardHomeMainContent = ({ username, email, signUpDate }) => {
  return (
    <main className="relative z-0 flex-1 pb-8 overflow-y-auto">
      {/* Page header */}
      <div className="bg-gray-900">
        <div className="px-4 sm:px-6 lg:max-w-6xl lg:mx-auto lg:px-8">
          <div className="p-8 py-6 mt-8 bg-gray-700 rounded-md md:flex md:items-center md:justify-between">
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
          <h2 className="max-w-6xl px-4 pb-2 mx-auto mt-8 text-2xl font-medium leading-6 text-white sm:px-6 lg:px-8">
            Deine Trainingskalender
          </h2>

          {/* Activity list (smallest breakpoint only) */}
          <div className="shadow sm:hidden">
            <ul className="mt-2 overflow-hidden divide-y divide-gray-200 shadow sm:hidden">
              {transactions.map((transaction) => (
                <li key={transaction.id}>
                  <a
                    href={transaction.href}
                    className="block px-4 py-4 bg-white hover:bg-gray-50"
                  >
                    <span className="flex items-center space-x-4">
                      <span className="flex flex-1 space-x-2 truncate">
                        <CashIcon
                          className="flex-shrink-0 w-5 h-5 text-gray-400"
                          aria-hidden="true"
                        />
                        <span className="flex flex-col text-sm text-gray-500 truncate">
                          <span className="truncate">{transaction.name}</span>
                          <span>
                            <span className="font-medium text-gray-900">
                              {transaction.amount}
                            </span>{" "}
                            {transaction.currency}
                          </span>
                          <time dateTime={transaction.datetime}>
                            {transaction.date}
                          </time>
                        </span>
                      </span>
                      <ChevronRightIcon
                        className="flex-shrink-0 w-5 h-5 text-gray-400"
                        aria-hidden="true"
                      />
                    </span>
                  </a>
                </li>
              ))}
            </ul>

            <nav
              className="flex items-center justify-between px-4 py-3 bg-white border-t border-gray-200"
              aria-label="Pagination"
            >
              <div className="flex justify-between flex-1">
                <a
                  href="#"
                  className="relative inline-flex items-center px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:text-gray-500"
                >
                  Previous
                </a>
                <a
                  href="#"
                  className="relative inline-flex items-center px-4 py-2 ml-3 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:text-gray-500"
                >
                  Next
                </a>
              </div>
            </nav>
          </div>

          {/* Activity table (small breakpoint and up) */}
          <div className="sm:block">
            <div className="max-w-6xl px-4 mx-auto sm:px-6 lg:px-8">
              <div className="flex flex-col mt-2">
                <div className="min-w-full overflow-hidden overflow-x-auto align-middle shadow sm:rounded-lg">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead>
                      <tr>
                        <th className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase bg-gray-50">
                          Transaction
                        </th>
                        <th className="px-6 py-3 text-xs font-medium tracking-wider text-right text-gray-500 uppercase bg-gray-50">
                          Amount
                        </th>
                        <th className="hidden px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase bg-gray-50 md:block">
                          Status
                        </th>
                        <th className="px-6 py-3 text-xs font-medium tracking-wider text-right text-gray-500 uppercase bg-gray-50">
                          Date
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {transactions.map((transaction) => (
                        <tr key={transaction.id} className="bg-white">
                          <td className="w-full px-6 py-4 text-sm text-gray-900 max-w-0 whitespace-nowrap">
                            <div className="flex">
                              <a
                                href={transaction.href}
                                className="inline-flex space-x-2 text-sm truncate group"
                              >
                                <CashIcon
                                  className="flex-shrink-0 w-5 h-5 text-gray-400 group-hover:text-gray-500"
                                  aria-hidden="true"
                                />
                                <p className="text-gray-500 truncate group-hover:text-gray-900">
                                  {transaction.name}
                                </p>
                              </a>
                            </div>
                          </td>
                          <td className="px-6 py-4 text-sm text-right text-gray-500 whitespace-nowrap">
                            <span className="font-medium text-gray-900">
                              {transaction.amount}{" "}
                            </span>
                            {transaction.currency}
                          </td>
                          <td className="hidden px-6 py-4 text-sm text-gray-500 whitespace-nowrap md:block">
                            <span
                              className={classNames(
                                statusStyles[transaction.status],
                                "inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium capitalize"
                              )}
                            >
                              {transaction.status}
                            </span>
                          </td>
                          <td className="px-6 py-4 text-sm text-right text-gray-500 whitespace-nowrap">
                            <time dateTime={transaction.datetime}>
                              {transaction.date}
                            </time>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                  {/* Pagination */}
                  <nav
                    className="flex items-center justify-between px-4 py-3 bg-white border-t border-gray-200 sm:px-6"
                    aria-label="Pagination"
                  >
                    <div className="sm:block">
                      <p className="text-sm text-gray-700">
                        Showing <span className="font-medium">1</span> to{" "}
                        <span className="font-medium">10</span> of{" "}
                        <span className="font-medium">20</span> results
                      </p>
                    </div>
                    <div className="flex justify-between flex-1 sm:justify-end">
                      <a
                        href="#"
                        className="relative inline-flex items-center px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50"
                      >
                        Previous
                      </a>
                      <a
                        href="#"
                        className="relative inline-flex items-center px-4 py-2 ml-3 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50"
                      >
                        Next
                      </a>
                    </div>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* History Section */}
        <div>
          <h2 className="max-w-6xl px-4 pb-2 mx-auto mt-8 text-2xl font-medium leading-6 text-white sm:px-6 lg:px-8">
            Deine Historie
          </h2>

          {/* Activity list (smallest breakpoint only) */}
          <div className="shadow sm:hidden">
            <ul className="mt-2 overflow-hidden divide-y divide-gray-200 shadow sm:hidden">
              {transactions.map((transaction) => (
                <li key={transaction.id}>
                  <a
                    href={transaction.href}
                    className="block px-4 py-4 bg-white hover:bg-gray-50"
                  >
                    <span className="flex items-center space-x-4">
                      <span className="flex flex-1 space-x-2 truncate">
                        <CashIcon
                          className="flex-shrink-0 w-5 h-5 text-gray-400"
                          aria-hidden="true"
                        />
                        <span className="flex flex-col text-sm text-gray-500 truncate">
                          <span className="truncate">{transaction.name}</span>
                          <span>
                            <span className="font-medium text-gray-900">
                              {transaction.amount}
                            </span>{" "}
                            {transaction.currency}
                          </span>
                          <time dateTime={transaction.datetime}>
                            {transaction.date}
                          </time>
                        </span>
                      </span>
                      <ChevronRightIcon
                        className="flex-shrink-0 w-5 h-5 text-gray-400"
                        aria-hidden="true"
                      />
                    </span>
                  </a>
                </li>
              ))}
            </ul>

            <nav
              className="flex items-center justify-between px-4 py-3 bg-white border-t border-gray-200"
              aria-label="Pagination"
            >
              <div className="flex justify-between flex-1">
                <a
                  href="#"
                  className="relative inline-flex items-center px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:text-gray-500"
                >
                  Previous
                </a>
                <a
                  href="#"
                  className="relative inline-flex items-center px-4 py-2 ml-3 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:text-gray-500"
                >
                  Next
                </a>
              </div>
            </nav>
          </div>

          {/* Activity table (small breakpoint and up) */}
          <div className="sm:block">
            <div className="max-w-6xl px-4 mx-auto sm:px-6 lg:px-8">
              <div className="flex flex-col mt-2">
                <div className="min-w-full overflow-hidden overflow-x-auto align-middle shadow sm:rounded-lg">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead>
                      <tr>
                        <th className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase bg-gray-50">
                          Transaction
                        </th>
                        <th className="px-6 py-3 text-xs font-medium tracking-wider text-right text-gray-500 uppercase bg-gray-50">
                          Amount
                        </th>
                        <th className="hidden px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase bg-gray-50 md:block">
                          Status
                        </th>
                        <th className="px-6 py-3 text-xs font-medium tracking-wider text-right text-gray-500 uppercase bg-gray-50">
                          Date
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {transactions.map((transaction) => (
                        <tr key={transaction.id} className="bg-white">
                          <td className="w-full px-6 py-4 text-sm text-gray-900 max-w-0 whitespace-nowrap">
                            <div className="flex">
                              <a
                                href={transaction.href}
                                className="inline-flex space-x-2 text-sm truncate group"
                              >
                                <CashIcon
                                  className="flex-shrink-0 w-5 h-5 text-gray-400 group-hover:text-gray-500"
                                  aria-hidden="true"
                                />
                                <p className="text-gray-500 truncate group-hover:text-gray-900">
                                  {transaction.name}
                                </p>
                              </a>
                            </div>
                          </td>
                          <td className="px-6 py-4 text-sm text-right text-gray-500 whitespace-nowrap">
                            <span className="font-medium text-gray-900">
                              {transaction.amount}{" "}
                            </span>
                            {transaction.currency}
                          </td>
                          <td className="hidden px-6 py-4 text-sm text-gray-500 whitespace-nowrap md:block">
                            <span
                              className={classNames(
                                statusStyles[transaction.status],
                                "inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium capitalize"
                              )}
                            >
                              {transaction.status}
                            </span>
                          </td>
                          <td className="px-6 py-4 text-sm text-right text-gray-500 whitespace-nowrap">
                            <time dateTime={transaction.datetime}>
                              {transaction.date}
                            </time>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                  {/* Pagination */}
                  <nav
                    className="flex items-center justify-between px-4 py-3 bg-white border-t border-gray-200 sm:px-6"
                    aria-label="Pagination"
                  >
                    <div className="sm:block">
                      <p className="text-sm text-gray-700">
                        Showing <span className="font-medium">1</span> to{" "}
                        <span className="font-medium">10</span> of{" "}
                        <span className="font-medium">20</span> results
                      </p>
                    </div>
                    <div className="flex justify-between flex-1 sm:justify-end">
                      <a
                        href="#"
                        className="relative inline-flex items-center px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50"
                      >
                        Previous
                      </a>
                      <a
                        href="#"
                        className="relative inline-flex items-center px-4 py-2 ml-3 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50"
                      >
                        Next
                      </a>
                    </div>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default DashboardHomeMainContent;
