import React from "react";
import Link from "next/link";

const NavBar = () => {
  return (
    <nav className="top-0 absolute z-50 w-full flex flex-wrap items-center justify-between px-2 py-3 navbar-expand-lg">
      <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
        <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
          <div className="flex">
            <Link href="https://webmo21-frontend.vercel.app">
              <a>
                <img
                  alt="..."
                  className="h-10 max-w-10 rounded-lg shadow-lg mt-1 mr-2 cursor-pointer"
                  src="./logos/logo_small_icon_only_inverted-fitness-time.png"
                />
              </a>
            </Link>
            <Link href="https://webmo21-frontend.vercel.app">
              <a className="text-lg font-bold leading-relaxed inline-block mr-4 py-2 whitespace-no-wrap uppercase text-white cursor-pointer">
                Fitness Time
              </a>
            </Link>
          </div>
          <button
            className="cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
            type="button"
            onClick="toggleNavbar('example-collapse-navbar')"
          >
            <i className="text-white fas fa-bars" />
          </button>
        </div>
        <div
          className="lg:flex flex-grow items-center bg-white lg:bg-transparent lg:shadow-none hidden"
          id="example-collapse-navbar"
        >
          <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
            {/* Icon 1 */}
            <li className="flex items-center">
              <a
                className="lg:text-white lg:hover:text-gray-300 text-gray-800 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                href="https://github.com/WebMo21/webmo21-frontend"
                rel="noreferrer"
                target="_blank"
              >
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="#10b981"
                  viewBox="0 0 24 24"
                  enable-background="new 0 0 24 24"
                  width="512"
                  height="512"
                >
                  <path
                    d="m12 .5c-6.63 0-12 5.28-12 11.792 0 5.211 3.438 9.63 8.205 11.188.6.111.82-.254.82-.567 0-.28-.01-1.022-.015-2.005-3.338.711-4.042-1.582-4.042-1.582-.546-1.361-1.335-1.725-1.335-1.725-1.087-.731.084-.716.084-.716 1.205.082 1.838 1.215 1.838 1.215 1.07 1.803 2.809 1.282 3.495.981.108-.763.417-1.282.76-1.577-2.665-.295-5.466-1.309-5.466-5.827 0-1.287.465-2.339 1.235-3.164-.135-.298-.54-1.497.105-3.121 0 0 1.005-.316 3.3 1.209.96-.262 1.98-.392 3-.398 1.02.006 2.04.136 3 .398 2.28-1.525 3.285-1.209 3.285-1.209.645 1.624.24 2.823.12 3.121.765.825 1.23 1.877 1.23 3.164 0 4.53-2.805 5.527-5.475 5.817.42.354.81 1.077.81 2.182 0 1.578-.015 2.846-.015 3.229 0 .309.21.678.825.56 4.801-1.548 8.236-5.97 8.236-11.173 0-6.512-5.373-11.792-12-11.792z"
                    fill="#10b981"
                  />
                </svg>
                <span className="lg:hidden inline-block ml-2">Share</span>
              </a>
            </li>
            {/* Icon 2 */}
            <li className="flex items-center">
              <a
                className="lg:text-white lg:hover:text-gray-300 text-gray-800 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                href="https://twitter.com/fitnesstime"
                rel="noreferrer"
                target="_blank"
              >
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="#10b981"
                  viewBox="0 0 512 512"
                  enableBackground="new 0 0 512 512"
                  width="512"
                  height="512"
                  style={{ marginTop: "0.4rem" }}
                >
                  <path
                    d="m161.019531 416.605469c193.21875 0 298.878907-160.074219 298.878907-298.878907 0-4.546874-.09375-9.074218-.296876-13.578124 20.507813-14.828126 38.335938-33.332032 52.398438-54.394532-18.820312 8.367188-39.078125 13.996094-60.324219 16.539063 21.6875-13.007813 38.339844-33.578125 46.191407-58.101563-20.296876 12.03125-42.773438 20.773438-66.703126 25.496094-19.167968-20.417969-46.460937-33.1875-76.679687-33.1875-58.007813 0-105.050781 47.042969-105.050781 105.03125 0 8.246094.921875 16.261719 2.722656 23.953125-87.304688-4.394531-164.722656-46.191406-216.527344-109.753906-9.019531 15.523437-14.222656 33.558593-14.222656 52.800781 0 36.441406 18.546875 68.617188 46.746094 87.4375-17.234375-.53125-33.421875-5.261719-47.574219-13.136719-.015625.441407-.015625.871094-.015625 1.339844 0 50.875 36.207031 93.351563 84.277344 102.976563-8.828125 2.402343-18.117188 3.695312-27.699219 3.695312-6.757813 0-13.34375-.664062-19.746094-1.894531 13.375 41.738281 52.15625 72.109375 98.132813 72.960937-35.953125 28.179688-81.246094 44.964844-130.46875 44.964844-8.46875 0-16.835938-.484375-25.058594-1.453125 46.488281 29.796875 101.695312 47.1875 161.023438 47.1875"
                    fill="#10b981"
                  />
                </svg>
                <span className="lg:hidden inline-block ml-2">Tweet</span>
              </a>
            </li>
            {/* Icon 3 */}
            <li className="flex items-center">
              <a
                className="lg:text-white lg:hover:text-gray-300 text-gray-800 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                href="https://instagram.com/fitnesstime"
                rel="noreferrer"
                target="_blank"
              >
                <svg
                  className="h-8 w-8"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="#10b981"
                  viewBox="0 0 24 24"
                  enable-background="new 0 0 24 24"
                  width="512"
                  height="512"
                >
                  <path
                    d="m1.5 1.633c-1.886 1.959-1.5 4.04-1.5 10.362 0 5.25-.916 10.513 3.878 11.752 1.497.385 14.761.385 16.256-.002 1.996-.515 3.62-2.134 3.842-4.957.031-.394.031-13.185-.001-13.587-.236-3.007-2.087-4.74-4.526-5.091-.559-.081-.671-.105-3.539-.11-10.173.005-12.403-.448-14.41 1.633z"
                    fill="url(#SVGID_1_)"
                  />
                  <path
                    d="m11.998 3.139c-3.631 0-7.079-.323-8.396 3.057-.544 1.396-.465 3.209-.465 5.805 0 2.278-.073 4.419.465 5.804 1.314 3.382 4.79 3.058 8.394 3.058 3.477 0 7.062.362 8.395-3.058.545-1.41.465-3.196.465-5.804 0-3.462.191-5.697-1.488-7.375-1.7-1.7-3.999-1.487-7.374-1.487zm-.794 1.597c7.574-.012 8.538-.854 8.006 10.843-.189 4.137-3.339 3.683-7.211 3.683-7.06 0-7.263-.202-7.263-7.265 0-7.145.56-7.257 6.468-7.263zm5.524 1.471c-.587 0-1.063.476-1.063 1.063s.476 1.063 1.063 1.063 1.063-.476 1.063-1.063-.476-1.063-1.063-1.063zm-4.73 1.243c-2.513 0-4.55 2.038-4.55 4.551s2.037 4.55 4.55 4.55 4.549-2.037 4.549-4.55-2.036-4.551-4.549-4.551zm0 1.597c3.905 0 3.91 5.908 0 5.908-3.904 0-3.91-5.908 0-5.908z"
                    fill="#10b981"
                  />
                </svg>
                <span className="lg:hidden inline-block ml-2">Profile</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
