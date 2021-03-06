import React, { useState } from "react";
import { PlusIcon } from "@heroicons/react/solid";
import { format, addDays } from "date-fns";

import EditPlanModal from "./EditPlanModal";
import PlanWorkoutCard from "./PlanWorkoutCard";
import AddWorkoutToPlanModal from "./AddWorkoutToPlanModal";

const PlanCard = ({
  id,
  name,
  year,
  calendar_week,
  day_1,
  day_2,
  day_3,
  day_4,
  day_5,
  day_6,
  day_7,
  language,
  refetchPlans,
  currentExpandedPlanCard,
  setCurrentExpandedPlanCard,
  wholePlan,
  userId,
  gender,
}) => {
  const [showEditPlanModal, setShowEditPlanModal] = useState(false);
  const [showAddWorkoutToPlanModal, setShowAddWorkoutToPlanModal] =
    useState(false);
  const [activeDay, setActiveDay] = useState(false);

  const findAndRemoveWorkoutFromPlan = (
    originalPlan,
    workoutId,
    day,
    workoutTimeStart,
    workoutTimeEnd
  ) => {
    const updatedPlan = originalPlan;

    if (day === "1") {
      updatedPlan.day_1 = updatedPlan.day_1.filter(
        (workout) =>
          workout.workout_id !== workoutId &&
          workout.workout_time_start !== workoutTimeStart &&
          workout.workout_time_end !== workoutTimeEnd
      );
    }

    if (day === "2") {
      updatedPlan.day_2 = updatedPlan.day_2.filter(
        (workout) =>
          workout.workout_id !== workoutId &&
          workout.workout_time_start !== workoutTimeStart &&
          workout.workout_time_end !== workoutTimeEnd
      );
    }

    if (day === "3") {
      updatedPlan.day_3 = updatedPlan.day_3.filter(
        (workout) =>
          workout.workout_id !== workoutId &&
          workout.workout_time_start !== workoutTimeStart &&
          workout.workout_time_end !== workoutTimeEnd
      );
    }

    if (day === "4") {
      updatedPlan.day_4 = updatedPlan.day_4.filter(
        (workout) =>
          workout.workout_id !== workoutId &&
          workout.workout_time_start !== workoutTimeStart &&
          workout.workout_time_end !== workoutTimeEnd
      );
    }

    if (day === "5") {
      updatedPlan.day_5 = updatedPlan.day_5.filter(
        (workout) =>
          workout.workout_id !== workoutId &&
          workout.workout_time_start !== workoutTimeStart &&
          workout.workout_time_end !== workoutTimeEnd
      );
    }

    if (day === "6") {
      updatedPlan.day_6 = updatedPlan.day_6.filter(
        (workout) =>
          workout.workout_id !== workoutId &&
          workout.workout_time_start !== workoutTimeStart &&
          workout.workout_time_end !== workoutTimeEnd
      );
    }

    if (day === "7") {
      updatedPlan.day_7 = updatedPlan.day_7.filter(
        (workout) =>
          workout.workout_id !== workoutId &&
          workout.workout_time_start !== workoutTimeStart &&
          workout.workout_time_end !== workoutTimeEnd
      );
    }
    return updatedPlan;
  };

  const updateRemoveWorkoutFromPlan = (
    workoutId,
    day,
    workoutTimeStart,
    workoutTimeEnd
  ) =>
    fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}` + `/weekly-workout-plans/`, {
      method: "put",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: userId,
      },
      body: JSON.stringify(
        findAndRemoveWorkoutFromPlan(
          wholePlan,
          workoutId,
          day,
          workoutTimeStart,
          workoutTimeEnd
        )
      ),
    })
      .then((response) =>
        response
          .json()
          .then((data) => refetchPlans())
          .catch((e) => console.log(e))
      )
      .catch((e) => console.log(e));

  const findAndUpdateWorkoutWithinPlan = (
    originalPlan,
    workoutId,
    day,
    updateTimeStart,
    updateTimeEnd,
    updateCompleted,
    updateTrackedTime,
    workoutTimeStart,
    workoutTimeEnd
  ) => {
    const updatedPlan = originalPlan;

    if (day === "1") {
      updatedPlan.day_1 = updatedPlan.day_1.filter(
        (workout) =>
          workout.workout_id !== workoutId &&
          workout.workout_time_start !== workoutTimeStart &&
          workout.workout_time_end !== workoutTimeEnd
      );

      updatedPlan.day_1 = [
        ...updatedPlan.day_1,
        {
          workout_completed: updateCompleted,
          workout_id: workoutId,
          workout_time_start: updateTimeStart,
          workout_time_end: updateTimeEnd,
          workout_tracked_time: updateTrackedTime * 60,
        },
      ];
    }

    if (day === "2") {
      updatedPlan.day_2 = updatedPlan.day_2.filter(
        (workout) =>
          workout.workout_id !== workoutId &&
          workout.workout_time_start !== workoutTimeStart &&
          workout.workout_time_end !== workoutTimeEnd
      );

      updatedPlan.day_2 = [
        ...updatedPlan.day_2,
        {
          workout_completed: updateCompleted,
          workout_id: workoutId,
          workout_time_start: updateTimeStart,
          workout_time_end: updateTimeEnd,
          workout_tracked_time: updateTrackedTime * 60,
        },
      ];
    }

    if (day === "3") {
      updatedPlan.day_3 = updatedPlan.day_3.filter(
        (workout) =>
          workout.workout_id !== workoutId &&
          workout.workout_time_start !== workoutTimeStart &&
          workout.workout_time_end !== workoutTimeEnd
      );

      updatedPlan.day_3 = [
        ...updatedPlan.day_3,
        {
          workout_completed: updateCompleted,
          workout_id: workoutId,
          workout_time_start: updateTimeStart,
          workout_time_end: updateTimeEnd,
          workout_tracked_time: updateTrackedTime * 60,
        },
      ];
    }

    if (day === "4") {
      updatedPlan.day_4 = updatedPlan.day_4.filter(
        (workout) =>
          workout.workout_id !== workoutId &&
          workout.workout_time_start !== workoutTimeStart &&
          workout.workout_time_end !== workoutTimeEnd
      );

      updatedPlan.day_4 = [
        ...updatedPlan.day_4,
        {
          workout_completed: updateCompleted,
          workout_id: workoutId,
          workout_time_start: updateTimeStart,
          workout_time_end: updateTimeEnd,
          workout_tracked_time: updateTrackedTime * 60,
        },
      ];
    }

    if (day === "5") {
      updatedPlan.day_5 = updatedPlan.day_5.filter(
        (workout) =>
          workout.workout_id !== workoutId &&
          workout.workout_time_start !== workoutTimeStart &&
          workout.workout_time_end !== workoutTimeEnd
      );

      updatedPlan.day_5 = [
        ...updatedPlan.day_5,
        {
          workout_completed: updateCompleted,
          workout_id: workoutId,
          workout_time_start: updateTimeStart,
          workout_time_end: updateTimeEnd,
          workout_tracked_time: updateTrackedTime * 60,
        },
      ];
    }

    if (day === "6") {
      updatedPlan.day_6 = updatedPlan.day_6.filter(
        (workout) =>
          workout.workout_id !== workoutId &&
          workout.workout_time_start !== workoutTimeStart &&
          workout.workout_time_end !== workoutTimeEnd
      );

      updatedPlan.day_6 = [
        ...updatedPlan.day_6,
        {
          workout_completed: updateCompleted,
          workout_id: workoutId,
          workout_time_start: updateTimeStart,
          workout_time_end: updateTimeEnd,
          workout_tracked_time: updateTrackedTime * 60,
        },
      ];
    }

    if (day === "7") {
      updatedPlan.day_7 = updatedPlan.day_7.filter(
        (workout) =>
          workout.workout_id !== workoutId &&
          workout.workout_time_start !== workoutTimeStart &&
          workout.workout_time_end !== workoutTimeEnd
      );

      updatedPlan.day_7 = [
        ...updatedPlan.day_7,
        {
          workout_completed: updateCompleted,
          workout_id: workoutId,
          workout_time_start: updateTimeStart,
          workout_time_end: updateTimeEnd,
          workout_tracked_time: updateTrackedTime * 60,
        },
      ];
    }
    return updatedPlan;
  };

  const updateWorkoutWithinPlan = (
    workoutId,
    day,
    updateTimeStart,
    updateTimeEnd,
    updateCompleted,
    updateTrackedTime,
    workoutTimeStart,
    workoutTimeEnd
  ) =>
    fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}` + `/weekly-workout-plans/`, {
      method: "put",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: userId,
      },
      body: JSON.stringify(
        findAndUpdateWorkoutWithinPlan(
          wholePlan,
          workoutId,
          day,
          updateTimeStart,
          updateTimeEnd,
          updateCompleted,
          updateTrackedTime,
          workoutTimeStart,
          workoutTimeEnd
        )
      ),
    })
      .then((response) =>
        response
          .json()
          .then((data) => refetchPlans())
          .catch((e) => console.log(e))
      )
      .catch((e) => console.log(e));

  function getDateOfISOWeek(w, y) {
    var simple = new Date(y, 0, 1 + (w - 1) * 7);
    var dow = simple.getDay();
    var ISOweekStart = simple;
    if (dow <= 4) ISOweekStart.setDate(simple.getDate() - simple.getDay() + 1);
    else ISOweekStart.setDate(simple.getDate() + 8 - simple.getDay());
    return ISOweekStart;
  }

  const addWorkoutToPlan = (dayId) => {
    setShowAddWorkoutToPlanModal(true);
    setActiveDay(dayId);
  };

  return (
    <div className="p-8 py-6 mt-5 transition duration-300 ease-in transform bg-gray-700 rounded-lg cursor-pointer md:flex md:items-center md:justify-between paddingipad paddingiphone">
      <div className="flex-1 min-w-0">
        <div className="flex items-center justify-center h-full">
          <div className="relative flex flex-col w-full">
            <div
              onClick={() =>
                id !== currentExpandedPlanCard
                  ? setCurrentExpandedPlanCard(id)
                  : setCurrentExpandedPlanCard(0)
              }
              className="relative flex content-between w-full mb-2 text-2xl font-bold text-green-500 select-none"
            >
              {showEditPlanModal ? (
                <EditPlanModal
                  showEditPlanModal={showEditPlanModal}
                  setShowEditPlanModal={setShowEditPlanModal}
                  name={name}
                  year={year}
                  calendarWeek={calendar_week}
                  id={id}
                  language={language}
                  refetchPlans={refetchPlans}
                  userId={userId}
                />
              ) : (
                ""
              )}
              {showAddWorkoutToPlanModal ? (
                <AddWorkoutToPlanModal
                  showAddWorkoutToPlanModal={showAddWorkoutToPlanModal}
                  setShowAddWorkoutToPlanModal={setShowAddWorkoutToPlanModal}
                  dayId={activeDay}
                  userId={userId}
                  gender={gender}
                  language={language}
                  refetchPlans={refetchPlans}
                  year={year}
                  calendarWeek={calendar_week}
                  getDateOfISOWeek={getDateOfISOWeek}
                  wholePlan={wholePlan}
                />
              ) : (
                ""
              )}
              <div className="absolute inset-y-0 left-0 mt-6 ml-3 text-white ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  onClick={(event) => {
                    event.stopPropagation();
                    setShowEditPlanModal(true);
                  }}
                >
                  <path d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z" />
                  <path
                    fillRule="evenodd"
                    d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div className="w-full text-center ipadtextsize iphonetextsize">
                {name}
              </div>
              <div className="absolute inset-y-0 right-0 text-white">
                <img
                  src="/icons/down-arrow.png"
                  alt="down arrow icon"
                  className={`${
                    id === currentExpandedPlanCard ? "rotate-180" : ""
                  } object-contain w-5 h-full mt-5 mr-3 transform rounded-l select-none transition duration-300`}
                />
              </div>
            </div>
            <div className="text-xl font-bold text-center text-white truncate select-none">
              {year} {language === "DE" ? "Kalenderwoche" : "Calendar Week"}{" "}
              {calendar_week}
            </div>
            {id === currentExpandedPlanCard ? (
              <div className="w-full max-w-full mt-4">
                <div className="flex justify-center max-w-full ipadwrap iphonewrap">
                  <div className="h-full ml-3 mr-3">
                    <div className="mb-1 font-bold text-center text-white text-md">
                      {format(
                        getDateOfISOWeek(calendar_week, year),
                        "dd.MM.yyyy"
                      )}
                    </div>
                    <div className="mb-1 font-bold text-center text-green-500 text-md">
                      MONTAG
                    </div>
                    <div
                      className={`${
                        day_1.length > 0 ? "py-1" : ""
                      } w-32 h-full rounded-lg bg-striped-green`}
                    >
                      {day_1 && day_1.length > 0
                        ? day_1
                            .sort(
                              (a, b) =>
                                parseInt(
                                  parseInt(
                                    b.workout_time_start.replace(":", "")
                                  )
                                ) -
                                parseInt(
                                  parseInt(
                                    a.workout_time_start.replace(":", "")
                                  )
                                )
                            )
                            .reverse()
                            .map((workout) => (
                              <PlanWorkoutCard
                                workoutId={workout.workout_id}
                                workoutCompleted={workout.workout_completed}
                                workoutTimeStart={workout.workout_time_start}
                                workoutTimeEnd={workout.workout_time_end}
                                workoutTrackedTime={
                                  workout.workout_tracked_time
                                }
                                day="1"
                                language={language}
                                callbackFindAndRemoveWorkoutFromPlan={
                                  updateRemoveWorkoutFromPlan
                                }
                                callbackUpdateWorkoutWithinPlan={
                                  updateWorkoutWithinPlan
                                }
                                userId={userId}
                              />
                            ))
                        : ""}
                    </div>
                    <div className="p-8 py-2 mt-2 transition duration-300 ease-in transform bg-gray-700 rounded-lg cursor-pointer md:flex md:items-center md:justify-between hover:scale-105">
                      <div className="flex-1 min-w-0">
                        <div
                          onClick={() => addWorkoutToPlan(1)}
                          className="flex items-center justify-center h-12"
                        >
                          <PlusIcon className="w-10 h-10 text-gray-400 transition duration-300 transform hover:scale-105" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="h-full ml-3 mr-3">
                    <div className="mb-1 font-bold text-center text-white text-md">
                      {format(
                        addDays(getDateOfISOWeek(calendar_week, year), 1),
                        "dd.MM.yyyy"
                      )}
                    </div>
                    <div className="mb-1 font-bold text-center text-green-500 text-md">
                      DIENSTAG
                    </div>
                    <div
                      className={`${
                        day_2.length > 0 ? "py-1" : ""
                      } w-32 h-full rounded bg-striped-green`}
                    >
                      {day_2 && day_2.length > 0
                        ? day_2
                            .sort(
                              (a, b) =>
                                parseInt(
                                  parseInt(
                                    b.workout_time_start.replace(":", "")
                                  )
                                ) -
                                parseInt(
                                  parseInt(
                                    a.workout_time_start.replace(":", "")
                                  )
                                )
                            )
                            .reverse()
                            .map((workout) => (
                              <PlanWorkoutCard
                                workoutId={workout.workout_id}
                                workoutCompleted={workout.workout_completed}
                                workoutTimeStart={workout.workout_time_start}
                                workoutTimeEnd={workout.workout_time_end}
                                workoutTrackedTime={
                                  workout.workout_tracked_time
                                }
                                day="2"
                                language={language}
                                callbackFindAndRemoveWorkoutFromPlan={
                                  updateRemoveWorkoutFromPlan
                                }
                                callbackUpdateWorkoutWithinPlan={
                                  updateWorkoutWithinPlan
                                }
                                userId={userId}
                              />
                            ))
                        : ""}
                    </div>
                    <div className="p-8 py-2 mt-2 transition duration-300 ease-in transform bg-gray-700 rounded-lg cursor-pointer md:flex md:items-center md:justify-between hover:scale-105">
                      <div className="flex-1 min-w-0">
                        <div
                          onClick={() => addWorkoutToPlan(2)}
                          className="flex items-center justify-center h-12"
                        >
                          <PlusIcon className="w-10 h-10 text-gray-400 transition duration-300 transform hover:scale-105" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="h-full ml-3 mr-3">
                    <div className="mb-1 font-bold text-center text-white text-md">
                      {format(
                        addDays(getDateOfISOWeek(calendar_week, year), 2),
                        "dd.MM.yyyy"
                      )}
                    </div>
                    <div className="mb-1 font-bold text-center text-green-500 text-md">
                      MITTWOCH
                    </div>
                    <div
                      className={`${
                        day_3.length > 0 ? "py-1" : ""
                      } w-32 h-full rounded bg-striped-green`}
                    >
                      {day_3 && day_3.length > 0
                        ? day_3
                            .sort(
                              (a, b) =>
                                parseInt(
                                  parseInt(
                                    b.workout_time_start.replace(":", "")
                                  )
                                ) -
                                parseInt(
                                  parseInt(
                                    a.workout_time_start.replace(":", "")
                                  )
                                )
                            )
                            .reverse()
                            .map((workout) => (
                              <PlanWorkoutCard
                                workoutId={workout.workout_id}
                                workoutCompleted={workout.workout_completed}
                                workoutTimeStart={workout.workout_time_start}
                                workoutTimeEnd={workout.workout_time_end}
                                workoutTrackedTime={
                                  workout.workout_tracked_time
                                }
                                day="3"
                                language={language}
                                callbackFindAndRemoveWorkoutFromPlan={
                                  updateRemoveWorkoutFromPlan
                                }
                                callbackUpdateWorkoutWithinPlan={
                                  updateWorkoutWithinPlan
                                }
                                userId={userId}
                              />
                            ))
                        : ""}
                    </div>
                    <div className="p-8 py-2 mt-2 transition duration-300 ease-in transform bg-gray-700 rounded-lg cursor-pointer md:flex md:items-center md:justify-between hover:scale-105">
                      <div className="flex-1 min-w-0">
                        <div
                          onClick={() => addWorkoutToPlan(3)}
                          className="flex items-center justify-center h-12"
                        >
                          <PlusIcon className="w-10 h-10 text-gray-400 transition duration-300 transform hover:scale-105" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="h-full ml-3 mr-3">
                    <div className="mb-1 font-bold text-center text-white text-md">
                      {format(
                        addDays(getDateOfISOWeek(calendar_week, year), 3),
                        "dd.MM.yyyy"
                      )}
                    </div>
                    <div className="mb-1 font-bold text-center text-green-500 text-md">
                      DONNERSTAG
                    </div>
                    <div
                      className={`${
                        day_4.length > 0 ? "py-1" : ""
                      } w-32 h-full rounded bg-striped-green`}
                    >
                      {day_4 && day_4.length > 0
                        ? day_4
                            .sort(
                              (a, b) =>
                                parseInt(
                                  parseInt(
                                    b.workout_time_start.replace(":", "")
                                  )
                                ) -
                                parseInt(
                                  parseInt(
                                    a.workout_time_start.replace(":", "")
                                  )
                                )
                            )
                            .reverse()
                            .map((workout) => (
                              <PlanWorkoutCard
                                workoutId={workout.workout_id}
                                workoutCompleted={workout.workout_completed}
                                workoutTimeStart={workout.workout_time_start}
                                workoutTimeEnd={workout.workout_time_end}
                                workoutTrackedTime={
                                  workout.workout_tracked_time
                                }
                                day="4"
                                language={language}
                                callbackFindAndRemoveWorkoutFromPlan={
                                  updateRemoveWorkoutFromPlan
                                }
                                callbackUpdateWorkoutWithinPlan={
                                  updateWorkoutWithinPlan
                                }
                                userId={userId}
                              />
                            ))
                        : ""}
                    </div>
                    <div className="p-8 py-2 mt-2 transition duration-300 ease-in transform bg-gray-700 rounded-lg cursor-pointer md:flex md:items-center md:justify-between hover:scale-105">
                      <div className="flex-1 min-w-0">
                        <div
                          onClick={() => addWorkoutToPlan(4)}
                          className="flex items-center justify-center h-12"
                        >
                          <PlusIcon className="w-10 h-10 text-gray-400 transition duration-300 transform hover:scale-105" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="h-full ml-3 mr-3">
                    <div className="mb-1 font-bold text-center text-white text-md">
                      {format(
                        addDays(getDateOfISOWeek(calendar_week, year), 4),
                        "dd.MM.yyyy"
                      )}
                    </div>
                    <div className="mb-1 font-bold text-center text-green-500 text-md">
                      FREITAG
                    </div>
                    <div
                      className={`${
                        day_5.length > 0 ? "py-1" : ""
                      } w-32 h-full rounded bg-striped-green`}
                    >
                      {day_5 && day_5.length > 0
                        ? day_5
                            .sort(
                              (a, b) =>
                                parseInt(
                                  parseInt(
                                    b.workout_time_start.replace(":", "")
                                  )
                                ) -
                                parseInt(
                                  parseInt(
                                    a.workout_time_start.replace(":", "")
                                  )
                                )
                            )
                            .reverse()
                            .map((workout) => (
                              <PlanWorkoutCard
                                workoutId={workout.workout_id}
                                workoutCompleted={workout.workout_completed}
                                workoutTimeStart={workout.workout_time_start}
                                workoutTimeEnd={workout.workout_time_end}
                                workoutTrackedTime={
                                  workout.workout_tracked_time
                                }
                                day="5"
                                language={language}
                                callbackFindAndRemoveWorkoutFromPlan={
                                  updateRemoveWorkoutFromPlan
                                }
                                callbackUpdateWorkoutWithinPlan={
                                  updateWorkoutWithinPlan
                                }
                                userId={userId}
                              />
                            ))
                        : ""}
                    </div>
                    <div className="p-8 py-2 mt-2 transition duration-300 ease-in transform bg-gray-700 rounded-lg cursor-pointer md:flex md:items-center md:justify-between hover:scale-105">
                      <div className="flex-1 min-w-0">
                        <div
                          onClick={() => addWorkoutToPlan(5)}
                          className="flex items-center justify-center h-12"
                        >
                          <PlusIcon className="w-10 h-10 text-gray-400 transition duration-300 transform hover:scale-105" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="h-full ml-3 mr-3">
                    <div className="mb-1 font-bold text-center text-white text-md">
                      {format(
                        addDays(getDateOfISOWeek(calendar_week, year), 5),
                        "dd.MM.yyyy"
                      )}
                    </div>
                    <div className="mb-1 font-bold text-center text-green-500 text-md">
                      SAMSTAG
                    </div>
                    <div
                      className={`${
                        day_6.length > 0 ? "py-1" : ""
                      } w-32 h-full rounded bg-striped-green`}
                    >
                      {day_6 && day_6.length > 0
                        ? day_6
                            .sort(
                              (a, b) =>
                                parseInt(
                                  parseInt(
                                    b.workout_time_start.replace(":", "")
                                  )
                                ) -
                                parseInt(
                                  parseInt(
                                    a.workout_time_start.replace(":", "")
                                  )
                                )
                            )
                            .reverse()
                            .map((workout) => (
                              <PlanWorkoutCard
                                workoutId={workout.workout_id}
                                workoutCompleted={workout.workout_completed}
                                workoutTimeStart={workout.workout_time_start}
                                workoutTimeEnd={workout.workout_time_end}
                                workoutTrackedTime={
                                  workout.workout_tracked_time
                                }
                                day="6"
                                language={language}
                                callbackFindAndRemoveWorkoutFromPlan={
                                  updateRemoveWorkoutFromPlan
                                }
                                callbackUpdateWorkoutWithinPlan={
                                  updateWorkoutWithinPlan
                                }
                                userId={userId}
                              />
                            ))
                        : ""}
                    </div>
                    <div className="p-8 py-2 mt-2 transition duration-300 ease-in transform bg-gray-700 rounded-lg cursor-pointer md:flex md:items-center md:justify-between hover:scale-105">
                      <div className="flex-1 min-w-0">
                        <div
                          onClick={() => addWorkoutToPlan(6)}
                          className="flex items-center justify-center h-12"
                        >
                          <PlusIcon className="w-10 h-10 text-gray-400 transition duration-300 transform hover:scale-105" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="h-full ml-3 mr-3">
                    <div className="mb-1 font-bold text-center text-white text-md">
                      {format(
                        addDays(getDateOfISOWeek(calendar_week, year), 6),
                        "dd.MM.yyyy"
                      )}
                    </div>
                    <div className="mb-1 font-bold text-center text-green-500 text-md">
                      SONNTAG
                    </div>
                    <div
                      className={`${
                        day_7.length > 0 ? "py-1" : ""
                      } w-32 h-full rounded bg-striped-green`}
                    >
                      {day_7 && day_7.length > 0
                        ? day_7
                            .sort(
                              (a, b) =>
                                parseInt(
                                  parseInt(
                                    b.workout_time_start.replace(":", "")
                                  )
                                ) -
                                parseInt(
                                  parseInt(
                                    a.workout_time_start.replace(":", "")
                                  )
                                )
                            )
                            .reverse()
                            .map((workout) => (
                              <PlanWorkoutCard
                                workoutId={workout.workout_id}
                                workoutCompleted={workout.workout_completed}
                                workoutTimeStart={workout.workout_time_start}
                                workoutTimeEnd={workout.workout_time_end}
                                workoutTrackedTime={
                                  workout.workout_tracked_time
                                }
                                day="7"
                                language={language}
                                callbackFindAndRemoveWorkoutFromPlan={
                                  updateRemoveWorkoutFromPlan
                                }
                                callbackUpdateWorkoutWithinPlan={
                                  updateWorkoutWithinPlan
                                }
                                userId={userId}
                              />
                            ))
                        : ""}
                    </div>
                    <div className="p-8 py-2 mt-2 transition duration-300 ease-in transform bg-gray-700 rounded-lg cursor-pointer md:flex md:items-center md:justify-between hover:scale-105">
                      <div className="flex-1 min-w-0">
                        <div
                          onClick={() => addWorkoutToPlan(7)}
                          className="flex items-center justify-center h-12"
                        >
                          <PlusIcon className="w-10 h-10 text-gray-400 transition duration-300 transform hover:scale-105" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlanCard;
