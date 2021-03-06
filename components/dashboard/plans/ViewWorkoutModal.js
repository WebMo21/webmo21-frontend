import { Fragment, useRef, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";

import { findMuscleGroup } from "../workouts/WorkoutsSection";

const EditWorkoutModal = ({
  viewWorkoutData,
  showViewWorkoutModal,
  setShowViewWorkoutModal,
  language,
  gender,
}) => {
  const cancelButtonRef = useRef(null);
  const [updatedWorkout] = useState({
    name: viewWorkoutData?.name,
    muscle_group: viewWorkoutData?.muscle_group,
    repetition_count: viewWorkoutData?.repetition_count,
    duration_in_seconds: viewWorkoutData?.duration_in_seconds,
    equipment_weight_in_kilo: viewWorkoutData?.equipment_weight_in_kilo,
    active: "none",
  });

  return (
    <Transition.Root
      show={showViewWorkoutModal ? showViewWorkoutModal : false}
      as={Fragment}
    >
      <Dialog
        as="div"
        static
        className="fixed inset-0 z-50 overflow-y-auto"
        initialFocus={cancelButtonRef}
        open={showViewWorkoutModal}
        onClose={setShowViewWorkoutModal}
      >
        <div className="flex items-center justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 transition-opacity bg-gray-500 bg-opacity-75" />
          </Transition.Child>

          <span
            className="hidden sm:inline-block sm:align-middle sm:h-screen"
            aria-hidden="true"
          >
            &#8203;
          </span>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            enterTo="opacity-100 translate-y-0 sm:scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          >
            <div
              className="inline-block px-4 pt-5 pb-4 overflow-hidden text-left align-bottom transition-all transform bg-gray-800 rounded-lg shadow-xl sm:my-8 sm:align-middle sm:max-w-lg sm:w-full sm:p-6 iphone:mt-12"
              data-aos="fade-in"
            >
              <div>
                <img
                  src={findMuscleGroup(
                    gender,
                    updatedWorkout.muscle_group,
                    language,
                    "image"
                  )}
                  alt="muscle view"
                  className="object-contain w-full h-full rounded-l tablet:!h-60 select-none"
                  data-aos="fade-down"
                />
                <div data-aos="fade-right">
                  <div className="mt-3 text-center select-none sm:mt-5">
                    <Dialog.Title
                      as="h3"
                      className="text-3xl font-bold leading-6 text-green-500 select-none"
                    ></Dialog.Title>
                    <input
                      value={updatedWorkout.name}
                      type="text"
                      id="workout-name"
                      maxLength="20"
                      disabled
                      className="border !bg-gray-700 border-transparent text-3xl font-bold !text-green-500 select-none text-center w-80 rounded-md placeholder-green-700"
                    ></input>
                  </div>
                  <div className="mt-2">
                    <div className="mx-auto my-4 w-80">
                      <label
                        htmlFor="muscle-group"
                        className="block font-medium text-center text-gray-400 select-none text-md"
                      >
                        {language === "DE" ? "Muskelgruppe" : "Musclegroup"}
                      </label>
                      <div>
                        <select
                          id="muscle-group"
                          name="muscle-group"
                          className="block w-full py-2 pl-3 pr-10 mt-1 text-base border-none rounded-md focus:outline-none sm:text-sm !bg-gray-700 text-green-500 font-bold cursor-pointer select-none"
                          disabled
                          defaultValue={findMuscleGroup(
                            gender,
                            viewWorkoutData.muscle_group,
                            language
                          )}
                        >
                          <option className="text-white bg-gray-700">
                            {language === "DE" ? "Brustmuskel" : "Chestmuscles"}
                          </option>
                          <option className="text-white bg-gray-700">
                            {language === "DE"
                              ? "Schulternmuskel"
                              : "Shoulders"}
                          </option>
                          <option className="text-white bg-gray-700">
                            {language === "DE"
                              ? "Bizepsmuskel"
                              : "Bicepsmuscles"}
                          </option>
                          <option className="text-white bg-gray-700">
                            {language === "DE"
                              ? "Trizepsmuskel"
                              : "Tricepsmuscles"}
                          </option>
                          <option className="text-white bg-gray-700">
                            {language === "DE" ? "Bauchmuskel" : "Absmuscles"}
                          </option>
                          <option className="text-white bg-gray-700">
                            {language === "DE" ? "R??ckenmuskel" : "Backmuscles"}
                          </option>
                          <option className="text-white bg-gray-700">
                            {language === "DE"
                              ? "Oberschenkelmuskel"
                              : "Quadsmuscles"}
                          </option>
                          <option className="text-white bg-gray-700">
                            {language === "DE"
                              ? "Beinbeugemuskel"
                              : "Hamsmuscles"}
                          </option>
                          <option className="text-white bg-gray-700">
                            {language === "DE"
                              ? "Wadenmuskel"
                              : "Calvesmuscles"}
                          </option>
                          <option className="text-white bg-gray-700">
                            {language === "DE"
                              ? "Ges????muskel"
                              : "Glutesmuscles"}
                          </option>
                        </select>
                      </div>
                    </div>
                    <div className="mx-auto my-4 w-80">
                      <label
                        htmlFor="price"
                        className="block font-medium text-center text-gray-400 select-none text-md"
                      >
                        {language === "DE"
                          ? "Anzahl und Art der ??bung"
                          : "Amount and type of workout"}
                      </label>
                      <div className="relative mt-1 rounded-md shadow-sm select-none">
                        <input
                          type="text"
                          name="amount-input"
                          id="amount-input"
                          maxLength="5"
                          className="block w-full pr-12 !bg-gray-700 !text-white border-gray-300 rounded-md focus:outline-none pl-7 sm:text-sm placeholder-white border-none active:outline-none"
                          placeholder="20"
                          disabled
                          value={
                            updatedWorkout.duration_in_seconds
                              ? parseInt(updatedWorkout.duration_in_seconds) /
                                60
                              : updatedWorkout.repetition_count
                          }
                          style={{ textIndent: "15px" }}
                        />
                        <div className="absolute inset-y-0 right-0 flex items-center">
                          <label htmlFor="amount" className="sr-only">
                            Amount
                          </label>
                          <select
                            id="amount"
                            name="amount"
                            disabled
                            className="block w-full py-2 pl-3 pr-10 border-none rounded-md focus:outline-none sm:text-sm !bg-gray-700 text-green-500 font-bold cursor-pointer text-sm"
                            defaultValue={
                              updatedWorkout.duration_in_seconds
                                ? language === "DE"
                                  ? "Dauer in Minuten"
                                  : "Duration in minutes"
                                : language === "DE"
                                ? "Anzahl an Wiederholungen"
                                : "Amount of workout repeats"
                            }
                          >
                            <option className="text-white bg-gray-700 ">
                              {language === "DE"
                                ? "Anzahl an Wiederholungen"
                                : "Amount of workout repeats"}
                            </option>
                            <option className="text-white bg-gray-700">
                              {language === "DE"
                                ? "Dauer in Minuten"
                                : "Duration in minutes"}
                            </option>
                          </select>
                        </div>
                      </div>
                    </div>
                    <div className="mx-auto my-4 w-80">
                      <label
                        htmlFor="weight"
                        className="block font-medium text-center text-gray-400 select-none text-md"
                      >
                        {language === "DE"
                          ? "Optionale Gewichtangabe"
                          : "Optional weight amount"}
                      </label>
                      <div className="relative mt-1 rounded-md shadow-sm">
                        <input
                          type="text"
                          name="weight"
                          id="weight"
                          maxLength="4"
                          className="block w-full pr-12 !bg-gray-700 !text-white border-gray-300 rounded-md focus:outline-none pl-7 sm:text-sm placeholder-white border-none active:outline-none select-none"
                          placeholder="0"
                          disabled
                          value={
                            updatedWorkout.equipment_weight_in_kilo
                              ? updatedWorkout.equipment_weight_in_kilo
                              : ""
                          }
                          style={{ textIndent: "15px" }}
                        />
                        <div className="absolute inset-y-0 right-0 flex items-center">
                          <label htmlFor="amount" className="sr-only">
                            Amount
                          </label>
                          <select
                            id="weight"
                            name="weight"
                            disabled
                            className="block w-full py-2 pl-3 pr-10 border-none rounded-md focus:outline-none sm:text-sm !bg-gray-700 text-green-500 font-bold cursor-pointer text-sm select-none"
                            value={
                              updatedWorkout.equipment_weight_in_kilo &&
                              updatedWorkout.equipment_weight_in_kilo > 0
                                ? language === "DE"
                                  ? "Gewicht pro Wiederholung"
                                  : "Weight per workout repeat"
                                : language === "DE"
                                ? "??bung ohne Gewichte"
                                : "Workout without weights"
                            }
                          >
                            <option className="text-white bg-gray-700">
                              {language === "DE"
                                ? "Gewicht pro Wiederholung"
                                : "Weight per workout repeat"}
                            </option>
                            <option className="text-white bg-gray-700">
                              {language === "DE"
                                ? "??bung ohne Gewichte"
                                : "Workout without weights"}
                            </option>
                          </select>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <button
                  type="button"
                  className="inline-flex justify-center w-full px-4 py-2 mt-3 text-base font-medium text-gray-700 bg-gray-300 border border-gray-300 rounded-md shadow-sm select-none hover:bg-gray-200 sm:mt-0 sm:col-start-1 sm:text-sm focus:outline-none"
                  onClick={() => setShowViewWorkoutModal(false)}
                  ref={cancelButtonRef}
                >
                  {language === "DE" ? "Schlie??en" : "Close"}
                </button>
              </div>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  );
};

export default EditWorkoutModal;
