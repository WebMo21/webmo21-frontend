import React from "react";

const AdminSection = ({ language }) => {
  return (
    <div
      className="relative z-0 flex-1 pb-8 overflow-y-auto"
      data-aos="fade-up"
    >
      <div className="bg-gray-900">
        <div className="px-4 sm:px-6 lg:max-w-6xl lg:mx-auto lg:px-8">
          <h2 className="max-w-6xl pl-1 mx-auto mt-8 text-2xl font-medium leading-6 text-white select-none">
            {language === "DE" ? "Admin Übersicht" : "Admin Overview"}
          </h2>
          <div className="p-8 py-6 mt-5 bg-gray-700 rounded-lg md:flex md:items-center md:justify-between">
            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-center h-12 cursor-pointer group"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminSection;