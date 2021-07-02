import React, { useState, useEffect } from "react";
import { useSession } from "next-auth/client";

import EditWorkoutModal from "./EditWorkoutModal";
import CreateWorkoutModal from "./CreateWorkoutModal";
import WorkoutCard from "./WorkoutCard";

const ADMIN_ID = 12;

const findMuscleGroup = (gender, muscleInput, language, ImageInstead) => {
  let parsedMuscleGroup = "";
  switch (muscleInput) {
    case "Chest":
    case "Chestmuscles":
    case "Brustmuskel":
      ImageInstead
        ? (parsedMuscleGroup = `./muscle-groups/chest-${gender}.png`)
        : language === "DE"
        ? (parsedMuscleGroup = "Brustmuskel")
        : (parsedMuscleGroup = "Chest");
      break;
    case "Shoulders":
    case "Shouldersmuscles":
    case "Schulternmuskel":
      ImageInstead
        ? (parsedMuscleGroup = `./muscle-groups/shoulders-${gender}.png`)
        : language === "DE"
        ? (parsedMuscleGroup = "Schulternmuskel")
        : (parsedMuscleGroup = "Shoulders");
      break;
    case "Biceps":
    case "Bicepsmuscles":
    case "Bizepsmuskel":
      ImageInstead
        ? (parsedMuscleGroup = `./muscle-groups/biceps-${gender}.png`)
        : language === "DE"
        ? (parsedMuscleGroup = "Bizepsmuskel")
        : (parsedMuscleGroup = "Biceps");
      break;
    case "Triceps":
    case "Tricepsmuscles":
    case "Trizepsmuskel":
      ImageInstead
        ? (parsedMuscleGroup = `./muscle-groups/triceps-${gender}.png`)
        : language === "DE"
        ? (parsedMuscleGroup = "Trizepsmuskel")
        : (parsedMuscleGroup = "Triceps");
      break;
    case "Abs":
    case "Absmuscles":
    case "Bauchmuskel":
      ImageInstead
        ? (parsedMuscleGroup = `./muscle-groups/abs-${gender}.png`)
        : language === "DE"
        ? (parsedMuscleGroup = "Bauchmuskel")
        : (parsedMuscleGroup = "Abs");
      break;
    case "Back":
    case "Backmuscles":
    case "Rückenmuskel":
      ImageInstead
        ? (parsedMuscleGroup = `./muscle-groups/back-${gender}.png`)
        : language === "DE"
        ? (parsedMuscleGroup = "Rückenmuskel")
        : (parsedMuscleGroup = "Back");
      break;
    case "Quads":
    case "Quadsmuscles":
    case "Oberschenkelmuskel":
      ImageInstead
        ? (parsedMuscleGroup = `./muscle-groups/quads-${gender}.png`)
        : language === "DE"
        ? (parsedMuscleGroup = "Oberschenkelmuskel")
        : (parsedMuscleGroup = "Quads");
      break;
    case "Hams":
    case "Hamsmuscles":
    case "Beinbeugemuskel":
      ImageInstead
        ? (parsedMuscleGroup = `./muscle-groups/hams-${gender}.png`)
        : language === "DE"
        ? (parsedMuscleGroup = "Beinbeugemuskel")
        : (parsedMuscleGroup = "Hams");
      break;
    case "Calves":
    case "Calvesmuscles":
    case "Wadenmuskel":
      ImageInstead
        ? (parsedMuscleGroup = `./muscle-groups/calves-${gender}.png`)
        : language === "DE"
        ? (parsedMuscleGroup = "Wadenmuskel")
        : (parsedMuscleGroup = "Calves");
      break;
    case "Glutes":
    case "Glutesmuscles":
    case "Gesäßmuskel":
      ImageInstead
        ? (parsedMuscleGroup = `./muscle-groups/glutes-${gender}.png`)
        : language === "DE"
        ? (parsedMuscleGroup = "Gesäßmuskel")
        : (parsedMuscleGroup = "Glutes");
      break;
    default:
      parsedMuscleGroup = "unknown";
      break;
  }
  return parsedMuscleGroup;
};

const WorkoutsSection = ({ language }) => {
  const [session] = useSession();
  const [fetchedUserWorkouts, setFetchedUserWorkouts] = useState([]);
  const [showEditWorkoutModal, setShowEditWorkoutModal] = useState(false);
  const [editWorkoutData, setEditWorkoutData] = useState("");
  const [fetchedTemplateWorkouts, setFetchedTemplateWorkouts] = useState([]);
  const [gender, setGender] = useState("");
  const [showCreateWorkoutModal, setShowCreateWorkoutModal] = useState(false);

  const fetchWorkouts = (userId) =>
    fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}` + `/workouts/userid/${userId}`,
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
          .then((data) => {
            if (userId === session.user.id) {
              setFetchedUserWorkouts(data.workouts);
            } else {
              setFetchedTemplateWorkouts(data.workouts);
            }
          })
          .catch((e) => console.log(e))
      )
      .catch((e) => console.log(e));

  const reFetchWorkouts = () => {
    fetchWorkouts(session.user.id);
    fetchWorkouts(ADMIN_ID);
  };

  useEffect(() => {
    if (session) {
      fetchWorkouts(session.user.id);
      fetchWorkouts(ADMIN_ID);
      setGender(session.user.gender);
    }
  }, []);

  return (
    <>
      <div
        className="relative z-0 flex-1 pb-8 overflow-y-auto"
        data-aos="fade-up"
      >
        <div className="bg-gray-900">
          <div className="px-4 sm:px-6 lg:max-w-6xl lg:mx-auto lg:px-8">
            <h2 className="max-w-6xl pb-1 pl-1 mx-auto mt-8 mb-4 text-2xl font-medium leading-6 text-white select-none">
              {language === "DE" ? "Deine Übungen" : "Your Workouts"}
            </h2>

            <div className="grid grid-cols-2 gap-6 tabletpro:grid-cols-1 auto-rows-fr">
              <div
                onClick={() => setShowCreateWorkoutModal(true)}
                className="flex items-center justify-center transition duration-300 ease-in transform bg-gray-700 rounded-lg hover:scale-105 iphone:flex-col iphone:items-center tabletpro:m-4 tabletpro:mx-44 tablet:!mx-4 cursor-pointer"

                /* flex items-center justify-center transition duration-300 ease-in transform bg-gray-700 rounded-lg cursor-pointer select-none hover:scale-105 iphone:m-4 tabletpro:m-4 tabletpro:mx-44 */
              >
                <img
                  src="./icons/add.png"
                  alt="add icon"
                  className="object-cover w-24 h-24 rounded-l"
                />
              </div>
              {showEditWorkoutModal && (
                <EditWorkoutModal
                  editWorkoutData={editWorkoutData}
                  setShowEditWorkoutModal={setShowEditWorkoutModal}
                  showEditWorkoutModal={showEditWorkoutModal}
                  findMuscleGroup={findMuscleGroup}
                  reFetchWorkouts={reFetchWorkouts}
                  gender={gender}
                  language={language}
                />
              )}
              {showCreateWorkoutModal && (
                <CreateWorkoutModal
                  setShowCreateWorkoutModal={setShowCreateWorkoutModal}
                  showCreateWorkoutModal={showCreateWorkoutModal}
                  findMuscleGroup={findMuscleGroup}
                  reFetchWorkouts={reFetchWorkouts}
                  gender={gender}
                  language={language}
                />
              )}

              {fetchedUserWorkouts
                .sort((a, b) => a.id - b.id)
                .map((workout) => (
                  <WorkoutCard
                    id={workout.id}
                    name={workout.name}
                    repetition_count={workout.repetition_count}
                    duration_in_seconds={workout.duration_in_seconds}
                    equipment_weight_in_kilo={workout.equipment_weight_in_kilo}
                    muscle_group={workout.muscle_group}
                    workout={workout}
                    badge={language === "DE" ? "Individuell" : "Custom"}
                    setShowEditWorkoutModal={setShowEditWorkoutModal}
                    setEditWorkoutData={setEditWorkoutData}
                    findMuscleGroup={findMuscleGroup}
                    reFetchWorkouts={reFetchWorkouts}
                    gender={gender}
                    language={language}
                    key={workout.id}
                  />
                ))}

              {fetchedTemplateWorkouts
                .sort((a, b) => a.id - b.id)
                .map((workout) => (
                  <WorkoutCard
                    id={workout.id}
                    name={workout.name}
                    repetition_count={workout.repetition_count}
                    duration_in_seconds={workout.duration_in_seconds}
                    equipment_weight_in_kilo={workout.equipment_weight_in_kilo}
                    muscle_group={workout.muscle_group}
                    workout={workout}
                    badge={language === "DE" ? "Vorlage" : "Template"}
                    setShowEditWorkoutModal={setShowEditWorkoutModal}
                    setEditWorkoutData={setEditWorkoutData}
                    findMuscleGroup={findMuscleGroup}
                    gender={gender}
                    language={language}
                    key={workout.id}
                  />
                ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WorkoutsSection;
