import React, { useState, useEffect } from "react";
import { useSession } from "next-auth/client";

import { findMuscleGroup } from "../workouts/WorkoutsSection";
import ViewWorkoutModal from "./ViewWorkoutModal";
import InputErrorTimeModal from "./InputErrorTimeModal";

const PlanWorkoutCard = ({
  workoutId,
  workoutCompleted,
  workoutTimeStart,
  workoutTimeEnd,
  workoutTrackedTime,
  language,
}) => {
  const [session] = useSession();
  const [gender, setGender] = useState("");
  const [fetchedWorkoutDetails, setFetchedWorkoutDetails] = useState("");
  const [updateTimeStart, setUpdateTimeStart] = useState(workoutTimeStart);
  const [updateTimeEnd, setUpdateTimeEnd] = useState(workoutTimeEnd);
  const [updateCompleted, setUpdateCompleted] = useState(workoutCompleted);
  const [updateTrackedTime, setUpdateTrackedTime] = useState(
    Math.floor(parseInt(workoutTrackedTime) / 60)
  );
  const [showViewWorkoutModal, setShowViewWorkoutModal] = useState(false);
  const [showInputErrorTime, setShowInputErrorTime] = useState(false);

  // TODO Take care about a user asking for workouts from admin template in backend auth check
  const fetchWorkoutDetails = () =>
    fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}` + `/workouts/${workoutId}`, {
      method: "get",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then((response) =>
        response
          .json()
          .then((data) => setFetchedWorkoutDetails(data.workout))
          .catch((e) => console.log(e))
      )
      .catch((e) => console.log(e));

  const updateWorkout = () => {
    if (
      !updateTimeStart ||
      !updateTimeEnd ||
      !updateTrackedTime ||
      !/^\d{2}:\d{2}$/.test(updateTimeStart) ||
      !/^\d{2}:\d{2}$/.test(updateTimeEnd) ||
      !/^[0-9]*$/.test(updateTrackedTime)
    ) {
      console.log("ERROR");
      setShowInputErrorTime(true);
      return null;
    }

    if (
      updateTimeStart === workoutTimeStart &&
      updateTimeEnd === workoutTimeEnd &&
      updateCompleted === workoutCompleted &&
      Math.floor(parseInt(updateTrackedTime)) ===
        Math.floor(parseInt(workoutTrackedTime) / 60)
    ) {
      return null;
    }

    //BACKEND REQUEST TO UPDATE WORKOUT
    console.log("NO ERROR");
    /* setShowInputErrorTime(false); */
  };

  useEffect(() => {
    if (session) {
      fetchWorkoutDetails(session.user.id);
      setGender(session.user.gender);
    }
  }, []);
  {
    /* <div>{workoutId}</div>
      {console.log("ID", workoutId)}
      {console.log("WORKOUT DETAILS", fetchedWorkoutDetails)} */
  }
  return (
    <div
      className="flex-col items-center h-full pb-1 mx-3 my-3 transition duration-300 ease-in transform bg-gray-500 rounded-lg"
      key={workoutId}
    >
      {showViewWorkoutModal && fetchedWorkoutDetails ? (
        <ViewWorkoutModal
          viewWorkoutData={fetchedWorkoutDetails}
          showViewWorkoutModal={showViewWorkoutModal}
          setShowViewWorkoutModal={setShowViewWorkoutModal}
          language={language}
          gender={gender}
        />
      ) : (
        ""
      )}
      {showInputErrorTime ? (
        <InputErrorTimeModal
          showInputErrorTime={showInputErrorTime}
          setShowInputErrorTime={setShowInputErrorTime}
          language={language}
        />
      ) : (
        ""
      )}
      <img
        src={findMuscleGroup(
          gender,
          fetchedWorkoutDetails.muscle_group,
          language,
          "image",
          "woman"
        )}
        alt="muscle view"
        className="object-contain w-20 pt-2 mx-auto rounded-l select-none"
      />
      <div className="px-4 lg:flex-auto iphone:!pb-4 truncate">
        <div className="flex flex-wrap">
          <div className="flex-col w-full">
            <h1 className="w-full text-lg font-bold text-center text-green-500 truncate select-none">
              {fetchedWorkoutDetails && fetchedWorkoutDetails.name}
            </h1>
          </div>
        </div>
        <div className="flex-col items-center justify-center">
          <div className="flex-col">
            <div className="w-full text-sm text-center text-gray-300 select-none">
              {language === "DE" ? "Start" : "Start "}
            </div>
            <input
              type="text"
              name="start"
              id="start-time"
              maxLength="5"
              className="block w-full text-xs text-center border border-transparent border-gray-300 rounded-md shadow-sm outline-none"
              value={updateTimeStart}
              onChange={(event) => setUpdateTimeStart(event.target.value)}
            />
          </div>
          <div className="flex-col">
            <div className="w-full text-sm text-center text-gray-300 select-none">
              {language === "DE" ? "Ende" : "End "}
            </div>
            <input
              type="text"
              name="end"
              id="end-time"
              maxLength="5"
              className="block w-full text-xs text-center border-gray-300 rounded-md shadow-sm"
              value={updateTimeEnd}
              onChange={(event) => setUpdateTimeEnd(event.target.value)}
            />
          </div>
          <div className="w-full text-sm text-center text-gray-300 select-none">
            {language === "DE" ? "Status" : "Status "}
          </div>
          <div className="flex-col figure">
            {updateCompleted === "yes" ? (
              <img
                onClick={() => setUpdateCompleted("no")}
                className="w-6 mx-auto mb-1 rounded-full select-none image-main"
                src="/icons/done-checked.png"
                srcSet="/icons/done-checked.png"
                alt="workout checked icon"
              />
            ) : (
              <img
                onClick={() => setUpdateCompleted("yes")}
                className="w-6 mx-auto mb-1 rounded-full select-none image-main"
                src="/icons/done-unchecked.png"
                srcSet="/icons/done-unchecked.png"
                alt="workout unchecked icon"
              />
            )}
            {updateCompleted === "yes" ? (
              <img
                onClick={() => setUpdateCompleted("no")}
                className="w-6 mx-auto mb-1 rounded-full select-none image-hover"
                src="/icons/done-unchecked.png"
                srcSet="/icons/done-unchecked.png"
                alt="workout unchecked icon"
              />
            ) : (
              <img
                onClick={() => setUpdateCompleted("yes")}
                className="w-6 mx-auto mb-1 rounded-full select-none image-hover"
                src="/icons/done-checked.png"
                srcSet="/icons/done-checked.png"
                alt="workout unchecked icon"
              />
            )}
            <div className="w-full text-xs text-center text-gray-300 select-none">
              {language === "DE" ? "Erf. Zeit (min)" : "Used Time(min) "}
            </div>
            <input
              type="text"
              name="tracked"
              id="tracked-time"
              maxLength="3"
              className="block w-full text-xs text-center bg-gray-600 border-gray-300 rounded-md shadow-sm"
              value={Math.floor(parseInt(updateTrackedTime))}
              onChange={(event) =>
                setUpdateTrackedTime(Math.floor(parseInt(event.target.value)))
              }
              placeholder={workoutTrackedTime}
            />
          </div>

          <div
            onClick={() => updateWorkout()}
            className="p-1 my-1 text-sm font-semibold text-center text-white bg-green-500 border border-transparent border-yellow-500 rounded cursor-pointer select-none hover:bg-green-400"
          >
            {language && language === "DE" ? "Speichern" : "Save"}
          </div>
          <div
            onClick={() => setShowViewWorkoutModal(true)}
            className="p-1 my-1 text-sm font-semibold text-center text-white bg-yellow-500 border border-transparent border-yellow-500 rounded cursor-pointer select-none hover:bg-yellow-400"
          >
            {language && language === "DE" ? "Ansehen" : "Show"}
          </div>
          <div
            /* onClick={() => deleteWorkout() */
            className="p-1 my-1 text-sm font-semibold text-center text-white bg-red-500 border border-transparent border-red-500 rounded cursor-pointer select-none hover:bg-red-400"
          >
            {language && language === "DE" ? "Entfernen" : "Remove"}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlanWorkoutCard;
