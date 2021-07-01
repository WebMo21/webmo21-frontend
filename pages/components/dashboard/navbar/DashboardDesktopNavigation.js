import React from "react";

import {
  ArchiveIcon as ArchiveIconSolid,
  SearchIcon,
} from "@heroicons/react/solid";

const DashboardDesktopNavigation = ({ title }) => {
  return (
    <div className="flex items-center justify-between flex-1 min-w-0">
      <div className="hidden lg:min-w-0 lg:flex-1 lg:flex lg:items-center lg:justify-between">
        {title ? (
          <div
            className="inline-block py-2 ml-6 text-lg font-bold leading-relaxed text-white uppercase whitespace-no-wrap cursor-pointer select-none"
            data-aos="fade-down"
          >
            {title}
          </div>
        ) : (
          <div className="relative max-w-2xl text-gray-400">
            <label htmlFor="search" className="sr-only">
              Search all inboxes
            </label>
            // TODO: THIS SHOULD BE A USEABLE SEARCHBAR ON THE WORKOUT PAGE
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
        )}
      </div>
    </div>
  );
};

export default DashboardDesktopNavigation;
