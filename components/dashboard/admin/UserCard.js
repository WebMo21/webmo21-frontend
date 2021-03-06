import React from "react";
import { format } from "date-fns";
import { BadgeCheckIcon, BanIcon } from "@heroicons/react/solid";

const UserCard = ({
  active,
  createdAt,
  email,
  emailVerified,
  gender,
  id,
  image,
  name,
  role,
  username,
  language,
  callbackSetShowEditUserModal,
  callbackSetActiveStatus,
  callbackSetEditUserData,
}) => {
  return (
    <div
      className="flex w-5/12 m-2 transition duration-300 ease-in transform bg-gray-600 rounded-lg tabletfullsize hover:scale-105 iphone:flex-col iphone:items-center"
      key={id}
      title={name}
    >
      <div className="relative flex-none w-48 iphone:mt-4">
        <img
          src={image}
          alt="muscle view"
          className="object-contain w-full h-full rounded-l select-none "
        />
      </div>
      <div className="p-2 lg:flex-auto iphone:!pb-4 truncate">
        <div className="flex flex-wrap tablet:justify-flex-end iphone:justify-center">
          <div className="flex-col iphone:text-center">
            <h1 className="text-xl font-bold text-green-500 truncate select-none iphone:mx-auto">
              {name}
            </h1>
          </div>
        </div>
        <div className="flex flex-col justify-items-stretch">
          <div className="text-gray-400 select-none iphone:text-center">
            <div className="text-gray-400 select-none iphone:text-center">
              <div className="flex text-sm">
                <div>
                  {language === "DE" ? "User ID" : "User ID"}{" "}
                  <span className="font-bold">{id}</span>
                </div>
                <div className="ml-2">
                  {language === "DE" ? "Rolle" : "Role"}{" "}
                  <span className="font-bold">{role}</span>
                </div>
                <div className="ml-1 text-sm text-gray-400 select-none iphone:text-center">
                  {active ? (
                    <div className="font-bold text-green-500">
                      {language === "DE" ? "AKTIV" : "ACTIVE"}
                    </div>
                  ) : (
                    <div className="font-bold text-red-500">
                      {language === "DE" ? "INAKTIV" : "INACTIVE"}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
          <div className="text-gray-400 select-none iphone:text-center">
            <div className="text-gray-400 select-none iphone:text-center">
              <div className="flex">
                <span className="text-xs font-bold">{email}</span>
                <div className="ml-1">
                  {emailVerified ? (
                    <BadgeCheckIcon
                      className="flex-shrink-0 mr-1.5 h-4 w-4 text-green-400"
                      aria-hidden="true"
                    />
                  ) : (
                    <BanIcon
                      className="flex-shrink-0 mr-1.5 h-4 w-4 text-red-400"
                      aria-hidden="true"
                    />
                  )}
                </div>
              </div>
            </div>
          </div>
          <div className="text-gray-400 select-none iphone:text-center">
            <div className="text-gray-400 select-none text-md iphone:text-center">
              {language === "DE" ? "Beitritt" : "Joined"}{" "}
              <span className="font-bold">
                {format(new Date(createdAt), "dd.MM.yyyy")}
              </span>
            </div>
          </div>
          <div className="text-gray-400 select-none iphone:text-center">
            <div className="text-gray-400 select-none iphone:text-center">
              {language === "DE" ? "Geschlecht" : "Gender"}{" "}
              <span className="font-bold">{gender}</span>
            </div>
          </div>
          <div className="text-gray-400 select-none iphone:text-center">
            <div className="text-gray-400 select-none iphone:text-center">
              {username ? (
                <div>
                  Username <span className="font-bold">{username}</span>
                </div>
              ) : (
                ""
              )}
            </div>
          </div>
          <div
            className={`${
              username ? "" : "mt-5"
            } flex flex-auto space-x-3 iphone:justify-center`}
          >
            <div>
              <a
                onClick={() => {
                  callbackSetShowEditUserModal(true);
                  callbackSetEditUserData({
                    active,
                    create_at: createdAt,
                    email,
                    email_verified: emailVerified,
                    gender,
                    id,
                    image,
                    name,
                    role,
                    username,
                  });
                }}
                className="inline-block p-2 font-semibold text-white bg-yellow-600 border border-transparent border-yellow-500 rounded cursor-pointer select-none text-md hover:bg-yellow-500"
              >
                {language && language === "DE" ? "Editieren" : "Edit User"}
              </a>
            </div>
            <div>
              {active ? (
                <a
                  onClick={() => callbackSetActiveStatus(id, active)}
                  className="inline-block p-2 font-semibold text-white bg-red-500 border border-transparent border-red-500 rounded cursor-pointer select-none text-md hover:bg-red-400"
                >
                  {language && language === "DE"
                    ? "Inaktivieren"
                    : "Inactivate"}
                </a>
              ) : (
                <a
                  onClick={() => callbackSetActiveStatus(id, active)}
                  className="inline-block p-2 font-semibold text-white bg-green-500 border border-transparent border-green-500 rounded cursor-pointer select-none text-md hover:bg-green-400"
                >
                  {language && language === "DE" ? "Aktivieren" : "Activate"}
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
