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
                src="./icons/add.png"
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
                      <div className="flex">
                        {workout.repetition_count && (
                          <img
                            src="./icons/repeat.png"
                            alt
                            className="object-contain w-5 h-full mt-1 mr-3 rounded-l"
                          />
                        )}
                        {workout.duration_in_seconds && (
                          <img
                            src="./icons/clock.png"
                            alt
                            className="object-contain w-5 h-full mt-1 mr-3 rounded-l"
                          />
                        )}
                        {workout.repetition_count
                          ? workout.repetition_count +
                            ` ${
                              language === "DE" ? "Wiederholungen" : "Repeats"
                            }`
                          : parseInt(workout.duration_in_seconds) / 60 +
                            ` ${language === "DE" ? "Minuten" : "Minutes"}`}
                      </div>
                      <div class="text-lg font-medium text-gray-300">
                        <div className="flex">
                          {workout.equipment_weight_in_kilo && (
                            <svg
                              className="w-6 h-6 mt-1 mr-2"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="#10b981"
                              viewBox="0 0 512 512"
                              enableBackground="new 0 0 512 512"
                              width="512"
                              height="512"
                            >
                              <g>
                                <path
                                  d="m30.905 301.538h-20.603c-5.69 0-10.302-4.612-10.302-10.302v-61.811c0-5.69 4.612-10.302 10.302-10.302h20.604v82.415z"
                                  fill="#10b981"
                                />
                                <path
                                  d="m159.923 233.846h192.154v52.97h-192.154z"
                                  fill="#10b981"
                                />
                                <path
                                  d="m301.843 233.846h50.234v52.97h-50.234z"
                                  fill="#10b981"
                                />
                                <g>
                                  <path
                                    d="m81.714 371.512h-35.932c-8.216 0-14.876-6.66-14.876-14.876v-201.272c0-8.216 6.66-14.876 14.876-14.876h35.932c8.216 0 14.876 6.66 14.876 14.876v201.272c0 8.216-6.66 14.876-14.876 14.876z"
                                    fill="#546e7a"
                                  />
                                  <path
                                    d="m81.263 140.488h-32.842c8.465 0 15.326 6.465 15.326 14.439v202.146c0 7.974-6.862 14.439-15.326 14.439h32.842c8.465 0 15.326-6.465 15.326-14.439v-202.146c.001-7.975-6.861-14.439-15.326-14.439z"
                                    fill="#455a64"
                                  />
                                  <path
                                    d="m466.259 371.512h-35.655c-8.193 0-14.835-6.642-14.835-14.835v-201.354c0-8.193 6.642-14.835 14.835-14.835h35.655c8.193 0 14.835 6.642 14.835 14.835v201.354c.001 8.193-6.641 14.835-14.835 14.835z"
                                    fill="#546e7a"
                                  />
                                  <path
                                    d="m465.852 140.488h-32.663c8.418 0 15.243 6.465 15.243 14.439v202.146c0 7.974-6.824 14.439-15.243 14.439h32.663c8.418 0 15.243-6.465 15.243-14.439v-202.146c0-7.975-6.825-14.439-15.243-14.439z"
                                    fill="#455a64"
                                  />
                                  <path
                                    d="m156.575 404h-41.181c-12.524 0-22.677-10.153-22.677-22.677v-250.646c0-12.524 10.153-22.677 22.677-22.677h41.181c12.524 0 22.677 10.153 22.677 22.677v250.646c0 12.524-10.153 22.677-22.677 22.677z"
                                    fill="#546e7a"
                                  />
                                  <path
                                    d="m156.588 108h-30.905c12.517 0 22.664 10.159 22.664 22.69v250.62c0 12.531-10.147 22.69-22.664 22.69h30.905c12.517 0 22.664-10.159 22.664-22.69v-250.62c0-12.531-10.147-22.69-22.664-22.69z"
                                    fill="#455a64"
                                  />
                                  <path
                                    d="m396.607 404h-41.181c-12.524 0-22.677-10.153-22.677-22.677v-250.646c0-12.524 10.153-22.677 22.677-22.677h41.181c12.524 0 22.677 10.153 22.677 22.677v250.646c0 12.524-10.153 22.677-22.677 22.677z"
                                    fill="#546e7a"
                                  />
                                  <path
                                    d="m396.62 108h-30.905c12.517 0 22.664 10.159 22.664 22.69v250.62c0 12.531-10.147 22.69-22.664 22.69h30.905c12.517 0 22.664-10.159 22.664-22.69v-250.62c0-12.531-10.147-22.69-22.664-22.69z"
                                    fill="#455a64"
                                  />
                                </g>
                                <path
                                  d="m501.698 301.538h-20.604v-82.414h20.604c5.69 0 10.302 4.612 10.302 10.302v61.811c0 5.689-4.612 10.301-10.302 10.301z"
                                  fill="#10b981"
                                />
                              </g>
                            </svg>
                          )}

                          {workout.equipment_weight_in_kilo &&
                          parseInt(workout.equipment_weight_in_kilo) > 0
                            ? `${language === "DE" ? "Jeweils " : "Each "}` +
                              workout.equipment_weight_in_kilo +
                              " kg"
                            : ""}
                        </div>
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
