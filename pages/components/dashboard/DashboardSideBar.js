import React from "react";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const DashboardSideBar = ({ sidebarNavigation }) => {
  return (
    <nav
      aria-label="Sidebar"
      className="hidden lg:block lg:flex-shrink-0 lg:bg-gray-800 lg:overflow-y-auto"
    >
      <div className="relative flex flex-col w-20 p-3 space-y-3 cursor-pointer">
        {sidebarNavigation.map((item) => (
          <a
            key={item.name}
            href={item.href}
            title={item.name}
            className={classNames(
              item.current
                ? "bg-gray-700 text-green-400"
                : "text-green-300 hover:bg-gray-700",
              "flex-shrink-0 inline-flex items-center justify-center h-14 w-14 rounded-lg"
            )}
          >
            <span className="sr-only">{item.name}</span>
            <item.icon className="w-6 h-6" aria-hidden="true" />
          </a>
        ))}
      </div>
    </nav>
  );
};

export default DashboardSideBar;
