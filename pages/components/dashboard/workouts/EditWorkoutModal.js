import { Fragment, useRef, useState, useEffect } from "react";
import { Dialog, Transition } from "@headlessui/react";

const EditWorkoutModal = ({
  editWorkoutData,
  setShowEditWorkoutModal,
  showEditWorkoutModal,
  language,
  updateWorkout,
  findMuscleGroup,
}) => {
  const cancelButtonRef = useRef(null);
  const [updatedWorkout, setUpdatedWorkout] = useState({
    name: editWorkoutData?.name,
    muscle_group: editWorkoutData?.muscle_group,
    repetition_count: editWorkoutData?.repetition_count,
    duration_in_seconds: editWorkoutData?.duration_in_seconds,
    equipment_weight_in_kilo: editWorkoutData?.equipment_weight_in_kilo,
  });
  console.log("HERE", editWorkoutData);

  return (
    <Transition.Root
      show={showEditWorkoutModal ? showEditWorkoutModal : false}
      as={Fragment}
    >
      <Dialog
        as="div"
        static
        className="fixed inset-0 z-50 overflow-y-auto"
        initialFocus={cancelButtonRef}
        open={showEditWorkoutModal}
        onClose={setShowEditWorkoutModal}
      >
        {/* {console.log("WORKOUT EDIT ", editWorkoutData)} */}
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

          {/* This element is to trick the browser into centering the modal contents. */}
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
                  src="./muscle-groups/back-woman.png"
                  alt="muscle view"
                  className="object-contain w-full h-full rounded-l tablet:!h-60"
                  data-aos="fade-down"
                />
                <div data-aos="fade-right">
                  <div className="mt-3 text-center sm:mt-5">
                    <Dialog.Title
                      as="h3"
                      className="text-3xl font-bold leading-6 text-green-500 select-none"
                    ></Dialog.Title>
                    <input
                      value={updatedWorkout.name}
                      type="text"
                      id="workout-name"
                      maxLength="10"
                      onChange={(event) =>
                        setUpdatedWorkout({
                          ...updatedWorkout,
                          name: event.target.value,
                        })
                      }
                      className="border !bg-gray-700 border-transparent text-3xl font-bold !text-green-500 select-none text-center w-80 rounded-md placeholder-green-700"
                    ></input>
                  </div>
                  {/* {console.log("editworkout", editWorkoutData)} */}
                  <div className="mt-2">
                    <div className="mx-auto my-4 w-80">
                      <label
                        htmlFor="muscle-group"
                        className="block font-medium text-center text-gray-400 text-md"
                      >
                        Muskelgruppe
                      </label>
                      <div>
                        <select
                          id="muscle-group"
                          name="muscle-group"
                          className="block w-full py-2 pl-3 pr-10 mt-1 text-base border-none rounded-md focus:outline-none sm:text-sm !bg-gray-700 text-green-500 font-bold cursor-pointer"
                          defaultValue={findMuscleGroup(
                            editWorkoutData.muscle_group,
                            language
                          )}
                          onChange={(event) =>
                            setUpdatedWorkout({
                              ...updatedWorkout,
                              muscle_group: event.target.value,
                            })
                          }
                        >
                          <option className="text-white bg-gray-700">
                            {language === "DE" ? "Brustmuskel" : "Chest"}
                          </option>
                          <option className="text-white bg-gray-700">
                            {language === "DE"
                              ? "Schulternmuskel"
                              : "Shoulders"}
                          </option>
                          <option className="text-white bg-gray-700">
                            {language === "DE" ? "Bizepsmuskel" : "Biceps"}
                          </option>
                          <option className="text-white bg-gray-700">
                            {language === "DE" ? "Trizepsmuskel" : "Triceps"}
                          </option>
                          <option className="text-white bg-gray-700">
                            {language === "DE" ? "Bauchmuskel" : "Abs"}
                          </option>
                          <option className="text-white bg-gray-700">
                            {language === "DE" ? "Rückenmuskel" : "Back"}
                          </option>
                          <option className="text-white bg-gray-700">
                            {language === "DE" ? "Oberschenkelmuskel" : "Quads"}
                          </option>
                          <option className="text-white bg-gray-700">
                            {language === "DE" ? "Beinbeugemuskel" : "Hams"}
                          </option>
                          <option className="text-white bg-gray-700">
                            {language === "DE" ? "Wadenmuskel" : "Calves"}
                          </option>
                          <option className="text-white bg-gray-700">
                            {language === "DE" ? "Gesäßmuskel" : "Glutes"}
                          </option>
                        </select>
                      </div>
                    </div>
                    <div className="mx-auto my-4 w-80">
                      <label
                        htmlFor="price"
                        className="block font-medium text-center text-gray-400 text-md"
                      >
                        Anzahl und Art der Übung
                      </label>
                      <div className="relative mt-1 rounded-md shadow-sm">
                        <input
                          type="text"
                          name="amount-input"
                          id="amount-input"
                          maxLength="5"
                          className="block w-full pr-12 !bg-gray-700 !text-white border-gray-300 rounded-md focus:outline-none pl-7 sm:text-sm placeholder-white border-none active:outline-none"
                          placeholder="20"
                          style={{ textIndent: "15px" }}
                        />
                        <div className="absolute inset-y-0 right-0 flex items-center">
                          <label htmlFor="amount" className="sr-only">
                            Amount
                          </label>
                          <select
                            id="amount"
                            name="amount"
                            className="block w-full py-2 pl-3 pr-10 border-none rounded-md focus:outline-none sm:text-sm !bg-gray-700 text-green-500 font-bold cursor-pointer text-sm"
                          >
                            <option className="text-white bg-gray-700">
                              Anzahl an Wiederholungen
                            </option>
                            <option className="text-white bg-gray-700">
                              Dauer in Minuten
                            </option>
                          </select>
                        </div>
                      </div>
                    </div>
                    <div className="mx-auto my-4 w-80">
                      <label
                        htmlFor="weight"
                        className="block font-medium text-center text-gray-400 text-md"
                      >
                        Optionale Gewichtangabe
                      </label>
                      <div className="relative mt-1 rounded-md shadow-sm">
                        <input
                          type="text"
                          name="weight"
                          id="weight"
                          maxLength="4"
                          className="block w-full pr-12 !bg-gray-700 !text-white border-gray-300 rounded-md focus:outline-none pl-7 sm:text-sm placeholder-white border-none active:outline-none"
                          placeholder="0"
                          style={{ textIndent: "15px" }}
                        />
                        <div className="absolute inset-y-0 right-0 flex items-center">
                          <label htmlFor="amount" className="sr-only">
                            Amount
                          </label>
                          <select
                            id="weight"
                            name="weight"
                            className="block w-full py-2 pl-3 pr-10 border-none rounded-md focus:outline-none sm:text-sm !bg-gray-700 text-green-500 font-bold cursor-pointer text-sm"
                          >
                            <option className="text-white bg-gray-700">
                              Gewicht pro Wiederholung
                            </option>
                            <option className="text-white bg-gray-700">
                              Übung ohne Gewichte
                            </option>
                          </select>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-5 sm:mt-6 sm:grid sm:grid-cols-2 sm:gap-3 sm:grid-flow-row-dense">
                  <button
                    type="button"
                    className="inline-flex justify-center w-full px-4 py-2 text-base font-medium text-white bg-green-500 border border-transparent rounded-md shadow-sm select-none hover:bg-green-400 sm:col-start-2 sm:text-sm focus:outline-none"
                    onClick={() => {
                      updateWorkout({
                        id: editWorkoutData.id,
                        name: updatedWorkout.name,
                        muscle_group: findMuscleGroup(
                          updatedWorkout.muscle_group
                        ),
                      });
                      setShowEditWorkoutModal(false);
                    }}
                  >
                    {language === "DE" ? "Speichern" : "Save"}
                  </button>
                  <button
                    type="button"
                    className="inline-flex justify-center w-full px-4 py-2 mt-3 text-base font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm select-none hover:bg-gray-100 sm:mt-0 sm:col-start-1 sm:text-sm focus:outline-none"
                    onClick={() => setShowEditWorkoutModal(false)}
                    ref={cancelButtonRef}
                  >
                    Abbrechen
                  </button>
                </div>
              </div>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  );
};

export default EditWorkoutModal;
