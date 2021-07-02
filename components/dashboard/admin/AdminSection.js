import React, { useState, useEffect } from "react";
import { useSession } from "next-auth/client";
import { Disclosure } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/outline";

import WorkoutCard from "../workouts/WorkoutCard";
import EditWorkoutModal from "../workouts/EditWorkoutModal";
import { findMuscleGroup } from "../workouts/WorkoutsSection";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const ADMIN_ID = 12;

const AdminSection = ({ language }) => {
  const [session] = useSession();
  const [fetchedAllWorkouts, setFetchedAllWorkouts] = useState([]);
  const [showEditWorkoutModal, setShowEditWorkoutModal] = useState(false);
  const [gender, setGender] = useState("");

  const fetchAllWorkouts = () =>
    fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}` + `/workouts/`, {
      method: "get",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then((response) =>
        response
          .json()
          .then((data) => setFetchedAllWorkouts(data.workouts))
          .catch((e) => console.log(e))
      )
      .catch((e) => console.log(e));

  useEffect(() => {
    if (session) {
      fetchAllWorkouts();
      setGender(session.user.gender);
    }
  }, []);

  return (
    <div
      className="relative z-0 flex-1 pb-8 overflow-y-auto"
      data-aos="fade-up"
    >
      <div className="bg-gray-900">
        {console.log("ALL WORKOUTS", fetchedAllWorkouts)}
        <div className="px-4 sm:px-6 lg:max-w-6xl lg:mx-auto lg:px-8">
          <h2 className="max-w-6xl pl-1 mx-auto mt-8 text-2xl font-medium leading-6 text-white select-none">
            {language === "DE" ? "Admin Übersicht" : "Admin Overview"}
          </h2>
          <div className="p-8 py-6 mt-5 bg-gray-700 rounded-lg md:flex md:items-start md:justify-center">
            <div className="flex-col min-w-0">
              <div className="flex-col items-start justify-start h-12 cursor-pointer group">
                <Disclosure as="div" className="pt-6">
                  {({ open }) => (
                    <>
                      <dt className="text-lg">
                        <Disclosure.Button
                          className="flex items-center justify-center w-full text-left text-gray-400"
                          style={{ outline: "0px solid transparent" }}
                        >
                          <span className="mb-2 text-xl text-center text-white">
                            {language === "DE"
                              ? "Benutzerverwaltung"
                              : "User Management"}
                          </span>
                          <span className="flex items-center ml-6 h-7">
                            <ChevronDownIcon
                              className={classNames(
                                open ? "-rotate-180" : "rotate-0",
                                "h-6 w-6 transform"
                              )}
                              aria-hidden="true"
                            />
                          </span>
                        </Disclosure.Button>
                      </dt>
                      <Disclosure.Panel
                        as="dd"
                        className="pr-12 mt-2"
                        data-aos="fade-in"
                      >
                        <p className="text-base text-gray-500">
                          {fetchedAllWorkouts
                            .sort((a, b) => a.id - b.id)
                            .map((workout) => (
                              <WorkoutCard
                                id={workout.id}
                                name={workout.name}
                                repetition_count={workout.repetition_count}
                                duration_in_seconds={
                                  workout.duration_in_seconds
                                }
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
                                setShowEditWorkoutModal={
                                  setShowEditWorkoutModal
                                }
                                setEditWorkoutData={setFetchedAllWorkouts}
                                findMuscleGroup={findMuscleGroup}
                                gender={gender}
                                language={language}
                                key={workout.id}
                                admin={"yes"}
                              />
                            ))}
                        </p>
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>

                <Disclosure as="div" className="pt-6">
                  {({ open }) => (
                    <>
                      <dt className="text-lg">
                        <Disclosure.Button
                          className="flex items-center justify-center w-full text-left text-gray-400"
                          style={{ outline: "0px solid transparent" }}
                        >
                          <span className="mb-2 text-xl text-center text-white">
                            {language === "DE"
                              ? "Übungsverwaltung"
                              : "Workout Management"}
                          </span>
                          <span className="flex items-center ml-6 h-7">
                            <ChevronDownIcon
                              className={classNames(
                                open ? "-rotate-180" : "rotate-0",
                                "h-6 w-6 transform"
                              )}
                              aria-hidden="true"
                            />
                          </span>
                        </Disclosure.Button>
                      </dt>
                      <Disclosure.Panel
                        as="dd"
                        className="pr-12 mt-2"
                        data-aos="fade-in"
                      >
                        <p className="text-base text-gray-500">
                          <div
                            className="grid grid-cols-2 gap-6 tabletpro:grid-cols-1 auto-rows-fr"
                            style={{ transform: "scale(0.9)" }}
                          >
                            {fetchedAllWorkouts
                              .sort((a, b) => a.id - b.id)
                              .map((workout) => (
                                <WorkoutCard
                                  id={workout.id}
                                  name={workout.name}
                                  repetition_count={workout.repetition_count}
                                  duration_in_seconds={
                                    workout.duration_in_seconds
                                  }
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
                                  setShowEditWorkoutModal={
                                    setShowEditWorkoutModal
                                  }
                                  setEditWorkoutData={setFetchedAllWorkouts}
                                  findMuscleGroup={findMuscleGroup}
                                  reFetchWorkouts={fetchAllWorkouts}
                                  gender={gender}
                                  language={language}
                                  key={workout.id}
                                  admin={"yes"}
                                />
                              ))}
                          </div>
                        </p>
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminSection;
