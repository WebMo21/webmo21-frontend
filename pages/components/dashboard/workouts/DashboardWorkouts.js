import React, { useState, useEffect } from "react";
import { useSession } from "next-auth/client";

import { PlusIcon } from "@heroicons/react/solid";

const DashboardWorkouts = ({ language }) => {
  const [session, loading] = useSession();
  const [fetchedWorkouts, setFetchedWorkouts] = useState([]);

  const fetchUserWorkouts = () =>
    fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}` +
        `/workouts/userid/${session.user.id}`,
      {
        method: "get",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      }
    )
      .then((response) =>
        response
          .json()
          .then((data) => setFetchedWorkouts(data.workouts))
          .catch((e) => console.log(e))
      )
      .catch((e) => console.log(e));

  const createNewWorkout = () => {
    console.log("Create Workout");
  };

  useEffect(() => {
    fetchUserWorkouts();
  }, []);

  return (
    <div
      className="relative z-0 flex-1 pb-8 overflow-y-auto"
      data-aos="fade-up"
    >
      <div className="bg-gray-900">
        <div className="px-4 sm:px-6 lg:max-w-6xl lg:mx-auto lg:px-8">
          <h2 className="max-w-6xl pb-1 pl-1 mx-auto mt-8 mb-4 text-2xl font-medium leading-6 text-white select-none">
            {language === "DE" ? "Deine Übungen" : "Your Workouts"}
          </h2>

          <div className="grid grid-cols-2 gap-6 tablet:grid-cols-1 auto-rows-fr">
            <div className="flex items-center justify-center transition duration-300 ease-in transform bg-gray-700 rounded-lg cursor-pointer hover:scale-105 iphone:m-4 tabletpro:m-4">
              <img
                src="./icons/icon-add.png"
                alt
                className="object-cover w-24 h-24 rounded-l"
              />
            </div>
            {fetchedWorkouts.map((workout) => (
              <div className="flex transition duration-300 ease-in transform bg-gray-700 rounded-lg hover:scale-105 iphone:flex-col iphone:items-center tabletpro:m-4">
                <div className="relative flex-none w-48 iphone:mt-4">
                  <img
                    src="./muscle-groups/muscle-trapezius-woman-cutout.png"
                    alt
                    className="object-contain w-full h-full rounded-l"
                  />
                </div>
                <div className="p-6 lg:flex-auto iphone:!pb-4">
                  <div className="flex flex-wrap tablet:justify-flex-end">
                    <h1 className="text-2xl font-bold text-green-500 iphone:mx-auto">
                      {workout.name}
                    </h1>
                    <div className="flex-none w-full mt-2 text-lg font-medium text-gray-300">
                      <div>
                        {workout.repetition_count
                          ? workout.repetition_count +
                            ` ${
                              language === "DE" ? "Wiederholungen" : "Repeats"
                            }`
                          : parseInt(workout.duration_in_seconds) / 60 +
                            ` ${language === "DE" ? "Minuten" : "Minutes"}`}
                      </div>
                      <div class="text-lg font-medium text-gray-300">
                        {workout.equipment_weight_in_kilo &&
                        parseInt(workout.equipment_weight_in_kilo) > 0
                          ? `${language === "DE" ? "Jeweils " : "Each "}` +
                            workout.equipment_weight_in_kilo +
                            " kg"
                          : ""}
                      </div>
                    </div>
                  </div>
                  <div className="flex items-baseline mt-4 mb-6">
                    <div className="flex-col">
                      <div className="text-gray-400">
                        {language === "DE" ? "Muskelgruppe" : "Muscle Group"}
                      </div>
                      <div className="text-gray-400">
                        {workout.muscle_group}
                      </div>
                    </div>
                    <div className="ml-auto text-sm text-gray-500 underline"></div>
                  </div>
                  <div className="flex mb-4 space-x-3 text-sm font-medium">
                    <div className="flex flex-auto space-x-3">
                      <div>
                        <a className="inline-block p-2 text-lg font-semibold text-white bg-yellow-600 border border-transparent border-yellow-500 rounded cursor-pointer select-none hover:bg-yellow-500">
                          {language && language === "DE"
                            ? "Übung bearbeiten"
                            : "Edit Workout"}
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardWorkouts;
