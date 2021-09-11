import { Fragment, useRef, useState, useEffect } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { format, addDays } from "date-fns";

import WorkoutCard from "./WorkoutCard";
import { findMuscleGroup } from "../workouts/WorkoutsSection";
import InputErrorModal from "./ErrorModal";

const ADMIN_ID = 12;

const AddWorkoutToPlanModal = ({
  showAddWorkoutToPlanModal,
  setShowAddWorkoutToPlanModal,
  dayId,
  userId,
  gender,
  language,
  refetchPlans,
  year,
  calendarWeek,
  getDateOfISOWeek,
  wholePlan,
}) => {
  const cancelButtonRef = useRef(null);
  const [inputStart, setInputStart] = useState("12:00");
  const [inputEnd, setInputEnd] = useState("12:30");
  const [inputStatus, setInputStatus] = useState("no");
  const [inputTrackedTimeInMinutes, setInputTrackedTimeInMinutes] = useState(0);
  const [fetchedAllWorkouts, setFetchedAllWorkouts] = useState([]);
  const [selectedWorkout, setSelectedWorkout] = useState(0);
  const [workoutSearchTerm, setWorkoutSearchTerm] = useState("");
  const [showInputErrorModal, setShowInputErrorModal] = useState(false);
  const [showTimeConflictErrorModal, setShowTimeConflictErrorModal] =
    useState(false);

  showTimeConflictErrorModal;

  const planHasTimeConflict = (
    planDay,
    toBeUpdatedTimeStart,
    toBeUpdatedTimeEnd
  ) => {
    let returnString = "clear";

    if (planDay.length === 0) {
      return returnString;
    }
    planDay.forEach((workout) => {
      if (
        parseInt(toBeUpdatedTimeStart.replace(":", "")) >
          parseInt(workout.workout_time_start.replace(":", "")) &&
        parseInt(toBeUpdatedTimeStart.replace(":", "")) <
          parseInt(workout.workout_time_end.replace(":", ""))
      ) {
        returnString = "conflict";
        setShowTimeConflictErrorModal(true);
      }

      if (
        parseInt(toBeUpdatedTimeEnd.replace(":", "")) >
          parseInt(workout.workout_time_start.replace(":", "")) &&
        parseInt(toBeUpdatedTimeEnd.replace(":", "")) <
          parseInt(workout.workout_time_end.replace(":", ""))
      ) {
        returnString = "conflict";
        setShowTimeConflictErrorModal(true);
      }
    });
    console.log("RETURNSTRING", returnString);
    return returnString;
  };

  const findAndAddWorkoutToPlan = (
    originalPlan,
    workoutId,
    day,
    workoutTimeStart,
    workoutTimeEnd,
    workoutCompleted,
    workoutTrackedTime
  ) => {
    const updatedPlan = originalPlan;
    let hasChanged = false;

    if (
      day === 1 &&
      planHasTimeConflict(
        updatedPlan.day_1,
        workoutTimeStart,
        workoutTimeEnd
      ) === "clear"
    ) {
      updatedPlan.day_1.push({
        workout_completed: workoutCompleted,
        workout_id: workoutId,
        workout_time_start: workoutTimeStart,
        workout_time_end: workoutTimeEnd,
        workout_tracked_time: parseInt(workoutTrackedTime) * 60,
      });
      hasChanged = true;
    }

    if (
      day === 2 &&
      planHasTimeConflict(
        updatedPlan.day_1,
        workoutTimeStart,
        workoutTimeEnd
      ) === "clear"
    ) {
      updatedPlan.day_2.push({
        workout_completed: workoutCompleted,
        workout_id: workoutId,
        workout_time_start: workoutTimeStart,
        workout_time_end: workoutTimeEnd,
        workout_tracked_time: parseInt(workoutTrackedTime) * 60,
      });
      hasChanged = true;
    }

    if (
      day === 3 &&
      planHasTimeConflict(
        updatedPlan.day_1,
        workoutTimeStart,
        workoutTimeEnd
      ) === "clear"
    ) {
      updatedPlan.day_3.push({
        workout_completed: workoutCompleted,
        workout_id: workoutId,
        workout_time_start: workoutTimeStart,
        workout_time_end: workoutTimeEnd,
        workout_tracked_time: parseInt(workoutTrackedTime) * 60,
      });
      hasChanged = true;
    }

    if (
      day === 4 &&
      planHasTimeConflict(
        updatedPlan.day_1,
        workoutTimeStart,
        workoutTimeEnd
      ) === "clear"
    ) {
      updatedPlan.day_4.push({
        workout_completed: workoutCompleted,
        workout_id: workoutId,
        workout_time_start: workoutTimeStart,
        workout_time_end: workoutTimeEnd,
        workout_tracked_time: parseInt(workoutTrackedTime) * 60,
      });
      hasChanged = true;
    }

    if (
      day === 5 &&
      planHasTimeConflict(
        updatedPlan.day_1,
        workoutTimeStart,
        workoutTimeEnd
      ) === "clear"
    ) {
      updatedPlan.day_5.push({
        workout_completed: workoutCompleted,
        workout_id: workoutId,
        workout_time_start: workoutTimeStart,
        workout_time_end: workoutTimeEnd,
        workout_tracked_time: parseInt(workoutTrackedTime) * 60,
      });
      hasChanged = true;
    }

    if (
      day === 6 &&
      planHasTimeConflict(
        updatedPlan.day_1,
        workoutTimeStart,
        workoutTimeEnd
      ) === "clear"
    ) {
      updatedPlan.day_6.push({
        workout_completed: workoutCompleted,
        workout_id: workoutId,
        workout_time_start: workoutTimeStart,
        workout_time_end: workoutTimeEnd,
        workout_tracked_time: parseInt(workoutTrackedTime) * 60,
      });
      hasChanged = true;
    }

    if (
      day === 7 &&
      planHasTimeConflict(
        updatedPlan.day_1,
        workoutTimeStart,
        workoutTimeEnd
      ) === "clear"
    ) {
      updatedPlan.day_7.push({
        workout_completed: workoutCompleted,
        workout_id: workoutId,
        workout_time_start: workoutTimeStart,
        workout_time_end: workoutTimeEnd,
        workout_tracked_time: parseInt(workoutTrackedTime) * 60,
      });
      hasChanged = true;
    }

    if (hasChanged) updateAddWorkoutFromPlan(updatedPlan);
  };

  const updateAddWorkoutFromPlan = (wholeUpdatedPlan) =>
    fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}` + `/weekly-workout-plans/`, {
      method: "put",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: userId,
      },
      body: JSON.stringify(wholeUpdatedPlan),
    })
      .then((response) =>
        response
          .json()
          .then((data) => refetchPlans())
          .catch((e) => console.log(e))
      )
      .catch((e) => console.log(e));

  const handleUpdateWorkout = (wholePlan) => {
    if (
      !inputStart ||
      !inputEnd ||
      (!inputTrackedTimeInMinutes &&
        parseInt(inputTrackedTimeInMinutes) !== 0) ||
      !/^\d{2}:\d{2}$/.test(inputStart) ||
      !/^\d{2}:\d{2}$/.test(inputEnd) ||
      !/^[0-9]*$/.test(inputTrackedTimeInMinutes) ||
      parseInt(inputEnd.replace(":", "")) -
        parseInt(inputStart.replace(":", "")) <
        1 ||
      parseInt(inputEnd.replace(":", "")) -
        parseInt(inputStart.replace(":", "")) >
        2359 ||
      parseInt(selectedWorkout) === 0
    ) {
      setShowInputErrorModal(true);
    } else {
      findAndAddWorkoutToPlan(
        wholePlan,
        selectedWorkout,
        dayId,
        inputStart,
        inputEnd,
        inputStatus,
        inputTrackedTimeInMinutes
      );
    }
  };

  const fetchAllWorkouts = () =>
    fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}` + `/workouts/`, {
      method: "get",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: userId,
      },
    })
      .then((response) =>
        response
          .json()
          .then((data) => setFetchedAllWorkouts(data.workouts))
          .catch((e) => console.log(e))
      )
      .catch((e) => console.log(e));

  const getDayName = (dayId, language) => {
    if (language === "DE") {
      switch (dayId) {
        case 1:
          return "Montag";
        case 2:
          return "Dienstag";
        case 3:
          return "Mittwoch";
        case 4:
          return "Donnerstag";
        case 5:
          return "Freitag";
        case 6:
          return "Samstag";
        case 7:
          return "Sonntag";
        default:
          return "";
      }
    } else {
      switch (dayId) {
        case 1:
          return "Monday";
        case 2:
          return "Tuesday";
        case 3:
          return "Wednesday";
        case 4:
          return "Thursday";
        case 5:
          return "Friday";
        case 6:
          return "Saturday";
        case 7:
          return "Sunday";
        default:
          return "";
      }
    }
  };

  useEffect(() => fetchAllWorkouts(), []);

  return (
    <Transition.Root
      show={showAddWorkoutToPlanModal ? showAddWorkoutToPlanModal : false}
      as={Fragment}
    >
      <Dialog
        as="div"
        static
        className="fixed inset-0 z-50 overflow-y-auto"
        initialFocus={cancelButtonRef}
        open={showAddWorkoutToPlanModal}
        onClose={setShowAddWorkoutToPlanModal}
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
              className="inline-block px-4 pt-5 pb-4 overflow-hidden text-left align-bottom transition-all transform bg-gray-800 rounded-lg shadow-xl sm:my-8 sm:align-middle sm:p-6 iphone:mt-12 iphonebgsize"
              data-aos="fade-in"
              style={{ width: "60%" }}
            >
              <div>
                {showInputErrorModal ? (
                  <InputErrorModal
                    showInputErrorTime={showInputErrorModal}
                    setShowInputErrorTime={setShowInputErrorModal}
                    germanTitleText={"Fehler in den Angaben"}
                    englishTitleText={"Error In Your Information"}
                    germanText={
                      "Die Zeit muss im Format hh:mm für Start- und Endzeitpunkt und optional benötigte Zeit in Minuten als Zahl angegeben werden. Bitte selektiere ein Workout um fortzufahren."
                    }
                    englishText={
                      "The time has to be inserted in the format hh:mm for start and end time and optionally the tracked time in minutes as digit. Please select a workout to proceed."
                    }
                    language={language}
                  />
                ) : (
                  ""
                )}
                {showTimeConflictErrorModal ? (
                  <InputErrorModal
                    showInputErrorTime={showTimeConflictErrorModal}
                    setShowInputErrorTime={setShowTimeConflictErrorModal}
                    germanTitleText={"Fehler in den Zeitangaben"}
                    englishTitleText={"Error In Your Time Information"}
                    germanText={
                      "In diesem Zeitraum besteht bereits eine Übung, bitte passe die Zeiten an."
                    }
                    englishText={
                      "In this time windows another workout already exists, please adjust your time window accordingly."
                    }
                    language={language}
                  />
                ) : (
                  ""
                )}
                <h2 className="mb-2 text-2xl font-bold text-center text-green-500 select-none">
                  {language === "DE"
                    ? "Informationen über deine Übung"
                    : "Information About Your Workout"}
                </h2>
                <h2 className="text-xl font-bold text-center text-white select-none ">
                  {language === "DE"
                    ? `${year} Kalenderwoche ${calendarWeek}`
                    : `${year} Calendar Week ${calendarWeek}`}
                </h2>
                <h2 className="mb-4 text-lg font-bold text-center text-gray-400 select-none">
                  {getDayName(dayId, language)}{" "}
                  {format(
                    addDays(getDateOfISOWeek(calendarWeek, year), dayId - 1),
                    "dd.MM.yyyy"
                  )}
                </h2>
                <div className="flex flex-col items-center">
                  <div className="flex mb-4">
                    <div className="mr-2">
                      <div className="font-bold text-center text-white">
                        {language === "DE" ? "Startzeit" : "Start Time"}
                      </div>
                      <input
                        value={inputStart}
                        type="text"
                        id="start-input"
                        maxLength="5"
                        onChange={(event) => setInputStart(event.target.value)}
                        className="border !bg-gray-700 border-transparent text-2xl font-bold !text-green-500 select-none text-center rounded-md placeholder-green-700 w-full "
                      ></input>
                    </div>

                    <div className="ml-2">
                      <div className="font-bold text-center text-white">
                        {language === "DE" ? "Endzeit" : "End Time"}
                      </div>
                      <input
                        value={inputEnd}
                        type="text"
                        id="end-input"
                        maxLength="5"
                        onChange={(event) => setInputEnd(event.target.value)}
                        className="border !bg-gray-700 border-transparent text-2xl font-bold !text-green-500 select-none text-center rounded-md placeholder-green-700 w-full "
                      ></input>
                    </div>
                  </div>
                  <div className="flex mb-4 iphonebg">
                    <div className="flex-col figure">
                      <div className="mb-1 font-bold text-center text-white">
                        {language === "DE" ? "Status" : "Status"}
                      </div>
                      {inputStatus === "yes" ? (
                        <img
                          onClick={() => setInputStatus("no")}
                          className="w-10 mx-auto mb-1 rounded-full cursor-pointer select-none image-main "
                          src="/icons/done-checked.png"
                          srcSet="/icons/done-checked.png"
                          alt="workout checked icon"
                        />
                      ) : (
                        <img
                          onClick={() => setInputStatus("yes")}
                          className="w-10 mx-auto mb-1 rounded-full cursor-pointer select-none image-main "
                          src="/icons/done-unchecked.png"
                          srcSet="/icons/done-unchecked.png"
                          alt="workout unchecked icon"
                        />
                      )}
                      {inputStatus === "yes" ? (
                        <img
                          onClick={() => setInputStatus("no")}
                          className="w-10 mx-auto mb-1 rounded-full cursor-pointer select-none mt-7 image-hover "
                          src="/icons/done-unchecked.png"
                          srcSet="/icons/done-unchecked.png"
                          alt="workout unchecked icon"
                        />
                      ) : (
                        <img
                          onClick={() => setInputStatus("yes")}
                          className="w-10 mx-auto mb-1 rounded-full cursor-pointer select-none mt-7 image-hover "
                          src="/icons/done-checked.png"
                          srcSet="/icons/done-checked.png"
                          alt="workout unchecked icon"
                        />
                      )}
                    </div>

                    <div className="">
                      <div className="font-bold text-center text-white">
                        {language === "DE" ? "Erfasste Zeit" : "Tracked Time"}
                      </div>
                      <input
                        value={inputTrackedTimeInMinutes}
                        type="text"
                        id="tracked-time-input"
                        maxLength="3"
                        onChange={(event) => {
                          if (/^[0-9]*$/.test(event.target.value))
                            setInputTrackedTimeInMinutes(event.target.value);
                        }}
                        className="border !bg-gray-700 border-transparent text-2xl font-bold !text-green-500 select-none text-center rounded-md placeholder-green-700 w-full"
                      ></input>
                    </div>
                  </div>
                </div>
                <h2 className="mt-6 mb-4 text-2xl font-bold text-center text-green-500 select-none">
                  {language === "DE"
                    ? "Wähle deine Übung zum Hinzufügen aus"
                    : "Select Your Workout To Add"}
                </h2>
                <div className="text-lg font-bold text-center text-white">
                  {language === "DE" ? "Suchbegriff" : "Search Term"}
                </div>
                <div className="flex justify-center mb-4">
                  <input
                    value={workoutSearchTerm}
                    type="text"
                    id="searchterm-input"
                    maxLength="40"
                    onChange={(event) =>
                      setWorkoutSearchTerm(event.target.value)
                    }
                    className="iphonebg border !bg-gray-700 border-transparent text-2xl font-bold !text-green-500 select-none text-center rounded-md placeholder-green-700 w-5/12"
                  ></input>
                </div>

                <p className="flex flex-wrap justify-around text-base text-gray-500">
                  {fetchedAllWorkouts
                    ? fetchedAllWorkouts && workoutSearchTerm
                      ? fetchedAllWorkouts
                          .filter(
                            (workout) =>
                              workout.user_id !== ADMIN_ID &&
                              parseInt(workout.user_id) === parseInt(userId)
                          )
                          .filter((workout) =>
                            workout.name
                              .toString()
                              .toLowerCase()
                              .includes(
                                workoutSearchTerm.toString().toLowerCase()
                              )
                          )
                          .map((workout) => (
                            <WorkoutCard
                              id={workout.id}
                              name={workout.name}
                              repetition_count={workout.repetition_count}
                              duration_in_seconds={workout.duration_in_seconds}
                              equipment_weight_in_kilo={
                                workout.equipment_weight_in_kilo
                              }
                              muscle_group={workout.muscle_group}
                              workout={workout}
                              badge={
                                language === "DE"
                                  ? workout.user_id === ADMIN_ID
                                    ? "Vorlage"
                                    : "Individuell"
                                  : workout.user_id === ADMIN_ID
                                  ? "Template"
                                  : "Custom"
                              }
                              findMuscleGroup={findMuscleGroup}
                              gender={gender}
                              language={language}
                              key={workout.id}
                              admin={"no"}
                              callbackSetSelectedWorkout={setSelectedWorkout}
                              selectedWorkout={selectedWorkout}
                            />
                          ))
                      : fetchedAllWorkouts
                          .filter(
                            (workout) =>
                              workout.user_id !== ADMIN_ID &&
                              parseInt(workout.user_id) === parseInt(userId)
                          )
                          .map((workout) => (
                            <WorkoutCard
                              id={workout.id}
                              name={workout.name}
                              repetition_count={workout.repetition_count}
                              duration_in_seconds={workout.duration_in_seconds}
                              equipment_weight_in_kilo={
                                workout.equipment_weight_in_kilo
                              }
                              muscle_group={workout.muscle_group}
                              workout={workout}
                              badge={
                                language === "DE"
                                  ? workout.user_id === ADMIN_ID
                                    ? "Vorlage"
                                    : "Individuell"
                                  : workout.user_id === ADMIN_ID
                                  ? "Template"
                                  : "Custom"
                              }
                              findMuscleGroup={findMuscleGroup}
                              gender={gender}
                              language={language}
                              key={workout.id}
                              admin={"no"}
                              callbackSetSelectedWorkout={setSelectedWorkout}
                              selectedWorkout={selectedWorkout}
                            />
                          ))
                    : ""}
                  {fetchedAllWorkouts
                    ? fetchedAllWorkouts && workoutSearchTerm
                      ? fetchedAllWorkouts
                          .filter((workout) => workout.user_id === ADMIN_ID)
                          .filter((workout) =>
                            workout.name
                              .toString()
                              .toLowerCase()
                              .includes(
                                workoutSearchTerm.toString().toLowerCase()
                              )
                          )
                          .map((workout) => (
                            <WorkoutCard
                              id={workout.id}
                              name={workout.name}
                              repetition_count={workout.repetition_count}
                              duration_in_seconds={workout.duration_in_seconds}
                              equipment_weight_in_kilo={
                                workout.equipment_weight_in_kilo
                              }
                              muscle_group={workout.muscle_group}
                              workout={workout}
                              badge={
                                language === "DE"
                                  ? workout.user_id === ADMIN_ID
                                    ? "Vorlage"
                                    : "Individuell"
                                  : workout.user_id === ADMIN_ID
                                  ? "Template"
                                  : "Custom"
                              }
                              findMuscleGroup={findMuscleGroup}
                              gender={gender}
                              language={language}
                              key={workout.id}
                              admin={"no"}
                              callbackSetSelectedWorkout={setSelectedWorkout}
                              selectedWorkout={selectedWorkout}
                            />
                          ))
                      : fetchedAllWorkouts
                          .filter((workout) => workout.user_id === ADMIN_ID)
                          .map((workout) => (
                            <WorkoutCard
                              id={workout.id}
                              name={workout.name}
                              repetition_count={workout.repetition_count}
                              duration_in_seconds={workout.duration_in_seconds}
                              equipment_weight_in_kilo={
                                workout.equipment_weight_in_kilo
                              }
                              muscle_group={workout.muscle_group}
                              workout={workout}
                              badge={
                                language === "DE"
                                  ? workout.user_id === ADMIN_ID
                                    ? "Vorlage"
                                    : "Individuell"
                                  : workout.user_id === ADMIN_ID
                                  ? "Template"
                                  : "Custom"
                              }
                              findMuscleGroup={findMuscleGroup}
                              gender={gender}
                              language={language}
                              key={workout.id}
                              admin={"no"}
                              callbackSetSelectedWorkout={setSelectedWorkout}
                              selectedWorkout={selectedWorkout}
                            />
                          ))
                    : ""}
                </p>
                <div className="flex">
                  <button
                    type="button"
                    className="inline-flex justify-center w-full px-4 py-2 mt-3 mr-4 text-base font-medium text-gray-700 bg-gray-300 border border-gray-300 rounded-md shadow-sm select-none hover:bg-gray-200 sm:mt-0 sm:col-start-1 sm:text-sm focus:outline-none"
                    onClick={() => setShowAddWorkoutToPlanModal(false)}
                    ref={cancelButtonRef}
                  >
                    {language === "DE" ? "Abbrechen" : "Abort"}
                  </button>
                  <button
                    type="button"
                    className="inline-flex justify-center w-full px-4 py-2 mt-3 text-base font-medium text-green-700 bg-green-300 border border-green-300 rounded-md shadow-sm select-none hover:bg-green-200 sm:mt-0 sm:col-start-1 sm:text-sm focus:outline-none"
                    onClick={() => handleUpdateWorkout(wholePlan)}
                    ref={cancelButtonRef}
                  >
                    {language === "DE" ? "Hinzufügen" : "Add"}
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

export default AddWorkoutToPlanModal;
