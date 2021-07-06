import React from "react";
import Link from "next/link";

const NavbarLogo = () => {
  return (
    <div className="absolute inset-y-0 left-0 lg:static lg:flex-shrink-0">
      <Link href="/">
        <a className="flex items-center justify-center w-20 h-16 bg-[#10b981] bg-cyan-400 lg:w-20">
          <img
            className="w-auto h-12"
            src="/logos/logo_white_large-fitness-time.png"
            alt="Fitness Time Logo"
          />
        </a>
      </Link>
    </div>
  );
};

export default NavbarLogo;
