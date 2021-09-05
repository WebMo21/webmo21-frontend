import React, { useState } from "react";
import { format } from "date-fns";

import UserInactiveModal from "./UserInactiveModal";

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
  refetchUsers,
  language,
}) => {
  const [showSetUserInactiveModal, setShowSetUserInactiveModal] =
    useState(false);

  return (
    <div
      className="flex transition duration-300 ease-in transform bg-gray-600 rounded-lg hover:scale-105 iphone:flex-col m-2 iphone:items-center tabletpro:m-4 tabletpro:mx-44 tablet:!mx-4 w-5/12"
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
      <div className="p-6 lg:flex-auto iphone:!pb-4 truncate">
        <div className="flex flex-wrap tablet:justify-flex-end iphone:justify-center">
          <div className="flex-col iphone:text-center">
            <h1 className="text-2xl font-bold text-green-500 truncate select-none iphone:mx-auto">
              {name}
            </h1>
          </div>
        </div>
        <div className="flex mb-6 iphone:justify-center">
          <div className="flex-col iphone:items-center iphone:justify-center iphone-ml-left">
            <div className="text-gray-400 select-none iphone:text-center">
              {language === "DE" ? "User ID" : "User ID"}{" "}
              <span className="font-bold">{id}</span>
            </div>
            <div className="text-gray-400 select-none iphone:text-center">
              {active ? (
                <div className="font-bold text-green-500">AKTIV</div>
              ) : (
                <div className="font-bold text-red-500">INAKTIV</div>
              )}
            </div>
            <div className="text-gray-400 select-none iphone:text-center">
              <div className="text-gray-400 select-none iphone:text-center">
                {language === "DE" ? "Rolle" : "Role"}{" "}
                <span className="font-bold">{role}</span>
              </div>
            </div>
            <div className="text-gray-400 select-none iphone:text-center">
              <div className="text-gray-400 select-none iphone:text-center">
                <span className="text-sm font-bold">{email}</span>
              </div>
            </div>
            <div className="text-gray-400 select-none iphone:text-center">
              <div className="text-gray-400 select-none text-md iphone:text-center">
                {language === "DE" ? "Dabei seit" : "Joined"}{" "}
                <span className="font-bold">
                  {format(new Date(createdAt), "dd.MM.yyyy")}
                </span>
              </div>
            </div>
            <div className="text-gray-400 select-none iphone:text-center">
              <div className="text-gray-400 select-none text-md iphone:text-center">
                {language === "DE" ? "Email Verifiziert" : "Email verified"}{" "}
                <span className="font-bold">
                  {emailVerified ? (
                    <span className="font-bold">Ja</span>
                  ) : (
                    <span className="font-bold">Nein</span>
                  )}
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
          </div>
          <div className="ml-auto text-sm text-gray-500 underline"></div>
        </div>
        <div className="flex flex-auto space-x-3 iphone:justify-center">
          <div>
            <a
              /*  onClick={() => {
                setShowEditWorkoutModal(true);
                setEditWorkoutData(workout);
              }} */
              className="inline-block p-2 font-semibold text-white bg-yellow-600 border border-transparent border-yellow-500 rounded cursor-pointer select-none text-md hover:bg-yellow-500"
            >
              {language && language === "DE" ? "Editieren" : "Edit User"}
            </a>
          </div>
          <div>
            {!active ? (
              <a
                /*  onClick={() => {
                  setShowDeleteWorkoutModal(true);
                }} */
                className="inline-block p-2 font-semibold text-white bg-red-500 border border-transparent border-red-500 rounded cursor-pointer select-none text-md hover:bg-red-400"
              >
                {language && language === "DE" ? "Inaktivieren" : "Inactivate"}
              </a>
            ) : (
              <a
                /* onClick={() => {
                  setShowDeleteWorkoutModal(true);
                }} */
                className="inline-block p-2 font-semibold text-white bg-green-500 border border-transparent border-green-500 rounded cursor-pointer select-none text-md hover:bg-green-400"
              >
                {language && language === "DE" ? "Aktivieren" : "Activate"}
              </a>
            )}
          </div>
        </div>
        {showSetUserInactiveModal && (
          <UserInactiveModal
            language={language}
            showSetUserInactiveModal={showSetUserInactiveModal}
            setShowSetUserInactiveModal={setShowSetUserInactiveModal}
            refetchWorkouts={refetchWorkouts}
          />
        )}
      </div>
    </div>
  );
};

export default UserCard;
