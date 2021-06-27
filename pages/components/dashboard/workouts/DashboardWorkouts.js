import React from "react";
import { useSession } from "next-auth/client";
import { PlusIcon } from "@heroicons/react/solid";

const DashboardWorkouts = ({ language }) => {
  const [session, loading] = useSession();

  const createNewWorkout = () => {
    console.log("Create Workout Plan");
  };

  console.log("TEST: ", session);

  const fetchUserWorkouts = () => {
    if (
      contactFirstname &&
      contactLastname &&
      contactEmail &&
      contactPhone &&
      contactSubject &&
      contactMessage &&
      contactDataPrivacySwitch
    ) {
      setContactShowError(false);
      fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}` + "/womo/contact-via-email",
        {
          method: "post",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            firstname: contactFirstname,
            lastname: contactLastname,
            email: contactEmail,
            phone: contactPhone,
            subject: contactSubject,
            message: contactMessage,
          }),
        }
      ).then((response) => {
        if (response.status === 200) {
          setContactshowFailModal(false);
          setContactshowSuccessModal(true);
          redirectTimedToMainPage();
        } else {
          setContactshowSuccessModal(false);
          setContactshowFailModal(true);
        }
      });
    } else {
      setContactShowError(true);
    }
  };
  return (
    <div
      className="relative z-0 flex-1 pb-8 overflow-y-auto"
      data-aos="fade-up"
    >
      <div className="bg-gray-900">
        <div className="px-4 sm:px-6 lg:max-w-6xl lg:mx-auto lg:px-8">
          <h2 className="max-w-6xl pl-1 mx-auto mt-8 text-2xl font-medium leading-6 text-white select-none">
            {language === "DE" ? "Deine Übungen" : "Your Workouts"}
          </h2>
          <div className="p-8 py-6 mt-5 transition duration-300 ease-in transform bg-gray-700 rounded-lg cursor-pointer md:flex md:items-center md:justify-between hover:scale-105">
            <div className="flex-1 min-w-0">
              <div
                onClick={() => createNewWorkout()}
                className="flex items-center justify-center h-12 "
              >
                <PlusIcon className="w-10 h-10 text-gray-400" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardWorkouts;
