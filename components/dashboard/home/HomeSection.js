import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useSession } from "next-auth/client";
import { Calendar, momentLocalizer } from "react-big-calendar";
import withDragAndDrop from "react-big-calendar/lib/addons/dragAndDrop";
import moment from "moment";
import "moment/locale/de";
import "react-big-calendar/lib/addons/dragAndDrop/styles.css";
import "react-big-calendar/lib/css/react-big-calendar.css";
import {
  ClockIcon,
  CheckCircleIcon,
  CalendarIcon,
  ChartBarIcon,
  KeyIcon,
} from "@heroicons/react/solid";
import { format, addDays } from "date-fns";

import OnboardingModal from "./OnboardingModal";

const HomeSection = ({ language }) => {
  const [session] = useSession();

  if (language && language === "DE") {
    moment.locale("de");
  } else if (language && language === "EN") {
    moment.locale("en");
  }

  const localizer = momentLocalizer(moment);

  function getDateOfISOWeek(w, y) {
    var simple = new Date(y, 0, 1 + (w - 1) * 7);
    var dow = simple.getDay();
    var ISOweekStart = simple;
    if (dow <= 4) ISOweekStart.setDate(simple.getDate() - simple.getDay() + 1);
    else ISOweekStart.setDate(simple.getDate() + 8 - simple.getDay());
    return ISOweekStart;
  }

  const findStartOfPlanDay = (planDay, date) => {
    let earliestStartTime = "23:59";

    planDay.forEach((workout) => {
      if (
        parseInt(workout.workout_time_start.replace(":", "")) <=
        parseInt(earliestStartTime.replace(":", ""))
      )
        earliestStartTime = workout.workout_time_start;
    });

    return moment({
      year: parseInt(date.split(".")[2]),
      month: parseInt(date.split(".")[1] - 1),
      day: parseInt(date.split(".")[0]),
      hour: parseInt(earliestStartTime.split(":")[0]),
      minute: parseInt(earliestStartTime.split(":")[1]),
    })._d;
  };

  const findEndOfPlanDay = (planDay, date) => {
    let latestEndTime = "00:01";

    planDay.forEach((workout) => {
      if (
        parseInt(workout.workout_time_end.replace(":", "")) >=
        parseInt(latestEndTime.replace(":", ""))
      )
        latestEndTime = workout.workout_time_end;
    });

    return moment({
      year: parseInt(date.split(".")[2]),
      month: parseInt(date.split(".")[1]) - 1,
      day: parseInt(date.split(".")[0]),
      hour: parseInt(latestEndTime.split(":")[0]),
      minute: parseInt(latestEndTime.split(":")[1]),
    })._d;
  };

  const convertWeeklyPlansToForEventList = (plansArray) => {
    let planPerDayArray = [];
    plansArray.forEach((plan) => {
      if (plan.day_1.length > 0)
        planPerDayArray.push({
          title: plan.name,
          start: findStartOfPlanDay(
            plan.day_1,
            format(
              getDateOfISOWeek(plan.calendar_week, plan.year),
              "dd.MM.yyyy"
            )
          ),
          end: findEndOfPlanDay(
            plan.day_1,
            format(
              getDateOfISOWeek(plan.calendar_week, plan.year),
              "dd.MM.yyyy"
            )
          ),
        });

      if (plan.day_2.length > 0)
        planPerDayArray.push({
          title: plan.name,
          start: findStartOfPlanDay(
            plan.day_2,
            format(
              addDays(getDateOfISOWeek(plan.calendar_week, plan.year), 1),
              "dd.MM.yyyy"
            )
          ),
          end: findEndOfPlanDay(
            plan.day_2,
            format(
              addDays(getDateOfISOWeek(plan.calendar_week, plan.year), 1),
              "dd.MM.yyyy"
            )
          ),
        });

      if (plan.day_3.length > 0)
        planPerDayArray.push({
          title: plan.name,
          start: findStartOfPlanDay(
            plan.day_3,
            format(
              addDays(getDateOfISOWeek(plan.calendar_week, plan.year), 2),
              "dd.MM.yyyy"
            )
          ),
          end: findEndOfPlanDay(
            plan.day_3,
            format(
              addDays(getDateOfISOWeek(plan.calendar_week, plan.year), 2),
              "dd.MM.yyyy"
            )
          ),
        });

      if (plan.day_4.length > 0)
        planPerDayArray.push({
          title: plan.name,
          start: findStartOfPlanDay(
            plan.day_4,
            format(
              addDays(getDateOfISOWeek(plan.calendar_week, plan.year), 3),
              "dd.MM.yyyy"
            )
          ),
          end: findEndOfPlanDay(
            plan.day_4,
            format(
              addDays(getDateOfISOWeek(plan.calendar_week, plan.year), 3),
              "dd.MM.yyyy"
            )
          ),
        });

      if (plan.day_5.length > 0)
        planPerDayArray.push({
          title: plan.name,
          start: findStartOfPlanDay(
            plan.day_5,
            format(
              addDays(getDateOfISOWeek(plan.calendar_week, plan.year), 4),
              "dd.MM.yyyy"
            )
          ),
          end: findEndOfPlanDay(
            plan.day_5,
            format(
              addDays(getDateOfISOWeek(plan.calendar_week, plan.year), 4),
              "dd.MM.yyyy"
            )
          ),
        });

      if (plan.day_6.length > 0)
        planPerDayArray.push({
          title: plan.name,
          start: findStartOfPlanDay(
            plan.day_6,
            format(
              addDays(getDateOfISOWeek(plan.calendar_week, plan.year), 5),
              "dd.MM.yyyy"
            )
          ),
          end: findEndOfPlanDay(
            plan.day_6,
            format(
              addDays(getDateOfISOWeek(plan.calendar_week, plan.year), 5),
              "dd.MM.yyyy"
            )
          ),
        });

      if (plan.day_7.length > 0)
        planPerDayArray.push({
          title: plan.name,
          start: findStartOfPlanDay(
            plan.day_7,
            format(
              addDays(getDateOfISOWeek(plan.calendar_week, plan.year), 6),
              "dd.MM.yyyy"
            )
          ),
          end: findEndOfPlanDay(
            plan.day_7,
            format(
              addDays(getDateOfISOWeek(plan.calendar_week, plan.year), 6),
              "dd.MM.yyyy"
            )
          ),
        });
    });

    return planPerDayArray;
  };

  const [myEventsList, setMyEventsList] = useState([]);

  const DnDCalendar = withDragAndDrop(Calendar);

  const onEventResize = (data) => {
    const { start, end } = data;
    myEventsList[0].start = start;
    myEventsList[0].end = end;
    return [...myEventsList];
  };

  const onEventDrop = (data) => console.log(data);

  const [fetchedUserPlans, setFetchedUserPlans] = useState([]);

  const fetchUserPlans = (userId) =>
    fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}` +
        `/weekly-workout-plans/userid/${userId}`,
      {
        method: "get",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: session.user.id,
        },
      }
    )
      .then((response) =>
        response
          .json()
          .then((data) => {
            if (response.status === 200 && data.weeklyWorkoutPlans) {
              setFetchedUserPlans(data.weeklyWorkoutPlans);
              setMyEventsList(
                convertWeeklyPlansToForEventList(data.weeklyWorkoutPlans)
              );
            }
          })
          .catch((e) => console.log(e))
      )
      .catch((e) => console.log(e));

  const isMoreThanNinetyPercentOfWorkoutsCompleted = (workoutCompletedArray) =>
    workoutCompletedArray.filter((element) => element === "completed").length /
      workoutCompletedArray.length >=
    0.9;

  // A day of a plan is counted as complete when 90 % or more of the workouts of that day are completed. When all days are complete the plan is counted as complete.
  const calculateCompletedTrainingWeeks = (fetchedUserPlans) => {
    let weeklyPlanCompletedCount = 0;
    let workoutCompletedArray = [];
    let dayCompleted = [];

    fetchedUserPlans.forEach((plan) => {
      if (plan.day_1.length > 0) {
        plan.day_1.forEach((workout) => {
          if (workout.workout_completed === "yes")
            workoutCompletedArray.push("completed");
        });

        if (
          workoutCompletedArray.length > 0 &&
          isMoreThanNinetyPercentOfWorkoutsCompleted(workoutCompletedArray)
        ) {
          dayCompleted.push("completed");
          workoutCompletedArray = [];
        }
      }

      if (plan.day_2.length > 0) {
        plan.day_2.forEach((workout) => {
          if (workout.workout_completed === "yes")
            workoutCompletedArray.push("completed");
        });

        if (
          workoutCompletedArray.length > 0 &&
          isMoreThanNinetyPercentOfWorkoutsCompleted(workoutCompletedArray)
        ) {
          dayCompleted.push("completed");
          workoutCompletedArray = [];
        }
      }

      if (plan.day_3.length > 0) {
        plan.day_3.forEach((workout) => {
          if (workout.workout_completed === "yes")
            workoutCompletedArray.push("completed");
        });

        if (
          workoutCompletedArray.length > 0 &&
          isMoreThanNinetyPercentOfWorkoutsCompleted(workoutCompletedArray)
        ) {
          dayCompleted.push("completed");
          workoutCompletedArray = [];
        }
      }

      if (plan.day_4.length > 0) {
        plan.day_4.forEach((workout) => {
          if (workout.workout_completed === "yes")
            workoutCompletedArray.push("completed");
        });

        if (
          workoutCompletedArray.length > 0 &&
          isMoreThanNinetyPercentOfWorkoutsCompleted(workoutCompletedArray)
        ) {
          dayCompleted.push("completed");
          workoutCompletedArray = [];
        }
      }

      if (plan.day_5.length > 0) {
        plan.day_5.forEach((workout) => {
          if (workout.workout_completed === "yes")
            workoutCompletedArray.push("completed");
        });

        if (
          workoutCompletedArray.length > 0 &&
          isMoreThanNinetyPercentOfWorkoutsCompleted(workoutCompletedArray)
        ) {
          dayCompleted.push("completed");
          workoutCompletedArray = [];
        }
      }

      if (plan.day_6.length > 0) {
        plan.day_6.forEach((workout) => {
          if (workout.workout_completed === "yes")
            workoutCompletedArray.push("completed");
        });

        if (
          workoutCompletedArray.length > 0 &&
          isMoreThanNinetyPercentOfWorkoutsCompleted(workoutCompletedArray)
        ) {
          dayCompleted.push("completed");
          workoutCompletedArray = [];
        }
      }

      if (plan.day_7.length > 0) {
        plan.day_7.forEach((workout) => {
          if (workout.workout_completed === "yes")
            workoutCompletedArray.push("completed");
        });

        if (
          workoutCompletedArray.length > 0 &&
          isMoreThanNinetyPercentOfWorkoutsCompleted(workoutCompletedArray)
        ) {
          dayCompleted.push("completed");
          workoutCompletedArray = [];
        }
      }

      let daysWithWorkoutsCount = 0;
      if (plan.day_1.length > 0) {
        daysWithWorkoutsCount++;
      }
      if (plan.day_2.length > 0) {
        daysWithWorkoutsCount++;
      }
      if (plan.day_3.length > 0) {
        daysWithWorkoutsCount++;
      }
      if (plan.day_4.length > 0) {
        daysWithWorkoutsCount++;
      }
      if (plan.day_5.length > 0) {
        daysWithWorkoutsCount++;
      }
      if (plan.day_6.length > 0) {
        daysWithWorkoutsCount++;
      }
      if (plan.day_7.length > 0) {
        daysWithWorkoutsCount++;
      }

      if (
        dayCompleted.length > 0 &&
        dayCompleted.length === daysWithWorkoutsCount
      ) {
        weeklyPlanCompletedCount++;
        dayCompleted = [];
      }
    });
    return weeklyPlanCompletedCount;
  };

  const calculateCompletedWorkoutTimeInHours = (fetchedUserPlans) => {
    let totalWorkoutTime = 0;

    fetchedUserPlans.forEach((plan) => {
      if (plan.day_1.length > 0) {
        plan.day_1.forEach((workout) => {
          if (
            workout.workout_completed === "yes" &&
            workout.workout_tracked_time
          ) {
            totalWorkoutTime += parseInt(workout.workout_tracked_time);
          }
        });
      }

      if (plan.day_2.length > 0) {
        plan.day_2.forEach((workout) => {
          if (
            workout.workout_completed === "yes" &&
            workout.workout_tracked_time
          ) {
            totalWorkoutTime += parseInt(workout.workout_tracked_time);
          }
        });
      }

      if (plan.day_3.length > 0) {
        plan.day_3.forEach((workout) => {
          if (
            workout.workout_completed === "yes" &&
            workout.workout_tracked_time
          ) {
            totalWorkoutTime += parseInt(workout.workout_tracked_time);
          }
        });
      }

      if (plan.day_4.length > 0) {
        plan.day_4.forEach((workout) => {
          if (
            workout.workout_completed === "yes" &&
            workout.workout_tracked_time
          ) {
            totalWorkoutTime += parseInt(workout.workout_tracked_time);
          }
        });
      }

      if (plan.day_5.length > 0) {
        plan.day_5.forEach((workout) => {
          if (
            workout.workout_completed === "yes" &&
            workout.workout_tracked_time
          ) {
            totalWorkoutTime += parseInt(workout.workout_tracked_time);
          }
        });
      }

      if (plan.day_6.length > 0) {
        plan.day_6.forEach((workout) => {
          if (
            workout.workout_completed === "yes" &&
            workout.workout_tracked_time
          ) {
            totalWorkoutTime += parseInt(workout.workout_tracked_time);
          }
        });
      }

      if (plan.day_7.length > 0) {
        plan.day_7.forEach((workout) => {
          if (
            workout.workout_completed === "yes" &&
            workout.workout_tracked_time
          ) {
            totalWorkoutTime += parseInt(workout.workout_tracked_time);
          }
        });
      }
    });

    return totalWorkoutTime / 3600;
  };

  const calculateCompletedWorkoutWeightInTons = (fetchedUserPlans) => {
    let totalWorkoutWeight = 0;

    fetchedUserPlans.forEach((plan) => {
      if (plan.day_1.length > 0) {
        plan.day_1.forEach((workout) => {
          if (
            workout.workout_completed === "yes" &&
            workout.workout_equipment_weight_in_kilo
          ) {
            totalWorkoutWeight += parseInt(workout.equipment_weight_in_kilo);
          }
        });
      }

      if (plan.day_2.length > 0) {
        plan.day_2.forEach((workout) => {
          if (
            workout.workout_completed === "yes" &&
            workout.workout_equipment_weight_in_kilo
          ) {
            totalWorkoutWeight += parseInt(workout.equipment_weight_in_kilo);
          }
        });
      }

      if (plan.day_3.length > 0) {
        plan.day_3.forEach((workout) => {
          if (
            workout.workout_completed === "yes" &&
            workout.workout_equipment_weight_in_kilo
          ) {
            totalWorkoutWeight += parseInt(workout.equipment_weight_in_kilo);
          }
        });
      }

      if (plan.day_4.length > 0) {
        plan.day_4.forEach((workout) => {
          if (
            workout.workout_completed === "yes" &&
            workout.workout_equipment_weight_in_kilo
          ) {
            totalWorkoutWeight += parseInt(workout.equipment_weight_in_kilo);
          }
        });
      }

      if (plan.day_5.length > 0) {
        plan.day_5.forEach((workout) => {
          if (
            workout.workout_completed === "yes" &&
            workout.workout_equipment_weight_in_kilo
          ) {
            totalWorkoutWeight += parseInt(workout.equipment_weight_in_kilo);
          }
        });
      }

      if (plan.day_6.length > 0) {
        plan.day_6.forEach((workout) => {
          if (
            workout.workout_completed === "yes" &&
            workout.workout_equipment_weight_in_kilo
          ) {
            totalWorkoutWeight += parseInt(workout.equipment_weight_in_kilo);
          }
        });
      }

      if (plan.day_7.length > 0) {
        plan.day_7.forEach((workout) => {
          if (
            workout.workout_completed === "yes" &&
            workout.workout_equipment_weight_in_kilo
          ) {
            totalWorkoutWeight += parseInt(workout.equipment_weight_in_kilo);
          }
        });
      }
    });
    return totalWorkoutWeight / 1000;
  };

  const cards = [
    {
      name: `${
        language === "DE"
          ? "Absolvierte Trainingswochen"
          : "Training Weeks Completed"
      }`, // Fetch users weekly workout plans and count each where there is a workout and is minimum last week+
      icon: CalendarIcon,
      amount:
        fetchedUserPlans.length > 0 &&
        calculateCompletedTrainingWeeks(fetchedUserPlans)
          ? calculateCompletedTrainingWeeks(fetchedUserPlans) +
            ` ${language === "DE" ? "Wochen" : "Weeks"}`
          : ` ${
              language === "DE"
                ? "Starte deine 1. Trainingwoche"
                : "Start your first week"
            }`,
    },
    {
      name: `${language === "DE" ? "Trainingszeit" : "Training Time"}`,
      icon: ClockIcon,
      amount:
        fetchedUserPlans.length > 0 &&
        calculateCompletedWorkoutTimeInHours(fetchedUserPlans)
          ? Math.floor(calculateCompletedWorkoutTimeInHours(fetchedUserPlans)) +
            ` ${language === "DE" ? "Stunden" : "Hours"}`
          : "0" + ` ${language === "DE" ? "Stunden" : "Hours"}`,
    },
    {
      name: `${language === "DE" ? "Bewegtes Gewicht" : "Moved Weight"}`,
      icon: ChartBarIcon,
      amount:
        fetchedUserPlans.length > 0 &&
        calculateCompletedWorkoutWeightInTons(fetchedUserPlans)
          ? Math.floor(
              calculateCompletedWorkoutWeightInTons(fetchedUserPlans)
            ) + ` ${language === "DE" ? "Tonnen" : "Tons"}`
          : "0" + ` ${language === "DE" ? "Tonnen" : "Tons"}`,
    },
  ];

  const [showOnboardingModal, setShowOnboardingModal] = useState(false);

  useEffect(() => {
    if (
      session &&
      (!session.user?.image || !session.user?.name || !session.user?.gender)
    ) {
      setShowOnboardingModal(true);
    }

    if (session && session.user?.id) fetchUserPlans(session.user.id);
  }, []);

  return (
    <div
      className="relative z-0 flex-1 pb-8 overflow-y-auto"
      data-aos="fade-up"
    >
      {showOnboardingModal ? (
        <OnboardingModal
          id={session.user?.id}
          image={session.user?.image}
          name={session.user?.name}
          gender={session.user?.gender}
          showOnboardingModal={showOnboardingModal}
          language={language}
          session={session}
        />
      ) : (
        ""
      )}
      <div className="bg-gray-900">
        <div className="px-4 sm:px-6 lg:max-w-6xl lg:mx-auto lg:px-8">
          <div className="p-8 py-6 mt-8 bg-gray-700 rounded-lg md:flex md:items-center md:justify-between">
            <div className="flex-1 min-w-0">
              <div className="flex items-center ">
                <img
                  className="w-20 h-20 rounded-full select-none iphone:hidden"
                  src={
                    session && session.user && session.user.image
                      ? session.user.image
                      : "https://i.pravatar.cc/300"
                  }
                  alt="Fitness Time User Avatar"
                />
                <div>
                  <div className="flex items-center">
                    <img
                      className="w-20 h-20 rounded-full select-none sm:hidden"
                      src={
                        session && session.user && session.user.image
                          ? session.user.image
                          : "https://i.pravatar.cc/300"
                      }
                      alt="Fitness Time User Avatar"
                    />
                    <h1 className="ml-3 text-3xl font-bold leading-7 text-white select-none sm:leading-9 sm:truncate">
                      {language && language === "DE" ? "Willkommen" : "Welcome"}
                      ,{" "}
                      {session
                        ? session.user
                          ? session.user.name
                            ? session.user.name
                            : session.user.email
                          : "NoUserOnSession"
                        : "NoSessionTestName"}
                    </h1>
                  </div>
                  <dl className="flex flex-col mt-6 sm:ml-3 sm:mt-1 sm:flex-row sm:flex-wrap">
                    <dt className="sr-only">Membership</dt>
                    <dd className="flex items-center font-medium text-gray-400 select-none text-md sm:mr-6">
                      <ClockIcon
                        className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400"
                        aria-hidden="true"
                      />
                      {language && language === "DE"
                        ? "Dabei seit "
                        : "Joined at "}
                      {session && moment(session.user.createdAt).format("L")}
                    </dd>
                    <dt className="sr-only">Account status</dt>
                    <dd className="flex items-center mt-3 font-medium text-gray-400 capitalize select-none ttext-md sm:mr-6 sm:mt-0">
                      <CheckCircleIcon
                        className="flex-shrink-0 mr-1.5 h-5 w-5 text-green-400"
                        aria-hidden="true"
                      />
                      {language && language === "DE"
                        ? "Verifizierter Nutzer"
                        : "Verified User"}
                    </dd>
                    {session.user.role === "admin" ? (
                      <dd className="flex items-center mt-3 font-medium text-gray-400 capitalize select-none ttext-md sm:mr-6 sm:mt-0">
                        <KeyIcon
                          className="flex-shrink-0 mr-1.5 h-5 w-5 text-yellow-400"
                          aria-hidden="true"
                        />
                        Admin
                      </dd>
                    ) : (
                      ""
                    )}
                  </dl>
                </div>
              </div>
            </div>
            <div className="flex mt-6 space-x-3 md:mt-0 md:ml-4 iphone:justify-center">
              <div>
                <Link href="/auth/logout">
                  <div className="inline-block p-2 ml-5 font-semibold text-white bg-red-400 border border-transparent border-green-500 rounded cursor-pointer select-none hover:bg-red-300 iphone:!w-40 iphone:text-center">
                    {language && language === "DE" ? "Ausloggen" : "SignOut"}
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-8">
        <div className="max-w-6xl px-4 mx-auto sm:px-6 lg:px-8">
          <h2 className="pb-2 text-2xl font-medium leading-6 text-white select-none">
            {language && language === "DE"
              ? "Deine Erfolge"
              : "Your achievements"}
          </h2>
          <div className="grid grid-cols-1 gap-5 mt-2 sm:grid-cols-2 lg:grid-cols-3">
            {/* Card */}
            {cards.map((card) => (
              <div
                key={card.name}
                className="overflow-hidden transition duration-300 ease-in transform bg-gray-700 border-green-500 rounded-lg shadow hover:scale-105"
              >
                <div className="p-5">
                  <div className="flex items-center">
                    <div className="flex-shrink-0">
                      <card.icon
                        className="w-6 h-6 text-gray-400"
                        aria-hidden="true"
                      />
                    </div>
                    <div className="flex-1 w-0 ml-5">
                      <dl>
                        <dt className="text-lg font-medium text-gray-400 truncate select-none">
                          {card.name}
                        </dt>
                        <dd>
                          <div className="text-xl font-medium text-green-500 select-none">
                            {card.amount}
                          </div>
                        </dd>
                      </dl>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Calendar Section */}
        <div>
          <h2 className="max-w-6xl px-4 pb-4 mx-auto mt-8 text-2xl font-medium leading-6 text-white select-none sm:px-6 lg:px-8">
            {language && language === "DE"
              ? "Dein Trainingskalender"
              : "Your Training Calendar"}
          </h2>

          {/* Activity list (smallest breakpoint only) */}

          <div className="max-w-6xl p-4 mx-auto text-gray-300 rounded-lg bg-gray-700/25 sm:px-6 lg:max-w-6xl lg:mx-auto lg:px-8">
            <DnDCalendar
              defaultDate={moment().toDate()}
              defaultView="month"
              events={myEventsList}
              localizer={localizer}
              onEventDrop={onEventDrop}
              onEventResize={onEventResize}
              resizable
              style={{ height: "100vh" }}
              messages={{
                next: `${language && language === "DE" ? "Weiter" : "Next"}`,
                allDay: `${
                  language && language === "DE" ? "Ganzer Tag" : "All Day"
                }`,
                previous: `${
                  language && language === "DE" ? "Zurück" : "Previous"
                }`,
                today: `${language && language === "DE" ? "Heute" : "Today"}`,
                month: `${language && language === "DE" ? "Monat" : "Month"}`,
                week: `${language && language === "DE" ? "Woche" : "Week"}`,
                day: `${language && language === "DE" ? "Tag" : "Day"}`,
                agenda: `${
                  language && language === "DE" ? "Übersicht" : "Agenda"
                }`,
                date: `${language && language === "DE" ? "Datum" : "Date"}`,
                time: `${language && language === "DE" ? "Zeit" : "Time"}`,
                event: `${language && language === "DE" ? "Event" : "Event"}`,
              }}
            />
          </div>
        </div>

        {/* History Section */}
        {/* <div>
          <h2 className="max-w-6xl px-4 pb-2 mx-auto mt-8 text-2xl font-medium leading-6 text-white select-none sm:px-6 lg:px-8">
            {language && language === "DE"
              ? "Deine Trainingshistorie"
              : "Your Training History"}
          </h2>

         
          <div className="flex-col p-8 py-6 mt-3 mb-12 text-gray-300 bg-gray-700 rounded-md select-none sm:px-6 lg:max-w-6xl lg:mx-auto lg:px-10 md:flex md:items-center md:justify-between">
           
            Test
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default HomeSection;
