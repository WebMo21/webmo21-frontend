import React, { useState } from "react";

import DeleteWorkoutModal from "./DeleteWorkoutModal";

const WorkoutCard = ({
  id,
  name,
  repetition_count,
  duration_in_seconds,
  equipment_weight_in_kilo,
  language,
  muscle_group,
  setShowEditWorkoutModal,
  setEditWorkoutData,
  workout,
  badge,
  findMuscleGroup,
  gender,
  reFetchWorkouts,
  admin,
}) => {
  const [showDeleteWorkoutModal, setShowDeleteWorkoutModal] = useState(false);

  return (
    <div
      className="flex transition duration-300 ease-in transform bg-gray-700 rounded-lg hover:scale-105 iphone:flex-col iphone:items-center tabletpro:m-4 tabletpro:mx-44 tablet:!mx-4"
      key={id}
    >
      <div className="relative flex-none w-48 ml-2 iphone:mt-4">
        <img
          src={findMuscleGroup(
            gender,
            muscle_group,
            language,
            "image",
            "woman"
          )}
          alt="muscle view"
          className="object-contain w-full h-full rounded-l select-none "
        />
      </div>
      <div className="p-6 lg:flex-auto iphone:!pb-4 truncate">
        <div className="flex flex-wrap tablet:justify-flex-end iphone:justify-center">
          <div className="flex-col iphone:text-center">
            <span
              className={` ${
                badge === "Individuell" || badge === "Custom"
                  ? "bg-green-500"
                  : "bg-yellow-200 text-yellow-800"
              } inline-flex items-center px-2 py-1 mt-2 text-xs font-medium bg-green-100 rounded opacity-60 select-none`}
              style={{ height: "1.5rem" }}
            >
              {badge}
            </span>
            <h1 className="text-2xl font-bold text-green-500 truncate select-none iphone:mx-auto">
              {name}
            </h1>
          </div>

          <div className="flex-none w-full mt-2 text-lg font-medium text-gray-300">
            <div className="flex select-none iphone:justify-center">
              {repetition_count && parseInt(repetition_count) > 0 ? (
                <img
                  src="./icons/repeat.png"
                  alt="repeat icon"
                  className="object-contain w-5 h-full mt-1 mr-3 rounded-l"
                />
              ) : (
                ""
              )}
              {duration_in_seconds && parseInt(duration_in_seconds) > 0 ? (
                <img
                  src="./icons/clock.png"
                  alt="clock icon"
                  className="object-contain w-5 h-full mt-1 mr-3 rounded-l select-none"
                />
              ) : (
                ""
              )}
              <div className="select-none">
                {language === "DE"
                  ? repetition_count && parseInt(repetition_count) > 0
                    ? `${parseInt(repetition_count)} Wiederholungen`
                    : `${parseInt(duration_in_seconds) / 60} Minuten`
                  : repetition_count && parseInt(repetition_count) > 0
                  ? `${parseInt(repetition_count)} Repeats`
                  : `${parseInt(duration_in_seconds) / 60} Minutes`}
              </div>
            </div>
            <div className="text-lg font-medium text-gray-300">
              <div className="flex select-none iphone:justify-center iphone:mr-14">
                {equipment_weight_in_kilo &&
                parseInt(equipment_weight_in_kilo) > 0 ? (
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
                ) : (
                  ""
                )}

                <div className="select-none">
                  {equipment_weight_in_kilo &&
                  parseInt(equipment_weight_in_kilo) > 0
                    ? `${language === "DE" ? "Jeweils " : "Each "}` +
                      equipment_weight_in_kilo +
                      " kg"
                    : ""}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex mt-4 mb-6 iphone:justify-center">
          <div className="flex-col iphone:items-center iphone:justify-center iphone-ml-left">
            <div className="text-gray-400 select-none iphone:text-center">
              {language === "DE" ? "Muskelgruppe" : "Muscle Group"}
            </div>
            <div className="text-gray-400 select-none iphone:text-center">
              {findMuscleGroup(gender, muscle_group, language)}
            </div>
          </div>
          <div className="ml-auto text-sm text-gray-500 underline"></div>
        </div>
        {badge === "Individuell" || badge === "Custom" || admin === "yes" ? (
          <div className="flex mb-4 space-x-3 text-sm font-medium">
            <div className="flex flex-auto space-x-3 iphone:justify-center">
              <div>
                <a
                  onClick={() => {
                    setShowEditWorkoutModal(true);
                    setEditWorkoutData(workout);
                  }}
                  className="inline-block p-2 text-lg font-semibold text-white bg-yellow-600 border border-transparent border-yellow-500 rounded cursor-pointer select-none hover:bg-yellow-500"
                >
                  {language && language === "DE"
                    ? "Bearbeiten"
                    : "Edit Workout"}
                </a>
              </div>
              <div>
                <a
                  onClick={() => {
                    setShowDeleteWorkoutModal(true);
                  }}
                  className="inline-block p-2 text-lg font-semibold text-white bg-red-500 border border-transparent border-red-500 rounded cursor-pointer select-none hover:bg-red-400"
                >
                  {language && language === "DE" ? "Löschen" : "Delete"}
                </a>
              </div>
              {showDeleteWorkoutModal && (
                <DeleteWorkoutModal
                  language={language}
                  setShowDeleteWorkoutModal={setShowDeleteWorkoutModal}
                  workout={workout}
                  showDeleteWorkoutModal={showDeleteWorkoutModal}
                  reFetchWorkouts={reFetchWorkouts}
                />
              )}
            </div>
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default WorkoutCard;
