import React, { useState, useEffect } from "react";
import { PlusIcon } from "@heroicons/react/solid";
import { useSession } from "next-auth/client";

import CreatePlanModal from "./CreatePlanModal";
import PlanCard from "./PlanCard";

const PlansSection = ({ language }) => {
  const [session] = useSession();
  const [fetchedUserWeeklyPlans, setFetchedUserWeeklyPlans] = useState([]);
  const [showCreatePlanModal, setShowCreatePlanModal] = useState(false);
  const [currentExpandedPlanCard, setCurrentExpandedPlanCard] = useState(0);
  const [searchTermCalendarWeek, setSearchTermCalendarWeek] = useState("");

  const getCurrentWeekNumber = () => {
    const date = new Date();
    const currentThursday = new Date(
      date.getTime() + (3 - ((date.getDay() + 6) % 7)) * 86400000
    );
    const yearOfThursday = currentThursday.getFullYear();
    const firstThursday = new Date(
      new Date(yearOfThursday, 0, 4).getTime() +
        (3 - ((new Date(yearOfThursday, 0, 4).getDay() + 6) % 7)) * 86400000
    );
    return Math.floor(
      1 +
        0.5 +
        (currentThursday.getTime() - firstThursday.getTime()) / 86400000 / 7
    );
  };

  const isPlanCurrentOrFuture = (plan) => {
    if (!plan) return false;

    return (
      (plan &&
        plan.year === new Date().getFullYear() &&
        plan.calendar_week >= getCurrentWeekNumber()) ||
      plan.year > new Date().getFullYear()
    );
  };

  const fetchUserWeeklyPlans = (userId) =>
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
          .then((data) =>
            setFetchedUserWeeklyPlans(
              data.weeklyWorkoutPlans.sort(
                (a, b) =>
                  parseInt(b.year) +
                  parseInt(b.calendar_week) +
                  parseInt(b.id) -
                  (parseInt(a.year) +
                    parseInt(a.calendar_week) +
                    parseInt(a.id))
              )
            )
          )
          .catch((e) => console.log(e))
      )
      .catch((e) => console.log(e));

  const refetchPlans = () => {
    setFetchedUserWeeklyPlans([]);
    fetchUserWeeklyPlans(session.user.id);
  };

  useEffect(() => {
    if (session) {
      fetchUserWeeklyPlans(session.user.id);
      isPlanCurrentOrFuture();
    }
  }, []);

  return (
    <div
      className="relative z-0 flex-1 pb-8 overflow-y-auto"
      data-aos="fade-up"
    >
      <div className="bg-gray-900">
        <div className="px-4 sm:px-6 lg:max-w-6xl lg:mx-auto lg:px-8">
          <h2 className="max-w-6xl pl-1 mx-auto mt-8 text-2xl font-medium leading-6 text-white select-none">
            {language === "DE" ? "Deine Trainingspl??ne" : "Your Workoutplans"}
          </h2>
          <h2 className="max-w-6xl pl-1 mx-auto mt-8 text-xl font-medium leading-6 text-white select-none">
            {language === "DE"
              ? "Suche nach Kalenderwochenzahl"
              : "Search By Calendar Week Number"}
          </h2>
          <div className="w-full mt-5">
            <input
              value={searchTermCalendarWeek}
              type="text"
              id="searchterm-input"
              maxLength="40"
              onChange={(event) =>
                setSearchTermCalendarWeek(event.target.value)
              }
              className="iphonebg border !bg-gray-600 border-transparent text-2xl font-bold !text-green-500 select-none text-center rounded-md placeholder-green-700 w-full"
            ></input>
          </div>
          <h2 className="max-w-6xl pl-1 mx-auto mt-8 text-xl font-medium leading-6 text-white select-none">
            {language === "DE" ? "Aktuelle Pl??ne" : "Current Plans"}
          </h2>

          {showCreatePlanModal && (
            <CreatePlanModal
              setShowCreatePlanModal={setShowCreatePlanModal}
              showCreatePlanModal={showCreatePlanModal}
              refetchPlans={refetchPlans}
              getCurrentWeekNumber={getCurrentWeekNumber}
              userId={session.user.id}
              language={language}
            />
          )}
          <div className="p-8 py-6 mt-5 transition duration-300 ease-in transform bg-gray-700 rounded-lg cursor-pointer md:flex md:items-center md:justify-between hover:scale-105">
            <div className="flex-1 min-w-0">
              <div
                onClick={() => setShowCreatePlanModal(true)}
                className="flex items-center justify-center h-12"
              >
                <PlusIcon className="w-10 h-10 text-gray-400" />
              </div>
            </div>
          </div>
          {fetchedUserWeeklyPlans.length > 0 && searchTermCalendarWeek
            ? fetchedUserWeeklyPlans
                .filter((plan) => isPlanCurrentOrFuture(plan))
                .filter(
                  (plan) =>
                    parseInt(plan.calendar_week) ===
                    parseInt(searchTermCalendarWeek)
                )
                .sort((a, b) => a.calendar_week - b.calendar_week)
                .sort((a, b) => a.year - b.year)
                .reverse()
                .map((plan) => (
                  <PlanCard
                    key={plan.id}
                    id={plan.id}
                    name={plan.name}
                    year={plan.year}
                    calendar_week={plan.calendar_week}
                    day_1={plan.day_1}
                    day_2={plan.day_2}
                    day_3={plan.day_3}
                    day_4={plan.day_4}
                    day_5={plan.day_5}
                    day_6={plan.day_6}
                    day_7={plan.day_7}
                    language={language}
                    refetchPlans={refetchPlans}
                    currentExpandedPlanCard={currentExpandedPlanCard}
                    setCurrentExpandedPlanCard={setCurrentExpandedPlanCard}
                    wholePlan={plan}
                    userId={session.user.id}
                    gender={session.user.gender}
                  />
                ))
            : fetchedUserWeeklyPlans
                .filter((plan) => isPlanCurrentOrFuture(plan))
                .sort((a, b) => a.calendar_week - b.calendar_week)
                .sort((a, b) => a.year - b.year)
                .reverse()
                .map((plan) => (
                  <PlanCard
                    key={plan.id}
                    id={plan.id}
                    name={plan.name}
                    year={plan.year}
                    calendar_week={plan.calendar_week}
                    day_1={plan.day_1}
                    day_2={plan.day_2}
                    day_3={plan.day_3}
                    day_4={plan.day_4}
                    day_5={plan.day_5}
                    day_6={plan.day_6}
                    day_7={plan.day_7}
                    language={language}
                    refetchPlans={refetchPlans}
                    currentExpandedPlanCard={currentExpandedPlanCard}
                    setCurrentExpandedPlanCard={setCurrentExpandedPlanCard}
                    wholePlan={plan}
                    userId={session.user.id}
                    gender={session.user.gender}
                  />
                ))}
          <h2 className="max-w-6xl pl-1 mx-auto mt-8 text-xl font-medium leading-6 text-white select-none">
            {language === "DE" ? "Vergangene Pl??ne" : "Past Plans"}
          </h2>
          {fetchedUserWeeklyPlans.length > 0 && searchTermCalendarWeek
            ? fetchedUserWeeklyPlans
                .filter((plan) => !isPlanCurrentOrFuture(plan))
                .filter(
                  (plan) =>
                    parseInt(plan.calendar_week) ===
                    parseInt(searchTermCalendarWeek)
                )
                .sort((a, b) => a.calendar_week - b.calendar_week)
                .sort((a, b) => a.year - b.year)
                .reverse()
                .map((plan) => (
                  <PlanCard
                    key={plan.id}
                    id={plan.id}
                    name={plan.name}
                    year={plan.year}
                    calendar_week={plan.calendar_week}
                    day_1={plan.day_1}
                    day_2={plan.day_2}
                    day_3={plan.day_3}
                    day_4={plan.day_4}
                    day_5={plan.day_5}
                    day_6={plan.day_6}
                    day_7={plan.day_7}
                    language={language}
                    refetchPlans={refetchPlans}
                    currentExpandedPlanCard={currentExpandedPlanCard}
                    setCurrentExpandedPlanCard={setCurrentExpandedPlanCard}
                    wholePlan={plan}
                    userId={session.user.id}
                    gender={session.user.gender}
                  />
                ))
            : fetchedUserWeeklyPlans
                .filter((plan) => !isPlanCurrentOrFuture(plan))
                .sort((a, b) => a.calendar_week - b.calendar_week)
                .sort((a, b) => a.year - b.year)
                .reverse()
                .map((plan) => (
                  <PlanCard
                    key={plan.id}
                    id={plan.id}
                    name={plan.name}
                    year={plan.year}
                    calendar_week={plan.calendar_week}
                    day_1={plan.day_1}
                    day_2={plan.day_2}
                    day_3={plan.day_3}
                    day_4={plan.day_4}
                    day_5={plan.day_5}
                    day_6={plan.day_6}
                    day_7={plan.day_7}
                    language={language}
                    refetchPlans={refetchPlans}
                    currentExpandedPlanCard={currentExpandedPlanCard}
                    setCurrentExpandedPlanCard={setCurrentExpandedPlanCard}
                    wholePlan={plan}
                    userId={session.user.id}
                    gender={session.user.gender}
                  />
                ))}
        </div>
      </div>
    </div>
  );
};

export default PlansSection;
